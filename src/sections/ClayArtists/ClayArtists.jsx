import { useEffect, useRef } from "react";

import ClayBotanical from "./ClayBotanical/ClayBotanical";
import ClayIntro from "./ClayIntro/ClayIntro";
import ClayShow from "./ClayShow/ClayShow";
import ClayConcept from "./ClayConcept/ClayConcept";

import "./ClayArtists.css";
import ClayTrailer from "./ClayTrailer/ClayTrailer";

export default function ClayArtists() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    let frameId = null;

    /*
     * Cada punto corresponde a un momento
     * interesante de la composición.
     *
     * NO depende de porcentajes fijos de
     * toda la sección.
     */
    const anchors = [
      {
        selector: ".clay-intro__visual",
        position: 0.2,
      },
      {
        selector: ".clay-intro__visual",
        position: 0.78,
      },
      {
        selector: ".clay-show__gallery",
        position: 0.16,
      },
      {
        selector: ".clay-show__gallery",
        position: 0.7,
      },
      {
        selector: ".clay-concept__fire-figure",
        position: 0.28,
      },
      {
        selector: ".clay-concept__together-figure",
        position: 0.48,
      },
      {
        selector: ".clay-concept__audience-figure",
        position: 0.35,
      },
      {
        selector: ".clay-concept__creators",
        position: 0.15,
      },
    ];

    const clamp01 = (value) => Math.min(Math.max(value, 0), 1);

    const updateBotanical = () => {
      const sectionRect = section.getBoundingClientRect();

      const viewportHeight = window.innerHeight;
      const width = window.innerWidth;

      /*
       * Punto imaginario del viewport donde
       * queremos ver crecer la planta.
       *
       * En móvil queda un poco más abajo,
       * así la punta acompaña mejor el dedo.
       */
      const trackingPoint =
        width <= 700
          ? viewportHeight * 0.76
          : width <= 1024
            ? viewportHeight * 0.72
            : viewportHeight * 0.68;

      /*
       * ==============================
       * MAIN STEM
       * ==============================
       */

      const travelled = trackingPoint - sectionRect.top;

      /*
       * No utilizamos 1.5 veces la altura.
       * Eso estaba haciendo que planta +
       * ramas dejaran de corresponder
       * correctamente.
       *
       * El tallo termina cerca del final
       * real de la sección.
       */
      const stemDistance =
        width <= 700
          ? sectionRect.height * 1.45
          : sectionRect.height - viewportHeight * 0.2;

      const stemProgress = clamp01(travelled / stemDistance);

      section.style.setProperty("--clay-progress", stemProgress);

      /*
       * ==============================
       * REAL LAYOUT ANCHORS
       * ==============================
       */

      anchors.forEach((anchor, index) => {
        const target = section.querySelector(anchor.selector);

        if (!target) return;

        const targetRect = target.getBoundingClientRect();

        /*
         * Coordenada REAL dentro de Clay Artists.
         */
        const anchorViewportY =
          targetRect.top + targetRect.height * anchor.position;

        const anchorSectionY = anchorViewportY - sectionRect.top;

        /*
         * Posición física de la rama.
         */
        section.style.setProperty(
          `--botanical-y-${index + 1}`,
          `${anchorSectionY}px`
        );

        /*
         * ==============================
         * LOCAL GROWTH
         * ==============================
         *
         * Una rama comienza cuando su punto
         * entra aproximadamente al 82% del
         * viewport y termina de crecer cuando
         * alcanza aproximadamente el 55%.
         */

        const growthStart = viewportHeight * 0.84;
        const growthEnd = viewportHeight * 0.55;

        const growthDistance = growthStart - growthEnd;

        const localProgress = clamp01(
          (growthStart - anchorViewportY) / growthDistance
        );

        section.style.setProperty(
          `--botanical-growth-${index + 1}`,
          localProgress
        );
      });

      frameId = null;
    };

    const requestUpdate = () => {
      if (frameId !== null) return;

      frameId = window.requestAnimationFrame(updateBotanical);
    };

    /*
     * Importantísimo:
     *
     * Si cambia la altura de una imagen,
     * texto, grid, breakpoint, etc.,
     * recalculamos los puntos.
     */
    const resizeObserver = new ResizeObserver(requestUpdate);

    resizeObserver.observe(section);

    const images = section.querySelectorAll("img");

    images.forEach((image) => {
      image.addEventListener("load", requestUpdate);
    });

    updateBotanical();

    window.addEventListener("scroll", requestUpdate, {
      passive: true,
    });

    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);

      resizeObserver.disconnect();

      images.forEach((image) => {
        image.removeEventListener("load", requestUpdate);
      });

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <section
      className="clay-artists"
      id="clay-artists"
      data-navbar-theme="light"
      ref={sectionRef}
    >
      <ClayBotanical />

      <div className="clay-artists__content">
        <ClayIntro />

        <ClayShow />

        <ClayConcept />
        <ClayTrailer />
      </div>
    </section>
  );
}
