import logo from "../../assets/brand/logo-transparente.png";

import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__inner">
        {/* =========================================
            TOP
        ========================================== */}

        <div className="footer__top">
          <span className="footer__eyebrow">Blow Up Company</span>

          <span className="footer__eyebrow">Live · Create · Experience</span>
        </div>

        {/* =========================================
            LOGO
        ========================================== */}

        <div className="footer__brand">
          <a href="#" className="footer__logo-link" aria-label="Back to top">
            <img src={logo} alt="Blow Up Company" className="footer__logo" />
          </a>
        </div>

        {/* =========================================
            CONTACT LINKS
        ========================================== */}

        <div className="footer__links">
          <a href="mailto:blowup.cms2p@gmail.com" className="footer__link">
            Email
          </a>

          <span className="footer__dot" aria-hidden="true" />

          <a
            href="https://www.instagram.com/blowup.cia/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            Instagram
          </a>
        </div>

        {/* =========================================
            BOTTOM
        ========================================== */}

        <div className="footer__bottom">
          <span className="footer__copyright">
            © {currentYear} Blow Up Company
          </span>

          <a
            href="https://dianasauvaldigital.com.ar/"
            target="_blank"
            rel="noreferrer"
            className="footer__credit"
          >
            Developed by Diana Sauval
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* =========================================
          COLOR SIGNATURE
      ========================================== */}

      <div className="footer__colors" aria-hidden="true">
        <span className="footer__color footer__color--red" />
        <span className="footer__color footer__color--orange" />
        <span className="footer__color footer__color--yellow" />
        <span className="footer__color footer__color--green" />
        <span className="footer__color footer__color--blue" />
        <span className="footer__color footer__color--purple" />
      </div>
    </footer>
  );
}
