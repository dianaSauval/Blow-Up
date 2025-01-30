import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-container full-width">
      <div className="footer-content">
        <p className="footer-text">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}

export default Footer;
