/* ============================================================
   JetoBukur — Horoskopi i Ditës: menu moderne + render
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const data = window.HOROSKOPI_DITES;
  const signs = data.signs;

  // ---------- Navbar ----------
  const navbar = document.querySelector('.navbar');
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 30));
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // ---------- Data e sotme ----------
  document.getElementById('horoDate').textContent = data.updated;

  // ---------- Menu moderne e shenjave ----------
  const tabs = document.getElementById('signTabs');
  tabs.innerHTML = signs.map((s, i) => `
    <button class="sign-tab ${i === 0 ? 'active' : ''}" data-key="${s.key}" style="transition-delay:${i * 0.02}s">
      <span class="sign-sym">${s.symbol}</span>
      <span class="sign-name">${s.name}</span>
      <span class="sign-dates">${s.dates}</span>
    </button>
  `).join('');

  const content = document.getElementById('horoContent');
  const hero = document.querySelector('.horo-hero');

  const ICONS = {
    intro: ['', 'Parashikimi i përgjithshëm'],
    love: ['fa-solid fa-heart', 'Dashuria'],
    health: ['fa-solid fa-heart-pulse', 'Shëndeti'],
    work: ['fa-solid fa-briefcase', 'Puna dhe karriera'],
    eros: ['fa-solid fa-fire', 'Intimiteti']
  };

  function renderSign(key, scroll) {
    const s = signs.find(x => x.key === key) || signs[0];
    tabs.querySelectorAll('.sign-tab').forEach(t => t.classList.toggle('active', t.dataset.key === s.key));

    const blocks = [
      { k: 'intro', html: `<p class="horo-intro">${s.intro}</p>` },
      { k: 'love', html: `<p>${s.love}</p>` },
      { k: 'health', html: `<p>${s.health}</p>` },
      { k: 'work', html: `<p>${s.work}</p>` },
      { k: 'eros', html: `<p>${s.eros}</p>` }
    ];

    content.innerHTML = `
      <div class="container">
        <div class="horo-card">
          <div class="horo-card-head">
            <img class="horo-sign-img" src="${s.img}" alt="${s.name}" />
            <div class="horo-card-title">
              <span class="horo-sym">${s.symbol}</span>
              <h2>${s.name}</h2>
              <p>${s.dates}</p>
            </div>
          </div>
          <div class="horo-blocks">
            ${blocks.map(b => `
              <div class="horo-block reveal" data-block="${b.k}">
                <h3>${b.k === 'intro' ? `<span class="horo-block-sym">${s.symbol}</span>` : `<i class="${ICONS[b.k][0]}"></i>`} ${ICONS[b.k][1]}</h3>
                ${b.html}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    // Scroll reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.1 });
    content.querySelectorAll('.reveal').forEach(el => io.observe(el));

    if (scroll) {
      content.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  tabs.addEventListener('click', e => {
    const btn = e.target.closest('.sign-tab');
    if (!btn) return;
    renderSign(btn.dataset.key, true);
  });

  // Fillon me shenjën e parë
  renderSign(signs[0].key, false);
  hero.classList.add('ready');
});
