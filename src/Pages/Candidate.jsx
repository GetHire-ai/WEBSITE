import React from "react";
import Navbar from "../Components/Navbar";
import CanSlider from "../Components/CanSlider";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import searchimg from '../Assets/resume-in-hand-with-magnifier-search-for-professional-worker-analysing-of-resume-recruitment-human-resource-management-concept-illustration-vector.jpg'
import searchimg1 from '../Assets/bg.png'
import searchimg2 from '../Assets/businessman-walking-on-cubes-with-text-career-symbol-to-reach-shiny-star-career-growth-and-development-concept-illustration-vector.jpg'
import searchimg3 from '../Assets/DALL·E-2024-01-14-17.34.55-Create-a-minimalist-illustration-representing-an-AI-Cover-Letter-Generator.-The-image-should-depict-elements-such-as-a-humanoid-robot-writing-a-.webp'
import candidate from '../Assets/girls-png-2.png'
import searchimg5 from '../Assets/iTECH-Dysart-1200.jpg'
import JobCard from "./JobCard";

function Candidate() {
  const jobs = [
    { title: "Software Engineer", openings: 3423 },
    { title: "Data Scientist", openings: 1200 },
    { title: "Product Manager", openings: 780 },
    { title: "Software Engineer", openings: 3423 },
    { title: "Data Scientist", openings: 1200 },
    { title: "Product Manager", openings: 780 },
    { title: "Software Engineer", openings: 3423 },
    { title: "Data Scientist", openings: 1200 },
    { title: "Product Manager", openings: 780 },
  ];
  const jobs1 = [
    { title: "Software Engineer", openings: 3423 },
    { title: "Data Scientist", openings: 1200 },
    { title: "Product Manager", openings: 780 },
    { title: "Software Engineer", openings: 3423 },
    { title: "Data Scientist", openings: 1200 },
    { title: "Product Manager", openings: 780 },
    { title: "Software Engineer", openings: 3423 },
    { title: "Data Scientist", openings: 1200 },
    { title: "Product Manager", openings: 780 },
  ];
  const hoverColors = [
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffcccc]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#d4ffd8]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#d6f0ff]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffd6eb]', 
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffd6b2]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#e6dbf2]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#fff1cc]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#c6ffd8]', 
    'hover:bg-gradient-to-r from-[#ffffff] to-[#f1d1ff]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffc6b3]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#e8fff2]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffedc4]'   
  ];
  const borderColors = [
    'border-[#ff6666]',   // Light Red
    'border-[#66ff66]',   // Light Green
    'border-[#6666ff]',   // Light Blue
    'border-[#ff66cc]',   // Pink
    'border-[#ffcc66]',   // Light Orange
    'border-[#cc66ff]',   // Lavender
    'border-[#99ff66]',   // Light Lime
    'border-[#ff66ff]',   // Purple
    'border-[#66ffcc]',   // Aqua Green
    'border-[#ff9966]',   // Peach
  ];
  
  const hoverColors1 = [
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ff9999]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#99ff99]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#9999ff]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ff99cc]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffcc66]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#b3b3ff]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ccff66]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ff99ff]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#66ffcc]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ff9966]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ccffcc]',  
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffcc99]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#99ccff]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ff99b3]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#ffff99]',   
    'hover:bg-gradient-to-r from-[#ffffff] to-[#99ffff]',   
  ];
  
  // const colors = ['bg-[#e3e0e0]', 'bg-[#d6d0ff]', 'bg-[#f9c2c2]', 'bg-[#c2f9f9]', 'bg-[#c2f2d9]'];
  // const colors1 = ['bg-[#ffdddd]', 'bg-[#d1ffd1]', 'bg-[#ffffd1]', 'bg-[#d1d1ff]', 'bg-[#ffcccb]', 'bg-[#ffebcd]', 'bg-[#ffe4e1]', 'bg-[#d0f0c0]'];
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-blue-400 via-slate-300 to-blue-200">
        <div className="container">
          <div className="flex items-center justify-between mx-24">
            <div className="w-1/2">
              <h6 className="font-[700] pb-[20px] font-[Inter] text-[20px] leading-[22px] text-[#295EC9] ">
                INDIA’S #1 JOB PLATFORM
              </h6>
              <h6 className="font-[700] font-[Inter] text-[56px] leading-[67px] text-[#000000]">
                Your job search ends here
              </h6>
              <p className="text-[24px] font-[400] leading-[26px] mt-[18px] mb-[55px]">
                Discover 50 lakh+ career opportunities
              </p>
              <div className="search-body flex items-center gap-0">
                <div className="flex items-center gap-[8px]">
                  <i className="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    className="text-[#d1d1d1] text-[18px] font-[400] leading-[22px] border-b border-[#d1d1d1] focus:outline-none"
                    placeholder="Search jobs by 'skill'"
                  />
                </div>
                <div className="flex items-center gap-[8px]">
                  <i className="fa-solid fa-location-dot"></i>
                  <input
                    type="text"
                    className="text-[#d1d1d1] text-[18px] font-[400] leading-[22px] border-b border-[#d1d1d1] focus:outline-none"
                    placeholder="Search jobs by 'area'"
                  />
                </div>
                <button className="bg-[#008fbf] text-[#FFFFFF] px-[36px] p-2 rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#316EDC]">
                  Search jobs
                </button>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={candidate}
                alt="Job Search"
                className="w-full ml-10 mt-56 object-cover"
              />
            </div>
          </div>
        </div>
        <div className=" pb-[64px] ">
          <div className="line-loop-container">
            <div className="line-loop flex items-center gap-[50px]">
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    jonh has fixed
                    <br /> an interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    neha has fixed
                    <br /> an interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    Ram has selected
                    <br /> in interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    Siya has been
                    <br /> shortlisted
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    shiv got
                    <br />  the job
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    gori has been passed
                    <br /> in interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    siyaram DAS has fixed
                    <br /> an interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    ganga has fixed
                    <br /> an interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    samar has fixed
                    <br /> an interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    bhola has been selected
                    <br /> for job
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    sunny has fixed
                    <br /> an interview
                  </span>
                </div>
              </div>
              <div className="p-[14px] max-w-[240px] w-full rounded-full flex items-center bg-[#FFFFFF] gap-[9px]">
                <div className="h-[44px] w-[44px] rounded-full">
                  <img
                    src="/assets/home/item1.webp"
                    className="w-full object-cover h-[44px] rounded-full"
                    alt=""
                  />
                </div>
                <div className="max-w-[160px] overflow-hidden w-full">
                  <span className="font-[Inter] text-[14px] font-[600] leading-[16px] m-0">
                    suman Biswas got
                    <br /> job 3 hours ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[100px] px-[18px]">
        <div className="container">
          <div className="grid grid-cols-3 gap-[16px]">
            <div>
              <h6 className="font-[700] text-[56px] leading-[67px] font-[Inter]">
                Popular Searches on Gethire.ai
              </h6>
            </div>

            {/* Box 1 */}
            <div
              className=" search-img group py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb] hover:border-[#ff7f50] hover:bg-[#f4b9a4] hover:bg-opacity-30 focus:border-[#ff4500] hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #1
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px] text-[#8c8594] group-hover:text-[#ff4500]">
                Ai Resume Builder
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                AI RESUME BUILDER
              </h6>
              <div className="w-[180px] absolute right-0 bottom-0">
                <img src={searchimg1} alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px] bg-[#ffffff] hover:bg-[#ff4500] border-[#e2884c] transition-colors duration-300 group-hover:bg-[#ff4500]">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            {/* Box 2 */}
            <div
              className="group py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb] hover:border-[#87ceeb] hover:bg-[#c4d9ed] focus:border-[#4682b4] hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #2
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px] text-[#8c8594] group-hover:text-[#4682b4]">
                Resume Analyser
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                resume analyser
              </h6>
              <div className="w-[180px] absolute right-0 bottom-0">
                <img src={searchimg} alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px] bg-[#ffffff] border-[#e2884c] transition-colors duration-300 group-hover:bg-[#4682b4] group-hover:text-white">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            {/* Box 3 */}
            <div
              className="group py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb] hover:border-[#90ee90] hover:bg-[#d6f5d3] focus:border-[#68da68] hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #3
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px] text-[#8c8594] group-hover:text-[#68da68]">
                Career Counsellor
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                career counsellor
              </h6>
              <div className=" w-[180px] absolute right-0 bottom-0">
                <img src={searchimg2} alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px] bg-[#ffffff] border-[#e2884c] transition-colors duration-300 group-hover:bg-[#68da68] group-hover:text-white">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            {/* Box 4 */}
            <div
              className="group py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb] hover:border-[#6e4fd3] hover:bg-[#cbd4f1] focus:border-[#324ccd] hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #4
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px] text-[#8c8594] group-hover:text-[#324ccd]">
                Mock Interview
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                mock interview
              </h6>
              <div className=" w-[180px] absolute right-0 bottom-0">
                <img src={searchimg5} alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px] bg-[#ffffff] border-[#e2884c] transition-colors duration-300 group-hover:bg-[#324ccd] group-hover:text-white">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            {/* Box 5 */}
            <div
              className="group py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb] hover:border-[#d6ac57] hover:bg-[#f0e9c3] focus:border-[#e0c557] hover:shadow-xl focus:shadow-2xl transition-shadow duration-300 transform hover:translate-y-[-5px]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #5
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px] text-[#8c8594] group-hover:text-[#e0c557]">
                Ai cover letter generator
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                Ai cover letter generator
              </h6>
              <div className=" w-[180px] absolute right-0 bottom-0">
                <img src={searchimg3} alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px] bg-[#ffffff] border-[#e2884c] transition-colors duration-300 group-hover:bg-[#e0c557] group-hover:text-white">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

          </div>
        </div>
      </div>


      <div className="bg-[#FFFFFF]">
        <div className="container">
          <div className="bg-[#e9f5e8] px-[64px] py-[32px] rounded-[21px] mb-[72px]">
            <div className="grid sm:grid-cols-4 grid-cols-1">
              <div className="flex flex-col items-center">
                <h6 className="text-center font-[Poppins] text-[36px] font-[700] text-[#2d3135] mb-[8px]">
                  <CountUp start={0} end={500} duration={5} />
                  k+
                </h6>
                <p className="font-[400] text-[14px] leading-[24px] text-[#626a72] text-center max-w-[207px] w-full mx-auto font-[Poppins] mb-0 pb-[16px] border-b-[1px] border-[#626a72]">
                  top brands and companies hiring currently
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h6 className="text-center font-[Poppins] text-[36px] font-[700] text-[#2d3135] mb-[8px]">
                  <CountUp start={0} end={200} duration={5} />k+
                </h6>
                <p className="font-[400] text-[14px] leading-[24px] text-[#626a72] text-center max-w-[207px] w-full mx-auto font-[Poppins] mb-0 pb-[16px] border-b-[1px] border-[#626a72]">
                  job seekers actively looking for jobs
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h6 className="text-center font-[Poppins] text-[36px] font-[700] text-[#2d3135] mb-[8px]">
                  <CountUp start={0} end={50000} duration={5} />
                  +
                </h6>
                <p className="font-[400] text-[14px] leading-[24px] text-[#626a72] text-center max-w-[207px] w-full mx-auto font-[Poppins] mb-0 pb-[16px] border-b-[1px] border-[#626a72]">
                  candidates interviewed every 24 hours
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h6 className="text-center font-[Poppins] text-[36px] font-[700] text-[#2d3135] mb-[8px]">
                  <CountUp start={0} end={1000} duration={5} /> +
                </h6>
                <p className="font-[400] text-[14px] leading-[24px] text-[#626a72] text-center max-w-[207px] w-full mx-auto font-[Poppins] mb-0 pb-[16px] border-b-[1px] border-[#626a72]">
                  candidates hired in less than 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
        <h6 className="font-[Poppins] text-[32px] font-[600] leading-[54px] text-center mb-[8px]">
          Find a job that you deserve
        </h6>
        <p className="font-[Poppins] text-[14px] font-[300] leading-[23px] text-center mb-[56px]">
          5 lakh+ top brands are looking for you!
        </p>
        <div className="flex gap-[8px] justify-center items-center">
          <form className="">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Full Stack Developer</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Select Experience</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <form className="">
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Enter Location</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#316EDC]">
            Search Now
          </button>
        </div>
        <div className="flex flex-col gap-[48px] mt-[60px]">
      <div className="line-loop-container">
        <div className="line-loop flex items-center gap-[30px]">
          {jobs.map((job, index) => (
            <JobCard 
              key={index} 
              title={job.title} 
              openings={job.openings} 
              //bgColor={colors1[index % colors1.length]} 
              hoverColor={hoverColors[index % hoverColors.length]} 
            />
          ))}
        </div>
      </div>
      <div className="line-loop-container">
        <div className="line-loop flex items-center gap-[30px]">
          {jobs1.map((job, index) => (
            <JobCard 
              key1={index + jobs1.length} 
              title1={job.title} 
              openings1={job.openings} 
              // borderColor={borderColors[index % borderColors.length]} 
              hoverColor1={hoverColors1[index % hoverColors1.length]} 
            />
          ))}
        </div>
      </div>
          <div className="bg-[#EBF5FF] max-w-[1234px] w-full mx-auto px-[64px] py-[32px] rounded-[21px] flex flex-row justify-between items-center">
            <h1 className="m-0 font-[Poppins] text-[36px] font-[700] leading-[54px] text-[#2d3135]">
              Land your dream job in{" "}
              <span className="text-[#389fff]">24 hours</span>{" "}
            </h1>
            <div className="flex items-center gap-[12px]">
              <div className="flex gap-[16px] items-center border border-[#d1d4d7] px-[14px] rounded-[6px] min-h-[55px] bg-[#FFFFFF]">
                <p className="text-[15px] mb-0 leading-[16px] font-[400]">
                  IN &nbsp; +91
                </p>
                <input
                  type="text"
                  className="text-[15px] outline-none font-[Poppins] leading-[16px] text-[#d1d4d7] font-[400]"
                  placeholder="Enter your contact number"
                />
              </div>
              <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#316EDC]">
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[80px] ">
        <div className="container">
          <div className="grid grid-cols-3 gap-[20px]">
            <div className="">
              <h6 className="font-[900] text-[24px] leading-[31px] text-[#121224] font-[Poppins]">
                Upcoming events and challenges
              </h6>
              <img src="/assets/home/item3.png" alt="" />
            </div>
            <div className="col-span-2">
              <div className="w-full">
                <CanSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(239,237,255,0) 0%, var(--A200, #EFEDFF) 100%)",
        }}
        className="max-w-[1120px] w-full mx-auto my-[48px] pt-[30px] px-[30px] rounded-[20px] border border-[#EFEDFF]"
      >
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[20px] overflow-hidden gap-[50px]">
          <div className="flex items-start gap-[20px]">
            <div className="max-w-[350px] w-full">
              <h6 className="font-[Poppins] text-[22px] leading-[28px] font-[700]">
                Stand out among recruiters with a video profile
              </h6>
              <p className="mt-[10px] text-[#474d6a] mb-0 font-[Poppins] text-[14px] font-[500] leading-[18px]">
                Available for both Android and iOS apps
              </p>
              <div className="flex items-center justify-between pl-[16px] pr-[8px] py-[8px] rounded-full mt-[30px] w-full border border-[#E7E7F1] bg-[#FFFFFF]">
                <input
                  type="text"
                  placeholder="Enter mobile number..."
                  className="outline-none text-[#121224] font-[Poppins] font-[500] text-[14px] leading-[18px]"
                />
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[6px] px-[12px] rounded-[40px] font-museo font-[700] transition-all duration-300 hover:bg-[#316EDC]">
                  Find Jobs
                </button>
              </div>
              <div className="flex mt-[48px] items-center gap-[10px] mb-[41px]">
                <Link to="/">
                  <img src="/assets/home/item4.png" alt="" />
                </Link>
                <Link to="/">
                  <img src="/assets/home/item5.png" alt="" />
                </Link>
              </div>
            </div>
            <div className="border border-[#EFEDFF] gap-[8px] rounded-[8px] max-w-[110px] flex flex-col items-center bg-[#FFFFFF]">
              <img
                src="/assets/home/item6.svg"
                className="px-[14px] pt-[14px]"
                alt=""
              />
              <p className="mb-0 font-[500] text-[12px] text-center leading-[15px] pb-[12px] px-[2px] w-full">
                Scan to download
              </p>
            </div>
          </div>
          <div>
            <img src="/assets/home/item7.png" alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Candidate;
