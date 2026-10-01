import "./Productions.css";

const productions = [
  {
    id: "clay-artists",
    title: "The Clay Artists",
    subtitle: "Breakdance meets Circus",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1789983071/IMG_4639_1_kwd9b2.jpg",
    target: "#clay-artists",
    theme: "clay",
  },
  {
    id: "freaky-tango",
    title: "Freaky Tango",
    subtitle: "Tango like you've never seen it before",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1790238556/IMG_5334_cfqoxd.jpg",
    target: "#freaky-tango",
    theme: "freaky",
  },
];

export default function Productions() {
  return (
    <section
      data-navbar-theme="light"
      className="productions"
      id="productions"
      aria-labelledby="productions-title"
    >
      {/* =====================================
          GRAPHIC LANGUAGE
          ===================================== */}

      <div className="productions__mosaic" aria-hidden="true">
        <span className="productions__block productions__block--yellow" />
        <span className="productions__block productions__block--red" />
        <span className="productions__circle" />
        <span className="productions__block productions__block--green" />
      </div>

      <div className="productions__inner">
        {/* =====================================
            HEADER
            ===================================== */}

        <header className="productions__header">
          <div className="productions__heading">
            <span className="blow-eyebrow">Original creations</span>

            <h2
              className="blow-title productions__title"
              id="productions-title"
            >
              Our
              <br />
              Productions
            </h2>
          </div>

          <div className="productions__intro">
            <span className="productions__intro-small">Two creations.</span>

            <span className="productions__intro-editorial">
              Two completely
              <br />
              different worlds.
            </span>
          </div>
        </header>

        {/* =====================================
            PRODUCTIONS
            ===================================== */}

        <div className="productions__grid">
          {productions.map((production) => (
            <a
              className={`production-card production-card--${production.theme}`}
              key={production.id}
              href={production.target}
              aria-label={`Explore ${production.title}`}
            >
              <div className="production-card__visual">
                <img src={production.image} alt="" loading="lazy" />

                <div className="production-card__overlay" />

                <span className="production-card__corner" aria-hidden="true" />
              </div>

              <div className="production-card__info">
                <div className="production-card__meta">
                  <span
                    className="production-card__symbol"
                    aria-hidden="true"
                  />

                  <span>{production.subtitle}</span>
                </div>

                <div className="production-card__bottom">
                  <h3 className="production-card__title">{production.title}</h3>

                  <span className="production-card__explore">
                    <span>Explore</span>

                    <span className="production-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* =====================================
          BOTTOM GRAPHIC
          ===================================== */}

      <div className="productions__bottom-art" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    </section>
  );
}
