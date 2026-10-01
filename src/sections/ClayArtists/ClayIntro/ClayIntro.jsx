import "./ClayIntro.css";

const CLAY_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789576984/Blow%20Up/web_IMG_8875a_frzowi.jpg";

export default function ClayIntro() {
  return (
    <section className="clay-intro">
      <div className="clay-intro__container">
        {/* =====================================
            MAIN COMPOSITION
        ====================================== */}

        <div className="clay-intro__composition">
          {/* =====================================
              TEXT
          ====================================== */}

          <div className="clay-intro__text">
            <span className="clay-intro__eyebrow">Blow Up Company</span>

            <h2 className="clay-intro__title">
              <span>The</span>

              <span className="clay-intro__title-clay">Clay</span>

              <span>Artists</span>
            </h2>

            <div className="clay-intro__description-wrapper">
              <span
                className="clay-intro__description-line"
                aria-hidden="true"
              />

              <p className="clay-intro__description">
                A circus and breakdance performance inspired by Andean culture.
              </p>
            </div>
          </div>

          {/* =====================================
              IMAGE
          ====================================== */}

          <div className="clay-intro__visual">
            <div className="clay-intro__halo" aria-hidden="true" />

            <figure className="clay-intro__figure">
              <div className="clay-intro__image-frame">
                <img
                  src={CLAY_IMAGE}
                  alt="The Clay Artists performance"
                  className="clay-intro__image"
                  loading="lazy"
                />
              </div>

              <figcaption className="clay-intro__caption">
                <span>Blow Up Company</span>

                <span>Street performance</span>
              </figcaption>
            </figure>

            {/* =====================================
                IMAGE BOTANICAL DETAILS
            ====================================== */}

            <span className="clay-leaf clay-leaf--1" aria-hidden="true" />

            <span className="clay-leaf clay-leaf--2" aria-hidden="true" />

            <span className="clay-leaf clay-leaf--3" aria-hidden="true" />

            <span
              className="clay-image-petal clay-image-petal--1"
              aria-hidden="true"
            />

            <span
              className="clay-image-petal clay-image-petal--2"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* =====================================
            TRANSITION
        ====================================== */}

        <div className="clay-intro__transition">
          <div className="clay-intro__scroll-circle" aria-hidden="true">
            ↓
          </div>

          <span>
            Scroll
            <br />
            to discover
          </span>

          <span className="clay-intro__transition-line" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
