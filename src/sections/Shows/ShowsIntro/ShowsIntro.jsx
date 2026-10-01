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

    let ticking = false;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const totalScroll = section.offsetHeight - viewportHeight;

      const scrolled = Math.min(Math.max(0, -rect.top), totalScroll);

      const progress = totalScroll > 0 ? scrolled / totalScroll : 0;

      section.style.setProperty("--shows-progress", progress.toString());

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
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
                loading="lazy"
              />
            </figure>

            <figure className="shows-intro__photo shows-intro__photo--main">
              <img
                src={SHOW_IMAGE_3}
                alt="Blow Up Company live entertainment"
                loading="lazy"
              />
            </figure>

            <figure className="shows-intro__photo shows-intro__photo--right">
              <img
                src={SHOW_IMAGE_2}
                alt="Blow Up Company event performance"
                loading="lazy"
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
                  loading="lazy"
                />
              </figure>
            </article>

            {/* CORPORATE */}

            <article className="shows-intro__event-card shows-intro__event-card--corporate">
              <figure className="shows-intro__event-photo">
                <img
                  src={EVENT_IMAGE_CORPORATE}
                  alt="Performers in a mirrored live entertainment experience"
                  loading="lazy"
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
                  loading="lazy"
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
