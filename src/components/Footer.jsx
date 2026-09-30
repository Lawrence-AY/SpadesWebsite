export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        {/* Company */}
        <div className="footer-column">
          <div className="footer-heading">
            SPADES ATLAS
            <br />
            COMPANY LTD.
          </div>

          <p className="muted">
            Katko Complex G30,
            <br />
            Old Mombasa Road,
            <br />
            P.O. Box 40805-00100
            <br />
            Nairobi, Kenya.
          </p>
        </div>

        {/* Company Details */}
        <div className="footer-column">
          <h4>COMPANY DETAILS</h4>

          <p className="muted">
            SAM.gov Unique ID:
            <br />
            MHT2DEDQAD3S
          </p>

          <p className="muted">
            CAGE / NCAGE Code: SSHP2
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h4>CONTACTS</h4>

          <p className="muted">
            Telephone:
            <br />
            +254790072225
          </p>

          <p className="muted">
            Email:
            <br />
            <p><a href="mailto:info@spadesatlas.com">info@spadesatlas.com</a></p>
          </p>
        </div>

        {/* Logo */}
        <div className="footer-column footer-brand-column">
          <img
            src="/Logo.png"
            alt="Spades Atlas"
            className="footer-logo"
          />
        </div>

      </div>

      <div className="footer-bottom">
        <span>
          &copy; {new Date().getFullYear()} Spades Atlas Company Ltd.
          All rights reserved.
        </span>
      </div>
    </footer>
  );
}