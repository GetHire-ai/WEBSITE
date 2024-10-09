import React, { useState } from "react";
// import burger from "../Assets/Hamburger_icon.svg.png";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./header.css";

function Navbar() {
  const [modal, setModal] = useState(false);
  // const navigate = useNavigate();
  const [toggleSideBar, setSidebarToggle] = useState(false);

  function openSidebar() {
    setSidebarToggle(!toggleSideBar);
  }

  // const [isDropdownOpen, setDropdownOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setDropdownOpen(!isDropdownOpen);
  // };

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
      {/* <div
        className="overlay"
        onClick={() => {
          openSidebar();
        }}
        style={toggleSideBar ? { bottom: 0 } : { bottom: "100%" }}
      ></div> */}
      <div className="sm:container px-[50px] w-full">
        <div className="flex justify-between items-center xl:gap-[50px] lg:gap-[14px] py-[14px] max-w-[90%] m-auto mt-[30px] w-full home-header xl:px-[80px] lg:px-[20px] px-[20px]">
          <Link to="/" className="flex xl:flex-1 lg:flex-none m-0">
            <img src="/assets/home/logo.svg" className="h-[60px] object-cover" alt="" />
          </Link>
          <div
            className={`sub-header sm:relative flex xl:flex-1 lg:flex-none justify-center fixed sm:rounded-none ${
              toggleSideBar ? "top-[60px]" : "top-[-100vh] sm:top-0"
            }`}
          >
            <div className="sm:pt-0 pt-[30px] sm:bg-transparent bg-[#000000] sm:pb-0 pb-[30px]">
              <ul className="flex sm:flex-row pl-0 flex-col items-center sm:gap-[20px] gap-[30px] m-0">
                {/* <li className="list-item">
                  <Link
                    onClick={() => setSidebarToggle(false)}
                    to="/"
                    className="no-underline font-lato font-[600] text-[18px] text-[#4b5563]"
                  >
                    Home
                  </Link>
                </li> */}
                <li className="list-item">
                  <a
                    href="/"
                    onClick={() => setSidebarToggle(false)}
                    className="no-underline font-lato font-[600] text-[18px] text-[#4b5563]"
                  >
                    Company
                  </a>
                </li>
                <li className="list-item">
                  <a
                    onClick={() => setSidebarToggle(false)}
                    href="/pricing"
                    className="no-underline font-lato font-[600] text-[18px] text-[#4b5563]"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex xl:flex-1 lg:flex-none sm:hidden justify-end gap-[46px]">
            <button onClick={() => openSidebar()} className="bras-btn">
              <i className="fa fa-regular fa-bars"></i>
            </button>
          </div>
          <ul className="sm:flex hidden xl:flex-1 lg:flex-none justify-end pl-0 gap-[20px] m-0 ">
            <li className="list-item">
              <button
                onClick={LoginSignUp}
                className="font-lato cursor-pointer font-[500] leading-[24px] text-[16px] duration-300 ease-in text-[#1C6F4D] hover:text-[#FFFFFF] hover:bg-[#1C6F4D] bg-[#FFFFFF] py-[10px] px-[42px] rounded-[30px] border hover:border-[#FFFFFF] border-transparent"
              >
                Login/Signup
              </button>
            </li>
          </ul>
          {/* <div className="demo">
            <ul className="m-0">
              <li className="no-underline font-lato font-[600] text-[18px] text-[#000000]">
                For Candidates
              </li>
              <li className="no-underline font-lato font-[600] text-[18px] text-[#000000]">
                Log in
              </li>
              <li>
                <button onClick={() => setModal(true)}>Book a Demo</button>
              </li>
            </ul>
            <img alt="hum" className="hum" src={burger} />
          </div> */}
        </div>
      </div>
        {/* <div className="nav">
          <div className="logo-ul">
            <div className="logo">
              <p>logo</p>
            </div>
            <div className="firstul">
              <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Resources</li>
                <li>Our Customers</li>
                <li class="dropdown">
                  <button>TECHNOLOGIES</button>

                  <div class="dropdown-content">
                    <a href="#">Technology 1</a>
                    <a href="#">Technology 2</a>
                    <a href="#">Technology 3</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="demo">
            <ul>
              <li>For Candidates</li>
              <li>Log in</li>
              <li>
                <button onClick={() => setModal(true)}>Book a Demo</button>
              </li>
            </ul>
          </div>
          <img className="hum" src={burger} />
        </div> */}

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
