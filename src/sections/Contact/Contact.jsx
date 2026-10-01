import SocialButtons from "../../components/SocialButtons/SocialButtons";
import "./Contact.css";

const CONTACT_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1790238615/IMG_5319.JPG_boa5qu.jpg";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      {/* =========================================
          TOP MARQUEE / TRANSITION
      ========================================== */}

      <div className="contact__ticker" aria-hidden="true">
        <div className="contact__ticker-track">
          <span>CREATE</span>
          <span className="contact__ticker-dot" />
          <span>CONNECT</span>
          <span className="contact__ticker-dot" />
          <span>COLLABORATE</span>
          <span className="contact__ticker-dot" />

          <span>CREATE</span>
          <span className="contact__ticker-dot" />
          <span>CONNECT</span>
          <span className="contact__ticker-dot" />
          <span>COLLABORATE</span>
          <span className="contact__ticker-dot" />
        </div>
      </div>

      {/* =========================================
          MAIN
      ========================================== */}

      <div className="contact__main">
        {/* IMAGE */}

        <div className="contact__visual">
          <img
            src={CONTACT_IMAGE}
            alt="Blow Up Company"
            className="contact__image"
          />

          <div className="contact__visual-label">
            <span>Blow Up</span>
            <span>Company</span>
          </div>
        </div>

        {/* CONTENT */}

        <div className="contact__content">
          <span className="blow-eyebrow contact__eyebrow">Get in touch</span>

          <div className="contact__title-wrap">
            <h2 className="contact__title">
              LET'S
              <span>CREATE</span>
              SOMETHING
              <span className="contact__title-outline">TOGETHER.</span>
            </h2>
          </div>

          <div className="contact__bottom">
            {/* =========================================
                BOOKING / EMAIL
            ========================================== */}

            <div className="contact__booking">
              <div className="contact__booking-copy">
                <span className="contact__booking-kicker">
                  Bookings & enquiries
                </span>

                <p className="contact__intro">
                  Festivals, events, shows, collaborations and new creative
                  projects.
                </p>
              </div>

              <a
                className="contact__email"
                href="mailto:blowup.cms2p@gmail.com"
              >
                <span className="contact__email-top">
                  <span className="contact__email-label">Contact us</span>

                  <span className="contact__email-arrow" aria-hidden="true">
                    ↗
                  </span>
                </span>

                <span className="contact__email-address">
                  blowup.cms2p@gmail.com
                </span>

                <span
                  className="contact__email-decoration"
                  aria-hidden="true"
                />
              </a>
            </div>

            {/* =========================================
                SOCIAL MEDIA
            ========================================== */}

            <div className="contact__social">
              <div className="contact__social-heading">
                <span className="contact__social-kicker">Follow Blow Up</span>

                <p>Shows, projects, backstage & more.</p>
              </div>

              <SocialButtons />
            </div>
          </div>
        </div>
      </div>

      {/* =========================================
          COLOR SIGNATURE
      ========================================== */}

      <div className="contact__colors" aria-hidden="true">
        <span className="contact__color contact__color--red" />
        <span className="contact__color contact__color--orange" />
        <span className="contact__color contact__color--yellow" />
        <span className="contact__color contact__color--green" />
        <span className="contact__color contact__color--blue" />
        <span className="contact__color contact__color--purple" />
      </div>
    </section>
  );
}
