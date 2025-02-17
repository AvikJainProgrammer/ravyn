import './App.css';
import {Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CustomNavbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

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
          <Route path="/" element={<div>Home</div>} />

          
          <Route path="/about" element={<div>About</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />

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