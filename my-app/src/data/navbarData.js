const navbarData = {
    menuItems: [
      { label: "Home", link: "/" },
      {
        label: "Services",
        dropdown: [
          { label: "Data Automation", link: "/data-automation" },
          { label: "Custom Chatbot", link: "/custom-chatbot" },
          { label: "Data Visualization & Reporting", link: "/data-visualization" },
          { label: "SEO", link: "/seo" },
          { label: "Pay-Per-Click Advertising", link: "/ppc-advertising" },
          { label: "Custom Web & App Development", link: "/web-app-development" },
          { label: "Precision Metal Manufacturing", link: "/metal-manufacturing" },
          { label: "PCB Manufacturing & Assembly", link: "/pcb-manufacturing" },
          { label: "Semiconductor Procurement Solutions", link: "/semiconductor-procurement" },
        ]
      },
      { label: "About", link: "/about" },
      { label: "Contact", link: "/contact" }
    ]
  };
  
  export default navbarData;
  