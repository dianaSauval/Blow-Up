import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, Button } from 'react-bootstrap';
import 'animate.css';

function About() {
  const { t } = useTranslation();
  const [modalShow, setModalShow] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const people = [
    {
      id: "mica",
      name: t("about.mica.name"),
      image: "/path/to/mica.jpg", // Reemplazar con la ruta real
      description: t("about.mica.description"),
    },
    {
      id: "mauro",
      name: t("about.mauro.name"),
      image: "/path/to/mauro.jpg", // Reemplazar con la ruta real
      description: t("about.mauro.description"),
    }
  ];

  const handleShow = (person) => {
    setSelectedPerson(person);
    setModalShow(true);
  };

  return (
    <section id="about" className="container my-5">
      <h2 className="text-center fw-bold animate__animated animate__fadeIn">{t('about.title')}</h2>
      <div className="row justify-content-center mt-4">
        {people.map(person => (
          <div key={person.id} className="col-md-5 text-center">
            <img
              src={person.image}
              alt={person.name}
              className="img-fluid rounded shadow-lg animate__animated animate__zoomIn"
              style={{ cursor: 'pointer' }}
              onClick={() => handleShow(person)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered>
        {selectedPerson && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedPerson.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img src={selectedPerson.image} alt={selectedPerson.name} className="img-fluid rounded" />
              <p className="mt-3">{selectedPerson.description}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setModalShow(false)}>
                {t('general.close')}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </section>
  );
}

export default About;
