import React, { useState } from "react";
// import burger from "../Assets/Hamburger_icon.svg.png";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import img from '../Assets/Homepage-carousels.jpg';
import "./header.css";

function Navbar() {
  const [modal, setModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); 

  const handleMouseEnter = (dropdown) => {
    setOpenDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  function openSidebar() {
    setSidebarToggle(!sidebarToggle);
  }

  function LoginSignUp() {
    window.location.href = "https://gethire-enployer.vercel.app/login";
  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileNo: "",
    technology: "",
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    fetch("https://kstraining-server.vercel.app/api/lead/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          email: "",
          mobileNo: "",
          technology: "",
        });
        toggleModal();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* Full-width image */}
      {/* <div className="w-full">
        <img src={img} className="w-full h-[150px] object-cover" alt="Header" />
      </div> */}

      {/* Navbar */}
      <div className="sm:container px-[50px] w-full">
        <div className="flex justify-between items-center xl:gap-[50px] lg:gap-[14px] py-[14px] max-w-[90%] m-auto mt-[30px] w-full home-header xl:px-[80px] lg:px-[20px] px-[20px]">
          {/* Logo at the start */}
          <Link to="/" className="flex-none m-0">
            <img src="/assets/home/logo.svg" className="h-[40px] object-cover" alt="GetHire Logo" />
          </Link>

          {/* Centered Navbar Items */}
          <div className={`sub-header sm:relative flex justify-center flex-grow ${sidebarToggle ? "top-[60px]" : "top-[-100vh] sm:top-0"}`}>
            <div className="sm:pt-0 pt-[30px] sm:bg-transparent bg-[#ffffff] sm:pb-0 pb-[30px]">
              <ul className="flex sm:flex-row pl-0 flex-col items-center sm:gap-[20px] gap-[30px] m-0">
                <li className="list-item">
                  <Link to="/" onClick={() => setSidebarToggle(false)} className="no-underline font-lato font-[600] text-[18px] text-[#f6f7f8]">
                    Home
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/feature" onClick={() => setSidebarToggle(false)} className="no-underline font-lato font-[600] text-[18px] text-[#eeeff0]">
                    Features
                  </Link>
                </li>
                <li className="list-item">
                  <Link to="/pricing" onClick={() => setSidebarToggle(false)} className="no-underline font-lato font-[600] text-[18px] text-[#4b5563]">
                    Pricing
                  </Link>
                </li>

                {/* Account Dropdown */}
                <li
                  className="list-item relative"
                  onMouseEnter={() => handleMouseEnter('account')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a onClick={() => setSidebarToggle(false)} className="no-underline font-lato font-[600] text-[18px] text-[#4b5563]">
                    Account
                  </a>

                  {/* Account Dropdown Menu */}
                  {openDropdown === 'account' && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                      <li>
                        <a onClick={LoginSignUp} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                          Candidate Login
                        </a>
                      </li>
                      <li>
                        <a onClick={LoginSignUp} className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                          Employers Login
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Get Help Dropdown */}
                <li
                  className="list-item relative"
                  onMouseEnter={() => handleMouseEnter('getHelp')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a onClick={() => setSidebarToggle(false)} className="no-underline font-lato font-[600] text-[18px] text-[#4b5563]">
                    Get Help
                  </a>

                  {/* Get Help Dropdown Menu */}
                  {openDropdown === 'getHelp' && (
                    <ul className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                      <li>
                        <Link to="/blog" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <a className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                          Support
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>

          {/* Get Started Button at the end */}
          <div className="flex-none">
            <Link to="/" onClick={() => setSidebarToggle(false)} className="no-underline font-lato font-[400] text-[12px] text-[#f6f7f8]">
              <button className="bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300">
                Get Started
              </button>
            </Link>
          </div>

          {/* Sidebar toggle button */}
          <div className="flex xl:flex-1 lg:flex-none sm:hidden justify-end gap-[46px]">
            <button onClick={() => openSidebar()} className="bras-btn">
              <i className="fa fa-regular fa-bars"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Contact Us */}
      <Modal size="lg" isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Contact Us</ModalHeader>
        <ModalBody>
          <div className="contactus">
            <div className="cont-ip">
              <label>Full Name</label>
              <input
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="cont-ip">
              <label>Email</label>
              <input
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="cont-ip">
              <label>Mobile No.</label>
              <input
                name="mobileNo"
                placeholder="Enter Your Mobile no."
                value={formData.mobileNo}
                onChange={handleChange}
              />
            </div>
            <div className="cont-ip">
              <label>Technology</label>
              <input
                name="technology"
                placeholder="Technology"
                value={formData.technology}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </ModalBody>
      </Modal>
    </>
  );
}

export default Navbar;
