import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import Header from "./components/Header";
import CustomNavbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import CardsSection from './components/CardsSection';
import LeftHeroSection from './components/LeftHeroSection';

function App() {

  const leftHeroProps = {
    title: "Why Choose Ravyn Technologies ?",
    subtitle:
      "Innovative solutions, precision engineering, and technology-driven results—Ravyn Technologies delivers cutting-edge manufacturing, AI solutions, and digital growth strategies to power your business forward. With a commitment to quality, efficiency, and reliability, we ensure that every solution meets the highest industry standards.",
    buttonText: "Let’s Discuss Your Project",
    buttonLink: "/discuss-project", // React Router path for the button
    imageSrc: "assets/images/trust.jpg",
    imageAlt: "Hero Image",
  };

  const cardsData = [
    {
      title: "Data Automation",
      imageSrc: "assets/images/data-engieering.jpg",
      alt: "Service 1",
      link: "/data-automation"
    },
    {
      title: "Custom Chatbot",
      imageSrc: "assets/images/chatbot-image.jpg",
      alt: "Service 2",
      link: "/custom-chatbot"
    },
    {
      title: "Data Visualization & Reporting",
      imageSrc: "assets/images/dashboard-images.jpg",
      alt: "Service 3",
      link: "/data-visualization"
    },
    {
      title: "Search Engine Optimization",
      imageSrc: "assets/images/seo-image.jpg",
      alt: "Service 4",
      link: "/seo"
    },
    {
      title: "Pay-Per-Click Advertising",
      imageSrc: "assets/images/ppc-image.jpg",
      alt: "Service 5",
      link: "/ppc-advertising"
    },
    {
      title: "Custom Web & App Development",
      imageSrc: "assets/images/website-design-image.jpg",
      alt: "Service 6",
      link: "/web-app-development"
    },
    {
      title: "Precision Metal Manufacturing",
      imageSrc: "assets/images/precision-metal-manufacturing.jpg",
      alt: "Service 7",
      link: "/metal-manufacturing"
    },
    {
      title: "PCB Manufacturing & Assembly",
      imageSrc: "assets/images/pcb-manufacturing.jpg",
      alt: "Service 8",
      link: "/pcb-manufacturing"
    },
    {
      title: "Semiconductor Procurement Solutions",
      imageSrc: "assets/images/semi-couductors.jpg",
      alt: "Service 9",
      link: "/semiconductor-procurement"
    }
  ];

  const menuItems = [
    { label: "Home", link: "/" },
    {
      label: "Dropdown",
      dropdown: [
        { label: "Action", link: "/action" },
        { label: "Another action", link: "/another-action" },
        { label: "Something else here", link: "/something-else" },
        { label: "Separated link", link: "/separated" }
      ]
    },
    { label: "Link", link: "/link" },
    { label: "Disabled", link: "/disabled", disabled: true }
  ];

  const footerLinks = [
    { label: "About", url: "/about" },
    { label: "Services", url: "/services" },
    { label: "Contact", url: "/contact" },
    { label: "Privacy Policy", url: "/privacy" },
  ];

  const socialLinks = [
    { iconClass: "fab fa-facebook-f", url: "https://facebook.com" },
    { iconClass: "fab fa-twitter", url: "https://twitter.com" },
    { iconClass: "fab fa-instagram", url: "https://instagram.com" },
    { iconClass: "fab fa-linkedin-in", url: "https://linkedin.com" },
  ];

  const heroProps = {
    backgroundImage: "assets/images/readcherryblossom.jpg",
    heading: "Innovating Across Industries Manufacturing & IT Solutions",
    subheading:
      "From CNC machining to AI-powered applications, we provide cutting-edge solutions for modern businesses.",
    buttons: [
      { label: "Explore Manufacturing", to: "/manufacturing" },
      { label: "Discover AI-Powered Solutions", to: "/ai-solutions" },
      { label: "Get Expert Digital Marketing", to: "/digital-marketing" },
    ],
  };

  return (
    <>
      <Header logoSrc="assets/icons/ravynresizeddarkred.svg" title="Ravyn Technologies" />
      <CustomNavbar menuItems={menuItems} />
      <main>
        <Routes>
          <Route path="/" element={<>
          <Hero {...heroProps} />  
          <CardsSection sectionTitle="Our Services" cards={cardsData} />
          <LeftHeroSection {...leftHeroProps} /> 
          </>} />
          <Route path="/action" element={<div>Action Page</div>} />
          <Route path="/another-action" element={<div>Another Action Page</div>} />
          <Route path="/something-else" element={<div>Something Else Page</div>} />
          <Route path="/separated" element={<div>Separated Link Page</div>} />
          <Route path="/link" element={<div>Link Page</div>} />
          <Route path="/disabled" element={<div>This should not be accessible</div>} />

          
          <Route path="/about" element={<div>About</div>} />
          <Route path="/services" element={<div>Services</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/privacy" element={<div>Privacy Policy</div>} />

          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer
        logoSrc="assets/icons/ravyn-symbol-white.svg"
        footerLinks={footerLinks}
        socialLinks={socialLinks}
        copyrightText="© 2024 Your Company. All Rights Reserved."
      />
    </>
  );
}

export default App;