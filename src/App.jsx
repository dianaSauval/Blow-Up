import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './i18n';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import CircoSection from './components/CircoSection/CircoSection';
import BreakingSection from './components/BreakingSection/BreakingSection';
import ServicesSection from './components/ServicesSection/ServicesSection';

function App() {
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Simula tiempo de carga
  }, []);

  if (loading) {
    return <div className='d-flex justify-content-center align-items-center vh-100' style={{ backgroundColor: '#1E1F26', color: '#FFCE00' }}>
             <h2>{t('loading')}</h2>
           </div>; 
  }

  return (
    <div className='landing-page text-center' style={{ backgroundColor: '#F4E1C1', color: '#151515' }}>
      <Header />
      <About />
      <CircoSection/>
      <BreakingSection/>
      <ServicesSection/>
      <Footer />
    </div>
  );
}

export default App;

