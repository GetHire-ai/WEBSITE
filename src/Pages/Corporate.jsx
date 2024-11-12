import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CorporateFeatures from "./CorporateFeatures";
import CorporateCarousel from "./CorporateCarousel";

// Import images
import FAQs from "../Components/FAQs";
import CorporateHeroSection from "../Components/CorporateHeroSection";
import CorporateAISection from "../Components/CorporateAISection";
import CorporateTrustSection from "../Components/CorporateTrustSection";

const Corporate = () => {

  return (
      <div className="min-h-screen bg-white">
        {/* Existing Navbar */}
        <Navbar/>
        <CorporateHeroSection/>
        <CorporateCarousel/>

          <CorporateTrustSection/>
          <CorporateFeatures/>
          <CorporateAISection/>


        {/* FAQ Section */}
        <FAQs/>
        <Footer/>

        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      </div>
  );
};

export default Corporate;