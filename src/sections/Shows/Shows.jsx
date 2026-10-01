import ShowsTransition from "./ShowsTransition/ShowsTransition";
import ShowsIntro from "./ShowsIntro/ShowsIntro";

import "./Shows.css";

export default function Shows() {
  return (
    <section className="shows" id="shows" data-navbar-theme="dark">
      <ShowsTransition />

      <ShowsIntro />
    </section>
  );
}
