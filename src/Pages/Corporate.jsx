import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CorporateNavbar from "./CorporateNavbar";
import CorporateCrousel from "./CorporateCrousel";

// Import images
import brandingImage from '../Assets/Frame-1618872977.png';
import colorBorder from '../Assets/colorborder-1.png';
import iconImage from '../Assets/icon2.png';
import frameImage from '../Assets/Frame-1618872965.png';

const Corporate = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
      <div className="min-h-screen bg-white">
        <Navbar />

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-48">
          <div className="text-center">
          <span className="text-[#297bca] text-sm font-normal mb-4 block">
            World's #1st AI Recruiter
          </span>
            <h1 className="text-[#2d3135] text-4xl md:text-5xl font-black mb-12 max-w-4xl mx-auto">
              Revolutionizing Recruitment with AI<br />
              Hire Top Talent in Under
              <span className="text-[#297bca]"> 24 Hours</span>
            </h1>
            <p className="text-[#2d3135] text-sm font-light max-w-2xl mx-auto mb-12">
              Experience the future of hiring with our AI-driven platform that
              rapidly sources, screens, interviews, and evaluates candidates
              tailored to your exact requirements—streamlining your recruitment
              process in a single day.
            </p>

            {/* Contact Form */}
            <div className="flex justify-center items-center gap-4">
              <div className="flex max-w-[330px] w-full items-center border border-gray-300 py-2.5 px-3.5 rounded">
                <span className="w-[30%]">IN +91</span>
                <input
                    type="text"
                    className="w-full font-normal text-base focus:outline-none"
                    placeholder="Enter your contact number"
                />
              </div>
              <button className="bg-[#008fbf] text-white py-3 px-9 rounded-lg font-bold hover:bg-[#28607E] transition-colors">
                Start Hiring
              </button>
            </div>
          </div>
        </section>

        <CorporateCrousel />

        {/* Trust Section */}
        <section className="py-16 px-5 sm:px-24">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Businesses Across India Trust
            <span className="text-[#297bca] font-bold"> Gethire.ai</span>
          </h2>
        </section>

        {/* AI Section */}
        <section className="mx-5 sm:mx-20 mb-20">
          <div className="bg-gradient-to-r from-[#e1f7f7] via-[#f0e9f7] to-[#f0fdf9] rounded-lg p-20 relative">
            <div className="grid sm:grid-cols-5 gap-8 items-start relative z-10">
              {/* Content */}
              <div className="sm:col-span-3">
                <img src={frameImage} className="w-14 h-14 mb-4" alt="AI Icon" />
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

                {/* Contact Form */}
                <div className="flex items-center gap-4 mt-6">
                  <div className="flex max-w-[330px] w-full items-center py-2.5 px-3.5 rounded border hover:border-sky-500 transition-colors shadow-md hover:shadow-lg">
                    <span className="w-[30%]">IN +91</span>
                    <input
                        type="text"
                        className="w-full outline-none bg-transparent"
                        placeholder="Enter your contact number"
                    />
                  </div>
                  <button className="bg-[#008fbf] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#28607E] transition-colors whitespace-nowrap">
                    Start Hiring
                  </button>
                </div>
              </div>

              {/* Images */}
              <div className="sm:col-span-2 relative">
                <img src={iconImage} className="w-10 h-10 absolute -top-14 right-24" alt="Icon" />
                <div className="relative">
                  <img src={colorBorder} className="w-60 h-50 -mt-16" alt="Border" />
                  <img src={brandingImage} className="w-70 h-60 absolute top-12 right-7" alt="Branding" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <CorporateNavbar />

        {/* FAQ Section */}
        <section className="max-w-3xl mx-auto mt-16 px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#3e3e3e]">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b border-gray-200">
              <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full flex justify-between items-center py-3"
              >
                <div className="flex items-center gap-10">
                  <span className="text-2xl text-gray-500 font-medium">01</span>
                  <h3 className="text-xl font-medium">
                    Is Career Counsellor+ a replacement for a real career counselor?
                  </h3>
                </div>
                <i className={`fas fa-angle-down transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`transition-all duration-300 ${isDropdownOpen ? 'max-h-40 pb-4' : 'max-h-0'} overflow-hidden`}>
                <p className="text-gray-700">
                  While Career Counsellor offers valuable AI-powered guidance and insights,
                  it cannot fully replace the personalized interaction and touch of a real career counselor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="m-4 sm:m-16">
          <div className="bg-gray-50 p-10">
            <div className="text-center">
              <div className="text-4xl font-semibold mb-2">Ready to hire 10X faster?</div>
              <p className="text-lg text-gray-500">We'd love to connect</p>
            </div>
            <div>
              <form className="max-w-md mx-auto pt-4 border-t border-gray-300">
                <div className="grid grid-cols-2 gap-4">
                  <input
                      type="text"
                      placeholder="First Name"
                      className="p-4 border rounded"
                  />
                  <input
                      type="text"
                      placeholder="Last Name"
                      className="p-4 border rounded"
                  />
                  <div className="col-span-2">
                    <div className="flex bg-white border rounded">
                      <span className="p-4">IN +91</span>
                      <input
                          type="text"
                          placeholder="Enter your contact number"
                          className="w-full p-4 outline-none"
                      />
                    </div>
                  </div>
                  <input
                      type="email"
                      placeholder="Email"
                      className="col-span-2 p-4 border rounded"
                  />
                  <input
                      type="text"
                      placeholder="Company Name"
                      className="col-span-2 p-4 border rounded"
                  />
                </div>
                <button className="w-full mt-4 bg-[#008fbf] text-white py-3 px-9 rounded font-bold hover:bg-[#28607E] transition-colors">
                  Book Demo
                </button>
              </form>
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Corporate;