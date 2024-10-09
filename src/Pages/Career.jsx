import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";

function Career() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown((prev) => !prev);
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "linear-gradient(101deg, rgb(255, 253, 242) 0%, rgb(244, 250, 255) 100%)",
        }}
        className="px-[96px] pt-[230px] pb-[130px]"
      >
        <div className="container">
          <div className="flex gap-[60px]">
            <div className="max-w-[800px] w-full">
              <p className="font-[Poppins] text-[18px] font-[500] mb-[12px]">
              Feeling Stuck in Your Career?
              </p>
              <h6 className="font-[Poppins] font-[700] text-[44px] text-[#373737] leading-normal mb-[8px]">
              Transform Your Career Path with Our ✨ AI-Powered Career Counselor
              </h6>
              <p className="mt-[16px] font-[Poppins] text-[18px] font-[300] leading-normal">
              Uncover a career path that perfectly aligns with your skills and aspirations. Receive personalized guidance, detailed visual career analyses, and a strategic roadmap to help you achieve your goals. Enjoy enhanced job matching and actionable insights designed to help you reach your full potential.
              </p>
              <div className="flex gap-[10px] mt-[48px]">
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[15px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                  Get Career Counsellor
                </button>
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[15px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                Explore Our Services
                </button>
              </div>
            </div>
            <div>
              <img
                src="/assets/home/photo6.png"
                className="max-w-[387.2px] w-full"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] py-[128px] px-[200px]">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[40px]">
            <div className="p-[20px] flex items-center gap-[0px]">
              <h6 className="text-[#242424] font-[Poppins] text-[30px] leading-normal font-[700]">
                25,000+
              </h6>
              <p className="text-[#000000] font-[Poppins] text-[18px] leading-normal max-w-[224px] w-full font-[400]">
                users already using this service
              </p>
            </div>
            <div className="p-[20px] flex items-center gap-[0px]">
              <h6 className="text-[#242424] font-[Poppins] text-[30px] leading-normal font-[700]">
                15,000+
              </h6>
              <p className="text-[#000000] font-[Poppins] text-[18px] leading-normal max-w-[224px] w-full font-[400]">
                have achieved there career goals after using this service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:px-[80px] px-[40px] sm:pb-[120px] pb-[40px]">
        <div className="container">
          <h6 className="font-[Poppins] font-[700] text-[44px] text-[#373737] leading-normal mb-[40px]">
          Why You Need This Service
          </h6>
          <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-[80px] gap-[30px]">
            <div>
              <span className="text-[#1a4ad3] py-[4px] px-[18px] rounded-[20px] bg-[#DDE6FF] text-[14px] font-[Poppins] font-[500] leading-normal">
                Career Insights
              </span>
              <p className="font-[Poppins] text-[18px] font-[500] leading-normal pt-[28px] text-[#000000] mb-[16px]">
              Our AI analyzes your skills, interests, and personality to identify career paths that align perfectly with who you are. Get tailored recommendations that fit your unique profile.
              </p>
            </div>
            <div>
              <span className="text-[#E4820F] py-[4px] px-[18px] rounded-[20px] bg-[#FFF7CC] text-[14px] font-[Poppins] font-[500] leading-normal">
                Objective Insights
              </span>
              <p className="font-[Poppins] text-[18px] font-[500] leading-normal pt-[28px] text-[#000000] mb-[16px]">
              Receive unbiased, data-driven insights that open up a wider range of opportunities. Explore career options you might not have considered, all backed by solid analysis.
              </p>
            </div>
            <div>
              <span className="text-[#016756] py-[4px] px-[18px] rounded-[20px] bg-[#D0EBE6] text-[14px] font-[Poppins] font-[500] leading-normal">
              Smart Career Planning
              </span>
              <p className="font-[Poppins] text-[18px] font-[500] leading-normal pt-[28px] text-[#000000] mb-[16px]">
              Beyond just recommendations, our AI provides a comprehensive roadmap, including relevant opportunities and training courses, to help you achieve sustainable career growth.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E2EFFF] px-[76px] py-[72px]">
        <div className="container">
          <div className="grid sm:grid-cols-2 grid-cols-1">
            <div>
              <img src="/assets/home/photo7.png" alt="" />
            </div>
            <div className="p-[20px] flex flex-col items-start">
              <h6 className="text-[#3e3e3e] font-[Poppins] font-[600] leading-normal mb-[24px] text-right text-[40px]">
              Develop a Winning Strategy and Boost Your Confidence with Clarity
              </h6>
              <p className="text-[#363f4a] text-right text-[18px] leading-normal mb-[64px] font-[300] font-[Poppins]">
              Make informed career decisions with confidence and a clear vision for your future. Our service crafts a personalized career strategy tailored to your goals, including interview preparation and effective networking tips.
              </p>
              <div className="flex justify-end w-full">
                <button className="bg-[#008fbf] text-[#FFFFFF] py-[15px] px-[36px] rounded-[10px] font-museo font-[700] transition-all duration-300 hover:bg-[#28607E]">
                  Get Career Counsellor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] pt-[100px] pb-[60px] px-[80px] flex items-start">
        <div className="max-w-[808px] w-full">
          <h6 className="font-[Poppins] font-[700] text-[44px] leading-normal mb-[20px] text-[#3e3e3e]">
          How Career Counseling Helps
          </h6>
          <p className="font-[Poppins] font-[400] text-[18px] max-w-[464px] w-full mb-[40px]">
          Our AI-powered career counselor acts as your personalized career coach, offering invaluable support at every stage of your career journey. It helps you:
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <div className="flex bg-[#F4FAF4] p-[11px] rounded-[20px] gap-[16px] items-center">
              <i className="fa-solid text-[#64a2ff] bg-[#FFFFFF] rounded-full px-[10px] py-[8px] fa-check"></i>
              <p className="text-[#3c3c43e6] font-[Poppins] font-[500] text-[16px] leading-normal">
              Identify Your Ideal Career Path
              </p>
            </div>
            <div className="flex bg-[#F4FAF4] p-[11px] rounded-[20px] gap-[16px] items-center">
              <i className="fa-solid text-[#64a2ff] bg-[#FFFFFF] rounded-full px-[10px] py-[8px] fa-check"></i>
              <p className="text-[#3c3c43e6] font-[Poppins] font-[500] text-[16px] leading-normal">
              Craft Compelling Job Application Materials
              </p>
            </div>
            <div className="flex bg-[#F4FAF4] p-[11px] rounded-[20px] gap-[16px] items-center">
              <i className="fa-solid text-[#64a2ff] bg-[#FFFFFF] rounded-full px-[10px] py-[8px] fa-check"></i>
              <p className="text-[#3c3c43e6] font-[Poppins] font-[500] text-[16px] leading-normal">
              Develop In-Demand Skills.
              </p>
            </div>
            <div className="flex bg-[#F4FAF4] p-[11px] rounded-[20px] gap-[16px] items-center">
              <i className="fa-solid text-[#64a2ff] bg-[#FFFFFF] rounded-full px-[10px] py-[8px] fa-check"></i>
              <p className="text-[#3c3c43e6] font-[Poppins] font-[500] text-[16px] leading-normal">
              Prepare for Interviews with Confidence
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/assets/home/photo8.png"
            className="max-w-[453px] w-full"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#E2EFFF] py-[105px] sm:px-[88px] px-[20px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-[56px]">
          <div>
            <h6 className="font-[Poppins] pb-[8px] font-[600] text-[36px] leading-normal text-[#000000]">
              Get <span className="get-text"> Career Counsellor</span> and
              Achieve Your Goals!
            </h6>
            <p className="text-[#0009] font-[Poppins] text-[18px] pb-[16px] leading-normal">
            Whether you're just starting out or seeking expert guidance to advance your career, we have the perfect subscription plan for you. Discover the support you need to reach your full potential!
            mention the pricing details as current
            </p>
            <img src="/assets/home/photo9.png" alt="" />
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-[20px]">
            <div
              style={{
                boxShadow: "0 0 4.536px #0000000a,0 9.072px 18.144px #00000014",
              }}
              className="rounded-[22.68px] flex flex-col items-center border-[#000] px-[28px] relative bg-[#FFFFFF] py-[48px] border-dashed border-[.567px]"
            >
              <button className="bg-[#000000] absolute top-[-12px] left-[50%] translate-x-[-50%] text-[#FFFFFF] rounded-[20px] py-[2px] px-[18px] text-center font-[Poppins] text-[14px] font-[500] leading-normal">
                Basic
              </button>
              <h6 className="get-text text-center font-[Poppins] text-[24px] font-[500] mb-[8px]">
                Career Counsellor
              </h6>
              <h3 className="text-center text-[#2369ac] font-[Poppins] text-[28px] font-[600] leading-normal mb-[16px]">
                ₹ 299
              </h3>
              <p className="border-t-[0.5px] border-b-[0.5px] border-[#ACACAC] text-[#2d2d2d] py-[20px] w-full text-center font-[Poppins] text-[16px] font-[400] leading-normal">
                <strong>2</strong> session
              </p>
              <button className="bg-[#008fbf] text-[#FFFFFF] py-[11px] px-[30px] rounded-[14px] font-[Poppins] text-[18px] font-[500] w-full my-[22px] transition-all duration-300 hover:bg-[#28607E]">
                Buy Plan
              </button>
              <div className="w-full">
                <h6 className="text-[#000000] mb-[8px] font-[Poppins] text-[16px] leading-normal font-[400] text-left w-full">
                  All features
                </h6>
                <div className="flex gap-[12px] flex-col">
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#2369ac] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      1:1 GenAI Session
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#2369ac] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      Personalized suggestions
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#2369ac] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      Interview tips
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#b5b5b5] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      Detailed session report
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "0 0 4.536px #0000000a,0 9.072px 18.144px #00000014",
              }}
              className="rounded-[22.68px] flex flex-col items-center border-[#000] px-[28px] relative bg-[#FFFFFF] py-[48px] border-dashed border-[.567px]"
            >
              <button className="bg-[#000000] absolute top-[-12px] left-[50%] translate-x-[-50%] text-[#FFFFFF] rounded-[20px] py-[2px] px-[18px] text-center font-[Poppins] text-[14px] font-[500] leading-normal">
                Advance
              </button>
              <h6 className="get-text text-center font-[Poppins] text-[24px] font-[500] mb-[8px]">
                Career Counsellor
              </h6>
              <h3 className="text-center text-[#2369ac] font-[Poppins] text-[28px] font-[600] leading-normal mb-[16px]">
                ₹ 499
              </h3>
              <p className="border-t-[0.5px] border-b-[0.5px] border-[#ACACAC] text-[#2d2d2d] py-[20px] w-full text-center font-[Poppins] text-[16px] font-[400] leading-normal">
                <strong>4</strong> session
              </p>
              <button className="bg-[#008fbf] text-[#FFFFFF] py-[11px] px-[30px] rounded-[14px] font-[Poppins] text-[18px] font-[500] w-full my-[22px] transition-all duration-300 hover:bg-[#28607E]">
                Buy Plan
              </button>
              <div className="w-full">
                <h6 className="text-[#000000] mb-[8px] font-[Poppins] text-[16px] leading-normal font-[400] text-left w-full">
                  All features
                </h6>
                <div className="flex gap-[12px] flex-col">
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#2369ac] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      1:1 GenAI Session
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#2369ac] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      Personalized suggestions
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#2369ac] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      Interview tips
                    </p>
                  </div>
                  <div className="flex gap-[8px] items-center">
                    <i className="fa-solid text-[#FFFFFF] bg-[#eda00c] rounded-full px-[4px] text-[10px] py-[3px] fa-check"></i>
                    <p className="text-[#454545] text-[16px] font-[Poppins] font-[400] leading-normal">
                      Detailed session report
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="bg-[#FFFFFF] py-[120px] px-[80px] flex flex-col gap-[40px]">
      {/* <div className="container">
        <h6 className="font-[Poppins] font-[700] text-[44px] leading-normal mb-[20px] text-[#3e3e3e]">
          How it works
        </h6>
        <div
          style={{ boxShadow: "0 2px 20px #0000000a" }}
          className="py-[70px] px-[80px] bg-[#FFFFFF] rounded-[40px] grid sm:grid-cols-3 grid-cols-1 gap-[120px]"
        >
          <div className="max-w-[300px] w-full">
            <h6 className="text-[#2d3135] font-[Poppins] text-[24px] font-[600] leading-[32px] mb-[8px]">
              Get Career Counseling Services
            </h6>
            <p className="text-[#363f4a] font-[Poppins] text-[16px] font-[400] leading-normal">
              Share your skills, experience, and career aspirations to receive
              personalized guidance and support tailored to your needs.
            </p>
          </div>
          <div className="max-w-[300px] w-full">
            <h6 className="text-[#2d3135] font-[Poppins] text-[24px] font-[600] leading-[32px] mb-[8px]">
              AI Profile Assessment
            </h6>
            <p className="text-[#363f4a] font-[Poppins] text-[16px] font-[400] leading-normal">
              Our AI Engine Analyzes Your Profile Against Extensive Labor Market
              Data
            </p>
          </div>
          <div className="max-w-[300px] w-full">
            <h6 className="text-[#2d3135] font-[Poppins] text-[24px] font-[600] leading-[32px] mb-[8px]">
              Tailored Recommendations
            </h6>
            <p className="text-[#363f4a] font-[Poppins] text-[16px] font-[400] leading-normal">
              Receive Tailored Suggestions, Skill Development Plans, and Action
              Steps to Achieve Your Goals.
            </p>
          </div>
        </div>
      </div> */}
        <div className="container">
          <h6 className="font-[Poppins] font-[700] text-[44px] leading-normal mb-[20px] text-[#3e3e3e]">
            Have any questions?
          </h6>
          <p className="font-[Poppins] text-[#363f4a] text-[18px] font-[400] mt-[16px] mb-[56px] max-w-[666px] leading-normal">
            This FAQ section addresses your initial questions and queries. If
            you have any further inquiries, feel free to contact our{" "}
            <Link to="">customer support</Link> team.
          </p>
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
                  className={`fa-solid fa-angle-down text-[#172b4d] transition-all duration-300 ${
                    dropdown ? "rotate-[-180deg]" : "rotate-[0deg]"
                  }`}
                ></i>
              </div>
              <div
                className={`duration-300 transition-all ${
                  dropdown ? "h-[58px] pb-[16px]" : "h-[0px] pb-[0px]"
                } overflow-hidden`}
              >
                <p className="font-[Poppins] text-[#363f4a] font-[400] text-[16px] leading-normal">
                  While Career Counsellor offers valuable AI-powered guidance
                  and insights, it cannot fully replace the personalized
                  interaction and touch of a real career counselor.
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

export default Career;
