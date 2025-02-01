import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './DuoSection.css';
import PersonModal from '../PersonModal/PersonModal';

function DuoSection() {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    {
      id: "mica",
      name: t("about.mica.name"),
      image: "/path/to/mica.jpg",
      description: t("about.mica.description"),
    },
    {
      id: "mauro",
      name: t("about.mauro.name"),
      image: "/path/to/mauro.jpg",
      description: t("about.mauro.description"),
    }
  ];

  const handleShow = (person) => {
    setSelectedPerson(person);
    setModalShow(true);
  };

  return (
    <section className="duo-section">
      <div className="duo-container">
        <div className="duo-image-container">
          <div className="duo-border shaped-left"></div>
          <div className="duo-image left shaped-left" onClick={() => handleShow(people[0])}>
            <img src={people[0].image} alt={people[0].name} className="image-placeholder" />
          </div>
        </div>
        <div className="duo-logo">
          <img src="/path/to/logo.png" alt="Logo" className="logo-img" />
        </div>
        <div className="duo-image-container">
          <div className="duo-border shaped-right"></div>
          <div className="duo-image right shaped-right" onClick={() => handleShow(people[1])}>
            <img src={people[1].image} alt={people[1].name} className="image-placeholder" />
          </div>
        </div>
      </div>

      <PersonModal show={modalShow} onHide={() => setModalShow(false)} person={selectedPerson} />
    </section>
  );
}

export default DuoSection;
