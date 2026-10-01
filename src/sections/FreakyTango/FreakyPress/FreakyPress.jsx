import { useEffect, useRef } from "react";

import "./FreakyPress.css";

const SRF_ARTICLE =
  "https://www.srf.ch/kultur/gesellschaft-religion/kulturnews-in-kurzform-deutschland-schauspieler-michael-mendl-gestorben";

export default function FreakyPress() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.85;

      const distance = rect.height + viewportHeight * 0.1;

      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--press-progress", progress);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, { passive: true });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);

      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      className="freaky-press"
      ref={sectionRef}
      aria-labelledby="freaky-press-title"
    >
      <div className="freaky-press__ghost" aria-hidden="true">
        ZÜRICH
      </div>

      <div className="freaky-press__decor" aria-hidden="true">
        <span className="freaky-press__slash freaky-press__slash--1" />
        <span className="freaky-press__slash freaky-press__slash--2" />
        <span className="freaky-press__glow" />
      </div>

      <div className="freaky-press__container">
        <header className="freaky-press__header">
          <div className="freaky-press__eyebrow">
            <span>Press</span>

            <i />

            <span>Featured</span>
          </div>

          <span className="freaky-press__edition">2026</span>
        </header>

        <div className="freaky-press__layout">
          <div className="freaky-press__location">
            <span className="freaky-press__location-small">Seen in</span>

            <h2 id="freaky-press-title">Zürich</h2>

            <span className="freaky-press__year">2026</span>
          </div>

          <article className="freaky-press__card">
            <div className="freaky-press__card-top">
              <span>SRF Kultur</span>

              <span>Switzerland</span>
            </div>

            <div className="freaky-press__card-content">
              <span className="freaky-press__featured">Featured in</span>

              <h3>
                Zürcher
                <br />
                Theater
                <br />
                <em>Spektakel</em>
              </h3>

              <p>
                Blow Up Company featured in SRF&apos;s coverage of the Zürcher
                Theater Spektakel.
              </p>
            </div>

            <div className="freaky-press__card-bottom">
              <div>
                <span>Festival</span>

                <strong>Zürich</strong>
              </div>

              <a
                href={SRF_ARTICLE}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Read the SRF Kultur article in a new tab"
              >
                <span>Read on SRF</span>

                <i aria-hidden="true">↗</i>
              </a>
            </div>
          </article>
        </div>

        <div className="freaky-press__line" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
