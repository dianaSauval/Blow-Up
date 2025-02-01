import { useTranslation } from 'react-i18next';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark text-light py-4">
      <Container fluid className="px-0">
        <Row className="align-items-center text-center w-100 mx-0">
          <Col xs={12} md={6}>
            <p className="mb-0">{t("footer.copyright")}</p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-center gap-3">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light">
              <FaYoutube size={24} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
