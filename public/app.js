// ===== Data =====
let articles = [];

const catClass = {
    'Më e reja': 'latest',
    'Humbje Peshe': 'humbjepeshe',
    'Ushqim i Shëndetshëm': 'ushqim',
    'Receta': 'receta',
    'Ushtrime': 'ushtrime',
    'Jete e Shëndetshme': 'jete',
    'Horoskopi': 'horoskopi'
};

const catCls = a => `cat-${catClass[a.category] || 'jete'}`;
const thumb = a => a.image || `https://picsum.photos/seed/${a.seed}/210/130`;
const square = a => a.image || `https://picsum.photos/seed/${a.seed}/300/300`;

// ===== Date =====
const days = ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];
const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
const now = new Date();
document.getElementById('today-date').textContent =
    `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

// ===== Render hero =====
function renderHero() {
    const grid = document.getElementById('hero-grid');
    const main = articles.find(a => a.pos === 'hero-main') || articles[0];
    const sides = (articles.filter(a => a.pos === 'hero-side') || articles.slice(1, 3));

    const mediaMain = main.video
        ? `<a class="video-play" href="article.html?id=${main.id}" title="Shiko videon">&#9654;</a>`
        : '';

    grid.innerHTML = `
        <a class="hero-main ${catCls(main)}" href="article.html?id=${main.id}">
            <img src="${main.image || `https://picsum.photos/seed/${main.seed}/800/430`}" alt="${main.title}">
            ${mediaMain}
            <div class="hero-overlay">
                <span class="news-cat">${main.category}</span>
                <h2>${main.title}</h2>
                <p>${main.excerpt || ''}</p>
            </div>
        </a>
        <div class="hero-side-col">
            ${sides.map(s => `
                <a class="hero-side ${catCls(s)}" href="article.html?id=${s.id}">
                    <img src="${s.image || `https://picsum.photos/seed/${s.seed}/400/210`}" alt="${s.title}">
                    <div class="hero-overlay">
                        <span class="news-cat">${s.category}</span>
                        <h3>${s.title}</h3>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
}

// ===== Render sections =====
const sections = [
    { key: 'latest', title: 'Më e reja', accent: true },
    { key: 'humbjepeshe', title: 'Humbje Peshe', accent: false },
    { key: 'ushqim', title: 'Ushqim i Shëndetshëm', accent: false },
    { key: 'receta', title: 'Receta', accent: false },
    { key: 'ushtrime', title: 'Ushtrime', accent: false },
    { key: 'jete', title: 'Jete e Shëndetshme', accent: false },
    { key: 'horoskopi', title: 'Horoskopi', accent: false }
];

function renderSections() {
    const wrap = document.getElementById('sections');
    wrap.innerHTML = sections.map(sec => {
        const items = articles.filter(a => a.cat === sec.key && !a.pos);
        const shown = items.slice(0, 4);
        const rows = shown.map((a, i) => `
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
        return `
            <section class="news-section sec-${sec.key}" id="sec-${sec.key}">
                <div class="section-header">
                    <h2>${sec.title}</h2>
                    <span class="bar${sec.accent ? ' accent' : ''}"></span>
                </div>
                ${rows || '<p class="news-excerpt">Asnjë lajm në këtë seksion.</p>'}
                ${items.length > 4 ? `<a class="section-more" href="section.html?cat=${sec.key}">Shiko të gjitha &rarr;</a>` : ''}
            </section>
        `;
    }).join('');
}

// ===== Render sidebar =====
const GALLERY_IMAGES = [
    'https://loremflickr.com/300/300/healthy,food,vegetables',
    'https://loremflickr.com/300/300/meditation,wellness,balance',
    'https://loremflickr.com/300/300/fitness,workout,run',
    'https://loremflickr.com/300/300/fresh,salad,recipe',
    'https://loremflickr.com/300/300/yoga,stretch,relax',
    'https://loremflickr.com/300/300/smoothie,fruit,breakfast',
    'https://loremflickr.com/300/300/hydration,water,glass',
    'https://loremflickr.com/300/300/outdoor,walk,nature',
    'https://loremflickr.com/300/300/nutrition,whole,grains'
];

function renderSidebar() {
    const wrap = document.getElementById('sidebar');
    const focusCats = ['humbjepeshe', 'ushqim', 'receta', 'ushtrime'];
    const focusItems = focusCats
        .map(c => articles.find(a => a.cat === c && !a.pos))
        .filter(Boolean);

    const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    const gallery = articles.filter(a => !a.pos && a.image).slice(0, 3)
        .concat(GALLERY_IMAGES.map((img, i) => GALLERY_IMAGES[(i + dayOfYear) % GALLERY_IMAGES.length]))
        .slice(0, 9)
        .map((a, i) => typeof a === 'string'
            ? a
            : (a.image || `https://picsum.photos/seed/${a.seed}/300/300`));

    wrap.innerHTML = `
        <div class="side-block">
            <h3 class="side-title">Fokus</h3>
            ${focusItems.map(a => `
                <div class="focus-card">
                    <a href="article.html?id=${a.id}"><img src="${square(a)}" alt="${a.title}"></a>
                    <span class="news-cat ${catCls(a)}">${a.category}</span>
                    <h4><a href="article.html?id=${a.id}">${a.title}</a></h4>
                </div>
            `).join('')}
        </div>
        <div class="side-block">
            <h3 class="side-title">Fotogaleri</h3>
            <div class="gallery-grid">
                ${gallery.map(img => `<img src="${img}" alt="JetoBukur fotogaleri">`).join('')}
            </div>
        </div>
    `;
}

// ===== Render gjithçka =====
function renderAll() {
    renderHero();
    renderSections();
    renderSidebar();
    updateTicker();
}

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
    document.querySelectorAll('.news-row').forEach(row => {
        row.style.display = !q || row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
    document.querySelectorAll('.news-section').forEach(sec => {
        const visible = [...sec.querySelectorAll('.news-row')].some(r => r.style.display !== 'none');
        sec.style.display = visible ? '' : 'none';
    });
    document.querySelectorAll('#hero-grid .hero-main, #hero-grid .hero-side').forEach(el => {
        el.style.display = !q || el.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
    document.querySelectorAll('.focus-card').forEach(card => {
        card.style.display = !q || card.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
});

// ===== Scroll =====
const progressBar = document.getElementById('progress-bar');
const header = document.querySelector('.site-header');
const toTop = document.getElementById('to-top');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
    header.classList.toggle('scrolled', scrollTop > 30);
    toTop.classList.toggle('show', scrollTop > 500);
});

toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

document.querySelectorAll('a[href="#"]').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
});

// ===== SSE: Lajme në kohë reale =====
function connectLive() {
    const es = new EventSource('/api/live');

    es.addEventListener('news', (event) => {
        const article = JSON.parse(event.data);
        if (articles.some(a => a.id === article.id)) return;

        articles.unshift(article);
        renderAll();
        applySearchFilter();
    });

    es.onerror = () => {
        es.close();
        setTimeout(connectLive, 5000);
    };
}

function applySearchFilter() {
    const q = searchInput.value.trim().toLowerCase();
    if (!q) return;
    searchInput.dispatchEvent(new Event('input'));
}

// ===== Ngarkimi fillestar nga API =====
async function init() {
    try {
        const res = await fetch('/api/articles');
        const data = await res.json();
        articles = data.articles;
    } catch (e) {
        console.error('Gabim gjatë ngarkimit të lajmeve:', e);
    }
    renderAll();
    connectLive();
}

init();
