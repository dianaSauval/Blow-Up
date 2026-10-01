import { useEffect, useRef } from "react";

import "./FreakyIntro.css";

const FREAKY_IMAGE_1 =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/f_auto,q_auto/v1789642700/Blow%20Up/dji_export_20260917_photo_0001_yagixc.heic";

const FREAKY_IMAGE_2 =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/f_auto,q_auto/v1789642701/Blow%20Up/dji_export_20260917_photo_0003_l2elg5.heic";

export default function FreakyIntro() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.95;

      const distance = rect.height + viewportHeight * 0.1;

      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--freaky-progress", progress);
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, { passive: true });

    window.addEventListener("resize", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);

      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return (
    <section className="freaky-intro" ref={sectionRef}>
      {/* =================================
          TRANSITION FROM CLAY

          <div className="freaky-intro__transition" aria-hidden="true" />
      ================================== */}

      {/* =================================
          BACKGROUND DECORATION
      ================================== */}

      <div className="freaky-intro__decor" aria-hidden="true">
        <span className="freaky-intro__glow freaky-intro__glow--1" />
        <span className="freaky-intro__glow freaky-intro__glow--2" />

        <span className="freaky-intro__slash freaky-intro__slash--1" />
        <span className="freaky-intro__slash freaky-intro__slash--2" />
      </div>

      <div className="freaky-intro__container">
        {/* =================================
            META
        ================================== */}

        <div className="freaky-intro__meta">
          <span>Blow Up Company</span>

          <span>Production 02</span>
        </div>

        {/* =================================
            TITLE
        ================================== */}

        <header className="freaky-intro__header">
          <span className="freaky-intro__eyebrow">A new production</span>

          <h2 className="freaky-intro__title">
            <span className="freaky-intro__freaky">Freaky</span>

            <span className="freaky-intro__tango">Tango</span>
          </h2>
        </header>

        {/* =================================
            STAGE
        ================================== */}

        <div className="freaky-intro__stage">
          {/* MAIN PHOTO */}

          <figure className="freaky-intro__photo freaky-intro__photo--main">
            <div className="freaky-intro__image-frame">
              <img
                src={FREAKY_IMAGE_1}
                alt="Freaky Tango performance"
                loading="lazy"
              />
            </div>
          </figure>

          {/* COPY */}

          <div className="freaky-intro__copy">
            <span className="freaky-intro__copy-number">02</span>

            <p className="freaky-intro__lead">
              Tango
              <br />
              <em>outside</em>
              <br />
              the lines.
            </p>

            <p className="freaky-intro__description">
              Four longtime friends. Circus, dance and the pulse of the Río de
              la Plata.
            </p>
          </div>

          {/* SECONDARY PHOTO */}

          <figure className="freaky-intro__photo freaky-intro__photo--secondary">
            <div className="freaky-intro__image-frame">
              <img
                src={FREAKY_IMAGE_2}
                alt="Freaky Tango artists"
                loading="lazy"
              />
            </div>
          </figure>
        </div>

        {/* =================================
            GROWING LINE
        ================================== */}

        <div className="freaky-intro__line" aria-hidden="true">
          <span />
        </div>

        {/* =================================
    SYNOPSIS
================================= */}

        <div className="freaky-intro__synopsis">
          <div className="freaky-intro__synopsis-label">
            <span>About the show</span>
            <span>Freaky Tango</span>
          </div>

          <div className="freaky-intro__synopsis-content">
            <p className="freaky-intro__synopsis-main">
              Four longtime friends from the worlds of circus and dance come
              together to the rhythm of the Río de la Plata.
            </p>

            <p className="freaky-intro__synopsis-secondary">
              Technique turns into emotion, and every movement seems to be on
              the verge of becoming the great finale. A raw and instinctive
              dance where the artists invite the audience to become accomplices
              in a milonga unlike any other.
            </p>
          </div>
        </div>

        {/* =================================
            FOOTER
        ================================== */}
      </div>

      {/* =================================
          GHOST WORD
      ================================== */}

      <span className="freaky-intro__ghost-word" aria-hidden="true">
        TANGO
      </span>
    </section>
  );
}
