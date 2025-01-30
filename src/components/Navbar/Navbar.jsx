import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import './Navbar.css';

function Navbar() {
  const { t } = useTranslation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark w-100">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Blow Up</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">{t("header.nav.learnMore")}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">{t("header.nav.contact")}</a>
            </li>
            <li className="nav-item">
              <LanguageSelector />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
