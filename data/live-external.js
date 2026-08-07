const Parser = require('rss-parser');

const parser = new Parser({
    timeout: 15000,
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) KucovaToday/2.0 (+https://kucovatoday.al)',
        'Accept': '*/*'
    }
});

// ===== Lajme reale në shqip nga RSS-të shqiptare dhe të rajonit =====
// Artikujt ndahen në: lokale (Shqipëria & rajoni shqiptar) dhe ndërkombëtare (Bota).
// Të drejtat e autorit respektohen: shfaqet vetëm titull + përmbledhje e shkurtër + link
// tek burimi origjinal (agregim RSS, "fair use"). Nuk kopjohet artikulli i plotë.
const ALBANIAN_FEEDS = [
    { url: 'https://abcnews.al/feed/', source: 'ABC News' },
    { url: 'https://www.albeu.com/feed', source: 'Albeu' },
    { url: 'https://euronews.al/feed/', source: 'Euronews Albania' },
    { url: 'https://sot.com.al/rss', source: 'Sot' },
    { url: 'https://www.balkanweb.com/feed/', source: 'BalkanWeb' },
    { url: 'https://www.panorama.com.al/feed/', source: 'Panorama' },
    { url: 'https://shekulli.com.al/feed/', source: 'Shekulli' },
    { url: 'https://www.rtsh.al/feed/', source: 'RTSH' },
    { url: 'https://faktoje.al/feed/', source: 'Faktoje' },
    { url: 'https://telegrafi.com/feed/', source: 'Telegrafi' },
    { url: 'https://gazetaexpress.com/feed/', source: 'Gazeta Express' },
    { url: 'https://lajmpress.com/feed/', source: 'Lajmpress' },
    { url: 'https://ilirianews.al/feed/', source: 'Iliria News' },
    { url: 'https://alsat.mk/feed/', source: 'Alsat M' }
];

const ALBANIAN_TERMS = [
    'shqipëri', 'shqipëria', 'shqiptar', 'tiranë', 'tirana', 'kosovë', 'kosova',
    'prishtinë', 'kuçovë', 'durrës', 'vlorë', 'vlora', 'berat', 'elbasan', 'fier',
    'lushnjë', 'gramsh', 'cërrik', 'ura vajgurore', 'rrogozhinë', 'polica',
    'policia', 'kuvendi', 'bashkia', 'shkodër', 'gjirokastër', 'korçë', 'kukës',
    'dibër', 'lezhë', 'kryeministr', 'qeveri', 'president', 'deputet', 'ministër',
    'kavajë', 'pogradec', 'sarandë', 'gjykata', 'prokuror', 'parlament', 'votim',
    'zgjedhje', 'rama', 'meta', 'begaj', 'bardhi', 'kumbaro', 'shqip',
    'pejë', 'peja', 'prizren', 'gjakovë', 'gjakova', 'gilan', 'mitrovicë', 'fetai',
    'shkup', 'shkupi', 'maqedon', 'struga', 'tetovë', 'tetova', 'ohri', 'ohrid',
    'podgoricë', 'podgorica', 'mal i zi', 'mali i zi', 'tuz', 'ulqin', 'tivar',
    'kurti', 'thaqi', 'hoti', 'haradinaj', 'davila', 'qeverisë', 'tërmet', 'përmbytje'
];

const EN_WORDS = ['the', 'and', 'for', 'with', 'from', 'that', 'this', 'have', 'their',
    'after', 'during', 'before', 'over', 'under', 'his', 'her', 'its', 'will', 'would',
    'could', 'should', 'has', 'had', 'are', 'were', 'was', 'been', 'being', 'than',
    'then', 'about', 'into', 'them', 'they', 'must', 'new', 'not', 'all', 'report'];

const SQ_WORDS = ['për', 'në', 'të', 'me', 'nga', 'që', 'mbi', 'pas', 'gjatë', 'kur',
    'siç', 'ndaj', 'ndër', 'jashtë', 'brenda', 'pasi', 'deri', 'vetëm', 'duke', 'ishte',
    'janë', 'kanë', 'është', 'sot', 'dje', 'nesër', 'sipas', 'lajm', 'lajmi', 'lajmet',
    'sulm', 'aksident', 'zjarri', 'bëhet', 'bëjnë', 'mijë', 'qindra', 'orë', 'ditë',
    'vendin', 'qytetin', 'shqipëria', 'vendi', 'ndihmë', 'shqiptarët', 'kërkon', 'nis',
    'firmos', 'zgjidhet', 'mblidhet', 'pritet', 'njofton', 'njoftoi'];

function looksAlbanian(title) {
    const lower = ' ' + title.toLowerCase() + ' ';
    const hasDiacritics = /[ëç]/i.test(title);
    const sqHits = SQ_WORDS.filter(w => lower.includes(' ' + w + ' ') || lower.includes(' ' + w + 'ë'));
    const enHits = EN_WORDS.filter(w => lower.includes(' ' + w + ' '));
    return hasDiacritics || sqHits.length > 0 || enHits.length <= 1;
}

function isLocalNews(title) {
    const lower = title.toLowerCase();
    return ALBANIAN_TERMS.some(t => lower.includes(t));
}

function sanitizeXml(text) {
    return (text || '')
        .replace(/&(?!(amp|lt|gt|quot|apos|#\d+|#x[0-9a-fA-F]+);)/g, '&amp;')
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
}

async function fetchFeedRaw(url) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15000);
    try {
        const res = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'KucovaToday/2.0' } });
        clearTimeout(timer);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const xml = await res.text();
        return parser.parseString(sanitizeXml(xml));
    } finally {
        clearTimeout(timer);
    }
}

function hashSeed(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
    return 'ext-' + h.toString(36);
}

function pubDateToAlbanian(pub) {
    const d = pub ? new Date(pub) : new Date();
    if (isNaN(d)) return { date: 'Sot', time: '12:00' };
    const now = new Date();
    const sameDay = d.toDateString() === now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const yDay = d.toDateString() === yesterday.toDateString();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return {
        date: sameDay ? 'Sot' : (yDay ? 'Dje' : `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`),
        time: `${hh}:${mm}`
    };
}

function stripHtml(html) {
    return (html || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function truncate(str, max) {
    if (!str) return '';
    return str.length > max ? str.slice(0, max - 1).trim() + '…' : str;
}

// ===== Lajmet në shqip nga RSS-të shqiptare (lokale + botërore) =====
async function fetchAlbanianNews() {
    const shqiperia = [];
    const bota = [];
    for (const feed of ALBANIAN_FEEDS) {
        try {
            const rss = await fetchFeedRaw(feed.url);
            const items = (rss.items || []).slice(0, 10);
            for (const item of items) {
                const title = stripHtml(item.title);
                if (!title || !looksAlbanian(title)) continue;
                const desc = stripHtml(item.description || item.contentSnippet || '');
                const img = item.enclosure && item.enclosure.url
                    ? item.enclosure.url
                    : (item.content && item.content.match(/<img[^>]+src="([^"]+)"/))
                        ? item.content.match(/<img[^>]+src="([^"]+)"/)[1]
                        : null;
                const { date, time } = pubDateToAlbanian(item.isoDate || item.pubDate);
                const article = {
                    cat: isLocalNews(title) ? 'shqiperia' : 'bota',
                    category: isLocalNews(title) ? 'Shqipëria' : 'Bota',
                    title,
                    excerpt: truncate(desc, 200),
                    seed: hashSeed(item.link || title),
                    date,
                    time,
                    live: true,
                    link: item.link || null,
                    image: img || null
                };
                (article.cat === 'shqiperia' ? shqiperia : bota).push(article);
            }
        } catch (e) {
            console.error(`RSS dështoi (${feed.source}):`, e.message);
        }
    }
    return { shqiperia, bota };
}

// ===== Lajmet botërore në shqip =====
async function fetchWorldNews() {
    const { bota } = await fetchAlbanianNews();
    return bota;
}

function sleep(ms) {
    return new Promise(r => setTimeout(r, ms));
}

module.exports = { fetchAlbanianNews, fetchWorldNews };
