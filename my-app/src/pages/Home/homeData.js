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
    }
  };
  
  export default homeData;
  