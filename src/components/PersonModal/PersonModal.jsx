import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './PersonModal.css';

function PersonModal({ show, onHide, person }) {
  const { t } = useTranslation();

  if (!person) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{person.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <img src={person.image} alt={person.name} className="modal-image" />
        <div className="modal-description">
          <p>{person.description}</p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          {t('general.close')}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

// 🔥 Agregar PropTypes para validar las props
PersonModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  person: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};

export default PersonModal;