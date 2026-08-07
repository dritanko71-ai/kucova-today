// ===== Ngarkimi i artikullit nga URL =====
const params = new URLSearchParams(window.location.search);
const id = Number(params.get('id'));

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

// ===== Zgjerimi i tekstit =====
function expandBody(article) {
    const cat = article.category || 'Lajm';
    const pars = [];

    if (article.excerpt) {
        pars.push(article.excerpt);
    } else {
        pars.push(`${article.title}. Lajmi raportohet nga burime të besueshme dhe pritet të ndiqet nga detaje të mëtejshme gjatë ditës.`);
    }

    pars.push(`Sipas të dhënave të fundit, ${article.title.toLowerCase()}. Autoritetet dhe institucionet përkatëse janë njoftuar dhe po ndjekin nga afër zhvillimet për të dhënë informacion zyrtar në kohë reale.`);

    pars.push(`Për këtë temë në kuadër të ${cat.toLowerCase()}, qytetarët kanë shprehur interes të shtuar, ndërsa ekspertët e fushës pritet të japin një vlerësim më të detajuar në ditët në vijim. KuçovaToday do të vijojë ta përditësojë këtë artikull me çdo informacion të ri sapo ai të bëhet i disponueshëm.`);

    return pars;
}

// ===== Render =====
function renderArticle(a) {
    const page = document.getElementById('article-page');
    const content = document.getElementById('article-content');

    const img = a.image || `https://picsum.photos/seed/${a.seed}/1280/720`;
    const body = expandBody(a);

    let media = '';
    if (a.video) {
        media = `
            <div class="article-video">
                <video controls playsinline poster="${a.videoPoster || img}">
                    <source src="${a.video}" type="video/mp4">
                </video>
            </div>
        `;
    }

    content.innerHTML = `
        <header class="article-header">
            <span class="news-cat ${catCls(a)}">${a.category}</span>
            <h1>${a.title}</h1>
            <div class="article-meta">
                <span>${a.time} - ${a.date}</span>
            </div>
        </header>
        <figure class="article-figure">
            <img src="${img}" alt="${a.title}">
        </figure>
        ${media}
        <div class="article-body">
            ${body.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="article-nav">
            <a class="article-back" href="index.html">&larr; Kthehu te lajmet</a>
        </div>
    `;

    document.title = `${a.title} - KuçovaToday`;
    document.getElementById('article-loading').style.display = 'none';
}

// ===== Theme =====
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

// ===== Data =====
const days = ['E Diel', 'E Hënë', 'E Martë', 'E Mërkurë', 'E Enjte', 'E Premte', 'E Shtunë'];
const months = ['Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'Nëntor', 'Dhjetor'];
const now = new Date();
document.getElementById('today-date').textContent =
    `${days[now.getDay()]}, ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

// ===== Init =====
async function init() {
    if (!id) {
        document.getElementById('article-loading').textContent = 'Artikulli nuk u gjet.';
        return;
    }
    try {
        const res = await fetch(`/api/articles/${id}`);
        if (!res.ok) throw new Error('Jo 404');
        const a = await res.json();
        renderArticle(a);
    } catch (e) {
        document.getElementById('article-loading').textContent = 'Artikulli nuk u gjet. Kthehu te lajmet.';
    }
}

init();
