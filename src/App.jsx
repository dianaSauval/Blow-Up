import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import Productions from "./sections/Productions/Productions";
import ClayArtists from "./sections/ClayArtists/ClayArtists";
import FreakyTango from "./sections/FreakyTango/FreakyTango";
import Shows from "./sections/Shows/Shows";
import Contact from "./sections/Contact/Contact";

import Footer from "./components/Footer/Footer";
import ClayToFreakyTransition from "./sections/ClayToFreakyTransition/ClayToFreakyTransition";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Productions />
        <ClayArtists />
        <ClayToFreakyTransition />
        <FreakyTango />
        <Shows />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
