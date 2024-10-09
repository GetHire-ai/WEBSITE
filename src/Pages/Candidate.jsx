import React from "react";
import Navbar from "../Components/Navbar";
import CanSlider from "../Components/CanSlider";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

function Candidate() {
  return (
    <>
      <Navbar />
      <div className="bg-[#f4f2f6]">
        <div className="container">
          <div className="pt-[240px] pb-[30px]">
            <h6 className="font-[700] pb-[20px] font-[Inter] text-[20px] leading-[22px] text-[#297bca]">
              INDIA’S #1 JOB PLATFORM
            </h6>
            <h6 className="font-[700] font-[Inter] text-[56px] leading-[67px] text-[#000000]">
              Your job search ends here
            </h6>
            <p className="text-[24px] font-[400] leading-[26px] mt-[18px] mb-[55px]">
              Discover 50 lakh+ career opportunities
            </p>
            <div className="search-body">
              <div className="flex items-center gap-[16px]">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  className="text-[#d1d1d1] text-[18px] font-[400] leading-[22px] border-r border-[#d1d1d1]"
                  placeholder="Search jobs by 'skill'"
                  name=""
                  id=""
                />
              </div>
              <div className="flex items-center px-[30px] gap-[16px]">
                <i className="fa-solid fa-location-dot"></i>
                <input
                  type="text"
                  className="text-[#d1d1d1] text-[18px] font-[400] leading-[22px]"
                  placeholder="Search jobs by 'skill'"
                  name=""
                  id=""
                />
              </div>
              <button className="bg-[#008fbf] text-[#FFFFFF] py-[15px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                Search jobs
              </button>
            </div>
          </div>
        </div>
        <div className="pt-[160px] pb-[64px]">
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
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
                    Swarup DAS has fixed
                    <br /> an interview
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
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.02))",
              }}
              className="py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #1
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px]">
                Jobs for Freshers
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                Jobs for Freshers
              </h6>
              <div className="h-[180px] w-[180px] absolute right-0 bottom-0">
                <img src="/assets/home/item2.webp" alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px]">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.02))",
              }}
              className="py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #2
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px]">
                Work from home Jobs
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                Work from home Jobs
              </h6>
              <div className="h-[180px] w-[180px] absolute right-0 bottom-0">
                <img src="/assets/home/item2.webp" alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px]">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.02))",
              }}
              className="py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #3
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px]">
                Part time Jobs
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                Part time Jobs
              </h6>
              <div className="h-[180px] w-[180px] absolute right-0 bottom-0">
                <img src="/assets/home/item2.webp" alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px]">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.02))",
              }}
              className="py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #4
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px]">
                Jobs for Women
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                Jobs for Women
              </h6>
              <div className="h-[180px] w-[180px] absolute right-0 bottom-0">
                <img src="/assets/home/item2.webp" alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px]">
                View all <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(145deg, rgb(255, 255, 255), rgba(0, 0, 0, 0.02))",
              }}
              className="py-[42px] px-[27px] overflow-hidden relative rounded-[24px] border-[1px] border-[#e5e7eb]"
            >
              <h6 className="font-[Inter] text-[16px] font-[400] leading-[26px] m-0 text-[#8c8594]">
                TRENDING AT #5
              </h6>
              <h6 className="font-[Inter] text-[24px] font-[700] leading-[28px] mb-0 mt-[36px]">
                International Jobs
              </h6>
              <h6
                style={{ textShadow: "0px 0px 2px #000" }}
                className="font-[Inter] absolute left-[75px] top-[40%] text-[#FFFFFF] text-[64px] opacity-[0.3] whitespace-nowrap font-[700] mb-0"
              >
                International Jobs
              </h6>
              <div className="h-[180px] w-[180px] absolute right-0 bottom-0">
                <img src="/assets/home/item2.webp" alt="" />
              </div>
              <button className="flex items-center px-[18px] py-[10px] gap-[10px] font-[600] font-[Inter] text-[18px] leading-[26px] mt-[100px]">
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
          <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
            Search Now
          </button>
        </div>
        <div className="flex flex-col gap-[48px] overflow-hidden mt-[56px]">
          <div className="line-loop-container !py-0">
            <div className="line-loop flex items-center gap-[50px]">
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[22px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[22px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
            </div>
          </div>
          <div className="line-loop-container !py-0 !ml-[50px]">
            <div className="line-loop flex items-center gap-[50px]">
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[22px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[22px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
              <div
                style={{ boxShadow: "-6px 9px 34px #d5d5d540" }}
                className="px-[32px] py-[16px] max-w-[250px] w-full border border-[#F0F1F2] flex flex-col items-center justify-center bg-[#FFFFFF] gap-[9px]"
              >
                <h6 className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#190a28] mb-0">
                  Software Engineer
                </h6>
                <p className="font-[Poppins] text-[16px] font-[500] leading-[26px] text-center text-[#8c8594] mb-0">
                  3423 openings
                </p>
              </div>
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
              <button className="bg-[#008fbf] text-[#FFFFFF] py-[12px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                Find Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[48px]">
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
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[6px] px-[12px] rounded-[40px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
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
