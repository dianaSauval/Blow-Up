import { useEffect, useRef } from "react";
import "./ClayConcept.css";

const FIRE_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789641231/Blow%20Up/IMG_0152_pcia8g.jpg";

const AUDIENCE_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789641233/Blow%20Up/Miica_Lublin-20_mwpg3y.jpg";

const TOGETHER_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789641240/Blow%20Up/IMG_4785_meemmb.jpg";

export default function ClayConcept() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.9;

      const distance = rect.height + viewportHeight * 0.1;

      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--concept-progress", progress);
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
    <section className="clay-concept" ref={sectionRef}>
      <div className="clay-concept__container">
        {/* =================================
            MEANING
        ================================== */}

        <div className="clay-concept__top">
          <div className="clay-concept__copy">
            <span className="clay-concept__eyebrow">Inspired by the Andes</span>

            <h2 className="clay-concept__title">
              <span>Rooted in</span>

              <span className="clay-concept__title-accent">Andean</span>

              <span>culture.</span>
            </h2>

            <div className="clay-concept__text">
              <p>
                The performers become clay beings, dancing in gratitude for the
                elements that sustain life.
              </p>

              <p>
                Inspired by Andean culture, the performance becomes a tender
                reminder of our connection with nature.
              </p>
            </div>
          </div>

          {/* FIRE IMAGE */}

          <figure className="clay-concept__fire-figure">
            <div className="clay-concept__fire-frame">
              <img
                src={FIRE_IMAGE}
                alt="The Clay Artists performing with fire"
                className="clay-concept__fire-image"
                loading="lazy"
              />
            </div>

            <figcaption>Ritual · movement · nature</figcaption>
          </figure>
        </div>

        {/* =================================
            EXPERIENCE
        ================================== */}

        <div className="clay-concept__bottom">
          {/* TOGETHER */}

          <figure className="clay-concept__together-figure">
            <div className="clay-concept__together-frame">
              <img
                src={TOGETHER_IMAGE}
                alt="The Clay Artists performing together"
                className="clay-concept__together-image"
                loading="lazy"
              />
            </div>
          </figure>

          {/* EXPERIENCE COPY */}

          <div className="clay-concept__experience">
            <span className="clay-concept__experience-small">
              The experience
            </span>

            <p>
              A surprising, interactive and moving performance for children and
              adults — an invitation to reconnect with nature through movement
              and play.
            </p>

            <div className="clay-concept__traits">
              <span>Surprising</span>
              <i />
              <span>Interactive</span>
              <i />
              <span>Moving</span>
            </div>

            <span className="clay-concept__audience-label">
              For children &amp; adults
            </span>
          </div>

          {/* AUDIENCE */}

          <figure className="clay-concept__audience-figure">
            <div className="clay-concept__audience-frame">
              <img
                src={AUDIENCE_IMAGE}
                alt="The Clay Artists interacting with the audience"
                className="clay-concept__audience-image"
                loading="lazy"
              />
            </div>

            <figcaption>An interactive experience</figcaption>
          </figure>
        </div>

        {/* =================================
            CREATORS
        ================================== */}

        <div className="clay-concept__creators">
          <span>Created &amp; performed by</span>

          <p>
            Paula Micaela Moreno
            <i> &amp; </i>
            Mauro García
          </p>

          <small>Argentina</small>
        </div>
      </div>
    </section>
  );
}
