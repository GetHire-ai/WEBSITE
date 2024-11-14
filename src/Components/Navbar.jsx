import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

function Navbar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  function toggleSidebar() {
    setSidebarToggle(!sidebarToggle);
  }

  return (
      <div className="fixed top-0 left-0 w-full bg-white bg-opacity-65 z-50">
        <div className="container mx-auto px-4 py-2 lg:px-12 md:px-8">
          <div className="py-4 flex justify-between items-center">
            {/* Logo */}
            <Link to="#hero" className="flex-none m-0">
              <img
                  src="/gethireai_logo.png"
                  className="h-10 object-cover"
                  alt="GetHireAI Logo"
              />
            </Link>

            {/* Navigation Items */}
            <div
                className={`fixed inset-0 bg-white sm:bg-transparent sm:relative sm:flex sm:translate-x-0 z-40 transition-transform ${
                    sidebarToggle ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <button
                  className="absolute top-4 right-4 text-2xl sm:hidden"
                  onClick={toggleSidebar}
              >
                <i className="fa fa-times"></i>
              </button>
              <ul className="flex flex-col sm:flex-row items-center sm:gap-6 gap-8 py-8 sm:py-0 sm:w-auto w-full">
                <li>
                  <a
                      href="#home"
                      onClick={toggleSidebar}
                      className="no-underline text-lg text-gray-800 font-semibold"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                      href="#features"
                      onClick={toggleSidebar}
                      className="no-underline text-lg text-gray-800 font-semibold"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                      href="#pricing"
                      onClick={toggleSidebar}
                      className="no-underline text-lg text-gray-800 font-semibold"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <a
                        href="https://wa.me/917000901605?text=Hi%20Naman,%0AI'm%20a%20recruiter%20and%20I'd%20like%20to%20learn%20more%20about%20gethire.ai.%20When%20can%20we%20connect?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline text-lg text-gray-800 font-semibold"
                    >
                      Get Help
                    </a>
                    <FaWhatsapp className="h-5 w-5 ml-2" />
                  </div>
                </li>
              </ul>
            </div>

            {/* Join Waitlist Button */}
            {/*<div className="flex">*/}
            {/*  <Link to="/join-waitlist" className="no-underline">*/}
            {/*    <button className="bg-[#FFA500] hover:bg-[#FF8C00] rounded-full text-white font-light px-4 py-2 transition-colors duration-300">*/}
            {/*      Join Waitlist*/}
            {/*    </button>*/}
            {/*  </Link>*/}
            {/*</div>*/}

            {/* Sidebar toggle button */}
            <div className="flex sm:hidden">
              <button onClick={toggleSidebar} className="text-2xl">
                <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;