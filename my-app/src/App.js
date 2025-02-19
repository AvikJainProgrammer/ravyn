import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import ROUTES from './constants/routes';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

import DataAutomation from './pages/Services/DataAutomation/DataAutomation';
import CustomChatbot from './pages/Services/CustomChatbot/CustomChatbot';
import DataVisualization from './pages/Services/DataVisualization/DataVisualization';
import SEO from './pages/Services/SEO/SEO';
import PPCAdvertising from './pages/Services/PPCAdvertising/PPCAdvertising';
import CustomWebApp from './pages/Services/CustomWebApp/CustomWebApp';
import PrecisionManufacturing from './pages/Services/PrecisionManufacturing/PrecisionManufacturing';
import PCBManufacturing from './pages/Services/PCBManufacturing/PCBManufacturing';
import SemiconductorProcurement from './pages/Services/SemiconductorProcurement/SemiconductorProcurement';

import Manufacturing from './pages/Manufacturing/Manufacturing';
import AISolutions from './pages/AISolutions/AISolutions';
import DigitalMarketing from './pages/DigitalMarketing/DigitalMarketing';

import headerData from './data/headerData';
import navbarData from './data/navbarData';
import footerData from './data/footerData';



function App() {

  return (
    <>
      <Header logoSrc={headerData.logoSrc} title={headerData.title} />
      <CustomNavbar menuItems={navbarData.menuItems} />
      <main>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={ROUTES.SERVICES_PAGE} element={<Services />} />
          
          <Route path={ROUTES.SERVICES.DATA_AUTOMATION} element={<DataAutomation />} />
          <Route path={ROUTES.SERVICES.CUSTOM_CHATBOT} element={<CustomChatbot />} />
          <Route path={ROUTES.SERVICES.DATA_VISUALIZATION} element={<DataVisualization />} />
          <Route path={ROUTES.SERVICES.SEO} element={<SEO />} />
          <Route path={ROUTES.SERVICES.PPC_ADVERTISING} element={<PPCAdvertising />} />
          <Route path={ROUTES.SERVICES.WEB_APP_DEVELOPMENT} element={<CustomWebApp />} />
          <Route path={ROUTES.SERVICES.METAL_MANUFACTURING} element={<PrecisionManufacturing />} />
          <Route path={ROUTES.SERVICES.PCB_MANUFACTURING} element={<PCBManufacturing />} />
          <Route path={ROUTES.SERVICES.PCB_MANUFACTURING} element={<PCBManufacturing />} />
          <Route path={ROUTES.SERVICES.SEMICONDUCTOR_PROCUREMENT} element={<SemiconductorProcurement />} />
          
          <Route path={ROUTES.MANUFACTURING} element={<Manufacturing />} />
          <Route path={ROUTES.AI_SOLUTIONS} element={<AISolutions />} />
          <Route path={ROUTES.DIGITAL_MARKETING} element={<DigitalMarketing />} />




          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer
        logoSrc={footerData.logoSrc}
        footerLinks={footerData.footerLinks}
        socialLinks={footerData.socialLinks}
        copyrightText={footerData.copyrightText}
      />
    </>
  );
}

export default App;