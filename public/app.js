const serviceItems = [
  {
    number: '01', eyebrow: 'Supply chain', title: 'Supply chain & procurement', image: '/Specialized Tools.png',
    short: 'Procurement decisions connected to real operational requirements.',
    text: 'Effective supply chain operations connect the sourcing, procurement and movement of materials to actual project requirements. We coordinate material sourcing, supplier and vendor relationships, supply planning and purchase orders, while aligning delivery coordination with operational needs. Clear procurement records support visibility and accountability throughout the process.',
  },
  {
    number: '02', eyebrow: 'Supply chain', title: 'Warehouse', image: '/Warehouse.jpg',
    short: 'Inventory, inbound goods and dispatch coordinated as one flow.',
    text: 'Warehouse operations connect procurement, inventory and downstream deliveries. We coordinate material receiving and dispatch, stock management, goods movement and tracking, inventory reconciliation, material allocation and storage visibility. Inbound and outbound logistics are organised to support the availability and movement of materials. Our Grade A warehouse at Katko Complex, G30, is close to the SGR Nairobi Terminus and Jomo Kenyatta International Airport.',
  },
  {
    number: '03', eyebrow: 'Operational management', title: 'Fleet & delivery management', image: '/Haulage & Logistics.png',
    short: 'Vehicles, equipment and deliveries coordinated as one operation.',
    text: 'Coordinated fleet and transport operations keep projects, materials and equipment moving efficiently. We support fleet deployment and scheduling, delivery truck coordination, project vehicles and equipment, driver and vehicle records, trip management, dispatch, delivery confirmation, route and movement visibility, vehicle utilisation, delivery documentation and operational reporting. Connected records improve accountability and coordination throughout transportation.',
  },
  {
    number: '04', eyebrow: 'Operational management', title: 'Workforce & payroll', image: '/image4.png',
    short: 'A compliant workforce, supported through its full employment lifecycle.',
    text: 'We support recruitment, contracts, employee administration, timesheets and payroll for local and foreign personnel. Coverage can include Defense Base Act (DBA) insurance, Work Injury Benefits Act (WIBA) cover, foreign national work permits and statutory dues.',
  },
  {
    number: '05', eyebrow: 'Operational management', title: 'Regulatory compliance', image: '/Compliance.png',
    short: 'Local requirements translated into practical operating policies.',
    text: 'We adapt corporate policies and procedures to applicable requirements, then monitor tax, labour, occupational health and safety, data protection and environmental obligations. The aim is to identify compliance risk early and give teams practical operating guidance.',
  },
  {
    number: '06', eyebrow: 'Operational management', title: 'Fuel & diesel operations', image: '/Haulage & Logistics.png',
    short: 'Fuel movements and consumption coordinated with clear records.',
    text: 'Fuel operations can include diesel storage infrastructure coordination, handling and distribution, fuel inventory monitoring, dispensing records and allocation to vehicles and equipment. Consumption monitoring and reconciliation help establish accountability for fuel movements and operational use. Requirements are coordinated to suit the operation; no capacity or performance assumptions are implied.',
  },
  {
    number: '07', eyebrow: 'Operational management', title: 'Equipment & project resources', image: '/Site.png',
    short: 'Project resources planned, allocated and tracked through use.',
    text: 'Project equipment and other operational resources need to be available where and when they are required. We coordinate equipment planning, allocation and deployment, utilization monitoring, movement and transportation, maintenance and operational records. Resource availability is considered alongside project schedules and delivery requirements.',
  },
  {
    number: '08', eyebrow: 'Operational management', title: 'Identity verification & compliance', image: '/Compliance.png',
    short: 'Verification workflows and access controls support accountable operations.',
    text: 'Identity verification integrations and digital workflows can support driver and personnel verification, controlled system access and operational accountability. User roles and permissions help structure access to information, while secure handling practices support responsible information management. Integrations may include IPRS and third-party verification services; these remain external platforms and are not owned or operated by Spades Atlas.',
  },
];

const technologyCapabilities = [
  ['Fleet visibility', 'Monitor and coordinate vehicle operations and movements.'],
  ['Driver management', 'Maintain driver information and operational records.'],
  ['Delivery traceability', 'Track deliveries and retain records throughout the delivery process.'],
  ['Dispatch management', 'Coordinate vehicle assignments, dispatch activity and delivery schedules.'],
  ['Operational accountability', 'Digital records support transparency and accountability.'],
  ['Reporting & insights', 'Operational information supports monitoring and decision-making.'],
];
const operatingFunctions = ['Procurement', 'Warehouse & inventory', 'Fleet & transport', 'Delivery', 'Operational monitoring'];

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
    <a class="brand" href="/" aria-label="Spades Atlas home"><img src="/Logo.png" alt="Spades Atlas logo" /><span class="brand-note">SUPPLY CHAIN<small>&amp; OPERATIONS</small></span></a>
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
    <div class="footer-brand"><a class="brand brand-light" href="/" aria-label="Spades Atlas home"><img src="/Logo.png" alt="Spades Atlas logo" /><span class="brand-note">SUPPLY CHAIN<small>&amp; OPERATIONS</small></span></a><p>Global supply chain solutions. Seamless operations.</p></div>
    <div><span class="footer-label">EXPLORE</span><a href="/services">Our capabilities</a><a href="/about">The company</a><a href="/about#ethics">Ethics &amp; integrity</a></div>
    <div><span class="footer-label">FIND US</span><p>Katko Complex, G30<br>Old Mombasa Road<br>P.O. Box 40805-00100<br>Nairobi, Kenya</p></div>
    <div><span class="footer-label">GET IN TOUCH</span><a href="tel:+254790072225">+254 790 072 225</a><a href="mailto:info@spadesatlas.com">info@spadesatlas.com</a><p class="footer-code">SAM.gov UEI · MHT2DEDQAD3S<br>CAGE / NCAGE · SSHP2</p></div>
  </div><div class="footer-bottom"><span>© ${new Date().getFullYear()} Spades Atlas Company Ltd.</span><span>Global Supply Chain Solutions</span></div></footer>`;
}

function home() {
  return `${nav('home')}<main id="main">
    <section class="hero">
      <div class="hero-image" role="img" aria-label="Organised materials inside a project warehouse"></div><div class="hero-shade"></div>
      <div class="hero-copy"><p class="eyebrow eyebrow-light"><i></i> GLOBAL SUPPLY CHAIN SOLUTIONS</p><h1>Supply chain solutions.<br><em>Clear way forward.</em></h1><p class="hero-lede">Connecting procurement, logistics, fleet operations and project support through integrated supply chain solutions.</p><div class="hero-actions"><a class="button button-copper" href="/contact">Talk through your operation ${arrow}</a><a class="text-link text-link-light" href="/services">Explore our capabilities <span>↓</span></a></div></div>
      <div class="hero-note"><span class="note-mark">${icon('compass', 22)}</span><span><b>Operational insight.</b><small>One accountable partner.</small></span><span class="note-coordinate">Connected operations</span></div>
      <div class="hero-index"><span>01</span><i></i><span>04</span><small>OPERATIONAL EXCELLENCE</small></div>
    </section>
    <section class="intro-band"><p>THE WORK BEHIND<br>THE WORK</p><div><h2>Execution gets easier when every moving part has a home.</h2><p>From sourcing and procurement to logistics, workforce and operational management, we bring essential services together to help businesses move projects forward with greater efficiency and control.</p></div><a class="round-link" href="/about" aria-label="Learn about Spades Atlas">${arrow}</a></section>
    <section class="capabilities section-wrap"><div class="section-top"><div><p class="eyebrow">CONNECTED CAPABILITIES <span> / 01–08</span></p><h2>One brief.<br><em>Every detail handled.</em></h2></div><p class="section-note">Supply chain, operational management and technology capabilities built around how your operation works.</p></div>
      <div class="capability-grid">${serviceItems.map((s, i) => `<a class="capability capability-${i + 1} reveal" href="${serviceHref(i)}"><div class="cap-image"><img src="${s.image}" alt="${s.title}" loading="lazy"><span class="cap-number">${s.number}</span><span class="cap-arrow">${arrow}</span></div><div class="cap-copy"><span class="eyebrow">${s.eyebrow}</span><h3>${s.title}</h3><p>${s.short}</p></div></a>`).join('')}</div>
      <a class="button button-dark section-cta" href="/services">Explore all capabilities ${arrow}</a>
    </section>
    <section class="approach"><div class="approach-visual"><img src="/Warehouse.jpg" alt="Warehouse operations supporting coordinated supply chains" loading="lazy"><div class="visual-stamp"><span>SPADES<br>ATLAS</span><i>${icon('route', 24)}</i><small>CONNECTED OPERATIONS<br>SUPPLY · MOVE · MANAGE</small></div></div><div class="approach-copy"><p class="eyebrow">A BETTER WAY TO DELIVER</p><h2>Less friction.<br><em>More momentum.</em></h2><p>From sourcing and procurement to logistics, workforce and operational management, we bring essential services together to simplify execution and strengthen control.</p><div class="approach-points"><div><span>01</span><b>One partner across disciplines</b></div><div><span>02</span><b>Connected resources and services</b></div><div><span>03</span><b>Clear ownership from start to delivery</b></div></div><a class="text-link" href="/about">Meet Spades Atlas ${arrow}</a></div></section>
    <section class="location-band"><span class="location-icon">${icon('layers', 23)}</span><div><p class="eyebrow">CONNECTED OPERATIONS</p><h2>Less friction across<br>every handoff.</h2></div><p>From procurement and warehousing to transport, delivery and operational monitoring, coordinated functions help keep materials, people and resources moving with clear ownership.</p><a href="/services" aria-label="Explore integrated capabilities">${arrow}</a></section>
    <section class="closing"><p class="eyebrow eyebrow-light">YOUR NEXT PROJECT STARTS HERE</p><h2>Let’s make the<br><em>complex feel clear.</em></h2><p>Tell us what you’re delivering. We’ll help you map the local pieces.</p><a class="button button-copper" href="/contact">Start a conversation ${arrow}</a><span class="closing-orbit orbit-one"></span><span class="closing-orbit orbit-two"></span></section>
  </main>${footer()}`;
}

function services() {
  return `${nav('services')}<main id="main"><section class="page-hero page-hero-green"><div><p class="eyebrow eyebrow-light"><i></i> WHAT WE DO</p><h1>Global supply chain.<br><em>Seamless operations.</em></h1><p>Supply chain solutions, operational management and technology working together to support complex requirements across markets.</p></div><span class="page-hero-index">CAPABILITIES <b>01–08</b></span></section>
    <section class="pillar-band"><p class="eyebrow">THREE PILLARS. ONE CONNECTED PARTNER.</p><div class="pillar-grid"><article><span>01 / SUPPLY CHAIN SOLUTIONS</span><h2>Source. Store. Move.</h2><p>Sourcing, warehousing, procurement and logistics, coordinated around operational needs.</p></article><article><span>02 / OPERATIONAL MANAGEMENT</span><h2>People &amp; resources.</h2><p>Fleets, deliveries, equipment, fuel, workforce and compliance brought into view.</p></article><article><span>03 / TECHNOLOGY &amp; TRACEABILITY</span><h2>Connected oversight.</h2><p>TruckSphere, ERP systems, reporting and operational visibility supporting informed action.</p></article></div></section>
    <section class="connected-flow ecosystem-live" data-ecosystem data-active-node="0"><div class="flow-intro"><p class="eyebrow">THE OPERATING ECOSYSTEM</p><h2>The Living Supply Chain.<br><em>Connected at every handoff.</em></h2><p>Materials, vehicles, resources and operational information move together across an accountable network.</p></div><div class="eco-network-wrap"><svg class="eco-network" viewBox="0 0 1100 270" aria-hidden="true"><defs><linearGradient id="eco-line" x1="0" x2="1"><stop stop-color="#789baa" stop-opacity=".28"/><stop offset=".55" stop-color="#a8c3cd" stop-opacity=".8"/><stop offset="1" stop-color="#789baa" stop-opacity=".3"/></linearGradient><filter id="eco-glow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><path class="eco-link is-lit" data-edge="0-1" d="M165 65 C270 35 445 35 550 65"/><path class="eco-link" data-edge="1-2" d="M550 65 C675 35 820 35 935 65"/><path class="eco-link" data-edge="2-3" d="M165 65 C115 110 115 165 165 215"/><path class="eco-link" data-edge="2-4" d="M550 65 C600 115 600 165 550 215"/><path class="eco-link" data-edge="3-4" d="M935 65 C990 115 990 165 935 215"/><path class="eco-link" data-edge="2-5" d="M165 215 C270 245 445 245 550 215"/><path class="eco-link" data-edge="4-5" d="M550 215 C675 245 820 245 935 215"/><path class="eco-link" data-edge="1-5" d="M550 65 C680 110 815 165 935 215"/><g filter="url(#eco-glow)"><circle class="eco-particle particle-1" r="3.1"><animateMotion dur="6s" repeatCount="indefinite" path="M165 65 C270 35 445 35 550 65"/></circle><circle class="eco-particle particle-2" r="3.1"><animateMotion dur="6s" repeatCount="indefinite" path="M550 65 C675 35 820 35 935 65"/></circle><circle class="eco-particle particle-3" r="3.1"><animateMotion dur="7s" repeatCount="indefinite" path="M165 65 C115 110 115 165 165 215"/></circle><circle class="eco-particle particle-4" r="3.1"><animateMotion dur="5s" repeatCount="indefinite" path="M550 65 C600 115 600 165 550 215"/></circle><circle class="eco-particle particle-5" r="3.1"><animateMotion dur="6s" repeatCount="indefinite" path="M935 65 C990 115 990 165 935 215"/></circle><circle class="eco-particle particle-6" r="3.1"><animateMotion dur="7s" repeatCount="indefinite" path="M165 215 C270 245 445 245 550 215"/></circle><circle class="eco-particle particle-7" r="3.1"><animateMotion dur="5s" repeatCount="indefinite" path="M550 215 C675 245 820 245 935 215"/></circle><circle class="eco-particle particle-8" r="3.1"><animateMotion dur="6s" repeatCount="indefinite" path="M550 65 C680 110 815 165 935 215"/></g></svg><div class="eco-nodes"><button type="button" class="network-node node-1" data-eco-node="0" aria-pressed="true"><span class="node-index">01</span><b>PROCUREMENT</b><small>SUPPLY PLANNING</small><i></i></button><button type="button" class="network-node node-2" data-eco-node="1" aria-pressed="false"><span class="node-index">02</span><b>WAREHOUSE</b><small>INVENTORY &amp; DISPATCH</small><i></i></button><button type="button" class="network-node node-3" data-eco-node="2" aria-pressed="false"><span class="node-index">03</span><b>FLEET &amp; TRANSPORT</b><small>FLEET VISIBILITY</small><i></i></button><button type="button" class="network-node node-4" data-eco-node="3" aria-pressed="false"><span class="node-index">04</span><b>FUEL OPERATIONS</b><small>RESOURCE CONTROL</small><i></i></button><button type="button" class="network-node node-5" data-eco-node="4" aria-pressed="false"><span class="node-index">05</span><b>EQUIPMENT &amp; RESOURCES</b><small>ASSET UTILIZATION</small><i></i></button><button type="button" class="network-node node-6" data-eco-node="5" aria-pressed="false"><span class="node-index">06</span><b>DELIVERY &amp; TRACEABILITY</b><small>MOVEMENT RECORDS</small><i></i></button></div></div><div class="eco-context" aria-live="polite"><div class="eco-context-copy"><span class="eco-overline" data-eco-overline>01 / PROCUREMENT</span><h3 data-eco-title>Procurement</h3><p data-eco-description>Supplier management, purchasing and sourcing, purchase orders and supply planning.</p></div><div class="eco-context-meta"><span>CONNECTED SYSTEMS</span><b data-eco-platform>ERP and TruckSphere</b></div></div><div class="eco-tech-layer"><article class="tech-platform erp-platform is-connected" data-platform="erp"><span class="tech-platform-tag">ENTERPRISE OPERATIONS</span><h3>ERP</h3><p>Procurement, inventory, vendors, financial records, resources, workflows and reporting.</p><div class="tech-chips"><i>Purchasing</i><i>Inventory</i><i>Vendors</i><i>Resources</i><i>Reporting</i></div></article><div class="tech-bridge" aria-hidden="true"><span></span><b>COMPLEMENTARY SYSTEMS</b><span></span></div><article class="tech-platform truck-platform is-connected" data-platform="truck"><span class="tech-platform-tag">LOGISTICS INTELLIGENCE</span><h3>TruckSphere</h3><p>Vehicles, drivers, dispatch, trip management, weighbridge records and delivery traceability.</p><div class="tech-chips"><i>Fleet</i><i>Drivers</i><i>Dispatch</i><i>Trips</i><i>Delivery</i></div></article></div><div class="eco-simulation"><div><span class="eco-overline">ILLUSTRATIVE OPERATIONAL SIMULATION</span><p data-sim-status>Follow a material movement from purchasing through confirmed delivery.</p></div><div class="sim-progress" role="progressbar" aria-label="Simulation progress" aria-valuemin="0" aria-valuemax="9" aria-valuenow="0"><i></i></div><span class="sim-step-label" data-sim-step>READY</span><button type="button" class="sim-button" data-sim-start>EXPLORE THE ECOSYSTEM</button></div></section>
    <section class="service-flow">${serviceItems.map((s, i) => `<article id="service-${i + 1}" class="service-detail ${i % 2 ? 'service-reverse' : ''}"><div class="service-photo"><img src="${s.image}" alt="${s.title}" loading="lazy"><span class="photo-number">${s.number}</span></div><div class="service-description"><p class="eyebrow">${s.eyebrow} <span> / ${s.number}</span></p><h2>${s.title}</h2><p>${s.text}</p><a class="text-link" href="/contact?service=${encodeURIComponent(s.title)}">Discuss this capability ${arrow}</a></div></article>`).join('')}</section>
    <section class="intelligence-section"><div class="intelligence-heading"><p class="eyebrow eyebrow-light">TECHNOLOGY &amp; TRACEABILITY</p><h2>The Intelligence Behind<br><em>Every Operation.</em></h2><p>Digital systems connect procurement, warehouse, fleet, delivery and management activity for a clearer operational picture.</p></div><div class="ecosystem-visual"><div class="eco-orbit orbit-a"></div><div class="eco-orbit orbit-b"></div><div class="eco-core"><span>SPADES ATLAS</span><b>Connected<br>Operations</b><small>ILLUSTRATIVE SYSTEMS VIEW</small></div><div class="eco-node node-1"><i>01</i><b>Procurement</b><small>Orders · vendors</small></div><div class="eco-node node-2"><i>02</i><b>Warehouse</b><small>Inventory · dispatch</small></div><div class="eco-node node-3"><i>03</i><b>Fleet &amp; delivery</b><small>Vehicles · traceability</small></div><div class="eco-node node-4"><i>04</i><b>Project operations</b><small>People · equipment</small></div><div class="eco-node node-5"><i>05</i><b>Management</b><small>ERP · reporting</small></div><div class="eco-platforms"><span>TruckSphere <small>Fleet &amp; logistics visibility</small></span><b>+</b><span>ERP systems <small>Integrated process management</small></span></div></div></section>
    <section class="technology-detail"><div><p class="eyebrow">DIGITAL LOGISTICS &amp; TRACEABILITY</p><h2>Every movement.<br><em>Accounted for.</em></h2><p>TruckSphere connects physical logistics activity with digital records. It supports fleet and driver management, vendor and vehicle records, trip activity, dispatch management, origin and destination visibility, delivery confirmation and timestamps. Weighbridge integrations can capture weighing records and digital tickets, match them with vendor and driver information, and reduce manual entry while strengthening material movement accountability.</p><div class="tech-list">${technologyCapabilities.map(([title, body]) => `<article><b>${title}</b><span>${body}</span></article>`).join('')}</div></div><aside class="trucksphere-panel"><div class="panel-top"><span><i></i> TRUCKSPHERE</span><small>ILLUSTRATIVE INTERFACE</small></div><div class="route-visual"><div class="route-grid"></div><svg viewBox="0 0 500 250" role="img" aria-label="Illustrative route connecting warehouse, vehicle and delivery"><path d="M42 195 C112 182 104 72 206 92 S322 224 389 144 428 92 465 58"/><circle cx="42" cy="195" r="7"/><circle cx="206" cy="92" r="7"/><circle cx="389" cy="144" r="7"/><circle cx="465" cy="58" r="7"/></svg><span class="route-label route-start">WAREHOUSE</span><span class="route-label route-mid">IN TRANSIT</span><span class="route-label route-end">DELIVERY</span></div><div class="panel-status"><span><i></i> Operational visibility</span><b>Vehicle · Driver · Delivery</b></div><div class="record-strip"><span>DISPATCH RECORD <b>Origin → destination</b></span><span>WEIGHBRIDGE <b>Digital ticket · vendor · driver</b></span><span>DELIVERY <b>Confirmation · timestamp</b></span></div><p>Illustrative interface — no live operational data shown.</p></aside></section>
    <section class="erp-band"><div><p class="eyebrow eyebrow-light">ERP &amp; INTEGRATED OPERATIONS</p><h2>Connected operations.<br><em>Better decisions.</em></h2><p>ERP systems support broader enterprise processes, including procurement, purchasing, inventory, vendor management, financial and operational records, resource planning, workflow coordination, reporting and business intelligence. They provide a centralised view across business functions. TruckSphere focuses on fleet, logistics, dispatch and delivery traceability; the two systems are complementary.</p></div><div class="function-flow">${operatingFunctions.map((item,i)=>`<div><span>0${i+1}</span><b>${item}</b>${i<operatingFunctions.length-1?'<i>→</i>':''}</div>`).join('')}</div></section>
    <section class="service-end"><p class="eyebrow eyebrow-light">ONE POINT OF CONTACT</p><h2>Bring us the brief.<br><em>We’ll connect the dots.</em></h2><a class="button button-copper" href="/contact">Talk through your operation ${arrow}</a></section>
  </main>${footer()}`;
}
function about() {
  return `${nav('about')}<main id="main"><section class="page-hero page-hero-paper"><div><p class="eyebrow"><i></i> THE COMPANY</p><h1>Global supply chain.<br><em>Seamless operations.</em></h1><p>Spades Atlas brings supply chain solutions, operational expertise and technology together to manage complex requirements across markets.</p></div><span class="page-hero-index">SUPPLY CHAIN <b>· OPERATIONS</b></span></section>
    <section class="about-lead"><p class="eyebrow">OUR ROLE</p><div><h2>A connected partner for complex operations.</h2><p>From sourcing and warehousing to logistics, workforce, fleet, equipment and compliance, Spades Atlas coordinates the services that help businesses move projects forward. We pair operational expertise with digital systems for visibility, traceability and control.</p></div></section>
    <section class="about-story"><div class="story-label"><p class="eyebrow">OUR APPROACH</p><span>01 / CONNECTED OPERATIONS</span></div><div><h2>Built around how operations fit together.</h2><p>Procurement, logistics, people and compliance can become disconnected as requirements grow. Spades Atlas coordinates these functions under one management structure so teams can work with greater clarity.</p><p>Our established warehouse facility and operational knowledge support this broader supply chain and operations approach. Digital tools such as TruckSphere and ERP systems help connect activity with operational information.</p></div></section>
    <section class="about-image"><img src="/Site.png" alt="Materials ready for project transport" loading="lazy"><div><span>OPERATIONAL EXCELLENCE</span><b>Connected Operations</b><span>Supply Chain · Logistics · Technology</span></div></section>
    <section class="difference"><div class="difference-heading"><p class="eyebrow eyebrow-light">HOW WE WORK</p><h2>Connected services.<br><em>Clear accountability.</em></h2></div><div class="difference-list"><article><span>01</span><div><h3>One partner, across the chain.</h3><p>Sourcing, warehousing, fleet, delivery, workforce and compliance coordinated through one relationship.</p></div></article><article><span>02</span><div><h3>Positioned for the handoff.</h3><p>Our Grade A facility at Katko Complex, G30, is close to the SGR Nairobi Terminus and Jomo Kenyatta International Airport.</p></div></article><article><span>03</span><div><h3>Fluent in applicable requirements.</h3><p>We translate labour, tax, safety and environmental requirements into policies and operating guidance teams can use.</p></div></article><article><span>04</span><div><h3>Technology supporting operations.</h3><p>TruckSphere supports fleet and logistics traceability, while ERP systems help connect business processes and management information.</p></div></article></div></section>
    <section class="mission" id="mission"><p class="eyebrow">OUR MISSION <span>/ 02</span></p><h2>Simplify complex operations<br><em>through connected expertise.</em></h2><p>We bring supply chain services, operational management and technology together to support efficient, accountable execution.</p></section>
    <section class="ethics" id="ethics"><div class="ethics-intro"><p class="eyebrow">ETHICS &amp; INTEGRITY <span>/ 03</span></p><h2>Good work starts<br>with doing it right.</h2><p>Our relationships with clients, employees and the environment are guided by a small set of commitments.</p></div><div class="principle-list">${principles.map(([title, body], i) => `<article><span>0${i + 1}</span><div><h3>${title}</h3><p>${body}</p></div></article>`).join('')}</div></section>
    <section class="ethics-note"><span>${icon('check', 22)}</span><p>We value fairness and honesty, and hold ourselves accountable for results without sacrificing ethical standards.</p></section>
    <section class="about-cta"><div><p class="eyebrow eyebrow-light">LET’S WORK TOGETHER</p><h2>Have an operation<br><em>taking shape?</em></h2></div><a class="button button-copper" href="/contact">Talk to our team ${arrow}</a></section>
  </main>${footer()}`;
}
function contact() {
  const requested = new URLSearchParams(location.search).get('service') || '';
  const options = serviceItems.map((service) => `<option ${requested === service.title ? 'selected' : ''}>${service.title}</option>`).join('');
  return `${nav('')}<main id="main"><section class="contact-layout"><div class="contact-story"><p class="eyebrow eyebrow-light"><i></i> CONTACT SPADES ATLAS</p><h1>Let’s get your<br><em>project moving.</em></h1><p>Tell us a little about the work ahead. Our team will follow up to understand what you need.</p><div class="contact-details"><div><span class="contact-symbol">${icon('pin')}</span><p><b>VISIT</b><br>Katko Complex, G30<br>Old Mombasa Road, Nairobi</p></div><div><span class="contact-symbol">↗</span><p><b>CALL OR EMAIL</b><br><a href="tel:+254790072225">+254 790 072 225</a><br><a href="mailto:info@spadesatlas.com">info@spadesatlas.com</a></p></div></div><span class="contact-coordinate">SPADES ATLAS / SUPPLY CHAIN &amp; OPERATIONS</span></div>
      <div class="form-panel"><div class="form-heading"><span>01 <i></i> PROJECT ENQUIRY</span><h2>Start with the essentials.</h2><p>We’ll take it from there.</p></div><form class="contact-form"><div class="form-row"><label>Your name<input name="name" autocomplete="name" required placeholder="Full name"></label><label>Work email<input name="email" type="email" autocomplete="email" placeholder="you@company.com"></label></div><div class="form-row"><label>Phone number<input name="phone" type="tel" autocomplete="tel" required placeholder="+254 …"></label><label>Area of support<select name="service"><option value="">Select a capability</option>${options}<option>Something else</option></select></label></div><label>What are you working on?<textarea name="comments" rows="4" placeholder="A few details about your project, location and timeline…"></textarea></label><label class="consent"><input type="checkbox" name="newsletter"><span>Keep me informed about Spades Atlas updates</span></label><button class="button button-dark" type="submit">Prepare enquiry ${arrow}</button><p class="form-status" aria-live="polite">Submitting opens a ready-to-send email in your mail app.</p></form></div></section></main>${footer()}`;
}

function render() {
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const view = path === '/services' ? services() : path === '/about' ? about() : path === '/contact' ? contact() : home();
  document.querySelector('#site').innerHTML = view;
  document.title = path === '/services' ? 'Capabilities — Spades Atlas' : path === '/about' ? 'About — Spades Atlas' : path === '/contact' ? 'Contact — Spades Atlas' : 'Spades Atlas — Project delivery, on the ground';
  observeReveals();
  observeEcosystem();
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

function observeEcosystem() {
  const section = document.querySelector('[data-ecosystem]');
  if (!section) return;
  const svg = section.querySelector('.eco-network');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) {
    section.classList.add('is-visible');
    svg.pauseAnimations?.();
    return;
  }
  const observer = new IntersectionObserver(([entry]) => {
    section.classList.toggle('is-visible', entry.isIntersecting);
    if (entry.isIntersecting) svg.unpauseAnimations?.();
    else svg.pauseAnimations?.();
  }, { threshold: 0.16 });
  observer.observe(section);
}

const ecosystemData = [
  ['Procurement','Supplier management, purchasing and sourcing, purchase orders and supply planning.','ERP + TruckSphere','erp'],
  ['Warehouse','Inventory management, material receiving, storage and stock visibility, allocation and dispatch.','ERP + TruckSphere','both'],
  ['Fleet & Transport','Vehicle and driver management, fleet deployment, trip and route monitoring, delivery coordination.','TruckSphere','truck'],
  ['Fuel Operations','Diesel storage, fuel dispensing and allocation, consumption monitoring and reconciliation.','ERP + TruckSphere','both'],
  ['Equipment & Resources','Project equipment, machinery deployment, resource allocation and equipment utilization.','ERP','erp'],
  ['Delivery & Traceability','Dispatch management, delivery confirmation, weighbridge records, movement tracking and accountability.','TruckSphere','truck'],
];
const simulation = [
  [0,'Purchase request initiated','ERP records the requirement and supplier order.'],
  [1,'Materials received','Warehouse receipt and inventory records are updated.'],
  [1,'Materials allocated','Stock is allocated for the planned movement.'],
  [2,'Vehicle and driver assigned','Fleet deployment and trip details are prepared in TruckSphere.'],
  [3,'Fuel allocation recorded','Fuel issued to the assigned vehicle is recorded for reconciliation.'],
  [2,'Vehicle dispatched','Dispatch activity and the planned route are recorded.'],
  [5,'Movement and weighing recorded','Movement events and weighbridge records are captured where applicable.'],
  [5,'Delivery confirmed','Delivery confirmation closes the illustrative movement.'],
  [5,'Records available for reporting','Operational records are ready for review in the relevant systems.'],
];
let simulationTimer;
const selectEcoNode = (section,index) => {
  const data=ecosystemData[index];if(!data)return;
  section.dataset.activeNode=String(index);
  section.querySelectorAll('[data-eco-node]').forEach((node)=>{const nodeIndex=Number(node.dataset.ecoNode);const active=nodeIndex===index;const linked=Array.from(section.querySelectorAll('.eco-link')).some((edge)=>{const ends=edge.dataset.edge.split('-').map(Number);return ends.includes(index)&&ends.includes(nodeIndex);});node.classList.toggle('is-active',active);node.classList.toggle('is-muted',!active&&!linked);node.setAttribute('aria-pressed',String(active));});
  section.querySelectorAll('.eco-link').forEach((edge)=>{const [a,b]=edge.dataset.edge.split('-').map(Number);edge.classList.toggle('is-lit',a===index||b===index);});
  section.querySelector('[data-eco-overline]').textContent='0'+(index+1)+' / '+data[0].toUpperCase();
  section.querySelector('[data-eco-title]').textContent=data[0];
  section.querySelector('[data-eco-description]').textContent=data[1];
  section.querySelector('[data-eco-platform]').textContent=data[2];
  section.querySelector('[data-platform="erp"]').classList.toggle('is-connected',data[3]==='erp'||data[3]==='both');
  section.querySelector('[data-platform="truck"]').classList.toggle('is-connected',data[3]==='truck'||data[3]==='both');
};
const updateSimulation = (section,index) => {
  const [node,title,detail]=simulation[index];selectEcoNode(section,node);
  section.querySelector('[data-sim-status]').textContent=title+'. '+detail;
  section.querySelector('[data-sim-step]').textContent='STEP '+(index+1)+' / '+simulation.length;
  const progress=section.querySelector('.sim-progress');progress.setAttribute('aria-valuenow',String(index+1));progress.style.setProperty('--sim-progress',((index+1)/simulation.length*100)+'%');
};

document.addEventListener('click',(event)=>{
  const ecoNode=event.target.closest('[data-eco-node]');
  if(ecoNode){const section=ecoNode.closest('[data-ecosystem]');selectEcoNode(section,Number(ecoNode.dataset.ecoNode));return;}
  const simButton=event.target.closest('[data-sim-start]');
  if(simButton){const section=simButton.closest('[data-ecosystem]');clearInterval(simulationTimer);simButton.textContent='RESTART SIMULATION';let step=0;updateSimulation(section,step);simulationTimer=setInterval(()=>{step++;if(step>=simulation.length){clearInterval(simulationTimer);simButton.textContent='RESTART SIMULATION';section.querySelector('[data-sim-step]').textContent='COMPLETE';return;}updateSimulation(section,step);},1450);return;}
  const toggle=event.target.closest('.menu-toggle');
  if(toggle){const header=toggle.closest('.header');const expanded=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!expanded));toggle.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');toggle.innerHTML=icon(expanded?'menu':'close',23);header.classList.toggle('nav-open',!expanded);return;}
  const link=event.target.closest('a[href]');if(!link)return;const url=new URL(link.href,location.href);if(url.origin!==location.origin||link.target||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;if(url.pathname===location.pathname&&url.hash)return;event.preventDefault();history.pushState({},'',url.pathname+url.search+url.hash);render();if(!url.hash)window.scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'});document.querySelector('.header')?.classList.remove('nav-open');
});
document.addEventListener('pointerover',(event)=>{
  if(event.pointerType!=='mouse')return;
  const node=event.target.closest('[data-eco-node]');
  if(node)selectEcoNode(node.closest('[data-ecosystem]'),Number(node.dataset.ecoNode));
});
window.addEventListener('popstate',render);

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
