const path = require('path');
const express = require('express');
const { seedArticles, generateArticle, generateLatestArticle } = require('./data/news');
const { fetchAlbanianNews, fetchWorldNews } = require('./data/live-external');

const app = express();
const PORT = process.env.PORT || 3000;

let articles = [...seedArticles];
let liveIndex = 0;
let nextId = articles.reduce((m, a) => Math.max(m, a.id), 0) + 1;

const clients = new Set();

// ===== Endpoint REST: lista e lajmeve =====
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

// ===== Endpoint REST: detajet e një lajmi =====
app.get('/api/articles/:id', (req, res) => {
    const a = articles.find(x => x.id === Number(req.params.id));
    if (!a) return res.status(404).json({ error: 'Lajmi nuk u gjet' });
    res.json(a);
});

// ===== SSE: transmetim i lajmeve në kohë reale =====
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
    if (articles.length > 120) articles.length = 120;
}

// ===== Gjenerator i lajmeve simulatore në kohë reale =====
const LIVE_INTERVAL_MS = 15000;
setInterval(() => {
    pushArticle(generateArticle(articles));
}, LIVE_INTERVAL_MS);

// ===== Lajmet e fundit: azhornohen çdo 5 minuta =====
const LATEST_INTERVAL_MS = 5 * 60 * 1000;
setInterval(() => {
    pushArticle(generateLatestArticle(articles));
}, LATEST_INTERVAL_MS);
setTimeout(() => pushArticle(generateLatestArticle(articles)), 500);

// ===== Lajme reale në shqip: Shqipëria + Bota (RSS shqiptarë) =====
async function pollAlbanian() {
    try {
        const { shqiperia, bota } = await fetchAlbanianNews();
        [...shqiperia, ...bota].forEach(item => {
            if (!articles.some(a => a.seed === item.seed)) pushArticle(item);
        });
    } catch (e) {
        console.error('Poll shqiptar dështoi:', e.message);
    }
}
setInterval(pollAlbanian, 60 * 1000);
setTimeout(pollAlbanian, 1000);

// ===== Lajme botërore në shqip =====
async function pollWorld() {
    try {
        const items = await fetchWorldNews();
        items.forEach(item => {
            if (!articles.some(a => a.seed === item.seed)) pushArticle(item);
        });
    } catch (e) {
        console.error('Poll botëror dështoi:', e.message);
    }
}
setInterval(pollWorld, 90 * 1000);
setTimeout(pollWorld, 6000);

// ===== Statike =====
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`KuçovaToday shërbehet në http://localhost:${PORT}`);
});
