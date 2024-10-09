import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Collage() {
  const [bName, setBName] = useState("Auto-Proctoring");
  return (
    <>
      <Navbar />
      <div className="container py-[150px]">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center sm:gap-[50px] gap-[20px]">
          <div>
            <h1 className="text-[#272930] font-[700] font-[Roboto] mb-[10px] text-[36px] leading-[40px]">
              Take your placement cell <br /> online
            </h1>
            <p className="text-[#798694] max-w-[555px] text-[20px] my-[20px] font-[Roboto]">
              Digitisation & Automation of Campus Placements, tried and tested
              by universities across.
            </p>
            <div className="flex gap-[14px]">
              <button className="font-[Roboto] bg-[#ffba00] text-[#000000] py-[10px] px-[25px] border border-[#ffba00] rounded-full">
                Get Started
              </button>
              <button className="font-[Roboto] bg-transparent text-[#000000] py-[10px] px-[25px] border border-[#000000] rounded-full">
                Watch Video
              </button>
            </div>
          </div>
          <div>
            <img src="/assets/collage/img1.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="relative z-50">
        <div className="absolute">
          <img src="/assets/collage/wrap1.png" alt="" />
        </div>
        <div
          className="absolute z-10 w-[40%] h-[380px] right-0 bg-[#F6F6F6]"
          style={{ borderRadius: "10px 0 0 10px" }}
        ></div>
        <div className="flex flex-col z-20 relative items-center sm:mb-[50px] mb-[20px] justify-center">
          <h6 className="text-[#333399] text-[28px] font-[600] leading-[34px] pb-[20px] font-[Roboto]">
            Online Placement Management System that is catered to everyone's
            needs
          </h6>
          <img src="/assets/collage/under_line.png" alt="" />
        </div>
        <div className="container relative z-20">
          <div className="grid grid-cols-3 gap-[30px]">
            <div
              className="bg-[#fff] py-[10px] px-[30px]"
              style={{
                borderRadius: "30px 30px 0 30px",
                boxShadow: "0px 29px 49px #00000026",
              }}
            >
              <h3 className="pt-[15px] pb-[20px] text-[#000] font-[Roboto] text-[18px] font-[600] leading-[28px]">
                Students
              </h3>
              <p className="text-[#5D5D72] text-[16px] font-[400] leading-[28px] font-[Roboto] pb-[30px]">
                Empowers students to create job profiles, search, and apply for
                jobs and internships; instant job matching that takes their
                career to the next level.
              </p>
            </div>
            <div
              className="bg-[#fff] py-[10px] px-[30px]"
              style={{
                borderRadius: "30px 30px 0 30px",
                boxShadow: "0px 29px 49px #00000026",
              }}
            >
              <h3 className="pt-[15px] pb-[20px] text-[#000] font-[Roboto] text-[18px] font-[600] leading-[28px]">
                Placement Team
              </h3>
              <p className="text-[#5D5D72] text-[16px] font-[400] leading-[28px] font-[Roboto] pb-[30px]">
                Attract several companies and manage them from a centralized
                place; capture data and reports related to students and
                employers in a single click, securely.
              </p>
            </div>
            <div
              className="bg-[#fff] py-[10px] px-[30px]"
              style={{
                borderRadius: "30px 30px 0 30px",
                boxShadow: "0px 29px 49px #00000026",
              }}
            >
              <h3 className="pt-[15px] pb-[20px] text-[#000] font-[Roboto] text-[18px] font-[600] leading-[28px]">
                Companies
              </h3>
              <p className="text-[#5D5D72] text-[16px] font-[400] leading-[28px] font-[Roboto] pb-[30px]">
                Create multiple job postings and get instant access to the
                entire students' database to match them based on skills, GPA,
                and certificates for the best hiring experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container max-w-[1152px] w-full mx-auto relative py-[100px] z-20">
        <h6 className="text-[#333399] text-[28px] text-center font-[600] leading-[34px] pb-[20px] font-[Roboto]">
          Our live, auto and video proctoring features ensure total cheating
          prevention.
        </h6>
        <p className="text-[#758c8d] text-center font-[Roboto] font-[400] text-[16px] leading-[22px] mb-[16px]">
          Our Industry-Leading AI Bot Has{" "}
          <span className="text-[#059b3e]">98% Accuracy</span> in Cheating
          Detection
        </p>
        <div className="pt-[20px] flex gap-[30px] justify-center items-center">
          <button
            onClick={() => setBName("Auto-Proctoring")}
            className={`px-[70px] py-[12px] text-[12px] uppercase font-[600] font-[Poppins] text-center leading-[15px] rounded-full flex justify-center transition-all duration-300 ${
              bName === "Auto-Proctoring"
                ? "text-[#FFFFFF] bg-[#009de0]"
                : "bg-[#f9f9f9] text-[#003865]"
            }`}
          >
            Auto-Proctoring
          </button>
          <button
            onClick={() => setBName("Live-Proctoring")}
            className={`px-[70px] py-[12px] text-[12px] uppercase font-[600] font-[Poppins] text-center leading-[15px] rounded-full flex justify-center transition-all duration-300 ${
              bName === "Live-Proctoring"
                ? "text-[#FFFFFF] bg-[#009de0]"
                : "bg-[#f9f9f9] text-[#003865]"
            }`}
          >
            Live-Proctoring
          </button>
          <button
            onClick={() => setBName("Record And Review")}
            className={`px-[70px] py-[12px] text-[12px] uppercase font-[600] font-[Poppins] text-center leading-[15px] rounded-full flex justify-center transition-all duration-300 ${
              bName === "Record And Review"
                ? "text-[#FFFFFF] bg-[#009de0]"
                : "bg-[#f9f9f9] text-[#003865]"
            }`}
          >
            Record And Review
          </button>
        </div>
        {bName === "Auto-Proctoring" && (
          <div className="grid sm:grid-cols-2 grid-cols-1 pt-[44px] sm:gap-[50px] gap-[20px]">
            <div>
              <p className="text-[#758c8d] font-[400] text-[12px] leading-[14.4px]">
                The AI-based proctoring technology raises flags highlighting
                various instances of suspicious activities:
              </p>
            </div>
            <div>
              <p className="text-[#758c8d] font-[400] text-[16px] leading-[20.4px]">
                Auto proctoring is an AI-based automated proctoring technology
                that uses students' webcams, and microphone feeds for auto
                invigilation.
              </p>
              <div className="mt-[32px] pl-[16px] flex flex-col gap-[24px]">
                <div className="flex items-start gap-[20px]">
                  <img src="/assets/collage/icon1.svg" alt="" />
                  <div className="">
                    <h6 className="text-[20px] font-[700] leading-[28px] text-[#003865] mb-[10px]">
                      Video Proctoring
                    </h6>
                    <p className="text-[#758c8d] max-w-[444px] text-[16px] leading-[22px] font-[400] mb-[8px]">
                      It checks students' video feeds to raises flags in case of
                      any suspicious activity visible in the video
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <img src="/assets/collage/icon2.svg" alt="" />
                  <div className="">
                    <h6 className="text-[20px] font-[700] leading-[28px] text-[#003865] mb-[10px]">
                      Audio Proctoring
                    </h6>
                    <p className="text-[#758c8d] max-w-[444px] text-[16px] leading-[22px] font-[400] mb-[8px]">
                      It checks students' video feeds to raises flags in case of
                      additional human voices in the vicinity
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <img src="/assets/collage/icon3.svg" alt="" />
                  <div className="">
                    <h6 className="text-[20px] font-[700] leading-[28px] text-[#003865] mb-[10px]">
                      Image Proctoring
                    </h6>
                    <p className="text-[#758c8d] max-w-[444px] text-[16px] leading-[22px] font-[400] mb-[8px]">
                      It assesses checks students' pictures taken at regular
                      intervals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {bName === "Live-Proctoring" && (
          <div className="grid sm:grid-cols-2 grid-cols-1 pt-[44px] sm:gap-[50px] gap-[20px]">
            <div>
              <img src="/assets/collage/photo1.webp" alt="" />
            </div>
            <div>
              <p className="text-[#758c8d] font-[400] text-[16px] leading-[20.4px]">
                Live proctoring is proctoring through expert human proctors in
                high-stakes exams. Mercer | Mettl is proud to have the largest
                team of trained proctors. We provide the following services:
              </p>
              <div className="mt-[32px] pl-[16px] flex flex-col gap-[24px]">
                <div className="flex items-start gap-[20px]">
                  <img src="/assets/collage/icon3.svg" alt="" />
                  <div className="">
                    <h6 className="text-[20px] font-[700] leading-[28px] text-[#003865] mb-[10px]">
                      One-to-many Proctoring
                    </h6>
                    <p className="text-[#758c8d] max-w-[444px] text-[16px] leading-[22px] font-[400] mb-[8px]">
                      One trained proctor invigilates multiple students
                      simultaneously. The proctor to student ratio can be 1:16,
                      1:32, etc.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-[20px]">
                  <img src="/assets/collage/icon1.svg" alt="" />
                  <div className="">
                    <h6 className="text-[20px] font-[700] leading-[28px] text-[#003865] mb-[10px]">
                      One-on-one Proctoring
                    </h6>
                    <p className="text-[#758c8d] max-w-[444px] text-[16px] leading-[22px] font-[400] mb-[8px]">
                      One trained proctor invigilates one student at a time.
                    </p>
                  </div>
                </div>
                <p className="text-[#758c8d] font-[400] text-[16px] leading-[20.4px]">
                  The proctors can be from Mercer | Mettl's team or the
                  educational institute. Proctors and students also have the
                  functionality to undertake two-way communication.
                </p>
              </div>
            </div>
          </div>
        )}
        {bName === "Record And Review" && (
          <div className="grid sm:grid-cols-2 grid-cols-1 pt-[44px] sm:gap-[50px] gap-[20px]">
            <div>
              <div>
                <img src="/assets/collage/photo1.webp" alt="" />
              </div>
            </div>
            <div>
              <p className="text-[#758c8d] font-[400] text-[16px] leading-[20.4px]">
                Record and review proctoring is best suited for low-stakes
                exams. Proctors review the recorded video feed of students,
                ascertaining the flags generated by the AI bot.
              </p>
              <p className="text-[#758c8d] font-[400] pt-[30px] text-[16px] leading-[20.4px]">
                The flags are combined into a report called the 'Credibility
                Index,' with details such as timestamps, duration, etc.
                Reviewers can see the video to note the instances where AI has
                specifically flagged suspected behavior.
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="container max-w-[1152px] mx-auto w-full">
        <h6 className="text-[#333399] text-[28px] text-center font-[700] leading-[34px] pb-[20px] font-[Nunito Sans]">
          Streamlining placements end-to-end
        </h6>
      </div>
      <div className="container py-[60px]">
        <div className="grid grid-cols-1 gap-[30px]">
          <div className="rounded-[10px] p-[25px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[30px]">
              <div>
                <h6 className="text-[#333399] text-[24px] font-[600] leading-[30px] pb-[20px] font-[Poppins]">
                  Better your placements process
                </h6>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Right from nurturing an employer to hiring from your institute
                  to training, interviews, evaluation, and job fitment,
                  everything is digitized systematically using our intelligent
                  student placement management software.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  The system brings together various stakeholders and offers
                  targeted placements, reliable data management, compliance, and
                  the ability to scale across your institution.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Do more with Creatrix:
                </p>
              </div>
              <div>
                <img src="/assets/collage/photo2.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F6] rounded-[10px] p-[25px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[30px]">
              <div>
                <img src="/assets/collage/photo3.webp" alt="" />
              </div>
              <div>
                <h6 className="text-[#000000] text-[24px] font-[600] leading-[30px] pb-[20px] font-[Poppins]">
                  Comprehensive student profiling
                </h6>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Gives students innovative profile-building options with easy
                  sign-in, profile creation, edit and update options, which
                  students would love the most.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Our student career placement software empowers your students
                  to portray all their achievements and share them impressively
                  in no time. Build a healthy student-university bond with the
                  e-track that regularly sends notifications to students about
                  their job application progress.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Do more with Creatrix:
                </p>
                <ul className="list-disc pl-[30px]">
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Digital portfolio to display skills and achievements
                  </li>
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Alignment of portfolios to the competency framework
                  </li>
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Powerful learning path reports with insights
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="rounded-[10px] p-[25px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[30px]">
              <div>
                <h6 className="text-[#333399] text-[24px] font-[600] leading-[30px] pb-[20px] font-[Poppins]">
                  Top-notch employer management
                </h6>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Creatrix student placement management software helps plan out
                  a recruitment strategy with milestones pitched out for the
                  employers to manage a high volume of job profiles efficiently,
                  choose the right candidates from the campus talent pool, and
                  nail on the one that they had been looking for.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Receive constant updates from clubs, companies, and committees
                  and be notified of campus activities all year round.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Do more with Creatrix:
                </p>
                <ul className="list-disc pl-[30px]">
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Job posting and efficient candidate shortlisting
                  </li>
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Scheduling mock interviews, GDs, aptitude tests
                  </li>
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Repository to store placement agreements, safely
                  </li>
                </ul>
              </div>
              <div>
                <img src="/assets/collage/photo4.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-[#F6F6F6] rounded-[10px] p-[25px]">
            <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[30px]">
              <div>
                <img src="/assets/collage/photo5.webp" alt="" />
              </div>
              <div>
                <h6 className="text-[#000000] text-[24px] font-[600] leading-[30px] pb-[20px] font-[Poppins]">
                  Robust reporting tools
                </h6>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Generate easy reports with customizable dashboard views that
                  allow drag and drop of data. Pull countless customized reports
                  to analyze trends in your placement process from start to
                  finish and to monitor the activities of the users closely.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  You get a safe and confidential placement evaluation and data
                  management system with our student placement management
                  software.
                </p>
                <p className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px] mb-[14px]">
                  Do more with Creatrix:
                </p>
                <ul className="list-disc pl-[30px]">
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Intelligent workflows using report/form builders
                  </li>
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Analytics on payments, finances, accreditation
                  </li>
                  <li className="text-[#5D5D72] font-[Poppins] text-[18px] font-[400] leading-[30px]">
                    Customized insights and reports, just in seconds
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[20px]">
          <div>
            <h6 className="font-[Nunito Sans] font-[700] text-[30px] mt-[20px] mb-[10px]">
              CRM for effective corporate outreach
            </h6>
            <p className="font-[Roboto] text-[16px] text-[#798694] mb-[10px]">
              Up to 45% better employer conversions
            </p>
            <p className="font-[Roboto] text-[16px] text-[#798694] mb-[10px]">
              Learn employer feedback to understand industry benchmarks
            </p>
            <div className="flex mt-[30px] gap-[10px]">
              <button className="bg-[#2e2a7f] border border-[#2e2a7f] text-[#FFFFFF] font-[400] px-[12px] py-[6px] leading-[20px] rounded-full font-[Poppins]">
                Sign up
              </button>
              <button className="bg-transparent  transition-all duration-300 border-[1px] border-[#2e2a7f] text-[#2e2a7f] font-[400] px-[12px] py-[6px] leading-[20px] rounded-full font-[Poppins]">
                Sign up
              </button>
            </div>
          </div>
          <div></div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[20px]">
          <div></div>
          <div>
            <h6 className="font-[Nunito Sans] font-[700] text-[30px] mt-[20px] mb-[10px]">
              CRM for effective corporate outreach
            </h6>
            <p className="font-[Roboto] text-[16px] text-[#798694] mb-[10px]">
              Up to 45% better employer conversions
            </p>
            <p className="font-[Roboto] text-[16px] text-[#798694] mb-[10px]">
              Learn employer feedback to understand industry benchmarks
            </p>
            <div className="flex mt-[30px] gap-[10px]">
              <button className="bg-[#2e2a7f] border border-[#2e2a7f] text-[#FFFFFF] font-[400] px-[12px] py-[6px] leading-[20px] rounded-full font-[Poppins]">
                Sign up
              </button>
              <button className="bg-transparent  transition-all duration-300 border-[1px] border-[#2e2a7f] text-[#2e2a7f] font-[400] px-[12px] py-[6px] leading-[20px] rounded-full font-[Poppins]">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[60px] gap-[20px]">
          <div>
            <h6 className="font-[Nunito Sans] font-[700] text-[30px] mt-[20px] mb-[10px]">
              CRM for effective corporate outreach
            </h6>
            <p className="font-[Roboto] text-[16px] text-[#798694] mb-[10px]">
              Up to 45% better employer conversions
            </p>
            <p className="font-[Roboto] text-[16px] text-[#798694] mb-[10px]">
              Learn employer feedback to understand industry benchmarks
            </p>
            <div className="flex mt-[30px] gap-[10px]">
              <button className="bg-[#2e2a7f] border border-[#2e2a7f] text-[#FFFFFF] font-[400] px-[12px] py-[6px] leading-[20px] rounded-full font-[Poppins]">
                Sign up
              </button>
              <button className="bg-transparent  transition-all duration-300 border-[1px] border-[#2e2a7f] text-[#2e2a7f] font-[400] px-[12px] py-[6px] leading-[20px] rounded-full font-[Poppins]">
                Sign up
              </button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="max-w-[1170px] mx-auto w-full">
        <div className="py-[60px]">
          <div className="grid sm:grid-cols-6 grid-cols-3 gap-[40px]">
            <div>
              <img src="/assets/collage/logo1.png" alt="" />
            </div>
            <div>
              <img src="/assets/collage/logo2.png" alt="" />
            </div>
            <div>
              <img src="/assets/collage/logo3.png" alt="" />
            </div>
            <div>
              <img src="/assets/collage/logo4.png" alt="" />
            </div>
            <div>
              <img src="/assets/collage/logo5.png" alt="" />
            </div>
            <div>
              <img src="/assets/collage/logo6.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Collage;
