import { useTranslation } from 'react-i18next';
import Navbar from '../Navbar/Navbar';
import './Header.css';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header-container">
      <Navbar />
      {/* Banner */}
      <div className="banner-container">
        <div className="banner-content">
          <h1 className="banner-title">{t("header.welcome")}</h1>
          <p className="banner-subtitle">{t("header.experience")}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;

