
import { useTranslation } from "react-i18next";
import "animate.css";
import DuoSection from "../DuoSection/DuoSection";
import "./About.css"

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="container my-5">
      <h2 className="text-center fw-bold animate__animated animate__fadeIn">
        {t("about.title")}
      </h2>

      <div className="row justify-content-center mt-4">
        <DuoSection />
      </div>
    </section>
  );
}

export default About;
