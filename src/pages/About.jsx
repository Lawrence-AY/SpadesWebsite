const principles = [
  {
    title: 'Client Orientation',
    text: 'Our success depends on consistently meeting client satisfaction through innovation, responsiveness, and competitive pricing.',
  },
  {
    title: 'Employees & Consultants',
    text: 'We strive to hire and retain the best talent and provide a diverse, open, and safe work environment characterized by open communication, trust, and fairness.',
  },
  {
    title: 'Inclusivity & Diversity',
    text: 'We allow innovation and recognize the diversity of employee skills, beliefs, and values by ensuring mutual respect.',
  },
  {
    title: 'Welfare',
    text: 'We promote an ecosystem that balances employee welfare with company objectives.',
  },
  {
    title: 'Environment',
    text: 'We commit to being responsible corporate citizens, obeying all applicable laws and regulations, and respecting local and national cultures while maintaining environmentally responsible operations.',
  },
];

export default function About() {
  return (
    <section className="about-page">

      {/*  CHAPTER 1: THE COMPANY  */}
      <header className="chapter-heading" id="about">
        <span className="chapter-eyebrow">Who we are</span>
        <h1 className="chapter-title">The Company</h1>
      </header>

      <section className="about-intro">
        <div className="about-intro-inner">
          <h2>
            A trusted partner for complex,
            <br />
            cross-border projects.
          </h2>
          <p>
            Spades Atlas is a trusted partner in the execution of complex,
            cross-border projects. We help organizations manage the parts of
            an international build that sit outside their core expertise —
            sourcing tools and materials, moving goods to site, building and
            paying a compliant workforce, and staying ahead of local
            regulation — so our clients can stay focused on delivering the
            project itself.
          </p>
        </div>
      </section>

      <section className="about-section about-story">
        <div className="about-section-inner">
          <div className="about-section-heading">
            <span>01</span>
            <h3>Our Story</h3>
          </div>
          <div className="about-section-content">
            <p>
              Spades Atlas was founded in [year] to close a gap we saw
              repeatedly on international projects: teams with strong
              technical expertise losing time and budget to logistics,
              procurement, and compliance issues that had nothing to do with
              the work they were actually there to do.
            </p>
            <p>
              Based in Nairobi, we built our operations around a strategically
              located warehouse and a network of vetted vendors and regulatory
              contacts, allowing us to move quickly on sourcing, haulage, and
              workforce needs across [region/countries you serve].
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-what-we-do">
        <div className="about-section-inner">
          <div className="about-section-heading">
            <span>02</span>
            <h3>What We Do</h3>
          </div>
          <div className="about-section-content">
            <p>
              Our work spans five core areas: specialised tools and material
              sourcing, consolidation, haulage, labor sourcing and payroll
              management, and regulatory compliance.
            </p>
            <p>
              Rather than treating these as separate vendor relationships, we
              manage them as one connected service — so a client dealing with
              Spades Atlas has a single point of contact across procurement,
              logistics, HR, and compliance.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-inner">
          <div className="about-section-heading">
            <span>03</span>
            <h3>Who We Work With</h3>
          </div>
          <div className="about-section-content">
            <p>
              We partner with organizations running projects that cross
              borders and regulatory regimes — international contractors,
              government and defense-related programs, NGOs, and infrastructure
              and construction firms operating in unfamiliar markets.
            </p>
            <p>
              If your project depends on a compliant local workforce, reliable
              material sourcing, or logistics support you can't easily manage
              remotely, this is where we help.
            </p>
          </div>
        </div>
      </section>

      <section className="about-difference">
        <div className="about-difference-inner">
          <div className="about-section-heading light">
            <span>04</span>
            <h3>What Sets Us Apart</h3>
          </div>
          <div className="difference-grid">
            <div className="difference-item">
              <span className="difference-number">01</span>
              <h4>One partner, not five vendors.</h4>
              <p>
                Sourcing, consolidation, haulage, workforce, and compliance
                handled under a single relationship, not a patchwork of
                subcontractors.
              </p>
            </div>
            <div className="difference-item">
              <span className="difference-number">02</span>
              <h4>A warehouse built for speed.</h4>
              <p>
                Our Grade A facility at Katko Complex, G30, sits near the SGR
                Nairobi Terminus and Jomo Kenyatta International Airport,
                cutting the time between a vendor shipment landing and it
                reaching your site.
              </p>
            </div>
            <div className="difference-item">
              <span className="difference-number">03</span>
              <h4>Regulatory fluency.</h4>
              <p>
                We know the local labor, tax, safety, and environmental
                requirements well enough to translate them into policy your
                team can actually follow — not just a compliance checklist.
              </p>
            </div>
            <div className="difference-item">
              <span className="difference-number">04</span>
              <h4>Experience with cross-border workforces.</h4>
              <p>
                From DBA and WIBA insurance to foreign national work permits,
                we've built the systems this kind of staffing actually
                requires.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team-inner">
          <div className="about-section-heading">
            <span>05</span>
            <h3>Our Team</h3>
          </div>
          <div className="about-team-content">
            <p>
              Our team brings [X years] of combined experience across
              logistics, regulatory compliance, and workforce management in
              [region].
            </p>
          </div>
        </div>
      </section>

      {/*CHAPTER 2: OUR MISSION  */}
      <header className="chapter-heading chapter-heading-alt" id="mission">
        <span className="chapter-eyebrow">Our purpose</span>
        <h1 className="chapter-title">Our Mission</h1>
      </header>

      <section className="about-mission">
        <div className="about-mission-inner">
          <h2>
            Keeping cross-border projects
            <br />
            compliant, efficient, and on schedule.
          </h2>
          <p>
            To provide comprehensive, end-to-end solutions that keep
            cross-border projects compliant, efficient, and on schedule —
            giving our clients the confidence to focus on their core
            objectives while we manage the sourcing, logistics, and workforce
            complexities on the ground.
          </p>
        </div>
      </section>

      {/* CHAPTER 3: ETHICS & INTEGRITY */}
      <header className="chapter-heading" id="ethics">
        <span className="chapter-eyebrow">How we work</span>
        <h1 className="chapter-title">Ethics &amp; Integrity</h1>
      </header>

      <section className="ethics-page">
        <div className="ethics-intro">
          <p>
            Our relationships with clients, employees, and the environment
            are guided by the following principles.
          </p>
        </div>

        <div className="principle-list">
          {principles.map((principle, index) => (
            <article className="principle-row" key={principle.title}>
              <div className="principle-number">0{index + 1}</div>
              <div className="principle-content">
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="callout">
          <p className="eyebrow">Integrity in Action</p>
          <p className="callout-text">
            Spades Atlas is committed to complying with all relevant laws and
            regulations. Our ethics policy goes beyond mere compliance — we hold
            ourselves to the highest standard of integrity in every interaction.
            We value fairness and honesty regardless of local custom, and hold
            ourselves accountable to achieving results without sacrificing our
            ethical standards.
          </p>
        </div>
      </section>

      {/*  CTA  */}
      <section className="about-cta">
        <div className="about-cta-inner">
          <h2>Ready to see how we can support your project?</h2>
          <div className="about-cta-buttons">
            <a href="/services" className="about-cta-primary">
              Explore our services →
            </a>
            <a href="/contact" className="about-cta-secondary">
              Get in touch →
            </a>
          </div>
        </div>
      </section>

    </section>
  );
}
