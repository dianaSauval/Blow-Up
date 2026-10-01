import { useEffect, useRef } from "react";

import "./ShowsTransition.css";

export default function ShowsTransition() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const updateProgress = () => {
      const rect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.92;

      const end = viewportHeight * 0.22;

      const distance = start - end;

      const travelled = start - rect.top;

      const progress = Math.min(Math.max(travelled / distance, 0), 1);

      section.style.setProperty("--transition-progress", progress);
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
