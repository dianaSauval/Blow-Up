import { useEffect, useRef } from "react";

import "./ShowsTransition.css";

export default function ShowsTransition() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let ticking = false;

    /*
     * Guardamos una altura estable.
     *
     * No queremos que cambie cuando aparece/desaparece
     * la UI del navegador móvil.
     */
    let viewportHeight = window.innerHeight;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();

      const start = viewportHeight * 0.92;
      const end = viewportHeight * 0.22;

      const distance = start - end;
      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--transition-progress", progress.toFixed(5));

      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(updateProgress);
    };

    const onOrientationChange = () => {
      /*
       * Solo recalculamos la altura si realmente
       * giró el dispositivo.
       */
      viewportHeight = window.innerHeight;

      updateProgress();
    };

    updateProgress();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      window.removeEventListener("scroll", onScroll);

      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, []);

  return (
    <div className="shows-transition" ref={sectionRef} aria-hidden="true">
      <div className="shows-transition__freaky-glow" />

      <div className="shows-transition__shows-glow" />

      <div className="shows-transition__line">
        <span className="shows-transition__line-pink" />

        <span className="shows-transition__line-metal" />

        <span className="shows-transition__flare">
          <i />
        </span>
      </div>

      <div className="shows-transition__spark shows-transition__spark--1">
        ✦
      </div>

      <div className="shows-transition__spark shows-transition__spark--2">
        ✦
      </div>

      <div className="shows-transition__spark shows-transition__spark--3">
        ✦
      </div>

      <span className="shows-transition__label">
        From production
        <i />
        to live experience
      </span>
    </div>
  );
}
