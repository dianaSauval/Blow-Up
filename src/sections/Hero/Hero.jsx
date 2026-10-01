import "./Hero.css";

const HERO_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789576992/Blow%20Up/IMG_4615_myrfxl.jpg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* =====================================
          BACKGROUND IMAGE
          ===================================== */}

      <div className="hero__media">
        <img
          className="hero__image"
          src={HERO_IMAGE}
          alt="Blow Up Company performing a circus show in front of an audience"
          fetchPriority="high"
        />

        <div className="hero__overlay" />
      </div>

      {/* =====================================
          CONTENT
          ===================================== */}

      <div className="hero__content">
        <div className="hero__headline">
          {/* EYEBROW */}

          <p className="hero__eyebrow">Circus · Dance · Street Performance</p>

          {/* TITLE */}

          <h1 className="hero__title">
            <span className="hero__title-line hero__title-line--blow">
              Blow Up
            </span>

            <span className="hero__title-line hero__title-line--company">
              Company
            </span>
          </h1>

          {/* GRAPHIC ACCENT */}
        </div>

        {/* =====================================
            CTA
            ===================================== */}

        <a className="hero__discover" href="#productions">
          <span className="hero__discover-text">Discover our work</span>

          <span className="hero__discover-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
