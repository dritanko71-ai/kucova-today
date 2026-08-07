// ===== Data =====
let articles = [];

const catClass = {
    'Më e reja': 'latest',
    'Humbje Peshe': 'humbjepeshe',
    'Ushqim i Shëndetshëm': 'ushqim',
    'Receta': 'receta',
    'Ushtrime': 'ushtrime',
    'Jete e Shëndetshme': 'jete',
    'Shëndet': 'shendet'
};

const catCls = a => `cat-${catClass[a.category] || 'jete'}`;
const thumb = a => a.image || `https://picsum.photos/seed/${a.seed}/210/130`;

const SECTION_TITLES = {
    'latest': 'Më e reja',
    'humbjepeshe': 'Humbje Peshe',
    'ushqim': 'Ushqim i Shëndetshëm',
    'receta': 'Receta',
    'ushtrime': 'Ushtrime',
    'jete': 'Jete e Shëndetshme',
    'shendet': 'Shëndet'
};

const params = new URLSearchParams(window.location.search);
const cat = params.get('cat') || 'latest';

document.getElementById('section-title').textContent = SECTION_TITLES[cat] || 'Seksioni';
document.title = `${SECTION_TITLES[cat] || 'Seksioni'} - JetoBukur`;

function renderList() {
    const wrap = document.getElementById('section-list');
    const items = articles.filter(a => a.cat === cat);
    if (!items.length) {
        wrap.innerHTML = '<p class="news-excerpt">Asnjë artikull në këtë seksion.</p>';
        return;
    }
    wrap.innerHTML = items.map((a, i) => `
        <article class="news-row ${a.live ? 'live-flash' : ''}" style="animation-delay: ${i * 0.05}s">
            <a class="news-thumb" href="article.html?id=${a.id}">
                <img src="${thumb(a)}" alt="${a.title}">
            </a>
            <div class="news-body">
                <span class="news-cat ${catCls(a)}">${a.category}</span>
                <h3 class="news-title"><a href="article.html?id=${a.id}">${a.title}</a></h3>
                <p class="news-excerpt">${a.excerpt || ''}</p>
                <span class="news-meta">${a.time} - ${a.date}</span>
            </div>
        </article>
    `).join('');
}

// ===== Ticker =====
const tickerEl = document.getElementById('ticker');
let tickerItems = [];
let tickerIndex = 0;
function updateTicker() {
    tickerItems = articles.filter(a => a.cat === 'latest').map(a => a.title);
    if (tickerItems.length) tickerEl.textContent = tickerItems[tickerIndex % tickerItems.length];
}
setInterval(() => {
    if (!tickerItems.length) return;
    tickerIndex = (tickerIndex + 1) % tickerItems.length;
    tickerEl.textContent = tickerItems[tickerIndex];
    tickerEl.classList.add('fade');
    setTimeout(() => tickerEl.classList.remove('fade'), 500);
}, 4000);

// ===== Kërkimi =====
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();
    document.querySelectorAll('#section-list .news-row').forEach(row => {
        row.style.display = !q || row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
});

// ===== Efekti i logos JetoBukur =====
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        logo.classList.remove('logo-hover');
        void logo.offsetWidth;
        logo.classList.add('logo-hover');
    });
    logo.addEventListener('animationend', () => {
        logo.classList.remove('logo-hover');
    });
}

// ===== Hamburger =====
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));

// ===== Dark / Light mode =====
const lightBtn = document.getElementById('theme-light');
const darkBtn = document.getElementById('theme-dark');
let currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';

function setTheme(theme) {
    currentTheme = theme;
    try { localStorage.setItem('jetobukur-theme', theme); } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);
    lightBtn.classList.toggle('active', theme === 'light');
    darkBtn.classList.toggle('active', theme === 'dark');
}
lightBtn.addEventListener('click', () => setTheme('light'));
darkBtn.addEventListener('click', () => setTheme('dark'));
setTheme(currentTheme);

// ===== Scroll =====
const progressBar = document.getElementById('progress-bar');
const header = document.querySelector('.site-header');
const toTop = document.getElementById('to-top');
window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
    header.classList.toggle('scrolled', scrollTop > 30);
    if (toTop) toTop.classList.toggle('show', scrollTop > 500);
});

// ===== Data =====
const days = ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];
const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
const now = new Date();
document.getElementById('today-date').textContent =
    `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

// ===== SSE: përditësim live =====
function connectLive() {
    const es = new EventSource('/api/live');
    es.addEventListener('news', (event) => {
        const article = JSON.parse(event.data);
        if (articles.some(a => a.id === article.id)) return;
        articles.unshift(article);
        if (article.cat === cat) renderList();
        updateTicker();
    });
    es.onerror = () => {
        es.close();
        setTimeout(connectLive, 5000);
    };
}

// ===== Ngarkimi fillestar =====
async function init() {
    try {
        const res = await fetch('/api/articles');
        const data = await res.json();
        articles = data.articles;
    } catch (e) {
        console.error('Gabim gjatë ngarkimit të lajmeve:', e);
    }
    renderList();
    updateTicker();
    connectLive();
}

init();
