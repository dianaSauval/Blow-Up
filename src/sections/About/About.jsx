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
      `Her training began in artistic gymnastics, where she developed a strong physical foundation, before specializing in circus arts. Her disciplines include floor acrobatics, hand balancing and partner acrobatics, which remain part of her practice today. Her experience in parkour also played an important role in shaping her understanding of the relationship between the body and the urban environment.`,

      `She grew up surrounded by Hip-Hop culture through her sisters, pioneers and event organizers whose influence shaped her identity from an early age. Driven by feminism and the desire to challenge stereotypes and express herself freely, she has become one of Argentina’s most prominent B-girls.`,

      `On stage, she defines herself as a versatile, sensitive and surprising artist, with the ability to learn quickly and move confidently across different styles. Each performance is a powerful display of energy, strength and feminine skill, created to captivate and surprise the audience.`,
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
    name: "Martin de Oña",
    nickname: "Choko Circo",
    role: "Performer",
    image: null,
    imagePosition: "center center",
    bio: null,
  },

  {
    id: "victor",
    name: "Víctor Amarilla Machado",
    nickname: "",
    role: "Performer",
    image: null,
    imagePosition: "center center",
    bio: null,
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
              Blow Up es una compañía argentina de circo contemporáneo y danza
              nacida en 2023, bajo la dirección y creación de
              <strong> Micaela Moreno (Mikix)</strong> y
              <strong> Mauro García (Corpo)</strong>, pareja y compañeros de
              vida desde 2016.
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

            <div className="about__copy">
              <p>
                Blow Up se distingue por su compromiso profesional y la búsqueda
                de un lenguaje propio. Con el Breaking y la cultura Hip-Hop como
                eje fundamental de su identidad, todo lo que crean fusiona lo
                urbano, el dinamismo y el espíritu comunitario.
              </p>

              <p>
                Su primera creación, <em>The Clay Artists</em> (2023), consolidó
                esta impronta e incorporó rápidamente a la compañía en el
                circuito internacional de festivales.
              </p>

              <p>
                En constante evolución e innovación, la compañía invierte
                continuamente en la calidad y contenido de sus producciones.
                Muestra de este crecimiento es la ampliación de su elenco para
                el nuevo espectáculo, <em>Freaky Tango</em>, sumando al equipo a
                los artistas Martin de Oña (Choko Circo) y Víctor Amarilla
                Machado.
              </p>

              <p>
                Desde producciones para festivales y teatros hasta animaciones
                artísticas y propuestas enfocadas en las niñeces, Blow Up diseña
                experiencias escénicas originales, enérgicas y sorprendentes,
                orientadas a conectar de forma genuina con todo tipo de
                públicos.
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
