import { useEffect, useRef } from "react";
import "./ClayToFreakyTransition.css";

export default function ClayToFreakyTransition() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);

      const clampedProgress = Math.min(1, Math.max(0, progress));

      section.style.setProperty("--transition-progress", clampedProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="clay-to-freaky" aria-hidden="true">
      {/* =========================================
          BACKGROUND
      ========================================== */}

      <div className="clay-to-freaky__darkness" />

      <div className="clay-to-freaky__shadow clay-to-freaky__shadow--one" />
      <div className="clay-to-freaky__shadow clay-to-freaky__shadow--two" />

      {/* =========================================
          PLANT → FREAKY LINE
      ========================================== */}

      <svg
        className="clay-to-freaky__plant"
        viewBox="0 0 1200 500"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="stemGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#799b71" />

            <stop offset="34%" stopColor="#8c9178" />

            <stop offset="58%" stopColor="#b76a78" />

            <stop offset="78%" stopColor="#e23c71" />

            <stop offset="100%" stopColor="#ff174f" />
          </linearGradient>
        </defs>

        {/* =========================================
            MAIN STEM
        ========================================== */}

        <path
          className="clay-to-freaky__stem"
          d="
            M 0 80
            C 160 40, 260 110, 390 145
            C 520 180, 600 120, 730 190
            C 850 250, 930 220, 1040 300
            C 1110 350, 1160 390, 1200 420
          "
        />

        {/* =========================================
            BRANCH 1
        ========================================== */}

        <path
          className="clay-to-freaky__branch branch--one"
          d="
            M 265 108
            C 225 78, 195 58, 155 42
          "
        />

        {/* =========================================
            BRANCH 2
        ========================================== */}

        <path
          className="clay-to-freaky__branch branch--two"
          d="
            M 565 151
            C 585 112, 620 80, 665 58
          "
        />

        {/* =========================================
            BRANCH 3
        ========================================== */}

        <path
          className="clay-to-freaky__branch branch--three"
          d="
            M 825 235
            C 790 270, 755 292, 715 308
          "
        />

        {/* =========================================
            LEAF 1
        ========================================== */}

        <ellipse
          className="clay-to-freaky__leaf leaf--one"
          cx="143"
          cy="37"
          rx="32"
          ry="14"
          transform="rotate(24 143 37)"
        />

        {/* =========================================
            LEAF 2
        ========================================== */}

        <ellipse
          className="clay-to-freaky__leaf leaf--two"
          cx="682"
          cy="52"
          rx="34"
          ry="15"
          transform="rotate(-30 682 52)"
        />

        {/* =========================================
            LEAF 3
        ========================================== */}

        <ellipse
          className="clay-to-freaky__leaf leaf--three"
          cx="700"
          cy="314"
          rx="30"
          ry="13"
          transform="rotate(28 700 314)"
        />
      </svg>

      {/* =========================================
          PARTICLES
      ========================================== */}

      <div className="clay-to-freaky__particles">
        <span className="particle particle--1" />
        <span className="particle particle--2" />
        <span className="particle particle--3" />
        <span className="particle particle--4" />
        <span className="particle particle--5" />
        <span className="particle particle--6" />
      </div>

      {/* =========================================
          FINAL FREAKY LINE
      ========================================== */}

      <div className="clay-to-freaky__freaky-line" />
    </section>
  );
}
