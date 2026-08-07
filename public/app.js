// ===== Data =====
let articles = [];

const catClass = {
    'Kronikë': 'kronika',
    'Sport': 'sport',
    'Politikë': 'politika',
    'Ekonomi': 'ekonomia',
    'Evente': 'eventi',
    'Arsim': 'arsim',
    'Turizëm': 'turizem',
    'Shërbime': 'sherbime',
    'Shqipëria': 'shqiperia',
    'Bota': 'bota'
};

const catCls = a => `cat-${catClass[a.category] || 'kronika'}`;
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
            <img src="https://picsum.photos/seed/${main.seed}/800/430" alt="${main.title}">
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
                    <img src="https://picsum.photos/seed/${s.seed}/400/210" alt="${s.title}">
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
    { key: 'latest', title: 'Lajmet e fundit', accent: true },
    { key: 'shqiperia', title: 'Shqipëria', accent: false },
    { key: 'bota', title: 'Bota', accent: false },
    { key: 'kronika', title: 'Kronikë', accent: false },
    { key: 'sport', title: 'Sport', accent: false },
    { key: 'politika', title: 'Politikë', accent: false },
    { key: 'ekonomia', title: 'Ekonomi', accent: false },
    { key: 'eventi', title: 'Evente & Kulturë', accent: false },
    { key: 'altre', title: 'Lajmet e tjera', accent: false }
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
function renderSidebar() {
    const wrap = document.getElementById('sidebar');
    const focusCats = ['politika', 'ekonomia', 'sport', 'eventi'];
    const focusItems = focusCats
        .map(c => articles.find(a => a.cat === c && !a.pos))
        .filter(Boolean);

    const gallery = articles.slice(0, 6).filter(a => !a.pos);

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
                ${gallery.map(a => `<img src="${square(a)}" alt="${a.title}">`).join('')}
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
    try { localStorage.setItem('kucovatoday-theme', theme); } catch (e) {}
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
const navLinks = document.querySelectorAll('.main-nav a');
const navSections = ['hero', 'sec-latest', 'sec-shqiperia', 'sec-bota', 'sec-kronika', 'sec-sport', 'sec-politika', 'sec-ekonomia', 'sec-eventi'];
const sectionCat = {
    'hero': 'latest',
    'sec-latest': 'latest',
    'sec-shqiperia': 'shqiperia',
    'sec-bota': 'bota',
    'sec-kronika': 'kronika',
    'sec-sport': 'sport',
    'sec-politika': 'politika',
    'sec-ekonomia': 'ekonomia',
    'sec-eventi': 'eventi'
};

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${height > 0 ? (scrollTop / height) * 100 : 0}%`;
    header.classList.toggle('scrolled', scrollTop > 30);
    toTop.classList.toggle('show', scrollTop > 500);

    let current = 'hero';
    navSections.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop - 120 <= scrollTop) current = id;
    });
    const activeCat = sectionCat[current];
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const m = href && href.match(/cat=([a-z]+)/);
        link.classList.toggle('active', m ? m[1] === activeCat : href === 'index.html' && activeCat === 'latest');
    });
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
