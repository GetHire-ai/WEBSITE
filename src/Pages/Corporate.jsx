import React, {useEffect} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CorporateFeatures from "../Components/CorporateFeatures";
import CorporateCarousel from "./CorporateCarousel";

// Import images
import FAQs from "../Components/FAQs";
import CorporateHeroSection from "../Components/CorporateHeroSection";
import CorporateAISection from "../Components/CorporateAISection";
import CorporateTrustSection from "../Components/CorporateTrustSection";
import CorporatePricing from "../Components/CorporatePricing";

const Corporate = () => {
    useEffect(() => {
        document.title = "GetHireAI - #1 AI-Powered Recruitment in India";
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Existing Navbar */}
            <Navbar/>
            <CorporateHeroSection/>
            <CorporateCarousel/>

            <CorporateTrustSection/>
            <CorporateFeatures/>
            <CorporateAISection/>
            <CorporatePricing/>

            {/* FAQ Section */}
            <FAQs/>
            <Footer/>

            <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
        </div>
    );
};

export default Corporate;