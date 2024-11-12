import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CorporateFeatures from "./CorporateFeatures";
import CorporateCrousel from "./CorporateCrousel";

// Import images
import frameImage from '../Assets/Frame-1618872965.png';
import FAQs from "../Components/FAQs";
import CorporateHeroSection from "../Components/CorporateHeroSection";

const Corporate = () => {

  return (
      <div className="min-h-screen bg-white">
        {/* Existing Navbar */}
        <Navbar/>
        <CorporateHeroSection/>
        <CorporateCrousel/>

        {/* Trust Section */}
        <section className="py-16 px-5 sm:px-24">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Businesses Across India Trust
            <span className="text-[#295EC9] font-bold">gethire.ai</span>
          </h2>
        </section>

        {/* AI Section */}
        <section className="mx-5 sm:mx-20 mb-20">
          <div className="bg-gradient-to-r from-[#e1f7f7] via-[#f0e9f7] to-[#f0fdf9] rounded-lg p-20 relative">
            <div className="grid sm:grid-cols-5 gap-8 items-start relative z-10">
              <div className="sm:col-span-3">
                <img src={frameImage} className="w-14 h-14 mb-4" alt="AI Icon"/>
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold">
                    Use <span className="bg-gradient-to-r from-[#ff7e5f] to-[#86a8e7] bg-clip-text text-transparent">
                  Advanced AI
                </span> To Make Hiring Smoother & Faster
                  </h2>
                  <p className="text-2xl text-gray-600">
                    Experience Lightning-Fast Hiring with Gethire.ai
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <button className="bg-[#008fbf] text-white rounded-xl hover:bg-[#316EDC] whitespace-nowrap">
                    Button a Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CorporateFeatures/>

        {/* FAQ Section */}
        <FAQs/>
        <Footer/>

        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"/>
      </div>
  );
};

export default Corporate;