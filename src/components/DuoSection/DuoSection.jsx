import './DuoSection.css';

function DuoSection() {
  return (
    <section className="duo-section">
      <div className="duo-container">
        <div className="duo-image-container">
          <div className="duo-border shaped-left"></div>
          <div className="duo-image left shaped-left">
            <div className="image-placeholder">Imagen 1</div>
          </div>
        </div>
        <div className="duo-logo">
          <img src="/path/to/logo.png" alt="Logo" className="logo-img" />
        </div>
        <div className="duo-image-container">
          <div className="duo-border shaped-right"></div>
          <div className="duo-image right shaped-right">
            <div className="image-placeholder">Imagen 2</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DuoSection;