// src/pages/Home/homeData.js

const homeData = {
    heroProps: {
      backgroundImage: "assets/images/readcherryblossom.jpg",
      heading: "Innovating Across Industries Manufacturing & IT Solutions",
      subheading:
        "From CNC machining to AI-powered applications, we provide cutting-edge solutions for modern businesses.",
      buttons: [
        { label: "Explore Manufacturing", to: "/manufacturing" },
        { label: "Discover AI-Powered Solutions", to: "/ai-solutions" },
        { label: "Get Expert Digital Marketing", to: "/digital-marketing" },
      ],
    },
    leftHeroProps: {
      title: "Why Choose Ravyn Technologies ?",
      subtitle:
        "Innovative solutions, precision engineering, and technology-driven results—Ravyn Technologies delivers cutting-edge manufacturing, AI solutions, and digital growth strategies to power your business forward. With a commitment to quality, efficiency, and reliability, we ensure that every solution meets the highest industry standards.",
      buttonText: "Let’s Discuss Your Project",
      buttonLink: "/discuss-project", // React Router path for the button
      imageSrc: "assets/images/trust.jpg",
      imageAlt: "Hero Image",
    },
    cardsData: [
      {
        title: "Data Automation",
        imageSrc: "assets/images/data-engieering.jpg",
        alt: "Service 1",
        link: "/data-automation",
      },
      {
        title: "Custom Chatbot",
        imageSrc: "assets/images/chatbot-image.jpg",
        alt: "Service 2",
        link: "/custom-chatbot",
      },
      {
        title: "Data Visualization & Reporting",
        imageSrc: "assets/images/dashboard-images.jpg",
        alt: "Service 3",
        link: "/data-visualization",
      },
      {
        title: "Search Engine Optimization",
        imageSrc: "assets/images/seo-image.jpg",
        alt: "Service 4",
        link: "/seo",
      },
      {
        title: "Pay-Per-Click Advertising",
        imageSrc: "assets/images/ppc-image.jpg",
        alt: "Service 5",
        link: "/ppc-advertising",
      },
      {
        title: "Custom Web & App Development",
        imageSrc: "assets/images/website-design-image.jpg",
        alt: "Service 6",
        link: "/web-app-development",
      },
      {
        title: "Precision Metal Manufacturing",
        imageSrc: "assets/images/precision-metal-manufacturing.jpg",
        alt: "Service 7",
        link: "/metal-manufacturing",
      },
      {
        title: "PCB Manufacturing & Assembly",
        imageSrc: "assets/images/pcb-manufacturing.jpg",
        alt: "Service 8",
        link: "/pcb-manufacturing",
      },
      {
        title: "Semiconductor Procurement Solutions",
        imageSrc: "assets/images/semi-couductors.jpg",
        alt: "Service 9",
        link: "/semiconductor-procurement",
      },
    ],
  };
  
  export default homeData;
  