import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Analysis() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#E2EFFF] px-[20px] pb-[110px] pt-[200px] overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-[45px] pb-[45px] font-[Poppins] leading-normal text-[#000000] font-[700]">
                Optimize Your Resume with AI Precision
              </h1>
              <p className="font-[Poppins] pb-[45px] text-[22px] font-[500] leading-normal">
                Our AI Resume Analyzer evaluates your resume against
                job-specific criteria, ensuring it aligns with the skills and
                qualifications employers are seeking. It provides actionable
                feedback to enhance your resume’s structure, keywords, and
                overall effectiveness, increasing your chances of landing your
                dream job.
              </p>
              <div className="py-[10px] px-[20px] max-w-[50%] w-full flex flex-col bg-[#FFFFFF] border border-[#c4c4c4] rounded-[12px] ">
                <p className="mb-[8px] text-[#ffa800] font-[Poppins] text-[32px] font-[500] leading-normal">
                  ₹299/-
                </p>
                <p className="mb-[8px] text-[#989BA4] font-[Poppins] text-[22px] font-[500] leading-normal">
                  <del>₹999/-</del>
                </p>
                <p className="text-[#071725] text-[20px] font-[Poppins] leading-normal font-[500]">
                  per <span className="text-[#1283e6]">1 session</span>
                </p>
                <button className="bg-[#FFA800] rounded-[4px] py-[12px] font-[Poppins] mt-[10px]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[64px] px-[20px] overflow-hidden">
        <div className="container">
          <h6 className="font-[Inter] text-[32px] font-[600] leading-[44px] text-[#172b4d] mb-[32px]">
            How does it work?
          </h6>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[32px] gap-[16px]">
            <div>
              <img src="/assets/home/r1.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Step 1: Upload Your Resume
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Begin by uploading your resume. Our AI tool will start analyzing
                and enhancing it to meet job market standards.
              </p>
            </div>
            <div>
              <img src="/assets/home/r2.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Step 2: Get Detailed Analysis
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Get comprehensive feedback on your resume. Our AI highlights
                strengths and identifies areas for improvement to help you stand
                out.
              </p>
            </div>
            <div>
              <img src="/assets/home/r3.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Step 3: Enhance Your Resume
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Utilize expert guidance to refine your resume. Make it shine in
                today’s competitive job market with targeted improvements.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[64px] px-[20px] overflow-hidden">
        <div className="container">
          <h6 className="font-[Inter] text-[32px] font-[600] leading-[44px] text-[#172b4d] mb-[32px]">
            Why Candidates Use Our Resume Checker
          </h6>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[32px] gap-[16px]">
            <div>
              <img src="/assets/home/icon10.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                AI Resume Analysis
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Leverage our advanced AI tool to thoroughly analyze and optimize
                your resume, ensuring it meets the highest standards of
                effectiveness.
              </p>
            </div>
            <div>
              <img src="/assets/home/icon11.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                ATS Compatibility Check
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Boost your chances of securing interviews with our ATS
                compatibility check, designed to ensure your resume passes
                through applicant tracking systems seamlessly.
              </p>
            </div>
            <div>
              <img src="/assets/home/icon12.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Content Analyzer
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Benefit from in-depth content analysis to create a resume that
                is impactful, clear, and relevant, highlighting your
                qualifications effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[96px] ">
        <div className="container">
          <h6 className="font-[Inter] text-[32px] font-[600] leading-[44px] text-[#172b4d] mb-[32px]">
            Discover more tools
          </h6>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[32px] gap-[16px]">
            <div>
              <img src="/assets/home/item9.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Resume Checker
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Instantly enhance your resume. Our checker suggests improvements
                for maximum impact.
              </p>
              <Link to="" className="border-b border-[#172b4d] text-[#172b4d]">
                Learn more
              </Link>
            </div>
            <div>
              <img src="/assets/home/item10.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Cover Letter Generator
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Craft compelling cover letters with ease, tailored to your
                experience and skills.
              </p>
              <Link to="" className="border-b border-[#172b4d] text-[#172b4d]">
                Learn more
              </Link>
            </div>
            <div>
              <img src="/assets/home/item11.svg" alt="" />
              <h6 className="font-[Inter] text-[20px] leading-[28px] text-[#172b4d] font-[600] pt-[30px] mb-[12px]">
                Interview
              </h6>
              <p className="font-[Inter] text-[16px] leading-[24px] pb-[24px] text-[#172b4d]">
                Prepare for successful interview strategies, practice questions,
                and get hired.
              </p>
              <Link to="" className="border-b border-[#172b4d] text-[#172b4d]">
                Learn more
              </Link>
            </div>
          </div>
          <h6 className="font-[Inter] text-[32px] font-[600] leading-[44px] text-[#172b4d] pt-[100px] mb-[0px]">
            Frequently Asked Questions
          </h6>
          <div className="flex flex-col mt-[32px]">
            <div className="flex flex-col border-b border-[#e5e7eb]">
              <div
                onClick={toggleDropdown}
                className="flex justify-between py-[12px] items-center"
              >
                <h6 className="font-[Inter] my-[12px] text-[#172b4d] text-[20px] font-[600] leading-[28px]">
                  Frequently Asked Questions
                </h6>
                <i
                  className={`fa-solid fa-angle-down text-[#172b4d] transition-all duration-300 ${
                    dropdown ? "rotate-[-180deg]" : "rotate-[0deg]"
                  }`}
                ></i>
              </div>
              <div
                className={`duration-300 transition-all ${
                  dropdown ? "h-[330px] pb-[16px]" : "h-[0px] pb-[0px]"
                } overflow-hidden`}
              >
                <p className="font-[Inter] font-[400] text-[16px] leading-[24px]">
                  Our online resume builder stands out as the premier choice for
                  job seekers due to its exceptional, polished, and highly
                  functional design that simplifies every aspect of your job
                  search. Here's what sets us apart:
                </p>
                <ol className="mt-[8px] pl-[20px] py-[20px]">
                  <li className="font-[Inter] font-[400] text-[16px] leading-[24px] flex gap-[10px]">
                    <p className="">1.</p>
                    <span>
                      <b>Professionally Designed Templates:</b>&nbsp; We provide
                      a diverse collection of professionally crafted resume and
                      cover letter templates, ensuring that you start with a
                      structure that's favored by industry experts.
                    </span>
                  </li>
                  <li className="font-[Inter] font-[400] text-[16px] leading-[24px] flex gap-[10px]">
                    <p className="">2.</p>
                    <span>
                      <b>Customization at Your Fingertips:</b>&nbsp; With our
                      user-friendly platform, you have the freedom to
                      personalize every aspect of your resume and cover letter,
                      making your application truly reflect your unique
                      professional story.
                    </span>
                  </li>
                  <li className="font-[Inter] font-[400] text-[16px] leading-[24px] flex gap-[10px]">
                    <p className="">3.</p>
                    <span>
                      <b>AI-Powered Insights:</b>&nbsp; Our Resume Builder is
                      not just a tool; it's an intelligent assistant. It
                      leverages insights from millions of job postings and user
                      interactions on our platform to suggest the most effective
                      content and design elements, ensuring your resume not only
                      looks great but is also optimized for success.
                    </span>
                  </li>
                  <li className="font-[Inter] font-[400] text-[16px] leading-[24px] flex gap-[10px]">
                    <p className="">4.</p>
                    <span>
                      <b>Seamless Job Search Integration:</b>&nbsp; From
                      drafting to applying, our platform makes every step
                      easier. It suggests roles that match your skills and
                      preferences, drawn from a vast database of opportunities,
                      making sure your resume reaches the right employers.
                    </span>
                  </li>
                </ol>
                <p className="font-[Inter] font-[400] text-[16px] leading-[24px]">
                  Choose our online resume builder, and embark on your job
                  search journey with confidence, backed by the best technology
                  and expertise in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Analysis;
