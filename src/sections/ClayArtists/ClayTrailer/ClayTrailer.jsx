import { useState } from "react";

import "./ClayTrailer.css";

const POSTER =
  "https://res.cloudinary.com/dkdhdy9e5/image/upload/v1791198672/Blow%20Up/dibujo-blow-up-fondo-transparente_fchyeg.png";

const VIDEO_ID = "FASfrwmsRP4";

export default function ClayTrailer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="clay-trailer" aria-labelledby="clay-trailer-title">
      <div className="clay-trailer__inner">
        <header className="clay-trailer__header">
          <span className="blow-eyebrow">The Clay Artists</span>

          <h2
            className="blow-title blow-title--clay clay-trailer__title"
            id="clay-trailer-title"
          >
            Trailer
          </h2>
        </header>

        <div className="clay-trailer__video">
          {!isPlaying ? (
            <button
              type="button"
              className="clay-trailer__cover"
              onClick={() => setIsPlaying(true)}
              aria-label="Play The Clay Artists trailer"
            >
              <div className="clay-trailer__cover-art">
                <img src={POSTER} alt="" className="clay-trailer__poster" />
              </div>

              <span className="clay-trailer__play" aria-hidden="true">
                <span className="clay-trailer__play-icon" />
              </span>

              <span className="clay-trailer__watch" aria-hidden="true">
                Play film
              </span>
            </button>
          ) : (
            <iframe
              className="clay-trailer__iframe"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
              title="The Clay Artists trailer"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
}
