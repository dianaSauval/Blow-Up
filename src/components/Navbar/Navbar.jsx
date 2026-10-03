import { useEffect, useState } from "react";
import logo from "../../assets/brand/logo-transparente.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productionsOpen, setProductionsOpen] = useState(false);

  /*
   * light = fondos claros
   * dark = fondos oscuros
   */
  const [navTheme, setNavTheme] = useState("light");

  /* =========================================
     SCROLL STATE
  ========================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     DETECT CURRENT SECTION THEME
  ========================================== */

  useEffect(() => {
    const updateNavbarTheme = () => {
      const themedSections = document.querySelectorAll("[data-navbar-theme]");

      if (!themedSections.length) {
        setNavTheme("light");
        return;
      }

      /*
       * Miramos qué sección está pasando
       * por debajo del navbar.
       *
       * Desktop:
       * navbar ~96 / 76px
       *
       * Mobile:
       * navbar ~84 / 68px
       */
      const triggerY = window.innerWidth <= 850 ? 34 : 42;

      let activeTheme = "light";

      themedSections.forEach((section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerY && rect.bottom > triggerY) {
          activeTheme = section.getAttribute("data-navbar-theme") || "light";
        }
      });

      setNavTheme(activeTheme);
    };

    updateNavbarTheme();

    window.addEventListener("scroll", updateNavbarTheme, {
      passive: true,
    });

    window.addEventListener("resize", updateNavbarTheme);

    return () => {
      window.removeEventListener("scroll", updateNavbarTheme);

      window.removeEventListener("resize", updateNavbarTheme);
    };
  }, []);

  /* =========================================
     LOCK BODY WHEN MOBILE MENU IS OPEN
  ========================================== */

  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuOpen]);

  /* =========================================
     CLOSE MENU
  ========================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setProductionsOpen(false);
  };

  return (
    <header
      className={[
        "navbar",
        `navbar--${navTheme}`,
        scrolled ? "navbar--scrolled" : "",
        menuOpen ? "navbar--menu-open" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="navbar__inner">
        {/* =====================================
            LOGO
        ====================================== */}

        <a
          href="#home"
          className="navbar__brand"
          aria-label="Blow Up Company - Home"
          onClick={closeMenu}
        >
          <img src={logo} alt="Blow Up Company" className="navbar__logo" />
        </a>

        {/* =====================================
            NAVIGATION
        ====================================== */}

        <nav
          className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          {/* ===================================
              MOBILE — TOP ART
          ==================================== */}

          <div
            className="navbar__mobile-art navbar__mobile-art--top"
            aria-hidden="true"
          >
            <span className="art-square art-square--yellow" />
            <span className="art-square art-square--red" />
            <span className="art-square art-square--green" />
            <span className="art-circle" />
          </div>

          {/* ===================================
              PRODUCTIONS
          ==================================== */}

          <div
            className={`navbar__item navbar__item--productions ${
              productionsOpen ? "navbar__item--open" : ""
            }`}
          >
            <div className="navbar__production-row">
              <a
                href="#productions"
                className="navbar__link navbar__link--productions"
                onClick={closeMenu}
              >
                <span className="navbar__link-text">Productions</span>

                <span
                  className="navbar__link-mark navbar__link-mark--yellow"
                  aria-hidden="true"
                />
              </a>

              <button
                className="navbar__production-toggle"
                type="button"
                aria-label="Show productions"
                aria-expanded={productionsOpen}
                onClick={() => setProductionsOpen((prev) => !prev)}
              >
                <span />
                <span />
              </button>
            </div>

            {/* =================================
                PRODUCTIONS MEGA MENU
            ================================== */}

            <div className="navbar__productions-menu">
              <div className="navbar__productions-inner">
                <div className="navbar__productions-heading">
                  <span>Original creations</span>

                  <strong>
                    Our
                    <br />
                    Worlds
                  </strong>
                </div>

                <div className="navbar__production-links">
                  {/* CLAY */}

                  <a
                    href="#clay-artists"
                    className="navbar__production-link navbar__production-link--clay"
                    onClick={closeMenu}
                  >
                    <span className="navbar__production-accent" />

                    <span className="navbar__production-copy">
                      <strong>The Clay Artists</strong>

                      <small>Breakdance meets Circus</small>
                    </span>

                    <span
                      className="navbar__production-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>

                  {/* FREAKY */}

                  <a
                    href="#freaky-tango"
                    className="navbar__production-link navbar__production-link--freaky"
                    onClick={closeMenu}
                  >
                    <span className="navbar__production-accent" />

                    <span className="navbar__production-copy">
                      <strong>Freaky Tango</strong>

                      <small>Tango like you've never seen it</small>
                    </span>

                    <span
                      className="navbar__production-arrow"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </a>
                </div>

                {/* =================================
                    BLOW UP GEOMETRY
                ================================== */}

                <div className="navbar__productions-art" aria-hidden="true">
                  <span className="productions-art__square productions-art__square--blue" />

                  <span className="productions-art__square productions-art__square--green" />

                  <span className="productions-art__circle" />

                  <span className="productions-art__square productions-art__square--red" />
                </div>
              </div>
            </div>
          </div>

          {/* ===================================
              SHOWS
          ==================================== */}

          <div className="navbar__item">
            <a
              href="#shows"
              className="navbar__link navbar__link--shows"
              onClick={closeMenu}
            >
              <span className="navbar__link-text">Shows & Animations</span>

              <span
                className="navbar__link-mark navbar__link-mark--green"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* ===================================
              ABOUT
          ==================================== */}

          <div className="navbar__item">
            <a
              href="#about"
              className="navbar__link navbar__link--about"
              onClick={closeMenu}
            >
              <span className="navbar__link-text">About</span>

              <span
                className="navbar__link-mark navbar__link-mark--blue"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* ===================================
              CONTACT
          ==================================== */}

          <div className="navbar__item">
            <a
              href="#contact"
              className="navbar__link navbar__link--contact"
              onClick={closeMenu}
            >
              <span className="navbar__link-text">Contact</span>

              <span
                className="navbar__link-mark navbar__link-mark--circle"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* ===================================
              MOBILE — BOTTOM
          ==================================== */}

          <div className="navbar__mobile-bottom">
            <div
              className="navbar__mobile-art navbar__mobile-art--bottom"
              aria-hidden="true"
            >
              <span className="art-square art-square--purple" />
              <span className="art-square art-square--blue" />
              <span className="art-square art-square--orange" />
              <span className="art-circle" />
            </div>

            <div className="navbar__mobile-meta">
              <span>Blow Up Company</span>
              <span>Performing Arts</span>
            </div>
          </div>
        </nav>

        {/* =====================================
            HAMBURGER
        ====================================== */}

        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
