/* ============================================================
   JetoBukur — interactive behaviors
   Preloader, nav, posts, newsletter, chat, scroll reveal
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // ---------- Preloader ----------
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => preloader.classList.add('hide'));
  setTimeout(() => preloader.classList.add('hide'), 1800);

  // ---------- Navbar scroll shadow + scroll spy ----------
  const navbar = document.querySelector('.navbar');
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.getElementById('hamburger');

  const sections = ['hero', 'humbje-peshe', 'ushqim-i-shendetshem', 'receta', 'ushtrime',
    'jete-e-shendetshme', 'horoskopi', 'features', 'posts', 'newsletter']
    .map(id => document.getElementById(id))
    .filter(Boolean);

  const syncNav = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
    const pos = window.scrollY + 140;
    let current = sections.length ? sections[0].id : 'hero';
    sections.forEach(sec => { if (sec.offsetTop <= pos) current = sec.id; });
    // Mark only ONE item active (the first link that matches the current section),
    // so the menu highlights tek e tek (one by one), not together.
    const seen = new Set();
    navLinks.querySelectorAll('a').forEach(a => {
      const href = a.getAttribute('href').slice(1);
      const matches = href === current;
      const isFirstMatch = !seen.has(href);
      if (matches) seen.add(href);
      a.classList.toggle('active', matches && isFirstMatch);
    });
  };
  window.addEventListener('scroll', syncNav);
  syncNav();

  // ---------- Mobile menu ----------
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

  // ---------- Post data ----------
  const posts = [
    { tag: 'Receta', cat: 'Kuzhina', time: '15 min', title: 'Bowl me perime të pjekura & humus', text: 'Një vakt i lehtë, i pasur me fibra dhe proteina që përgatitet në më pak se 30 minuta.', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },
    { tag: 'Humbje Peshe', cat: 'Këshilla', time: '5 min', title: '7 zakone të thjeshta për të humbur peshë shëndetshëm', text: 'Ndryshime të vogla të përditshme që japin rezultate afatgjata pa rreziqe për shëndetin.', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
    { tag: 'Ushtrime', cat: 'Fitness', time: '20 min', title: 'Ushtrime në shtëpi pa pajisje për forcë dhe energji', text: 'Një rutinë 20-minutëshe ideale për ata që duan rezultate pa shkuar në palestër.', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80' },
    { tag: 'Ushqim i Shëndetshëm', cat: 'Ushqyerje', time: '8 min', title: '6 superushqime që duhet t\'i kesh çdo ditë në tryezë', text: 'Zbuloni përbërësit natyralë që rrisin energjinë, imunitetin dhe mirëqënien e përgjithshme.', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80' },
    { tag: 'Jete e Shëndetshme', cat: 'Mirëqenie', time: '10 min', title: 'Si të ndërtosh një rutinë gjumi që rigjeneron trupin', text: 'Gjumë cilësor është themeli i shëndetit. Ja si ta përmirësosh hap pas hapi.', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80' },
    { tag: 'Horoskopi', cat: 'Yjet', time: '6 min', title: 'Parashikimi javor: çfarë të presin të gjitha shenjat', text: 'Astrologjia e çdo shenje për javën në vazhdim — dashuri, karrierë e mirëqenie.', img: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=600&q=80' }
  ];

  const postGrid = document.getElementById('postGrid');
  postGrid.innerHTML = posts.map(p => `
    <article class="post-card reveal">
      <div class="post-img">
        <span class="post-tag">${p.tag}</span>
        <img src="${p.img}" alt="${p.title}" loading="lazy" />
      </div>
      <div class="post-body">
        <div class="post-meta"><span>${p.cat}</span><span><i class="fa-regular fa-clock"></i> ${p.time}</span></div>
        <h4>${p.title}</h4>
        <p>${p.text}</p>
        <span class="post-link">Lexo artikullin <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </article>`).join('');

  // ---------- Scroll reveal ----------
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));

  // Add reveal to category & feature cards
  document.querySelectorAll('.cat-card, .feature-card').forEach((el, i) => {
    el.classList.add('reveal');
    el.style.transitionDelay = (i % 3) * 0.07 + 's';
    io.observe(el);
  });

  // ---------- Newsletter form ----------
  const nlForm = document.getElementById('nlForm');
  const nlMsg = document.getElementById('nlMsg');
  nlForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('nlEmail').value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nlMsg.className = 'form-msg err';
      nlMsg.textContent = 'Ju lutem shkruani një adresë emaili të vlefshme.';
      return;
    }
    nlMsg.className = 'form-msg ok';
    nlMsg.textContent = '✅ Faleminderit! Këshillat javore janë në rrugë e sipër.';
    nlForm.reset();
    setTimeout(() => { nlMsg.textContent = ''; }, 6000);
  });

  // ---------- Chat widget ----------
  const chatToggle = document.getElementById('chatToggle');
  const chatWidget = document.getElementById('chatWidget');
  const chatBody = document.getElementById('chatBody');
  const chatForm = document.getElementById('chatForm');
  const chatText = document.getElementById('chatText');

  const openChat = () => { chatWidget.classList.add('open'); chatToggle.classList.add('hidden'); };
  const closeChat = () => { chatWidget.classList.remove('open'); chatToggle.classList.remove('hidden'); };
  chatToggle.addEventListener('click', openChat);
  document.getElementById('chatClose').addEventListener('click', closeChat);

  const addMsg = (text, who) => {
    const div = document.createElement('div');
    div.className = 'chat-msg ' + who;
    div.textContent = text;
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;
  };

  const botReply = q => {
    const t = q.toLowerCase();
    if (t.includes('recet')) return 'Kemi shumë receta të shëndetshme! Provoni bowl me perime të pjekura, sallata me proteina ose smoothie natyrale. 🥗';
    if (t.includes('pesh') || t.includes('humb')) return 'Për humbje peshe të sigurt rekomandohen mesa të vogla, një dietë e ekuilibruar dhe ushtrime të rregullt. 💪';
    if (t.includes('ushqim') || t.includes('diet') || t.includes('ushqyr')) return 'Një dietë e shëndetshme përfshin perime, fruta, proteina të liga dhe hidratim të mjaftueshëm. 🥑';
    if (t.includes('ushtrim') || t.includes('sport') || t.includes('fit')) return 'Ushtrime të lehta në shtëpi për 20 minuta në ditë mjaftojnë për energji dhe formë të mirë. 🏃';
    if (t.includes('horoskop') || t.includes('yje') || t.includes('shenj')) return 'Ke seksionin e Horoskopit me parashikime për të gjitha shenjat — ditore, javore dhe mujore! ⭐';
    if (t.includes('hi') || t.includes('hello') || t.includes('persh')) return 'Përshëndetje! 👋 Sëra e shkëlqyer të të parë këtu. Si mund të të ndihmoj sot?';
    return 'Faleminderit! Një përgjigje më e detajuar për pyetjen tënde gjendet në artikujt tanë. Shfletxoje faqen! 😊';
  };

  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = chatText.value.trim();
    if (!msg) return;
    addMsg(msg, 'user');
    chatText.value = '';
    const hold = document.createElement('div');
    hold.className = 'chat-msg bot typing';
    hold.innerHTML = '<i>...</i>';
    chatBody.appendChild(hold);
    chatBody.scrollTop = chatBody.scrollHeight;
    setTimeout(() => {
      hold.remove();
      addMsg(botReply(msg), 'bot');
    }, 1000);
  });

}); /* end DOMContentLoaded */