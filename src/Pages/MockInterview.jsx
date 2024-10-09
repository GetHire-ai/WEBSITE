import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function MockInterview() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <div className="mock-section">
        <div className="pt-[200px]">
          <p className="text-center font-[Poppins] font-[600] text-[18px] text-[#FFFFFF] mb-0 pb-[14px]">
            Included with Premium Membership
          </p>
          <h6 className="text-center font-[Poppins] font-[700] text-[50px] leading-[56px] text-[#FFFFFF] pb-[60px] mb-[0px]">
            Ace Your Job Interviews with Confidence
          </h6>
          <p className="text-center max-w-[840px] mx-auto text-[20px] leading-[26px] text-[#FFFFFF] font-[Poppins]">
            Practice role-specific and company-specific questions with our AI
            Interview Coach. Receive real-time feedback in a private,
            judgment-free environment. Get ready to excel in your next
            interview—start your mock interview now!
          </p>
          <div className="flex py-[80px] flex-col items-center justify-center">
            <button className="bg-[#FFFFFF] mb-[100px] hover:bg-transparent transition-all duration-300 px-[18px] py-[10px] font-[700] border-[2px] border-[#FFFFFF] text-[#000000] hover:text-[#FFFFFF]">
              Start your Mock Interview
            </button>
            <img src="/assets/home/item8.png" alt="" />
          </div>
        </div>
      </div>
      {/* <div className="bg-[#FFFFFF] sm:py-[96px] py-[30px]">
        <div className="container">
          <h6 className="text-center font-[Poppins] font-[700] sm:text-[40px] text-[20px] sm:leading-[48px] leading-[24px] text-[#353e44] pb-[60px] mb-[0px]">
            Included with Careerflow Premium
          </h6>

          <div className="grid sm:grid-cols-3 grid-cols-1 gap-[24px]">
            <div className="px-[36px] flex flex-col items-center">
              <img
                src="/assets/home/icon7.svg"
                alt=""
                className="mb-[24px] h-[50px] w-[50px]"
              />
              <h6 className="font-[Poppins] text-[20px] font-[700] leading-[24px] text-[#353e44] mb-[12px]">
                Unlimited Resumes
              </h6>
              <p className="font-[Poppins] text-[16px] leading-[24px] text-[#4f5c65] text-center">
                Craft as many resumes as you need, tailor-made for each job
                application. No limits, just endless opportunities to land your
                dream role.
              </p>
            </div>
            <div className="px-[36px] flex flex-col items-center">
              <img
                src="/assets/home/icon8.svg"
                alt=""
                className="mb-[24px] h-[50px] w-[50px]"
              />
              <h6 className="font-[Poppins] text-[20px] font-[700] leading-[24px] text-[#353e44] mb-[12px]">
                AI-Powered Editor
              </h6>
              <p className="font-[Poppins] text-[16px] leading-[24px] text-[#4f5c65] text-center">
                Use AI as your personal resume coach, analyzing your skills and
                experience to suggest targeted improvements.
              </p>
            </div>
            <div className="px-[36px] flex flex-col items-center">
              <img
                src="/assets/home/icon9.svg"
                alt=""
                className="mb-[24px] h-[50px] w-[50px]"
              />
              <h6 className="font-[Poppins] text-[20px] font-[700] leading-[24px] text-[#353e44] mb-[12px]">
                One-Click Optimizer
              </h6>
              <p className="font-[Poppins] text-[16px] leading-[24px] text-[#4f5c65] text-center">
                With one click. analyze your target job posting and instantly
                optimize your resume for maximum impact. Skip the tedious
                keyword research and formatting struggle.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="bg-[#f0f6ff] sm:py-[100px] py-[40px]">
        <h6 className="text-center font-[Poppins] font-[700] sm:text-[40px] text-[20px] sm:leading-[48px] leading-[24px] text-[#353e44] pb-[60px] mb-[0px]">
          How the AI Mock Interview Works
        </h6>
        <div className="container">
          <div className="grid grid-cols-2 items-center gap-[40px]">
            <div>
              <img src="/assets/home/item9.png" alt="" />
            </div>
            <div>
              <h6 className="font-[Poppins] font-[700] text-[40px] leading-[48px] text-[#353e44] pb-[24px]">
              Select Your Target Role and Company
              </h6>
              <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#4f5c65]">
              Our AI system customizes mock interviews to match your desired role and the specific responsibilities of the company you're targeting. By simulating real interview scenarios, it helps you practice and prepare effectively for your final interview, ensuring you’re ready to tackle any challenge.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-[40px]">
            <div>
              <h6 className="font-[Poppins] font-[700] text-[40px] leading-[48px] text-[#353e44] pb-[24px]">
              Practice Interview Questions
              </h6>
              <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#4f5c65]">
              Access thousands of questions from Gethire’s extensive question bank. Our AI provides contextualized follow-up questions based on your answers, helping you refine your responses and prepare thoroughly for your interviews.
              </p>
            </div>
            <div>
              <img src="/assets/home/item10.png" alt="" />
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-[40px]">
            <div>
              <img src="/assets/home/item111.png" alt="" />
            </div>
            <div>
              <h6 className="font-[Poppins] font-[700] text-[40px] leading-[48px] text-[#353e44] pb-[24px]">
              Receive Instant Feedback
              </h6>
              <p className="font-[Poppins] font-[500] text-[20px] leading-[30px] text-[#4f5c65]">
              You'll receive a report with question-by-question feedback, speech insights, and AI-driven analysis to help you feel confident for your upcoming interview. Start your mock interview today!
              </p>
            </div>
          </div>
          <h6 className="font-[Inter] text-[32px] font-[600] leading-[44px] pt-[40px] pb-[100px]">
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
          <h6 className="font-[Inter] text-[32px] font-[600] leading-[44px] pt-[100px]">
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

export default MockInterview;
