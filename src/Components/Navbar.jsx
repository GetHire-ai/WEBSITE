import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from 'react-icons/fa';

function Navbar() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  function openSidebar() {
    setSidebarToggle(!sidebarToggle);
  }

  return (
      <div className="fixed top-0 left-0 w-full bg-white bg-opacity-65 z-50">
        <div className="container mx-auto px-4 py-2 lg:px-12 md:px-8">



          <div className="py-4 flex justify-between items-center">
            {/* Logo at the start */}
            <Link to="#hero" className="flex-none m-0">
              <img src="/gethireai_logo.png" className="h-10 object-cover" alt="GetHireAI Logo" />
            </Link>

            {/* Navigation Items */}
            <div className={`fixed inset-0 sm:bg-transparent sm:flex sm:relative z-40 transition-transform ${sidebarToggle ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}>
              <ul className="flex flex-col sm:flex-row pl-0 items-center sm:gap-6 gap-8 m-0 py-8 sm:py-0 sm:w-auto w-full">
                <li className="list-item">
                  <Link to="/" onClick={() => setSidebarToggle(false)} className="no-underline text-lg text-gray-800 font-semibold py-2 sm:py-0">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <a href="#features" onClick={() => setSidebarToggle(false)}
                     className="no-underline text-lg text-gray-800 font-semibold py-2 sm:py-0">
                    Features
                  </a>
                </li>
                <li className="list-item">
                  <a href="#pricing" onClick={() => setSidebarToggle(false)}
                     className="no-underline text-lg text-gray-800 font-semibold py-2 sm:py-0">
                    Pricing
                  </a>
                </li>
                <li className="list-item">
                  <div className="flex flex-row">
                  <a href="https://wa.me/917000901605?text=Hi%20Naman,%0AI'm%20a%20recruiter%20and%20I'd%20like%20to%20learn%20more%20about%20gethire.ai.%20When%20can%20we%20connect?"
                     className="no-underline text-lg text-gray-800 font-semibold"
                     target="_blank"
                     rel="noopener noreferrer">
                    Get Help
                  </a><FaWhatsapp className="h-5 w-5 my-1 ml-2"/>
                  </div>
                </li>
              </ul>
            </div>

            {/* Join Waitlist Button */}
            <div className="flex-none hidden sm:flex">
              <Link to="/join-waitlist" className="no-underline">
                <button
                    className="bg-[#FFA500] hover:bg-[#FF8C00] rounded-full text-white font-light px-4 py-2 transition-colors duration-300 ease-in-out">
                  Join Waitlist
                </button>
              </Link>
            </div>

            {/* Sidebar toggle button */}
            <div className="flex sm:hidden">
              <button onClick={openSidebar} className="text-2xl">
              <i className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;