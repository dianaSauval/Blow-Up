import "./ShowsIntroOpening.css";

const OPENING_IMAGE_MAIN =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791194703/Blow%20Up/6L2A0135_1_1_wbppdh.jpg";

const OPENING_IMAGE_SECONDARY =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791194700/Blow%20Up/6L2A0205_a7jhfw.jpg";

export default function ShowsIntroOpening() {
  return (
    <div className="shows-opening">
      {/* =========================================
          TEXT
      ========================================== */}

      <div className="shows-opening__content">
        <div className="shows-opening__meta">
          <span>Blow Up Company</span>

          <i />

          <span>Live entertainment</span>
        </div>

        <div className="shows-opening__heading">
          <span className="shows-opening__eyebrow">Live experiences</span>

          <h2 id="shows-intro-title">
            <span>Shows</span>

            <em>&amp; Animations</em>
          </h2>
        </div>
      </div>

      {/* =========================================
          VERTICAL IMAGES
      ========================================== */}

      <div className="shows-opening__gallery">
        <figure className="shows-opening__photo shows-opening__photo--main">
          <img
            src={OPENING_IMAGE_MAIN}
            alt="Blow Up Company live performance"
            loading="eager"
            decoding="async"
          />
        </figure>

        <figure className="shows-opening__photo shows-opening__photo--secondary">
          <img
            src={OPENING_IMAGE_SECONDARY}
            alt="Blow Up Company live entertainment"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </div>
  );
}
