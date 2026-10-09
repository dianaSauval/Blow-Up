import { useRef, useState } from "react";
import "./About.css";

/* ============================================================
   IMAGES
============================================================ */

const COMPANY_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791019996/Blow%20Up/IMG_8983.JPG_algg4d.jpg";

const MIKIX_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791021665/Blow%20Up/Miica_Lublin-36version_peque%C3%B1a_sncamo.jpg";

const CORPO_IMAGE =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791019996/Blow%20Up/IMG_9727.JPG_vcrlf3.jpg";

/* ============================================================
   ARTISTS
============================================================ */

const artists = [
  {
    id: "mikix",
    name: "Micaela Moreno",
    nickname: "Bgirl Mikix",
    role: "Co-founder · Performer · Creator",
    image: MIKIX_IMAGE,
    imagePosition: "center center",
    bio: [
      `Bgirl Mikix is a multidisciplinary artist, acrobat, dancer and performer from Argentina.`,

      `Her training began in artistic gymnastics, where she developed a strong physical foundation, before later specializing in circus arts. Her disciplines include floor acrobatics, hand balancing, partner acrobatics and group acrobatics. Her experience in parkour also influenced the way she understands the relationship between the body and the urban environment.`,

      `She grew up surrounded by Hip-Hop culture through her sisters, pioneers and event organizers with whom she shares her passion for Breaking and is part of Super Poderosas Crew. Feminism played an important role in her journey, helping her gain confidence and push herself to reach the highest possible level, striving to match and even surpass the standards traditionally set by men. This drive led her to develop a powerful and distinctive movement style, becoming one of the key elements behind her international recognition.`,

      `On stage, she defines herself as a versatile, sensitive and surprising artist, combining energy, strength and skill to create performances designed to captivate and surprise the audience.`,
    ],
  },

  {
    id: "corpo",
    name: "Mauro García",
    nickname: "Corpo",
    role: "Co-founder · Performer · Creator",
    image: CORPO_IMAGE,
    imagePosition: "center 15%",
    bio: [
      `Mauro García is a performer and creator focused on abstract dance and performance. As co-founder of the CMS2P collective, he has developed a distinctive artistic language by combining nearly two decades of Breaking with contemporary dance techniques.`,

      `Within his circus practice, he stands out for his skills in hand balancing and partner acrobatics, with the airchair becoming one of the signature elements of his movement vocabulary.`,

      `Charismatic, flexible and naturally skilled at using humor and playful interaction with the audience, Corpo brings confidence and spontaneity to the stage. His work moves from pure physical skill to the role of the clown, creating a genuine connection with audiences of all ages.`,
    ],
  },

  {
    id: "martin",
    name: "Martín Cruz de Oña",
    nickname: "Choko Cirko",
    role: "Performer",
    image:
      "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791555136/Blow%20Up/vanceai_1791463549264.jpg_jdthpz.jpg",
    imagePosition: "center center",
    bio: [
      `Martín Cruz de Oña, known as Choko Cirko, is a circus artist and performer specializing in acrobatics, balance and movement. His repertoire includes hand balancing, tightrope walking, unicycle, Cyr wheel and juggling, as well as partner and group acrobatics.`,

      `He began training in artistic gymnastics from a very young age. His passion for movement later led him to discover the circus arts and explore a wide range of disciplines, including Breaking, skateboarding, surfing and climbing. Over the years, he has trained with national and international teachers, developing a technique rooted in strength, balance, precision and expressiveness.`,

      `With more than ten years of experience as an international performer, Martín has travelled around the world taking part in festivals, circuses, street performances, theatre productions, cabarets and multidisciplinary stage projects. The diversity of experiences and encounters throughout his travels also led him to learn Italian, French, English and Portuguese, in addition to his native Spanish.`,

      `His work is defined by versatility and a strong ability to adapt to both solo and ensemble productions. By combining different disciplines, he creates performances that are dynamic, highly physical and expressive.`,
    ],
  },

  {
    id: "victor",
    name: "Víctor Gabriel Amarilla Machado",
    nickname: "Bboy Tante",
    role: "Performer",
    image: null,
    imagePosition: "center center",
    bio: [
      `Víctor Gabriel Amarilla Machado, known artistically as Bboy Tante, is a Breaking dancer, performer, contortionist and one of the leading figures of Abstract Style in Argentina.`,

      `From an early age, he discovered that he had exceptional flexibility and body mobility. Through consistent practice and training, he transformed this natural ability into one of his main tools for artistic expression, developing a style defined by strong stage presence, elasticity and an ongoing exploration of the body's possibilities.`,

      `He began dancing Breaking at the age of fourteen and has since developed much of his training independently, driven by a deep commitment to the discipline and a constant search for his own artistic identity. This exploration led him further into experimental and performance-based practices. What began as a passion gradually became a way of life and a language through which he explores movement, creativity and his own artistic identity.`,

      `As an artist, he is known for his inventiveness and ability to create original ideas, combining practical experience with an extensive knowledge of the history of Breaking and dance. His work is driven by research and curiosity, constantly seeking new ways to interpret movement and transform his knowledge into personal, creative and distinctive artistic proposals.`,
    ],
  },
];

/* ============================================================
   COMPONENT
============================================================ */

export default function About() {
  const [activeArtist, setActiveArtist] = useState(0);

  const teamRef = useRef(null);

  const artist = artists[activeArtist];

  const goToArtist = (index) => {
    const total = artists.length;
    const nextIndex = (index + total) % total;

    setActiveArtist(nextIndex);
  };

  const handleMeetArtists = () => {
    teamRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="about" id="about">
      {/* =======================================================
          COMPANY
      ======================================================== */}

      <div className="about__company">
        <div className="about__container">
          <div className="about__company-grid">
            {/* EYEBROW */}

            <span className="blow-eyebrow about__eyebrow">
              About the company
            </span>

            {/* TITLE */}

            <h2 className="about__title">
              <span>WE ARE</span>
              <span className="about__title-color">BLOW UP.</span>
            </h2>

            {/* LEAD */}

            <p className="about__lead">
              Blow Up is an Argentine contemporary circus and dance company
              founded in 2023, created and directed by
              <strong> Micaela Moreno (Mikix)</strong> and
              <strong> Mauro García (Corpo)</strong>, partners both on and off
              stage since 2016.
            </p>

            {/* IMAGE */}

            <div className="about__visual">
              <div className="about__image-wrapper">
                <img
                  src={COMPANY_IMAGE}
                  alt="Blow Up Company"
                  className="about__image"
                  decoding="async"
                />

                <span
                  className="about__shape about__shape--red"
                  aria-hidden="true"
                />

                <span
                  className="about__shape about__shape--yellow"
                  aria-hidden="true"
                />

                <span
                  className="about__shape about__shape--blue"
                  aria-hidden="true"
                />
              </div>

              <div className="about__image-caption">
                <span>Argentina</span>

                <span>Contemporary Circus · Dance</span>

                <span>Est. 2023</span>
              </div>
            </div>

            {/* BODY */}

            {/* BODY */}

            <div className="about__copy">
              <p>
                Blow Up is defined by its professional approach and its ongoing
                search for a distinctive artistic language. With Breaking and
                Hip-Hop culture at the heart of its identity, every creation
                brings together urban influences, dynamic movement and a strong
                sense of community.
              </p>

              <p>
                Their first creation, <em>The Clay Artists</em> (2023),
                established this artistic identity and quickly brought the
                company onto the international festival circuit.
              </p>

              <p>
                Constantly evolving and exploring new ideas, the company
                continues to invest in the quality and artistic depth of its
                productions. This growth is reflected in the expansion of the
                cast for its new show,
                <em> Freaky Tango</em>, welcoming artists Martin de Oña (Choko
                Circo) and Víctor Amarilla Machado to the team.
              </p>

              <p>
                From productions for festivals and theatres to artistic
                entertainment and performances created for young audiences, Blow
                Up develops original, energetic and unexpected stage experiences
                designed to connect genuinely with audiences of all kinds.
              </p>
            </div>

            {/* CTA */}

            <button
              type="button"
              className="about__meet-button"
              onClick={handleMeetArtists}
            >
              <span>Meet the artists</span>

              <span className="about__meet-arrow" aria-hidden="true">
                ↓
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =======================================================
          TEAM
      ======================================================== */}

      <div className="about-team" ref={teamRef}>
        <div className="about-team__container">
          {/* ===================================================
              HEADER
          ==================================================== */}

          <div className="about-team__top">
            <div className="about-team__heading">
              <span className="blow-eyebrow about-team__eyebrow">
                The people behind Blow Up
              </span>

              <h3 className="about-team__title">
                MEET
                <br />
                THE <span>ARTISTS.</span>
              </h3>
            </div>

            <div className="about-team__counter">
              <span className="about-team__counter-current">
                {String(activeArtist + 1).padStart(2, "0")}
              </span>

              <span className="about-team__counter-line" />

              <span>{String(artists.length).padStart(2, "0")}</span>
            </div>
          </div>

          {/* ===================================================
              ACTIVE ARTIST
          ==================================================== */}

          <div className="about-team__artist" key={artist.id}>
            {/* IMAGE */}

            <div className="about-team__visual">
              <div className="about-team__visual-frame">
                {artist.image ? (
                  <img
                    src={artist.image}
                    alt={`${artist.name}${
                      artist.nickname ? ` (${artist.nickname})` : ""
                    }`}
                    className="about-team__image"
                    style={{
                      objectPosition: artist.imagePosition,
                    }}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="about-team__placeholder">
                    <span className="about-team__placeholder-number">
                      {String(activeArtist + 1).padStart(2, "0")}
                    </span>

                    <span className="about-team__placeholder-name">
                      {artist.nickname || artist.name}
                    </span>

                    <div
                      className="about-team__placeholder-circle"
                      aria-hidden="true"
                    />
                  </div>
                )}

                <span
                  className="about-team__visual-accent"
                  aria-hidden="true"
                />
              </div>

              <div className="about-team__visual-label">
                Blow Up Company / Artist
              </div>
            </div>

            {/* BIOGRAPHY */}

            <div className="about-team__info">
              <div className="about-team__identity">
                <span className="about-team__role">{artist.role}</span>

                <h4 className="about-team__name">{artist.name}</h4>

                {artist.nickname && (
                  <span className="about-team__nickname">
                    {artist.nickname}
                  </span>
                )}
              </div>

              <div className="about-team__bio">
                {artist.bio ? (
                  artist.bio.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))
                ) : (
                  <p className="about-team__coming-soon">
                    Biography coming soon.
                  </p>
                )}
              </div>

              {/* CONTROLS */}

              <div className="about-team__controls">
                <button
                  type="button"
                  className="about-team__arrow"
                  onClick={() => goToArtist(activeArtist - 1)}
                  aria-label="Previous artist"
                >
                  ←
                </button>

                <div className="about-team__dots">
                  {artists.map((item, index) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`about-team__dot ${
                        index === activeArtist ? "about-team__dot--active" : ""
                      }`}
                      onClick={() => goToArtist(index)}
                      aria-label={`View ${item.name}`}
                      aria-current={index === activeArtist ? "true" : undefined}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  className="about-team__arrow"
                  onClick={() => goToArtist(activeArtist + 1)}
                  aria-label="Next artist"
                >
                  →
                </button>
              </div>
            </div>
          </div>

          {/* ===================================================
              ARTIST INDEX
          ==================================================== */}

          <div className="about-team__index">
            {artists.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`about-team__index-item ${
                  activeArtist === index ? "about-team__index-item--active" : ""
                }`}
                onClick={() => goToArtist(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>

                <span>{item.nickname || item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
