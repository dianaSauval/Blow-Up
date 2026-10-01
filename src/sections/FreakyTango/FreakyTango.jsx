import FreakyIntro from "./FreakyIntro/FreakyIntro";
import FreakyPress from "./FreakyPress/FreakyPress";
import FreakyTrailer from "./FreakyTrailer/FreakyTrailer";

import "./FreakyTango.css";

export default function FreakyTango() {
  return (
    <section
      className="freaky-tango"
      id="freaky-tango"
      data-navbar-theme="dark"
    >
      <FreakyIntro />

      <FreakyTrailer />

      <FreakyPress />

      <footer className="freaky-tango__closing">
        <span>Blow Up Company</span>

        <p>Freaky Tango</p>

        <span>Zürich · Switzerland · 2026</span>
      </footer>
    </section>
  );
}
