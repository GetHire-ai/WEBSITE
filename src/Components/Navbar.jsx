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
          <div className="flex justify-between items-center">
            {/* Logo at the start */}
            <Link to="/" className="flex-none m-0">
              <img src="/gethireai_logo.png" className="h-10 object-cover" alt="GetHireAI Logo" />
            </Link>

            {/* Navigation Items */}
            <div className={`fixed inset-0 sm:bg-transparent sm:flex sm:relative z-40 transition-transform ${sidebarToggle ? "translate-x-0" : "translate-x-full sm:translate-x-0"}`}>
              <ul className="flex flex-col sm:flex-row pl-0 items-center sm:gap-6 gap-8 m-0 py-8 sm:py-0 sm:w-auto w-full">
                <li className="list-item">
                  <Link to="/" onClick={() => setSidebarToggle(false)} className="no-underline py-2 sm:py-0">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/feature" onClick={() => setSidebarToggle(false)} className="no-underline text-gray-900 py-2 sm:py-0">
                    Features
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/pricing" onClick={() => setSidebarToggle(false)} className="no-underline py-2 sm:py-0">
                    Pricing
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/help" onClick={() => setSidebarToggle(false)} className="no-underline flex items-center py-2 sm:py-0">
                    Get Help <FaWhatsapp className="ml-2" />
                  </Link>
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