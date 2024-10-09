import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Feature() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <div className="mock-section">
        <div className="container">
          <div className="pt-[200px]">
            <h6 className="text-center font-[Poppins] font-[700] text-[50px] leading-[56px] text-[#FFFFFF] pb-[60px] mb-[0px]">
              Perfect Your Resume with AI
            </h6>
            <p className="text-center max-w-[840px] mx-auto text-[20px] leading-[26px] text-[#FFFFFF] font-[Poppins]">
              Tailor your resume to each job description effortlessly with our
              AI-powered resume builder. Get in-depth analysis and optimization
              tips, ensuring your resume stands out every time—no more
              guesswork, just results!
            </p>
            <div className="flex py-[80px] flex-col items-center justify-center">
              <div className="flex gap-[16px] mb-[100px]  justify-center">
                <button className="bg-[#FFFFFF] hover:bg-transparent rounded-[4px] transition-all duration-300 px-[18px] py-[10px] font-[700] border-[2px] border-[#FFFFFF] text-[#4285f4] hover:text-[#FFFFFF]">
                  Get Started For Free!
                </button>
                <button className="px-[18px] py-[10px] font-[700] text-[#FFFFFF]">
                  Explore Feature
                </button>
              </div>
              <img
                src="/assets/home/item11.png"
                className="object-cover"
                alt=""
              />
            </div>
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
      <div className="bg-[#FFFFFF] sm:pt-[50px] pt-[20px]">
        <div className="container">
          <h6 className="text-center font-[Poppins] font-[700] sm:text-[40px] text-[20px] sm:leading-[48px] leading-[24px] text-[#353e44] pb-[60px] mb-[0px]">
            The Easiest and Most Feature-Packed CV Builder
          </h6>
          <div className="grid grid-cols-2 gap-[30px]">
            <div>
              <div className="flex items-start gap-[18px] mb-[30px]">
                <div className="mt-[8px]">
                  <h5 className="h-[37px] w-[37px] flex items-center justify-center border-[4px] border-[#f0f0f0] rounded-full font-[600] text-[20px] leading-[24px] text-center">
                    1
                  </h5>
                </div>
                <div>
                  <p className="font-[700] text-[24px] pb-[16px] leading-[40px] text-[#233143]">
                    Pre-Written Content
                  </p>
                  <p className="text-[18px] font-[Inter] leading-[24px] text-[#233143]">
                    Choose from thousands of expertly crafted phrases tailored
                    to hundreds of jobs and careers. Simply click to insert them
                    directly into your CV for a professional touch.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[18px] mb-[30px]">
                <div className="mt-[8px]">
                  <h5 className="h-[37px] w-[37px] flex items-center justify-center border-[4px] border-[#f0f0f0] rounded-full font-[600] text-[20px] leading-[24px] text-center">
                    2
                  </h5>
                </div>
                <div>
                  <p className="font-[700] text-[24px] pb-[16px] leading-[40px] text-[#233143]">
                    CV and Cover Letter in One Place
                  </p>
                  <p className="text-[18px] font-[Inter] leading-[24px] text-[#233143]">
                    Build a cohesive personal brand with a matching CV and cover
                    letter. Access expert suggestions and professionally
                    designed templates to ensure your application stands out.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[18px] mb-[30px]">
                <div className="mt-[8px]">
                  <h5 className="h-[37px] w-[37px] flex items-center justify-center border-[4px] border-[#f0f0f0] rounded-full font-[600] text-[20px] leading-[24px] text-center">
                    3
                  </h5>
                </div>
                <div>
                  <p className="font-[700] text-[24px] pb-[16px] leading-[40px] text-[#233143]">
                    Professionally Designed Templates
                  </p>
                  <p className="text-[18px] font-[Inter] leading-[24px] text-[#233143]">
                    Use our expertly crafted templates that are optimized to
                    pass applicant tracking systems (ATS), ensuring your CV gets
                    noticed by employers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[18px] mb-[30px]">
                <div className="mt-[8px]">
                  <h5 className="h-[37px] w-[37px] flex items-center justify-center border-[4px] border-[#f0f0f0] rounded-full font-[600] text-[20px] leading-[24px] text-center">
                    4
                  </h5>
                </div>
                <div>
                  <p className="font-[700] text-[24px] pb-[16px] leading-[40px] text-[#233143]">
                    Expert Tips & Guidance
                  </p>
                  <p className="text-[18px] font-[Inter] leading-[24px] text-[#233143]">
                    Receive detailed tips and advice throughout the CV-building
                    process. Whether you're a pro or just starting out, we’re
                    here to help every step of the way.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-[18px] mb-[30px]">
                <div>
                  <h5 className="h-[37px] w-[37px] flex items-center justify-center border-[4px] border-[#f0f0f0] rounded-full font-[600] text-[20px] leading-[24px] text-center">
                    5
                  </h5>
                </div>
                <div>
                  <p className="font-[700] text-[24px] pb-[16px]  leading-[40px] text-[#233143]">
                    CV Writing Services
                  </p>
                  <p className="text-[18px] leading-[24px] font-[Inter] text-[#233143]">
                    Need more support? Our CV writing experts offer services
                    ranging from quick reviews to full design overhauls, helping
                    you make the best impression.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[96px] ">
        <div className="container">
          <h6 className="font-[Poppins] font-[700] text-[40px] leading-[48px] text-[#353e44] pb-[60px] mb-[0px]">
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
          <h6 className="font-[Poppins] font-[700]  sm:text-[40px] text-[20px] sm:leading-[48px] leading-[24px] text-[#353e44] pt-[100px] mb-[0px]">
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

export default Feature;
