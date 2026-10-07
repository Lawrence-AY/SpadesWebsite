const serviceItems = [
  {
    number: '01', eyebrow: 'Procurement', title: 'Specialised sourcing', image: '/Specialized Tools.png',
    short: 'The right equipment, sourced to spec and ready when your project needs it.',
    text: "We source tools, equipment and materials against your exact technical specifications. A cost analysis matrix compares quality, lead times and price across vendors. We can act as your purchasing agent, managing purchase orders, supplier terms and local procurement requirements.",
  },
  {
    number: '02', eyebrow: 'Warehouse', title: 'Consolidation', image: '/Consolidation.png',
    short: 'Many suppliers. One organised shipment.',
    text: 'Our Grade A warehouse at Katko Complex, G30, is close to the SGR Nairobi Terminus and Jomo Kenyatta International Airport. We receive goods from multiple vendors, bring them under one roof and prepare a single, organised load for the project site.',
  },
  {
    number: '03', eyebrow: 'Delivery', title: 'Haulage & logistics', image: '/Haulage & Logistics.png',
    short: 'Reliable movement from our warehouse to your site.',
    text: 'We move consolidated goods to your project site in optimised loads. Deliveries arrive organised and sequenced for site needs, reducing fragmented shipments, unnecessary trips and the handling burden on your team.',
  },
  {
    number: '04', eyebrow: 'People', title: 'Workforce & payroll', image: '/image4.png',
    short: 'A compliant workforce, supported through its full employment lifecycle.',
    text: 'We support recruitment, contracts, employee administration, timesheets and payroll for local and foreign personnel. Coverage can include Defense Base Act (DBA) insurance, Work Injury Benefits Act (WIBA) cover, foreign national work permits and statutory dues.',
  },
  {
    number: '05', eyebrow: 'Governance', title: 'Regulatory compliance', image: '/Compliance.png',
    short: 'Local requirements translated into practical operating policies.',
    text: 'We adapt corporate policies and procedures to local requirements, then monitor applicable tax, labour, occupational health and safety, data protection and environmental obligations. The aim is to identify compliance risk early and give teams guidance they can use.',
  },
];

const principles = [
  ['Client orientation', 'We work to meet client needs through responsive service, thoughtful innovation and competitive pricing.'],
  ['People & consultants', 'We aim to hire and retain excellent people, with a diverse, open and safe workplace grounded in trust and fairness.'],
  ['Inclusivity & diversity', 'We value different skills, beliefs and perspectives, and treat people with mutual respect.'],
  ['Welfare', 'We support an ecosystem that balances employee welfare with company objectives.'],
  ['Environment', 'We act as responsible corporate citizens, respecting applicable laws, local cultures and environmental responsibilities.'],
];

const icon = (name, size = 20) => {
  const paths = {
    arrow: '<path d="M4 12h15M13 5l7 7-7 7"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="m15.6 8.4-2.2 5-5 2.2 2.2-5z"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
    route: '<circle cx="6" cy="18" r="2"/><circle cx="18" cy="6" r="2"/><path d="M8 18h2a4 4 0 0 0 4-4v-4a4 4 0 0 1 4-4"/>',
    people: '<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5.2a3 3 0 0 1 0 5.6M18 14a5 5 0 0 1 3 4.6V20"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    pin: '<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  };
  return `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.arrow}</svg>`;
};

const arrow = icon('arrow', 17);
const serviceHref = (index) => `/services#service-${index + 1}`;

function nav(active = '') {
  return `<header class="header" id="top">
    <a class="brand" href="/" aria-label="Spades Atlas home"><img src="/Logo.png" alt="Spades Atlas logo" /><span class="brand-note">PROJECT SERVICES<small>KENYA</small></span></a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">${icon('menu', 23)}</button>
    <nav class="nav" aria-label="Main navigation">
      <a class="nav-link ${active === 'home' ? 'is-active' : ''}" href="/">Overview</a>
      <a class="nav-link ${active === 'services' ? 'is-active' : ''}" href="/services">Capabilities</a>
      <a class="nav-link ${active === 'about' ? 'is-active' : ''}" href="/about">About</a>
      <a class="nav-cta" href="/contact">Start a conversation ${arrow}</a>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-main">
    <div class="footer-brand"><a class="brand brand-light" href="/" aria-label="Spades Atlas home"><img src="/Logo.png" alt="Spades Atlas logo" /><span class="brand-note">PROJECT SERVICES<small>KENYA</small></span></a><p>One local partner for the moving parts behind complex projects.</p></div>
    <div><span class="footer-label">EXPLORE</span><a href="/services">Our capabilities</a><a href="/about">The company</a><a href="/about#ethics">Ethics &amp; integrity</a></div>
    <div><span class="footer-label">FIND US</span><p>Katko Complex, G30<br>Old Mombasa Road<br>P.O. Box 40805-00100<br>Nairobi, Kenya</p></div>
    <div><span class="footer-label">GET IN TOUCH</span><a href="tel:+254790072225">+254 790 072 225</a><a href="mailto:info@spadesatlas.com">info@spadesatlas.com</a><p class="footer-code">SAM.gov UEI · MHT2DEDQAD3S<br>CAGE / NCAGE · SSHP2</p></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Spades Atlas Company Ltd.</span><a href="#top">Back to top ↑</a><span>Nairobi · Kenya</span></div></footer>`;
}

function home() {
  return `${nav('home')}<main id="main">
    <section class="hero">
      <div class="hero-image" role="img" aria-label="Organised materials inside a project warehouse"></div><div class="hero-shade"></div>
      <div class="hero-copy"><p class="eyebrow eyebrow-light"><i></i> PROJECT DELIVERY · ON THE GROUND</p><h1>Complex projects.<br><em>Clear way forward.</em></h1><p class="hero-lede">We connect sourcing, logistics, workforce and local compliance—so international teams can deliver with confidence in Kenya.</p><div class="hero-actions"><a class="button button-copper" href="/contact">Talk through your project ${arrow}</a><a class="text-link text-link-light" href="/services">Explore what we handle <span>↓</span></a></div></div>
      <div class="hero-note"><span class="note-mark">${icon('compass', 22)}</span><span><b>Local knowledge.</b><small>One accountable partner.</small></span><span class="note-coordinate">01°18′S · 36°49′E</span></div>
      <div class="hero-index"><span>01</span><i></i><span>04</span><small>NAIROBI, KENYA</small></div>
    </section>
    <section class="intro-band"><p>THE WORK BEHIND<br>THE WORK</p><div><h2>Execution gets easier when every moving part has a home.</h2><p>From the first purchase order to the last mile, we bring essential local operations together under one relationship.</p></div><a class="round-link" href="/about" aria-label="Learn about Spades Atlas">${arrow}</a></section>
    <section class="capabilities section-wrap"><div class="section-top"><div><p class="eyebrow">CONNECTED CAPABILITIES <span> / 01—05</span></p><h2>One brief.<br><em>Every detail handled.</em></h2></div><p class="section-note">Practical expertise across procurement, delivery and people operations—built around how your project actually works.</p></div>
      <div class="capability-grid">${serviceItems.map((s, i) => `<a class="capability capability-${i + 1} reveal" href="${serviceHref(i)}"><div class="cap-image"><img src="${s.image}" alt="${s.title}" loading="lazy"><span class="cap-number">${s.number}</span><span class="cap-arrow">${arrow}</span></div><div class="cap-copy"><span class="eyebrow">${s.eyebrow}</span><h3>${s.title}</h3><p>${s.short}</p></div></a>`).join('')}</div>
      <a class="button button-dark section-cta" href="/services">Explore all capabilities ${arrow}</a>
    </section>
    <section class="approach"><div class="approach-visual"><img src="/Warehouse.jpg" alt="Warehouse operations supporting consolidated deliveries" loading="lazy"><div class="visual-stamp"><span>SPADES<br>ATLAS</span><i>${icon('route', 24)}</i><small>LOCAL OPERATIONS<br>NAIROBI · KENYA</small></div></div><div class="approach-copy"><p class="eyebrow">A BETTER WAY TO DELIVER</p><h2>Less coordination.<br><em>More momentum.</em></h2><p>International projects often lose time between vendors, shipments, people and paperwork. We bring those pieces together locally, with a single point of contact who understands the ground conditions.</p><div class="approach-points"><div><span>01</span><b>One partner across disciplines</b></div><div><span>02</span><b>Local decisions, made early</b></div><div><span>03</span><b>Clear ownership from start to site</b></div></div><a class="text-link" href="/about">Meet Spades Atlas ${arrow}</a></div></section>
    <section class="location-band"><span class="location-icon">${icon('pin', 23)}</span><div><p class="eyebrow">STRATEGICALLY PLACED</p><h2>Closer to the connections<br>that keep projects moving.</h2></div><p>Our Grade A warehouse at Katko Complex sits within reach of the SGR Nairobi Terminus and Jomo Kenyatta International Airport—connecting incoming goods to onward delivery.</p><a href="/contact" aria-label="Contact our Nairobi team">${arrow}</a></section>
    <section class="closing"><p class="eyebrow eyebrow-light">YOUR NEXT PROJECT STARTS HERE</p><h2>Let’s make the<br><em>complex feel clear.</em></h2><p>Tell us what you’re delivering. We’ll help you map the local pieces.</p><a class="button button-copper" href="/contact">Start a conversation ${arrow}</a><span class="closing-orbit orbit-one"></span><span class="closing-orbit orbit-two"></span></section>
  </main>${footer()}`;
}

function services() {
  return `${nav('services')}<main id="main"><section class="page-hero page-hero-green"><div><p class="eyebrow eyebrow-light"><i></i> WHAT WE DO</p><h1>Local capability.<br><em>Connected delivery.</em></h1><p>Five disciplines, managed as one practical operating partnership for projects in Kenya.</p></div><span class="page-hero-index">CAPABILITIES <b>01—05</b></span></section>
    <section class="service-flow">${serviceItems.map((s, i) => `<article id="service-${i + 1}" class="service-detail ${i % 2 ? 'service-reverse' : ''}"><div class="service-photo"><img src="${s.image}" alt="${s.title}" loading="lazy"><span class="photo-number">${s.number}</span></div><div class="service-description"><p class="eyebrow">${s.eyebrow} <span> / ${s.number}</span></p><h2>${s.title}</h2><p>${s.text}</p><a class="text-link" href="/contact?service=${encodeURIComponent(s.title)}">Discuss this capability ${arrow}</a></div></article>`).join('')}</section>
    <section class="service-end"><p class="eyebrow eyebrow-light">ONE POINT OF CONTACT</p><h2>Bring us the brief.<br><em>We’ll connect the dots.</em></h2><a class="button button-copper" href="/contact">Talk through your project ${arrow}</a></section>
  </main>${footer()}`;
}

function about() {
  return `${nav('about')}<main id="main"><section class="page-hero page-hero-paper"><div><p class="eyebrow"><i></i> THE COMPANY</p><h1>Grounded here.<br><em>Built for what’s next.</em></h1><p>Spades Atlas helps international teams manage the local details that keep complex projects on track.</p></div><span class="page-hero-index">NAIROBI <b>· EST. KENYA</b></span></section>
    <section class="about-lead"><p class="eyebrow">OUR ROLE</p><div><h2>A trusted partner for complex, cross-border projects.</h2><p>We take on the parts of an international build that sit outside a client’s core expertise: sourcing tools and materials, moving goods to site, building and paying a compliant workforce, and staying ahead of local regulation. Our clients stay focused on delivering the project itself.</p></div></section>
    <section class="about-story"><div class="story-label"><p class="eyebrow">OUR STORY</p><span>01 / THE CONTEXT</span></div><div><h2>Built around a recurring challenge.</h2><p>International teams can have deep technical expertise and still lose time and budget to logistics, procurement and compliance issues unrelated to the work they came to deliver. Spades Atlas was created to close that gap.</p><p>Based in Nairobi, we bring together local operating knowledge, a strategically located warehouse and a network of vetted vendors and regulatory contacts. Five connected service areas give clients one accountable local relationship.</p></div></section>
    <section class="about-image"><img src="/site.png" alt="Materials ready for project transport" loading="lazy"><div><span>ON THE GROUND</span><b>Nairobi, Kenya</b><span>01°18′S · 36°49′E</span></div></section>
    <section class="difference"><div class="difference-heading"><p class="eyebrow eyebrow-light">HOW WE WORK</p><h2>Local context.<br><em>Clear accountability.</em></h2></div><div class="difference-list"><article><span>01</span><div><h3>One partner, across the chain.</h3><p>Sourcing, consolidation, haulage, workforce and compliance coordinated through one relationship.</p></div></article><article><span>02</span><div><h3>Positioned for the handoff.</h3><p>Our Grade A facility at Katko Complex, G30, is close to the SGR Nairobi Terminus and Jomo Kenyatta International Airport.</p></div></article><article><span>03</span><div><h3>Fluent in local requirements.</h3><p>We translate labour, tax, safety and environmental requirements into policies and operating guidance teams can use.</p></div></article><article><span>04</span><div><h3>Ready for cross-border teams.</h3><p>We support local and foreign workforce needs, including insurance coverage, payroll and work permit applications.</p></div></article></div></section>
    <section class="mission" id="mission"><p class="eyebrow">OUR MISSION <span>/ 02</span></p><h2>Keep cross-border projects<br><em>compliant, efficient and on schedule.</em></h2><p>We manage sourcing, logistics and workforce complexities on the ground, giving clients confidence to focus on their core objectives.</p></section>
    <section class="ethics" id="ethics"><div class="ethics-intro"><p class="eyebrow">ETHICS &amp; INTEGRITY <span>/ 03</span></p><h2>Good work starts<br>with doing it right.</h2><p>Our relationships with clients, employees and the environment are guided by a small set of commitments.</p></div><div class="principle-list">${principles.map(([title, body], i) => `<article><span>0${i + 1}</span><div><h3>${title}</h3><p>${body}</p></div></article>`).join('')}</div></section>
    <section class="ethics-note"><span>${icon('check', 22)}</span><p>We value fairness and honesty, and hold ourselves accountable for results without sacrificing ethical standards.</p></section>
    <section class="about-cta"><div><p class="eyebrow eyebrow-light">LET’S WORK TOGETHER</p><h2>Have a project<br><em>taking shape?</em></h2></div><a class="button button-copper" href="/contact">Talk to our team ${arrow}</a></section>
  </main>${footer()}`;
}

function contact() {
  const requested = new URLSearchParams(location.search).get('service') || '';
  const options = serviceItems.map((service) => `<option ${requested === service.title ? 'selected' : ''}>${service.title}</option>`).join('');
  return `${nav('')}<main id="main"><section class="contact-layout"><div class="contact-story"><p class="eyebrow eyebrow-light"><i></i> CONTACT SPADES ATLAS</p><h1>Let’s get your<br><em>project moving.</em></h1><p>Tell us a little about the work ahead. Our Nairobi team will follow up to understand what you need.</p><div class="contact-details"><div><span class="contact-symbol">${icon('pin')}</span><p><b>VISIT</b><br>Katko Complex, G30<br>Old Mombasa Road, Nairobi</p></div><div><span class="contact-symbol">↗</span><p><b>CALL OR EMAIL</b><br><a href="tel:+254790072225">+254 790 072 225</a><br><a href="mailto:info@spadesatlas.com">info@spadesatlas.com</a></p></div></div><span class="contact-coordinate">01°18′S  ·  36°49′E</span></div>
      <div class="form-panel"><div class="form-heading"><span>01 <i></i> PROJECT ENQUIRY</span><h2>Start with the essentials.</h2><p>We’ll take it from there.</p></div><form class="contact-form"><div class="form-row"><label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label><label>Work email<input name="email" type="email" autocomplete="email" placeholder="you@company.com"></label></div><div class="form-row"><label>Phone number<input name="phone" type="tel" autocomplete="tel" required placeholder="+254 …"></label><label>Area of support<select name="service"><option value="">Select a capability</option>${options}<option>Something else</option></select></label></div><label>What are you working on?<textarea name="comments" rows="4" placeholder="A few details about your project, location and timeline…"></textarea></label><label class="consent"><input type="checkbox" name="newsletter"><span>Keep me informed about Spades Atlas updates</span></label><button class="button button-dark" type="submit">Prepare enquiry ${arrow}</button><p class="form-status" aria-live="polite">Submitting opens a ready-to-send email in your mail app.</p></form></div></section></main>${footer()}`;
}

function render() {
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const view = path === '/services' ? services() : path === '/about' ? about() : path === '/contact' ? contact() : home();
  document.querySelector('#site').innerHTML = view;
  document.title = path === '/services' ? 'Capabilities — Spades Atlas' : path === '/about' ? 'About — Spades Atlas' : path === '/contact' ? 'Contact — Spades Atlas' : 'Spades Atlas — Project delivery, on the ground';
  observeReveals();
  if (location.hash) requestAnimationFrame(() => document.querySelector(location.hash)?.scrollIntoView({ behavior: 'smooth' }));
}

function observeReveals() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener('click', (event) => {
  const toggle = event.target.closest('.menu-toggle');
  if (toggle) {
    const header = toggle.closest('.header');
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    toggle.innerHTML = icon(expanded ? 'menu' : 'close', 23);
    header.classList.toggle('nav-open', !expanded);
    return;
  }
  const link = event.target.closest('a[href]');
  if (!link) return;
  const url = new URL(link.href, location.href);
  if (url.origin !== location.origin || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  if (url.pathname === location.pathname && url.hash) return;
  event.preventDefault();
  history.pushState({}, '', url.pathname + url.search + url.hash);
  render();
  if (!url.hash) window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  document.querySelector('.header')?.classList.remove('nav-open');
});

window.addEventListener('popstate', render);
document.addEventListener('submit', (event) => {
  if (!event.target.matches('.contact-form')) return;
  event.preventDefault();
  const form = event.target;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Project enquiry — ${data.get('name')}`);
  const message = encodeURIComponent([
    `Name: ${data.get('name')}`,
    `Email: ${data.get('email') || 'Not provided'}`,
    `Phone: ${data.get('phone')}`,
    `Area of support: ${data.get('service') || 'Not specified'}`,
    `Newsletter: ${data.has('newsletter') ? 'Yes' : 'No'}`,
    '', 'Project details:', data.get('comments') || 'Not provided',
  ].join('\n'));
  const status = form.querySelector('.form-status');
  status.textContent = 'Your email draft is ready. Send it from your mail app to complete the enquiry.';
  status.classList.add('status-success');
  location.href = `mailto:info@spadesatlas.com?subject=${subject}&body=${message}`;
});

render();
