import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">

      {/*HERO */}

      <section
        className="home-hero"
        style={{
          backgroundImage: "url('/image.png')",
        }}
      >
        {/* Image overlay */}
        <div className="home-hero-overlay"></div>

        {/* Main hero content */}
        <div className="home-hero-content">

          <p className="home-eyebrow">
            GLOBAL PROJECT EXECUTION
          </p>

          <h1>
            A turnkey global partner for executing complex international projects.
          </h1>

          <p className="home-hero-subheading">
            We source specialised tools and materials, consolidate and move them to site, 
            staff your project with a compliant local and foreign workforce, and keep every 
            piece of regulatory paperwork in order — so your team can stay focused on delivering the project itself.
          </p>

          <div className="home-hero-actions">

            <Link
              to="/services"
              className="home-btn-primary"
            >
              See what we handle →
            </Link>

            <Link
              to="/contact"
              className="home-btn-secondary"
            >
              Talk to us →
            </Link>

          </div>

        </div>


        {/*BOTTOM SERVICE BAR */}

        <div className="hero-service-bar">

          <Link
            to="/services"
            className="hero-service-item"
          >
            <div className="hero-service-icon">
              <span>◈</span>
            </div>

            <div>
              <strong>
                Tools &amp; Materials
              </strong>

              <small>
                Sourcing
              </small>
            </div>
          </Link>


          <Link
            to="/services"
            className="hero-service-item"
          >
            <div className="hero-service-icon">
              <span>▣</span>
            </div>

            <div>
              <strong>
                Consolidation
              </strong>

              <small>
                &amp; Warehousing
              </small>
            </div>
          </Link>


          <Link
            to="/services"
            className="hero-service-item"
          >
            <div className="hero-service-icon">
              <span>▱</span>
            </div>

            <div>
              <strong>
                Haulage
              </strong>

              <small>
                &amp; Logistics
              </small>
            </div>
          </Link>


          <Link
            to="/services"
            className="hero-service-item"
          >
            <div className="hero-service-icon">
              <span>♙</span>
            </div>

            <div>
              <strong>
                Labor Sourcing
              </strong>

              <small>
                &amp; Payroll Management
              </small>
            </div>
          </Link>


          <Link
            to="/services"
            className="hero-service-item"
          >
            <div className="hero-service-icon">
              <span>◇</span>
            </div>

            <div>
              <strong>
                Regulatory
              </strong>

              <small>
                Compliance
              </small>
            </div>
          </Link>

        </div>

      </section>


   


      {/*WHERE WE COME IN */}

      <section className="home-services">

        <div className="home-section-heading">

          <p className="home-eyebrow">
            WHAT WE DO
          </p>

          <h2>
            Where we come in
          </h2>

        </div>


        <div className="home-services-grid">

          <Link
            to="/services"
            className="home-service-card"
          >
            <span className="home-service-number">
              01
            </span>

            <h3>
              Sourcing
            </h3>

            <p>
              Tools, equipment and materials matched to your spec, at a fair
              market price.
            </p>

            <span className="home-service-arrow">
              →
            </span>
          </Link>


          <Link
            to="/services"
            className="home-service-card"
          >
            <span className="home-service-number">
              02
            </span>

            <h3>
              Consolidation &amp; Haulage
            </h3>

            <p>
              One warehouse, many vendors — goods moved to site as a single
              shipment.
            </p>

            <span className="home-service-arrow">
              →
            </span>
          </Link>


          <Link
            to="/services"
            className="home-service-card"
          >
            <span className="home-service-number">
              03
            </span>

            <h3>
              Workforce
            </h3>

            <p>
              Recruitment, contracts, payroll and insurance for local and
              foreign staff.
            </p>

            <span className="home-service-arrow">
              →
            </span>
          </Link>


          <Link
            to="/services"
            className="home-service-card"
          >
            <span className="home-service-number">
              04
            </span>

            <h3>
              Compliance
            </h3>

            <p>
              Labor, tax, safety and environmental law, handled before it
              becomes a problem.
            </p>

            <span className="home-service-arrow">
              →
            </span>
          </Link>

        </div>

      </section>


      {/* WHY US */}

      <section className="why-us">

        <div className="why-us-inner">

          <div className="why-us-heading">

            <p className="home-eyebrow">
              WHY SPADES ATLAS
            </p>

            <h2>
              Why teams work with us
            </h2>

          </div>


          <div className="why-us-list">

            <div className="why-us-item">
              <span>01</span>
              <h3>
                One partner, not five vendors
              </h3>
            </div>

            <div className="why-us-item">
              <span>02</span>
              <h3>
                Built for cross-border compliance
              </h3>
            </div>

          

          </div>

        </div>

      </section>


      {/* WHO IT'S FOR */}

      <section className="who-its-for">

        <div className="who-its-for-inner">

          <p className="home-eyebrow">
            WHO WE WORK WITH
          </p>

          <h2>
            Built for projects that cross borders.
          </h2>

          <p>
            International contractors, government and defense programs, NGOs,
            and infrastructure firms running projects outside their home
            market — if your project needs a compliant workforce and reliable
            logistics on the ground, that's us.
          </p>

        </div>

      </section>


      {/* CLOSING CTA */}

      <section className="home-closing-cta">

        <div className="home-closing-cta-inner">

          <h2>
            Have a project that needs to move fast?
          </h2>

          <p>
            Tell us what you're working on, and we'll tell you exactly how we
            can help.
          </p>

          <Link
            to="/contact"
            className="home-closing-button"
          >
            Get in touch →
          </Link>

        </div>

      </section>

    </div>
  );
}