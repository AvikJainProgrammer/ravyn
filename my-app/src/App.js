import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

import DataAutomation from './pages/Services/DataAutomation/DataAutomation';
import CustomChatbot from './pages/Services/CustomChatbot/CustomChatbot';

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
          <Route path="/" element={<Home/>} />

          
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/privacy" element={<PrivacyPolicy/>} />

          <Route path="/data-automation" element={<DataAutomation/>} />
          <Route path="/custom-chatbot" element={<CustomChatbot/>} />

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