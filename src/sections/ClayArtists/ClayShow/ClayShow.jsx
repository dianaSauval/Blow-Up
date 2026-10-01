import { useEffect, useRef } from "react";
import "./ClayShow.css";

const BREAKDANCE_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789576984/Blow%20Up/IMG_4791_vulth0.jpg";

const MASK_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789639085/Blow%20Up/IMG_0150_wg98wv.jpg";

export default function ClayShow() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      /*
       * Progreso LOCAL.
       * Solo controla la entrada de las imágenes.
       */
      const start = viewportHeight * 0.9;

      const distance = rect.height + viewportHeight * 0.15;

      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--show-progress", progress);
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
    <section className="clay-show" id="clay-show" ref={sectionRef}>
      <div className="clay-show__container">
        <div className="clay-show__layout">
          {/* =================================
              TEXT
          ================================== */}

          <div className="clay-show__content">
            <span className="clay-show__eyebrow">Movement as language</span>

            <h2 className="clay-show__title">
              <span>Breakdance</span>

              <span className="clay-show__meets">meets</span>

              <span>Circus</span>
            </h2>

            <div className="clay-show__copy">
              <span className="clay-show__copy-line" aria-hidden="true" />

              <p>
                Their bodies transform through movement, merging breakdance and
                circus acrobatics in an artistic ceremony inspired by Andean
                culture.
              </p>
            </div>

            <div
              className="clay-show__keywords"
              aria-label="Movement, culture, connection"
            >
              <span>Movement</span>
              <span>Culture</span>
              <span>Connection</span>
            </div>
          </div>

          {/* =================================
              PHOTOS
          ================================== */}

          <div className="clay-show__gallery">
            {/* BREAKDANCE */}

            <figure className="clay-show__main-figure">
              <div className="clay-show__main-image-wrapper">
                <img
                  src={BREAKDANCE_IMAGE}
                  alt="Breakdance performance by The Clay Artists"
                  className="clay-show__main-image"
                  loading="lazy"
                />
              </div>

              <figcaption>Strength in motion</figcaption>
            </figure>

            {/* MASK */}

            <figure className="clay-show__mask-figure">
              <div className="clay-show__mask-image-wrapper">
                <img
                  src={MASK_IMAGE}
                  alt="Mask from The Clay Artists performance"
                  className="clay-show__mask-image"
                  loading="lazy"
                />
              </div>

              <figcaption>Tradition in movement</figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
