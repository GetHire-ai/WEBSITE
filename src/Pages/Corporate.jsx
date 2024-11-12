import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CorporateFeatures from "./CorporateFeatures";
import CorporateCrousel from "./CorporateCrousel";

// Import images
import frameImage from '../Assets/Frame-1618872965.png';
import FAQs from "../Components/FAQs";

const Corporate = () => {

  // Inline script for Calendly
  function loadCalendlyScript() {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.type = "text/javascript";
    script.async = true;
    script.onload = function () {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/grao8/intro-to-gethireai-1-ats-software-for-recruiters',
        text: 'Book a Demo',
        color: '#295ec9',
        textColor: '#ffffff'
      });
    };
    document.body.appendChild(script);
  }

  // UseEffect to run the script only once on component mount
  React.useEffect(() => {
    const existingScript = document.getElementById("calendly-script");
    if (!existingScript) {
      loadCalendlyScript();
    }
  }, []);

  return (
      <div className="min-h-screen bg-white">
        {/* Existing Navbar */}
        <Navbar/>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-48">
          <div className="text-center">
          <span className="text-[#295EC9] text-sm font-normal mb-4 block">
            AI-Powered Recruitment
          </span>
            <h1 className="text-[#2d3135] text-4xl md:text-5xl font-black mb-12 max-w-4xl mx-auto">
              Revolutionizing Recruitment with AI<br/>
              Hire Top Talent in Under
              <span className="text-[#295EC9]"> 24 Hours</span>
            </h1>
            <p className="text-[#2d3135] text-sm font-light max-w-2xl mx-auto mb-12">
              Experience the future of hiring with our AI-driven platform that
              rapidly sources, screens, interviews, and evaluates candidates
              tailored to your exact requirements—streamlining your recruitment
              process in a single day.
            </p>

            {/* Contact Form */}
            <div className="flex justify-center items-center gap-4">
              {/*<div className="flex max-w-[330px] w-full items-center border border-gray-300 py-2.5 px-3.5 rounded">*/}
              {/*  <span className="w-[30%]">IN +91</span>*/}
              {/*  <input*/}
              {/*      type="text"*/}
              {/*      className="w-full font-normal text-base focus:outline-none"*/}
              {/*      placeholder="Enter your contact number"*/}
              {/*  />*/}
              {/*</div>*/}
              <button className="bg-[#316EDC] hover:bg-[#295EC9] rounded-full text-white font-bold  px-3 py-2">
                Book a Demo
              </button>
              <button className="bg-[#316EDC] hover:bg-[#295EC9] rounded-full text-white font-bold  px-3 py-2">
                {/*  Add Calendly Button Here */}
              </button>
            </div>
          </div>
        </section>


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
                  {/* Calendly Badge Placement */}
                  <div id="calendly-badge-2" className="calendly-badge-widget"
                       data-url="https://calendly.com/grao8/intro-to-gethireai-1-ats-software-for-recruiters"
                       style={{minWidth: '230px', height: '28px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CorporateFeatures/>

        {/* FAQ Section */}
        <FAQs/>
        <Footer/>
      </div>
  );
};

export default Corporate;