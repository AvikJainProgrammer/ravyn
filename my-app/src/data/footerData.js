import ROUTES from "../constants/routes";

const footerData = {
    logoSrc: "assets/icons/ravyn-symbol-white.svg",
    footerLinks: [
      { label: "About", url: ROUTES.ABOUT },
      { label: "Services", url: ROUTES.SERVICES_PAGE },
      { label: "Contact", url: ROUTES.CONTACT },
      { label: "Privacy Policy", url: ROUTES.PRIVACY },
    ],
    // TODO : add social media
    socialLinks: [
      // { iconClass: "fab fa-facebook-f", url: "https://facebook.com" },
      // { iconClass: "fab fa-twitter", url: "https://twitter.com" },
      // { iconClass: "fab fa-instagram", url: "https://instagram.com" },
      { iconClass: "fab fa-linkedin-in", url: "https://www.linkedin.com/company/ravyn-technologies" },
    ],
    copyrightText: "© 2025 Ravyn Technologies. All Rights Reserved."
  };
  
  export default footerData;