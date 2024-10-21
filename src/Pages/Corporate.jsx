import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { img1 } from "../Assets/1.webp";
import "../Components/header.css";
import CorporateNavbar from "./CorporateNavbar";
import Pricing from './Pricing'
import CorporateCrousel from "./CorporateCrousel";
// import img2 from '../Assets/img-main-768x510.png'
import img2 from '../Assets/Frame-1618872977.png'
import img3 from '../Assets/colorborder-1.png'
import img4 from '../Assets/icon1.png'
import img5 from '../Assets/icon2.png'
import img6 from '../Assets/icon3.png'
import img7 from '../Assets/Frame-1618872965.png'


function Corporate() {

  const [dropdown, setDropdown] = useState(false);
  const [isHovered, setIsHovered] = useState(false); 
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleVideoClick = () => {
    setIsClicked(!isClicked);
  };

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="container-corporate">
        <div className="pt-[196px]">
          <p className="text-[#297bca] mb-[16px] text-center font-[Poppins] font-[400] text-[14px] leading-[20px]">
            World’s #1st AI Recruiter
          </p>
          <h1 className="max-w-[980px] text-center font-[Poppins] text-[#2d3135] text-[46px] font-[900] leading-[56px] w-full pb-[48px] mx-auto">
            Revolutionizing Recruitment with AI <br />
            Hire Top Talent in Under
            <span className="text-[#297bca]">24 Hours</span>
          </h1>
          <p className="font-[Poppins] max-w-[680px] mx-auto w-full text-[14px] mb-[48px] font-[300] leading-[21px] text-[#2d3135] text-center">
            Experience the future of hiring with our AI-driven platform that
            rapidly sources, screens, interviews, and evaluates candidates
            tailored to your exact requirements—streamlining your recruitment
            process in a single day.
          </p>
          <div className="flex justify-center items-center gap-[16px]">
            <div className="flex max-w-[330px] w-full items-center border py-[10px] px-[14px] rounded-[6px] border-[#d1d4d7] gap-[10px]">
              <p className="w-[30%]">IN&nbsp; +91</p>
              <input
                type="text"
                className="w-full font-[Poppins] text-[16px] font-[400] leading-[16px]"
                placeholder="Enter your contact number"
              />
            </div>
            <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
              Start Hiring
            </button>
          </div>
        </div>
      </div>

      <div className=" bg-gradient-to-b from-white via-[#d7f8fd] to-[#ffffff] py-[100px] px-[70px] relative flex flex-col items-center ">
        <div
          onClick={handleVideoClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`transition-transform duration-500 ease-in-out ${isHovered && !isClicked ? 'transform rotate-6 scale-60' : ''
            }}`}
        >
          <video
            controls
            className="max-w-[70%] z-10 relative w-full m-auto rounded-[10px] shadow-[0_-20px_70px_0_rgba(135,206,235,0.7)]"
          >
            <source
              src="https://gsblob.blob.core.windows.net/webpage-goodspace/GoodSpace%20Demo%20Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      {/* <div className="h-[160px]"></div>
        <div
          style={{ boxShadow: "0 0 10px #0000001a" }}
          className="max-w-[90%] m-auto w-full h-[60%] p-[20px] rounded-[10px] bg-[#f1f4f7] absolute bottom-0 overflow-hidden"
        >
          <div className={`line-loop-container !absolute`}>
            <div className="line-loop flex items-center gap-[14px]">
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              HDFC bank
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Times of india
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Edelweiss
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Infobeans
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Theka coffee
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              retvens
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              aman travels
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              protons hub
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              protons hub
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              vishal builders
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              white elephant 
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Nutrisure
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Tuchware pvt ltd
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
              Ashutosh financial serviceypvt ltd
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
            </div>
          </div>
        </div> */}

      <CorporateCrousel />
      <div className="pt-[0px] sm:px-[100px] px-[20px]">
        <h6 className="mb-[48px] font-[Poppins] text-[32px] font-[600] leading-[48px] text-center">
          Why Businesses Across India Trust <br />
          <span className="text-[#297bca] font-[700]">Gethire.ai</span>
        </h6>
        {/* <div className="flex justify-center items-center">
          <button
            onClick={() => setBtn("AI Finder")}
            className={`py-[10px] border-b-[2px] px-[40px] font-[Poppins] text-[16px] leading-[24px] ${
              btn === "AI Finder"
                ? "text-[#297bca] border-[#297bca] font-[600]"
                : "text-[#899197] font-[400] border-transparent"
            }`}
          >
            AI Finder
          </button>
          <button
            onClick={() => setBtn("AI Shortlister")}
            className={`py-[10px] border-b-[2px] px-[40px] font-[Poppins] text-[16px] leading-[24px] ${
              btn === "AI Shortlister"
                ? "text-[#297bca] border-[#297bca] font-[600]"
                : "text-[#899197] font-[400] border-transparent"
            }`}
          >
            AI Shortlister
          </button>
          <button
            onClick={() => setBtn("AI Interviewer")}
            className={`py-[10px] border-b-[2px] px-[40px] font-[Poppins] text-[16px] leading-[24px] ${
              btn === "AI Interviewer"
                ? "text-[#297bca] border-[#297bca] font-[600]"
                : "text-[#899197] font-[400] border-transparent"
            }`}
          >
            AI Interviewer
          </button>
          <button
            onClick={() => setBtn("AI Evaluator")}
            className={`py-[10px] border-b-[2px] px-[40px] font-[Poppins] text-[16px] leading-[24px] ${
              btn === "AI Evaluator"
                ? "text-[#297bca] border-[#297bca] font-[600]"
                : "text-[#899197] font-[400] border-transparent"
            }`}
          >
            AI Evaluator
          </button>
        </div>
        <div className="mt-[32px]">
          {btn === "AI Finder" && (
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[200px] gap-[20px] items-center">
              <div className="w-full pl-[75px] pb-[90px]">
                <h6 className="get-text pb-[15px] mb-[15px] text-[48px] font-[700] leading-[48px] border-b-[2px] border-[#d1d4d7]">
                  AI Finder
                </h6>
                <p className="text-[#6c757d] mb-[30px] text-justify text-[15px] font-[400] leading-[24px] w-[90%]">
                  AI Finder employs state-of-the-art algorithms to search our
                  database of over 10 million+ active job seekers, sourcing
                  candidates that are actively looking for the role you are
                  hiring for.
                </p>
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                  Sort Hiring
                </button>
              </div>
              <div>
                <img
                  src="/assets/home/photo13.png"
                  className="h-[476px]"
                  alt=""
                />
              </div>
            </div>
          )}
          {btn === "AI Shortlister" && (
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[200px] gap-[20px] items-center">
              <div className="w-full pl-[75px] pb-[90px]">
                <h6 className="get-text pb-[15px] mb-[15px] text-[48px] font-[700] leading-[48px] border-b-[2px] border-[#d1d4d7]">
                  AI Shortlister
                </h6>
                <p className="text-[#6c757d] mb-[30px] text-justify text-[15px] font-[400] leading-[24px] w-[90%]">
                  AI Shortlister leverages advanced analytics to accurately
                  evaluate candidates against 50+ parameters, ensuring only the
                  most qualified applicants are prioritized for further
                  consideration.
                </p>
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                  Sort Hiring
                </button>
              </div>
              <div>
                <img
                  src="/assets/home/photo13.png"
                  className="h-[476px]"
                  alt=""
                />
              </div>
            </div>
          )}
          {btn === "AI Interviewer" && (
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[200px] gap-[20px] items-center">
              <div className="w-full pl-[75px] pb-[90px]">
                <h6 className="get-text pb-[15px] mb-[15px] text-[48px] font-[700] leading-[48px] border-b-[2px] border-[#d1d4d7]">
                  AI Interviewer
                </h6>
                <p className="text-[#6c757d] mb-[30px] text-justify text-[15px] font-[400] leading-[24px] w-[90%]">
                  AI Interviewer conducts live video interviews with shortlisted
                  candidates, delving into their suitability, motivation, and
                  enthusiasm for the position; identifying candidates who are
                  not only qualified but genuinely interested in the role.
                </p>
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                  Sort Hiring
                </button>
              </div>
              <div>
                <img
                  src="/assets/home/photo13.png"
                  className="h-[476px]"
                  alt=""
                />
              </div>
            </div>
          )}
          {btn === "AI Evaluator" && (
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[200px] gap-[20px] items-center">
              <div className="w-full pl-[75px] pb-[90px]">
                <h6 className="get-text pb-[15px] mb-[15px] text-[48px] font-[700] leading-[48px] border-b-[2px] border-[#d1d4d7]">
                  AI Finder
                </h6>
                <p className="text-[#6c757d] mb-[30px] text-justify text-[15px] font-[400] leading-[24px] w-[90%]">
                  AI Finder employs state-of-the-art algorithms to search our
                  database of over 10 million+ active job seekers, sourcing
                  candidates that are actively looking for the role you are
                  hiring for.
                </p>
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                  Sort Hiring
                </button>
              </div>
              <div>
                <img
                  src="/assets/home/photo13.png"
                  className="h-[476px]"
                  alt=""
                />
              </div>
            </div>
          )}
        </div> */}
      </div>

      {/* <div className="flex flex-col">
        <div className="sticky-section bg-[#FFFFFF] flex flex-row justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#297bca] font-museo">
              Post Jobs Instantly with Precision Hiring
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#6c757d] mb-[10px]">
              At Gethire.ai, your hiring needs are our top priority. Simply
              define your requirements, and we'll handle the rest, ensuring you
              receive the best candidates tailored specifically to your
              needs—fast and efficiently.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/photo1.png"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>

        <div className="sticky-section1 bg-[#FFFFFF] flex flex-row-reverse justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#FFFFFF] font-museo">
              Maximize Your Reach with 2,500+ Job Channels
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#FFFFFF] mb-[10px]">
              Effortlessly distribute your job listings across 2,500+ free and
              premium platforms, including top local, global, and niche sites
              like Indeed, LinkedIn, Monster, CareerJet, JobStreet, and more.
              Ensure your openings reach the right talent, wherever they are.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/photo20.png"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>
        <div className="sticky-section bg-[#FFFFFF] flex flex-row justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#297bca] font-museo">
              Receive shortlisted Candidates in Just One Day
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#6c757d] mb-[10px]">
              Sit back and relax as our platform rapidly sources and shortlists
              high-quality candidates tailored to your needs. Let us do the
              heavy lifting so you can focus on what matters most.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/photo2.png"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>
        <div className="sticky-section1 bg-[#FFFFFF] flex flex-row-reverse justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#FFFFFF] font-museo">
              AI Interviewer
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#FFFFFF] mb-[10px]">
              Our AI conducts thorough one-on-one interviews with candidates,
              covering all essential parameters and questions. This ensures that
              only the most qualified candidates are presented to you,
              simplifying and streamlining the recruiter’s task. for.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/photo2.png"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>
        <div className="sticky-section bg-[#FFFFFF] flex flex-row justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#297bca] font-museo">
              AI-Driven Recommendations
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#6c757d] mb-[10px]">
              Our AI engine streamlines the hiring process by intelligently
              recommending the best candidates for each role, while automating
              repetitive tasks, saving you time and effort.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/photo21.png"
              className="w-auto h-[75%] object-cover relative bottom-[-26%]"
            />
          </div>
        </div>
        <div className="sticky-section1 bg-[#FFFFFF] flex flex-row-reverse justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#FFFFFF] font-museo">
              AI-Enhanced Candidate Onboarding & Placement Management
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#FFFFFF] mb-[10px]">
              Leverage our AI-powered platform to effortlessly track and manage
              every new hire from offer letter to onboarding and beyond.
              Customize onboarding milestones to match your unique process,
              ensuring a seamless and personalized experience for each
              candidate.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/photo22.png"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>
      </div> */}
<div className="bg-gradient-to-r from-[#baf0f2] via-[#e8d5f8] to-[#d0f4e9] rounded-[10px] pt-[100px] px-[80px] relative z-10 ml-20 mr-20 mb-20">
  <div className="grid sm:grid-cols-5 grid-cols-1 items-start relative z-10">
    {/* Left Side Content */}
    <div className="sm:col-span-3 col-span-1 flex flex-col items-start pb-20">
      <img src={img7} className="w-14 h-14" alt="Icon" />
      <h2 className="font-[Poppins] font-[500] text-[40px] leading-[50px] mt-2">
        Experience Lightning-Fast Hiring with Gethire.ai
      </h2>
      <div className="flex mt-2 items-center gap-4">
  <div className="flex max-w-[330px] w-full items-center py-[10px] px-[14px] rounded-[6px] transition-colors duration-300 shadow-md hover:shadow-lg gap-[10px] border border-transparent hover:border-sky-500">
    <p className="w-[30%]">IN&nbsp; +91</p>
    <input
      type="text"
      className="w-full font-[Poppins] outline-none bg-transparent text-[16px] font-[400] leading-[16px] focus:border-transparent focus:ring-0 hover:border-sky-500 transition-colors duration-300"
      placeholder="Enter your contact number"
    />
  </div>



        <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[24px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E] whitespace-nowrap">
  Start Hiring
</button>
      </div>
     
    </div>

    {/* Right Side Background Images */}
    <div className="corporate-img sm:col-span-2 col-span-1 flex justify-end items-start relative mt-[-20px]">
    <img src={img5} className="w-10 h-10 " style={{ marginTop: '-55px', marginRight:'100px' }}/>
      <div className="relative">
        
        <img src={img3} className="w-60 h-50" style={{ marginTop: '-70px' }} alt="Background 1" />
        <img src={img2} className="w-70 h-60 absolute top-0 right-7 mt-[50px]" alt="Background 2" />
      </div>
    </div>
  </div>
</div>


<div>
  <CorporateNavbar />
</div>



      {/* <div className="w-full pt-[100px]">
        <img
          alt=""
          src="assets/home/photo5.png" 
          className="w-full object-cover"
        />

      </div> */}

      <div className="bg-gradient-to-r from-blue-300 to-gray-300 rounded-[100px] pt-[100px]">
        <div className="max-w-[1370px] flex flex-col items-center m-auto w-full">
          <div className="max-w-[760px] w-full m-auto">
            <h2 className="text-[46px] mb-[24px] font-[700] font-museo leading-[55.2px] text-[#FFFFFF] text-center">
              Strengthen Your Employer Brand with Our
              <span>Careers Page</span> Solutions
            </h2>
            <p className="text-[#ffffffbf] text-[18px] leading-[24px] font-[400] font-museo text-center">
              Create or update your branded careers page with Gethire.ai to
              effectively showcase your company culture and attract top talent.
              Stand out and draw in the right candidates with a compelling,
              professional page.
            </p>
          </div>
          <div className="py-[60px]">
            <img alt="" src="assets/home/img4.webp" />
          </div>
          <div className="pt-[60px] w-full">
            <div className="grid grid-cols-4 w-full">
              <div className="career-box flex items-center flex-col gap-[14px]">
                <img alt="" src="assets/home/icon2.svg" className="m-auto" />
                <h3 className="text-center font-[500] leading-[24px] text-[18px] font-museo text-[#FFFFFF]">
                  Customized <br /> careers page{" "}
                </h3>
              </div>
              <div className="career-box flex items-center flex-col gap-[14px]">
                <img alt="" src="assets/home/icon3.svg" className="m-auto" />
                <h3 className="text-center font-[500] leading-[24px] text-[18px] font-museo text-[#FFFFFF]">
                  Plug & play job widget <br /> for your website{" "}
                </h3>
              </div>
              <div className="career-box flex items-center flex-col gap-[14px]">
                <img alt="" src="assets/home/icon4.svg" className="m-auto" />
                <h3 className="text-center font-[500] leading-[24px] text-[18px] font-museo text-[#FFFFFF]">
                  Beautiful and easy <br /> to design{" "}
                </h3>
              </div>
              <div className="career-box flex items-center flex-col gap-[14px]">
                <img alt="" src="assets/home/icon5.svg" className="m-auto" />
                <h3 className="text-center font-[500] leading-[24px] text-[18px] font-museo text-[#FFFFFF]">
                  No coding <br /> required{" "}
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-[40px] pb-[48px]">
            <button className="bg-[#FFFFFF] transition-all duration-300 hover:bg-[#E8E8E8] text-[#008fbf] py-[15px] px-[36px] rounded-[30px] font-museo text-[16px] font-[700]">
              Build my career page
            </button>
          </div>
        </div>
      </div>
      <div className="pt-[40px]">
        <h6 className="font-[Poppins] pb-[30px] text-center font-[700] text-[44px] leading-normal mb-[20px] text-[#3e3e3e]">
          What’s new at SmartRecruiters
        </h6>
        <div className="container">
          <div className="grid grid-cols-3 gap-[20px]">
            <div className="">
              <img src="/assets/home/photo17.jpg" alt="" />
              <h6 className="font-[Poppins] pt-[26px] pb-[10px] font-[600] text-[16px] leading-[24px] text-[#000000]">
                Future-Proof Talent Acquisition
              </h6>
              <p className="pb-[30px] font-[Poppins] text-[14px] leading-[22px] text-[#000000]">
                Get thought-provoking data and perspectives from global talent
                leaders on five key trends for 2024.
              </p>
              <button className="text-[#FFFFFF] bg-[#238740] rounded-[8px] font-[600] text-[20px] text-center py-[14px] px-[34px]">
                Get eBook
              </button>
            </div>
            <div className="">
              <img src="/assets/home/photo18.jpg" alt="" />
              <h6 className="font-[Poppins] pt-[26px] pb-[10px] font-[600] text-[16px] leading-[24px] text-[#000000]">
                The Definitive Guide to Hiring Success
              </h6>
              <p className="pb-[30px] font-[Poppins] text-[14px] leading-[22px] text-[#000000]">
                Get the essential guide to talent acquisition effectiveness,
                updated for 2024.
              </p>
              <button className="text-[#FFFFFF] bg-[#238740] rounded-[8px] font-[600] text-[20px] text-center py-[14px] px-[34px]">
                Get eBook
              </button>
            </div>
            <div className="">
              <img src="/assets/home/photo18.jpg" alt="" />
              <h6 className="font-[Poppins] pt-[26px] pb-[10px] font-[600] text-[16px] leading-[24px] text-[#000000]">
                Human-Centric Hiring in the Age of Automation and Integration
              </h6>
              <p className="pb-[30px] font-[Poppins] text-[14px] leading-[22px] text-[#000000]">
                Learn how to harness automation, AI, and integrations for
                efficient, personalized hiring experiences.
              </p>
              <button className="text-[#FFFFFF] bg-[#238740] rounded-[8px] font-[600] text-[20px] text-center py-[14px] px-[34px]">
                Get eBook
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] sm:mx-[60px] mx-[14px] sm:mt-[80px] mt-[30px]">
        <div className="bg-[#f1f4f7] relative rounded-[10px] py-[40px] px-[70px]">
          <div className="">
            <h2 className="py-[32px] font-[Poppins] font-[900] text-[56px] leading-[66px]">
              Experience the
              <span className="text-[#297bc9]"> Gethire.ai</span>
              <br />
              app on mobile
            </h2>
            <div className="max-w-[450px] flex justify-center w-full rounded-[10px] bg-[#FFFFFF] py-[10px]">
              <img src="/assets/home/qr.png" className="h-[180px]" alt="" />
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <img src="/assets/home/photo16.png" alt="" />
          </div>
        </div>
      </div>
      {/* <div>
        <Pricing/>
      </div> */}
      <div className="max-w-[75%] w-full mx-auto mt-[60px]">
        <h6 className="font-[Poppins] text-center font-[700] text-[44px] leading-normal mb-[20px] text-[#3e3e3e]">
          FAQ
        </h6>
        <div className="flex flex-col px-[20px] py-[10px]">
          <div className="flex flex-col border-b border-[#e5e7eb]">
            <div
              onClick={toggleDropdown}
              className="flex justify-between py-[12px] items-center"
            >
              <div className="flex items-center gap-[40px]">
                <h6 className="font-[Poppins] font-[500] text-[24px] text-[#3c3c4399]">
                  01
                </h6>
                <h6 className="font-[Poppins] my-[12px] text-[#000000] text-[20px] font-[500] leading-norma;">
                  Is Career Counsellor+ a replacement for a real career
                  counselor?
                </h6>
              </div>
              <i
                className={`fa-solid fa-angle-down text-[#172b4d] transition-all duration-300 ${dropdown ? "rotate-[-180deg]" : "rotate-[0deg]"
                  }`}
              ></i>
            </div>
            <div
              className={`duration-300 transition-all ${dropdown ? "h-[58px] pb-[16px]" : "h-[0px] pb-[0px]"
                } overflow-hidden`}
            >
              <p className="font-[Poppins] text-[#363f4a] font-[400] text-[16px] leading-normal">
                While Career Counsellor offers valuable AI-powered guidance and
                insights, it cannot fully replace the personalized interaction
                and touch of a real career counselor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:m-[60px] m-[14px]">
        <div className="sm:p-[40px] p-[20px] rounded-[10px] bg-[#f1f4f7]">
          <h6 className="text-[40px] font-[600] leading-[40px] text-[#2d3135] mb-[10px] text-center">
            Ready to hire 10X faster?
          </h6>
          <p className="text-[18px] font-[500] leading-[26px] mb-[10px] text-[#899197] text-center">
            We’d love to connect
          </p>
          <div className="max-w-[418px] w-full mx-auto pt-[16px] border-t border-[#D1D4D7]">
            <div className="grid grid-cols-2 gap-[16px]">
              <input
                type="text"
                className="font-[Poppins] text-[12px] font-[400] leading-[16px] border border-[#d1d4d7] rounded-[6px] bg-[#FFFFFF] py-[16px] px-[24px]"
                placeholder="First Name"
              />
              <input
                type="text"
                className="font-[Poppins] text-[12px] font-[400] leading-[16px] border border-[#d1d4d7] rounded-[6px] bg-[#FFFFFF] py-[16px] px-[24px]"
                placeholder="Last Name"
              />
              <div className="sm:col-span-2 col-span-1">
                <div className="flex bg-[#FFFFFF] w-full items-center border py-[10px] px-[14px] rounded-[6px] border-[#d1d4d7] gap-[10px]">
                  <p className="w-[30%]">IN&nbsp; +91</p>
                  <input
                    type="text"
                    className="w-full font-[Poppins] text-[16px] outline-none font-[400] leading-[16px]"
                    placeholder="Enter your contact number"
                  />
                </div>
              </div>
              <div className="sm:col-span-2 col-span-1">
                <input
                  type="email"
                  className="font-[Poppins] w-full text-[12px] font-[400] leading-[16px] border border-[#d1d4d7] rounded-[6px] bg-[#FFFFFF] py-[16px] px-[24px]"
                  placeholder="Email"
                />
              </div>
              <div className="sm:col-span-2 col-span-1">
                <input
                  type="text"
                  className="font-[Poppins] w-full text-[12px] font-[400] leading-[16px] border border-[#d1d4d7] rounded-[6px] bg-[#FFFFFF] py-[16px] px-[24px]"
                  placeholder="Company Name"
                />
              </div>
            </div>
            <button className="bg-[#008fbf] mt-[16px] text-[#FFFFFF] py-[12px] px-[36px] w-full rounded-[6px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
              Book Demo
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Corporate;
