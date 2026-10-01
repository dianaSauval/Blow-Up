import { useEffect, useRef, useState } from "react";

import "./FreakyTrailer.css";

const TRAILER_ID = "4yfxECf7kTQ";

export default function FreakyTrailer() {
  const sectionRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 1.08;

      const distance = rect.height + viewportHeight * 0.2;

      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--trailer-progress", progress);
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
    <section className="freaky-trailer" ref={sectionRef}>
      {/* TRANSITION FROM INTRO */}

      <div className="freaky-trailer__transition" aria-hidden="true">
        <span className="freaky-trailer__transition-line" />

        <span className="freaky-trailer__transition-word">WATCH</span>
      </div>

      {/* BACKGROUND TYPOGRAPHY */}

      <span className="freaky-trailer__ghost" aria-hidden="true">
        WATCH
      </span>

      <div className="freaky-trailer__container">
        {/* HEADER */}

        <header className="freaky-trailer__header">
          <div className="freaky-trailer__heading">
            <span className="freaky-trailer__number">02 / FILM</span>

            <h2>
              Official
              <em> trailer</em>
            </h2>
          </div>

          <p>
            Freaky Tango
            <br />
            by Blow Up Company
          </p>
        </header>

        {/* VIDEO */}

        <div className="freaky-trailer__video-wrapper">
          <div className="freaky-trailer__video">
            {!isPlaying ? (
              <>
                <img
                  src={`https://i.ytimg.com/vi/${TRAILER_ID}/maxresdefault.jpg`}
                  alt="Freaky Tango official trailer"
                  className="freaky-trailer__poster"
                  loading="lazy"
                />

                <div className="freaky-trailer__overlay" aria-hidden="true" />

                <button
                  type="button"
                  className="freaky-trailer__play"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Freaky Tango official trailer"
                >
                  <span className="freaky-trailer__play-icon">▶</span>

                  <span className="freaky-trailer__play-text">Play film</span>
                </button>

                <span className="freaky-trailer__video-label">
                  Freaky Tango
                </span>

                <span className="freaky-trailer__video-type">
                  Official trailer
                </span>
              </>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${TRAILER_ID}?autoplay=1&rel=0`}
                title="Freaky Tango official trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            )}
          </div>
        </div>

        {/* BOTTOM */}
      </div>
    </section>
  );
}
