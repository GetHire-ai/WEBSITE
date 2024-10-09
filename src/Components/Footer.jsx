import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex sm:flex-row flex-col justify-between items-start">
          <div>
            <div className="bg-[#FFFFFF] px-[20px] py-[10px] rounded-[6px]">
              <Link to="/" className="m-0">
                <img
                  src="/assets/home/logo.svg"
                  className="h-[60px] object-cover"
                  alt=""
                />
              </Link>
            </div>
            <p className="text-[#FFFFFF] font-[Poppins] pt-[10px]">
              World’s #1st AI Recruitment Platform
            </p>
            <h6 className="text-[#FFFFFF] text-[24px] pb-[16px] font-[500] pt-[10px]">
              Let's Connect
            </h6>
            <div className="flex gap-[10px] items-center pb-[20px]">
              <i className="fa-regular fa-envelope text-[#FFFFFF] text-[24px]"></i>
              <p className="mb-0 font-[Poppins] text-[#FFFFFF]">
                info@gethire.ai  
              </p>
            </div>
            <div className="flex gap-[10px] items-center pb-[20px]">
              <i className="fa-solid fa-phone text-[#FFFFFF] text-[24px]"></i>
              <p className="mb-0 font-[Poppins] text-[#FFFFFF]">
                +91 7000901605 
              </p>
            </div>
            <div className="flex items-center gap-[36px]">
              <Link to="">
                <i className="fa-brands fa-instagram text-[#FFFFFF] text-[36px]"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-linkedin-in text-[#FFFFFF] text-[36px]"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-facebook text-[#FFFFFF] text-[36px]"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-twitter text-[#FFFFFF] text-[36px]"></i>
              </Link>
            </div>
            <p className="pt-[30px] font-[Poppins] text-[#FFFFFF]">
              ©2024 Gethire AI ® . All rights reserved worldwide.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[80px] gap-[40px]">
            <div>
              <h6 className="text-[#FFFFFF] font-[Poppins] font-[500] text-[22px] pb-[26px]">
                Learn More
              </h6>
              <ul className="m-0 p-0 flex flex-col gap-[20px]">
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Leadership
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Talent Intelligence Platform
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Careers
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Contact us
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Responsive AI at Eightfold
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Glossary
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h6 className="text-[#FFFFFF] font-[Poppins] font-[500] text-[22px] pb-[26px]">
                Privacy & Legal
              </h6>
              <ul className="m-0 p-0 flex flex-col gap-[20px]">
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Privacy policy
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Governance
                  </Link>
                </li>
                <li className="font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                  <Link className="no-underline font-[Poppins] text-[#FFFFFF] text-[16px] font-[400]">
                    Cookie notice
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="footer-top">
          <div className="f1">
            <div className="logo">
              <Link to="/" className="m-0">
                <img
                  src="/assets/home/logo.svg"
                  className="h-[60px] object-cover"
                  alt=""
                />
              </Link>
            </div>
            <br />
            <h3>Mission</h3>
            <br />
            <p>
              We are a social enterprise on a mission to accelerate the
              regeneration of nature. We enable companies to gift trees that are
              brought back in the heart of Africa. Easily, at scale, and with an
              epic customizable gifting experience.
            </p>
            <br />
            <h4>Sign up for Our Newsletter</h4>
            <br />
            <div className="footerinput">
              {" "}
              <input placeholder="Enter your email" />
              <button>Sign Up</button>
            </div>
          </div>
          <div className="f2">
            <ul>
              Pages
              <li>Plateform</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Our Customers</li>
              <li>Event</li>
            </ul>
          </div>
          <div className="f3">
            <h5>Registration for sponsorship & collaboration</h5>
            <br /> <button>REGISTER</button>
            <br />
            <br />
            <h3>Contact Info</h3>
            <br />
            <h2>+4863154859</h2>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>Terms and condition</li>
            <li>Privacy policy</li>
            <li>All rights reserved gethire.ai..</li>
          </ul>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
