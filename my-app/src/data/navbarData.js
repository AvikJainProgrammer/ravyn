import ROUTES from "../constants/routes";

const navbarData = {
    menuItems: [
      { label: "Home", link: ROUTES.HOME },
      {
        label: "Services",
        dropdown: [
          { label: "Data Automation", link: ROUTES.SERVICES.DATA_AUTOMATION },
          { label: "Custom Chatbot", link: ROUTES.SERVICES.CUSTOM_CHATBOT },
          { label: "Data Visualization & Reporting", link: ROUTES.SERVICES.DATA_VISUALIZATION },
          { label: "SEO", link: ROUTES.SERVICES.SEO },
          { label: "Pay-Per-Click Advertising", link: ROUTES.SERVICES.PPC_ADVERTISING },
          { label: "Custom Web & App Development", link: ROUTES.SERVICES.WEB_APP_DEVELOPMENT },
          { label: "Precision Metal Manufacturing", link: ROUTES.SERVICES.METAL_MANUFACTURING },
          { label: "PCB Manufacturing & Assembly", link: ROUTES.SERVICES.PCB_MANUFACTURING },
          { label: "Semiconductor Procurement Solutions", link: ROUTES.SERVICES.SEMICONDUCTOR_PROCUREMENT },
        ]
      },
      { label: "About", link: ROUTES.ABOUT },
      { label: "Contact", link: ROUTES.CONTACT }
    ]
  };
  
  export default navbarData;
  