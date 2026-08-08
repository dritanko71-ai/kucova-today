const path = require('path');
const express = require('express');
const https = require('https');
const { seedArticles, generateArticle, generateLatestArticle, generateHoroscopeDaily } = require('./data/news');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_URL = process.env.PUBLIC_URL || '';

let articles = [...seedArticles];
let liveIndex = 0;
let nextId = articles.reduce((m, a) => Math.max(m, a.id), 0) + 1;

const clients = new Set();

// ===== Endpoint REST: lista e artikujve =====
app.get('/api/articles', (req, res) => {
    const cat = req.query.cat;
    const q = (req.query.q || '').toLowerCase();
    let list = articles;
    if (cat) list = list.filter(a => a.cat === cat);
    if (q) {
        list = list.filter(a =>
            (a.title + ' ' + (a.excerpt || '') + ' ' + a.category).toLowerCase().includes(q)
        );
    }
    res.json({ articles: list });
});

// ===== Endpoint REST: detajet e një artikulli =====
app.get('/api/articles/:id', (req, res) => {
    const a = articles.find(x => x.id === Number(req.params.id));
    if (!a) return res.status(404).json({ error: 'Artikulli nuk u gjet' });
    res.json(a);
});

// ===== SSE: transmetim i artikujve në kohë reale =====
app.get('/api/live', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive'
    });
    res.write('retry: 3000\n\n');

    clients.add(res);

    req.on('close', () => clients.delete(res));
});

function broadcast(event, data) {
    const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
    clients.forEach(c => c.write(payload));
}

function pushArticle(article) {
    article.id = nextId++;
    article.order = ++liveIndex;
    articles.unshift(article);
    broadcast('news', article);
    if (articles.length > 120) {
        const horos = articles.filter(a => a.cat === 'horoskopi');
        const rest = articles.filter(a => a.cat !== 'horoskopi').slice(0, 120 - horos.length);
        articles = rest.concat(horos);
    }
}

function ensureHoroscope() {
    const seedHoros = seedArticles.filter(a => a.cat === 'horoskopi');
    const existingIds = new Set(articles.filter(a => a.cat === 'horoskopi').map(a => a.id));
    const missing = seedHoros.filter(a => !existingIds.has(a.id));
    if (missing.length) articles = articles.concat(missing);
}

// ===== Gjenerator i artikujve simulatore në kohë reale =====
const LIVE_INTERVAL_MS = 15000;
setInterval(() => {
    pushArticle(generateArticle(articles));
}, LIVE_INTERVAL_MS);

// ===== Më të rejat: azhornohen çdo 5 minuta =====
const LATEST_INTERVAL_MS = 5 * 60 * 1000;
setInterval(() => {
    pushArticle(generateLatestArticle(articles));
}, LATEST_INTERVAL_MS);
setTimeout(() => pushArticle(generateLatestArticle(articles)), 500);

// ===== Horoskopi: azhornohet çdo ditë =====
function refreshHoroscope() {
    ensureHoroscope();
    const updated = generateHoroscopeDaily(articles);
    updated.forEach(nu => {
        const idx = articles.findIndex(a => a.id === nu.id);
        if (idx !== -1) articles[idx] = nu;
    });
    console.log(`Horoskopi u azhornua: ${updated.length} shenja, ${new Date().toLocaleDateString('sq-AL')}`);
}
refreshHoroscope();

function msUntilMidnight() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0);
    return midnight - now;
}

setTimeout(() => {
    refreshHoroscope();
    setInterval(refreshHoroscope, 24 * 60 * 60 * 1000);
}, msUntilMidnight() + 5000);

// ===== Self-ping: e mban zgjuar në Render falas =====
app.get('/api/ping', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

function selfPing() {
    if (!PUBLIC_URL) return;
    const req = https.get(PUBLIC_URL + '/api/ping', { timeout: 15000 }, res => {
        res.resume();
        res.on('end', () => console.log(`Self-ping: ${res.statusCode}`));
    });
    req.on('timeout', () => req.destroy());
    req.on('error', err => console.log('Self-ping error:', err.message));
}

const PING_INTERVAL_MS = 10 * 60 * 1000;
setInterval(selfPing, PING_INTERVAL_MS);
setTimeout(selfPing, 60 * 1000);

// ===== Statike =====
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`JetoBukur shërbehet në http://localhost:${PORT}`);
});
