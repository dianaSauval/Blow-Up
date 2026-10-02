import { useEffect, useRef } from "react";

import "./ShowsIntro.css";

const SHOW_IMAGE_1 =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789687479/Blow%20Up/6L2A9423_moiv55.jpg";

const SHOW_IMAGE_2 =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789687479/Blow%20Up/6L2A9454_hjhzif.jpg";

const SHOW_IMAGE_3 =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789687479/Blow%20Up/6L2A9083_aszmef.jpg";

/* EVENT IMAGES */

const EVENT_IMAGE_MUSIC =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789823014/Blow%20Up/6L2A0115_1_cxxgcv.jpg";

const EVENT_IMAGE_SPECIAL =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789823801/Blow%20Up/DSC03526_2_xqm0w0.webp";

const EVENT_IMAGE_CORPORATE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789823014/Blow%20Up/IMG_1696_v49qkm.jpg";

export default function ShowsIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const sticky = section.querySelector(".shows-intro__sticky");

    const mobileMedia = window.matchMedia(
      "(max-width: 1024px) and (pointer: coarse), (max-width: 700px)"
    );

    let ticking = false;
    let lastStage = "";
    let lastMusic = false;
    let lastCorporate = false;
    let lastSpecial = false;

    const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

    const getProgress = () => {
      const rect = section.getBoundingClientRect();

      /*
       * Usamos la altura real del sticky.
       *
       * De esta forma CSS y JS trabajan
       * con la misma altura de viewport.
       */
      const viewportHeight =
        sticky?.offsetHeight || document.documentElement.clientHeight;

      const totalScroll = Math.max(1, section.offsetHeight - viewportHeight);

      const scrolled = clamp(-rect.top, 0, totalScroll);

      return scrolled / totalScroll;
    };

    const updateDesktop = (progress) => {
      /*
       * DESKTOP / NOTEBOOK
       *
       * Conservamos la animación continua
       * que ya funciona bien.
       */

      section.style.setProperty("--shows-progress", progress.toFixed(5));

      /*
       * Limpiamos estados mobile.
       */

      section.removeAttribute("data-mobile-stage");

      section.classList.remove(
        "mobile-show-music",
        "mobile-show-corporate",
        "mobile-show-special"
      );

      lastStage = "";
      lastMusic = false;
      lastCorporate = false;
      lastSpecial = false;
    };

    const updateMobile = (progress) => {
      /*
       * MOBILE
       *
       * El scroll solamente selecciona estados.
       * No controla transforms pixel por pixel.
       *
       * Además usamos histéresis para evitar
       * cambios de escena cerca de los límites.
       */

      let stage = lastStage || "intro";

      /* =====================================
     INTRO ↔ STATEMENT
     ===================================== */

      if (stage === "intro" && progress >= 0.19) {
        stage = "statement";
      }

      if (stage === "statement" && progress <= 0.16) {
        stage = "intro";
      }

      /* =====================================
     STATEMENT ↔ EVENTS
     ===================================== */

      if (stage === "statement" && progress >= 0.49) {
        stage = "events";
      }

      if (stage === "events" && progress <= 0.45) {
        stage = "statement";
      }

      /* =====================================
     EVENTS ↔ CTA
     ===================================== */

      if (stage === "events" && progress >= 0.89) {
        stage = "cta";
      }

      if (stage === "cta" && progress <= 0.85) {
        stage = "events";
      }

      /* =====================================
     UPDATE STAGE
     ===================================== */

      if (stage !== lastStage) {
        section.dataset.mobileStage = stage;

        lastStage = stage;
      }

      /*
       * Eventos progresivos.
       *
       * También dejamos pequeñas zonas
       * diferentes para entrada/salida.
       */

      let showMusic = lastMusic;
      let showCorporate = lastCorporate;
      let showSpecial = lastSpecial;

      if (stage === "events") {
        if (!showMusic && progress >= 0.49) {
          showMusic = true;
        }

        if (!showCorporate && progress >= 0.56) {
          showCorporate = true;
        }

        if (!showSpecial && progress >= 0.64) {
          showSpecial = true;
        }

        if (showSpecial && progress <= 0.61) {
          showSpecial = false;
        }

        if (showCorporate && progress <= 0.53) {
          showCorporate = false;
        }

        if (showMusic && progress <= 0.46) {
          showMusic = false;
        }
      } else {
        showMusic = false;
        showCorporate = false;
        showSpecial = false;
      }

      if (showMusic !== lastMusic) {
        section.classList.toggle("mobile-show-music", showMusic);

        lastMusic = showMusic;
      }

      if (showCorporate !== lastCorporate) {
        section.classList.toggle("mobile-show-corporate", showCorporate);

        lastCorporate = showCorporate;
      }

      if (showSpecial !== lastSpecial) {
        section.classList.toggle("mobile-show-special", showSpecial);

        lastSpecial = showSpecial;
      }
    };

    const update = () => {
      const progress = getProgress();

      if (mobileMedia.matches) {
        updateMobile(progress);
      } else {
        updateDesktop(progress);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(update);
    };

    const onOrientationChange = () => {
      window.requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, []);

  return (
    <section
      className="shows-intro"
      ref={sectionRef}
      aria-labelledby="shows-intro-title"
    >
      <div className="shows-intro__sticky">
        {/* AMBIENT LIGHTS */}

        <div
          className="shows-intro__ambient shows-intro__ambient--silver"
          aria-hidden="true"
        />

        <div
          className="shows-intro__ambient shows-intro__ambient--gold"
          aria-hidden="true"
        />

        <div className="shows-intro__grain" aria-hidden="true" />

        {/* =========================================
            SCENE 01 — INTRO
            ========================================= */}

        <div className="shows-intro__scene shows-intro__scene--intro">
          <span className="shows-intro__ghost" aria-hidden="true">
            LIVE
          </span>

          <div className="shows-intro__intro-content">
            <div className="shows-intro__meta">
              <span>Blow Up Company</span>

              <i />

              <span>Live entertainment</span>
            </div>

            <div className="shows-intro__heading">
              <span className="shows-intro__eyebrow">Live experiences</span>

              <h2 id="shows-intro-title">
                <span>Shows</span>

                <em>&amp; Animations</em>
              </h2>
            </div>
          </div>

          <div className="shows-intro__gallery">
            <figure className="shows-intro__photo shows-intro__photo--left">
              <img
                src={SHOW_IMAGE_1}
                alt="Blow Up Company live performance"
                loading="eager"
                decoding="async"
              />
            </figure>

            <figure className="shows-intro__photo shows-intro__photo--main">
              <img
                src={SHOW_IMAGE_3}
                alt="Blow Up Company live entertainment"
                loading="eager"
                decoding="async"
              />
            </figure>

            <figure className="shows-intro__photo shows-intro__photo--right">
              <img
                src={SHOW_IMAGE_2}
                alt="Blow Up Company event performance"
                loading="eager"
                decoding="async"
              />
            </figure>
          </div>
        </div>

        {/* =========================================
            CENTRAL LIGHT
            ========================================= */}

        <div className="shows-intro__beam" aria-hidden="true">
          <span />
        </div>

        {/* =========================================
            SCENE 02 — STATEMENT
            ========================================= */}

        <div className="shows-intro__scene shows-intro__scene--statement">
          <div className="shows-intro__statement">
            <span className="shows-intro__statement-small">
              Made for the moment
            </span>

            <p>
              NOT JUST
              <br />
              SOMETHING
              <br />
              TO <em>WATCH.</em>
            </p>

            <p className="shows-intro__statement-second">
              SOMETHING
              <br />
              TO <em>EXPERIENCE.</em>
            </p>
          </div>
        </div>

        {/* =========================================
            SCENE 03 — EVENTS / EDITORIAL COLLAGE
            ========================================= */}

        <div className="shows-intro__scene shows-intro__scene--events">
          <div className="shows-intro__events">
            <span className="shows-intro__events-label">
              Live entertainment for
            </span>

            {/* decorative connecting lines */}

            <div
              className="shows-intro__event-line shows-intro__event-line--one"
              aria-hidden="true"
            />

            <div
              className="shows-intro__event-line shows-intro__event-line--two"
              aria-hidden="true"
            />

            {/* MUSIC */}

            <article className="shows-intro__event-card shows-intro__event-card--music">
              <div className="shows-intro__event-copy">
                <span className="shows-intro__event-number">01</span>

                <strong>
                  Music
                  <br />
                  festivals
                </strong>

                <span className="shows-intro__event-tag">
                  Energy · Night · Live
                </span>
              </div>

              <figure className="shows-intro__event-photo">
                <img
                  src={EVENT_IMAGE_MUSIC}
                  alt="Fire performance at a live event"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </article>

            {/* CORPORATE */}

            <article className="shows-intro__event-card shows-intro__event-card--corporate">
              <figure className="shows-intro__event-photo">
                <img
                  src={EVENT_IMAGE_CORPORATE}
                  alt="Performers in a mirrored live entertainment experience"
                  loading="eager"
                  decoding="async"
                />
              </figure>

              <div className="shows-intro__event-copy">
                <span className="shows-intro__event-number">02</span>

                <strong>
                  Corporate
                  <br />
                  events
                </strong>

                <span className="shows-intro__event-tag">
                  Tailored · Visual · Immersive
                </span>
              </div>
            </article>

            {/* SPECIAL */}

            <article className="shows-intro__event-card shows-intro__event-card--special">
              <div className="shows-intro__event-copy">
                <span className="shows-intro__event-number">03</span>

                <strong>
                  Special
                  <br />
                  events
                </strong>

                <span className="shows-intro__event-tag">
                  Unique · Adaptable · Memorable
                </span>
              </div>

              <figure className="shows-intro__event-photo">
                <img
                  src={EVENT_IMAGE_SPECIAL}
                  alt="Acrobatic performance at an outdoor event"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </article>
          </div>
        </div>

        {/* =========================================
            SCENE 04 — CTA
            ========================================= */}

        <div className="shows-intro__scene shows-intro__scene--cta">
          <div className="shows-intro__cta">
            <span>Blow Up Company</span>

            <h3>
              LET&apos;S CREATE
              <br />
              SOMETHING <em>LIVE.</em>
            </h3>

            <p>
              Live entertainment designed to transform
              <br />
              events into experiences.
            </p>

            <a href="#contact">
              <span>Tell us about your event</span>

              <i>↗</i>
            </a>
          </div>
        </div>

        <div className="shows-intro__counter" aria-hidden="true">
          <span>LIVE</span>

          <i />

          <span>EXPERIENCE</span>
        </div>
      </div>
    </section>
  );
}
