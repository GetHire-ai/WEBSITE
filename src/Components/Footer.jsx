import React from "react";
import {Link} from "react-router-dom";
import {FaEnvelope, FaPhone, FaWhatsapp} from 'react-icons/fa';

function Footer() {
  return (
      <footer className="bg-gray-900 text-white px-4">
        <div className="container flex flex-col md:flex-row lg:flex-row justify-between items-center">

          {/* Logo and Contact */}
          <div className="my-8 text-left w-full sm:w-auto gap-1">


            <div className="flex flex-col gap-1">
              <div className="self-center">
                <Link to="/" className="block">
                  <img
                      src="/gethireai_logo_dark.png"
                      alt="Gethire AI Logo"
                      className="h-16"
                  />
                </Link>
              </div>
              <div className="m-1 text-md text-gray-200 font-semibold">#1 AI-Powered Recruitment in India</div>
            </div>

            <div className="flex flex-col gap-1 my-8 mx-2">
              <div className="text-xl font-semibold">Let's Connect</div>
              <div className="flex flex-row my-1 gap-2 text-center">
                <FaEnvelope className="h-5 w-5"/>
                <a href="mailto:info@gethire.ai" className="no-underline text-sm text-gray-50">info@gethire.ai</a>
              </div>
              <div className="flex gap-2">
                <FaWhatsapp className="h-5 w-5"></FaWhatsapp>
                <a href="https://wa.me/917000901605?text=Hi%20Naman,%0AI'm%20a%20recruiter%20and%20I'd%20like%20to%20learn%20more%20about%20gethire.ai.%20When%20can%20we%20connect?"
                   className="no-underline text-sm text-gray-50"
                   target="_blank"
                   rel="noopener noreferrer">
                  +91 7000901605
                </a>
              </div>
            </div>

            <div className="flex justify-center sm:justify-start space-x-8 mb-6">
              {["fa-instagram", "fa-linkedin-in", "fa-facebook", "fa-twitter"].map((icon, index) => (
                  <Link key={index} to="" className="text-2xl">
                    <i className={`fa-brands ${icon}`}></i>
                  </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 sm:gap-x-16">
            <div>
              <h6 className="text-lg font-semibold mb-4">Learn More</h6>
              <ul className="space-y-3">
                {["Leadership", "Talent Intelligence Platform", "Careers", "Contact us", "Responsive AI at Eightfold", "Glossary"].map((item, index) => (
                    <li key={index}>
                      <Link to="#" className="text-sm font-poppins text-white no-underline">{item}</Link>
                    </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="text-lg font-semibold mb-4">Privacy & Legal</h6>
              <ul className="space-y-3">
                {["Privacy policy", "Governance", "Cookie notice"].map((item, index) => (
                    <li key={index}>
                      <Link to="#" className="text-sm font-poppins text-white no-underline">{item}</Link>
                    </li>
                ))}
              </ul>
            </div>
          </div>


        </div>
          <div className="mx-auto mt-8 pb-2 text-center justify-center">
            <p className="text-sm font-poppins">©2024 GetHireAI®. All rights reserved worldwide.</p>
          </div>
      </footer>
  );
}

export default Footer;