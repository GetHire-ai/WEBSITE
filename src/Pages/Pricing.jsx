import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Pricing() {
  return (
    <>
      <Navbar />
      <div className="bg-[#FFFFFF] pt-[160px] pb-[80px]">
        <div className="max-w-[800px] m-auto">
          <h6 className="text-center font-museo font-[700] text-[64px] leading-[76px] text-[#484B53] pb-[10px] mb-[50px]">
            Hiring plans that meet your
            <span style={{ color: "rgb(41, 123, 202)" }}>
              &nbsp;hiring needs
            </span>
          </h6>
          <p className="max-w-[780px] pb-[50px] m-auto w-full text-center text-[#484B58CC] text-[18px] font-[400] leading-[30.6px]">
            Reduce cost and time in hiring the perfect candidate for your
            organization with a hiring plan that is tailored to your hiring
            requirements!
          </p>
        </div>
        <div className="sm:px-[100px] px-[20px]">
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-[20px]">
            <div className="border border-[#DDDDDD] bg-[#FFFFFF] rounded-[16px] px-[24px] py-[32px] flex flex-col items-center">
              <h6 className="text-center font-[Poppins] font-[700] text-[32px] leading-[36px] mb-[16px] text-[#113455]">
                Basic
              </h6>
              <p className="font-[Poppins] font-[400] px-[12px] py-[16px] text-center text-[14px] leading-[20px] mb-[16px]">
                Ideal for early stage startups or businesses hiring occasionally
              </p>
              <h6 className="text-center font-[Poppins] font-[600] text-[56px] leading-[60px] mb-[40px] mt-[20px] text-[#113455]">
                ₹2000
              </h6>
              <button className="px-[24px] py-[14px] rounded-[6px] font-[600] text-[#FFF] hover:text-[#2570b8] bg-[#2570b8] hover:bg-transparent duration-300 transition-all border-[1px] border-transparent hover:border-[#2570b8] w-full text-[14.4px]">
                Post job now
              </button>
              <ul className="p-0 my-[20px] w-full">
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  1 job post
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  Shortlisted candidates in less than 24 hours
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center opacity-[0.5] gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-xmark text-[#2570b8] text-[20px]"></i>
                  Interviewed candidates with overall fitment score
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center opacity-[0.5] gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-xmark text-[#2570b8] text-[20px]"></i>
                  Job Boost for 10X talent pool
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center opacity-[0.5] gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-xmark text-[#2570b8] text-[20px]"></i>
                  Premium placement for urgent hiring
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center opacity-[0.5] gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-xmark text-[#2570b8] text-[20px]"></i>
                  Instant feedback for employer branding
                </li>
              </ul>
              <p className="text-right text-[10px] font-[Poppins] font-[400] leading-[15px] w-full m-0">
                *Excluding GST
              </p>
            </div>
            <div className="border border-[#DDDDDD] bg-[#2570b8] rounded-[16px] px-[24px] py-[32px] flex flex-col items-center">
              <h6 className="text-center font-[Poppins] font-[700] text-[32px] leading-[36px] mb-[16px] text-[#FFFFFF]">
                GoodSpace Plus
              </h6>
              <p className="font-[Poppins] font-[400] px-[12px] py-[16px] text-center text-[14px] text-[#FFFFFF] leading-[20px] mb-[16px]">
                Best for small to medium-sized businesses with urgent hiring
                needs
              </p>
              <h6 className="text-center font-[Poppins] font-[600] text-[56px] leading-[60px] mb-[40px] mt-[20px] text-[#FFFFFF]">
                ₹3000
              </h6>
              <button className="px-[24px] py-[14px] rounded-[6px] font-[600] hover:text-[#FFF] text-[#2570b8] hover:bg-[#2570b8] bg-[#FFFFFF] duration-300 transition-all border-[1px] border-transparent hover:border-[#FFFFFF] w-full text-[14.4px]">
                Post job now
              </button>
              <ul className="p-0 my-[20px] w-full">
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                  <i className="fa-solid fa-check text-[#FFFFFF] text-[20px]"></i>
                  1 job post
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                  <i className="fa-solid fa-check text-[#FFFFFF] text-[20px]"></i>
                  ₹100 onboarding credit
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                  <i className="fa-solid fa-check text-[#FFFFFF] text-[20px]"></i>
                  Shortlisted candidates in less than 24 hours
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                  <i className="fa-solid fa-check text-[#FFFFFF] text-[20px]"></i>
                  Interviewed candidates with overall fitment score
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                  <i className="fa-solid fa-check text-[#FFFFFF] text-[20px]"></i>
                  Job Boost for 10X talent pool
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#FFFFFF]">
                  <i className="fa-solid fa-check text-[#FFFFFF] text-[20px]"></i>
                  Urgent hiring support
                </li>
              </ul>
              <p className="text-right text-[10px] font-[Poppins] text-[#FFFFFF] font-[400] leading-[15px] w-full m-0">
                *Excluding GST
              </p>
            </div>
            <div className="border border-[#DDDDDD] bg-[#FFFFFF] rounded-[16px] px-[24px] py-[32px] flex flex-col items-center">
              <h6 className="text-center font-[Poppins] font-[700] text-[32px] leading-[36px] mb-[16px] text-[#113455]">
                Enterprise
              </h6>
              <p className="font-[Poppins] font-[400] px-[12px] py-[16px] text-center text-[14px] leading-[20px] mb-[16px]">
                Tailored for large businesses requiring end-to-end hiring
                solutions
              </p>
              <h6 className="text-center font-[Poppins] font-[600] text-[56px] leading-[60px] mb-[40px] mt-[20px] text-[#FFFFFF]">
                ₹2000
              </h6>
              <button className="px-[24px] py-[14px] rounded-[6px] font-[600] text-[#FFF] hover:text-[#2570b8] bg-[#2570b8] hover:bg-transparent duration-300 transition-all border-[1px] border-transparent hover:border-[#2570b8] w-full text-[14.4px]">
                Contact Sales Team
              </button>
              <ul className="p-0 my-[20px] w-full">
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  Unlimited job posts**
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  Unlimited shortlisted and interviewed candidates, 24x7
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  Unlimited job boosts for 10X talent pool
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  Access to 10M+ verified talent pool
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  High priority placement for all jobs
                </li>
                <li className="mt-[20px] mb-[8px] flex items-center gap-[8px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#2d3135]">
                  <i className="fa-solid fa-check text-[#2570b8] text-[20px]"></i>
                  Dedicated account manager
                </li>
              </ul>
              <p className="text-right text-[10px] font-[Poppins] font-[400] leading-[15px] w-full m-0">
                *Excluding GST
              </p>
            </div>
          </div>
        </div>
        <div className="sm:p-[100px] p-[20px]">
          <div id="detailed-pricing" className="w-full overflow-x-auto">
            <div className="overflow-hidden min-w-max">
              <div className="grid grid-cols-4 border-t border-b border-[#D1D4D7] dark:text-white">
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  Compare All Features
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] border-l border-[#D1D4D7] color-[#113455] text-center text-[20px] font-[600] leading-[28px]">
                  Goodspace Basic
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] border-l border-[#D1D4D7] color-[#113455] text-center text-[20px] font-[600] leading-[28px]">
                  GoodSpace Plus
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] border-l border-[#D1D4D7] border-r color-[#113455] text-center text-[20px] font-[600] leading-[28px]">
                  Goodspace Enterprise
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  Job Postings
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  AI Finder
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  AI Shortlister
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  {" "}
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  Job Boosts
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Instant Feedback
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                AI Interviewer
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Interview snapshots
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Candidate Evaluation Report
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Direct Candidate Connect
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                24x7 customer support
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Job Board Integrations
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Job Boosts on multiple job boards
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Interview recordings
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Interview Proctoring
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Urgent hiring manager
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Premium placement
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Candidate Search
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Candidate Pitch
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
              <div className="grid grid-cols-4 border-b border-[#D1D4D7]">
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                Dedicated Account Manager
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="bg-[#eaf2fa] px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-xmark text-[#f2001a] text-[30px]"></i>
                </div>
                <div className="px-[25px] py-[36px] font-[Poppins] color-[#113455] border-l border-[#D1D4D7] text-[20px] font-[600] leading-[28px]">
                  <i className="fa-solid fa-check text-[#1f9916] text-[30px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pricing;
