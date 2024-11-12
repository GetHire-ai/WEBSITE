import React, { useState } from "react";
import Navbar from "../Components/Navbar";
// import star from "../Assets/Star 57.svg";
// import cor from "../Assets/Group 3181.svg";
// import mac from "../Assets/Macbook Air (2022).svg";
// import mac1 from "../Assets/Macbook Air (2022)1.svg";
// import phone from "../Assets/Group 319a.svg";
// import candi from "../Assets/Group 320.svg";
// import img2 from "../Assets/Notch & Camera.svg";
// import img3 from "../Assets/image 26.svg";
// import img4 from "../Assets/Ellipse 3990.svg";
// import img5 from "../Assets/image 34.svg";
// import arrow from "../Assets/solar_arrow-left-broken.svg";
// import start from "../Assets/Star.svg";
import google from "../Assets/image 32.svg";
// import playstore from "../Assets/image 33.svg";
// import Banner from "../Components/Banner";
// import HeroSection from "../Components/HeroSection";
// import gsap from "gsap";
import Modal from "../Components/Modal";
import Footer from "../Components/Footer";

function Home() {
  // const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // const changeTab = (index) => {
  //   setActiveTab(index);
  // };

  // const [activeIndex, setActiveIndex] = useState(null);

  // const toggleAccordion = (index) => {
  //   setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  // const accordionData = [
  //   {
  //     title:
  //       "What are the engagement and connection services offfered bt tring ?",
  //     content: "Content for Section 1",
  //   },
  //   {
  //     title: "What is the process to book a Tring Video?",
  //     content: "Content for Section 2",
  //   },
  //   {
  //     title: "How Much time does it take for my request to get delivered ?",
  //     content: "Content for Section 3",
  //   },
  //   {
  //     title:
  //       "are the prices visible on the website also applicable for brand/corporate orders?",
  //     content: "Content for Section 3",
  //   },
  //   {
  //     title: "What if Celebrity does not complete the video ?",
  //     content: "Content for Section 3",
  //   },
  //   {
  //     title: "Why did my orders get declined ?",
  //     content: "Content for Section 3",
  //   },
  // ];
  // const svgRef = useRef(null);

  // useEffect(() => {
  //   const svgElement = svgRef.current;

  //   // Create the drawSVG animation
  //   gsap.fromTo(
  //     svgElement,
  //     { drawSVG: "0%" },
  //     { duration: 2, drawSVG: "100%" }
  //   );
  // }, []);

  return (
    <>
      <Navbar />
      {/* <Banner /> */}
      {/* <HeroSection /> */}
      <div className="hero-section overflow-hidden min-h-[820px] flex flex-col justify-center h-full">
        <div
          // ref={svgRef}
          className="absolute left-[67px] h-[364px] top-[-148px] w-full"
        >
          <img
            alt=""
            className="w-full flip-img h-[364px]"
            src="/assets/home/icon6.svg"
          />
        </div>
        <div
          // ref={svgRef}
          className="absolute right-[-550.391px] h-[364px] bottom-[-61px] w-full"
        >
          <img
            alt=""
            className="w-full flip-img1 h-[364px]"
            src="/assets/home/icon6.svg"
          />
        </div>
        <div className="max-w-[1140px] w-full m-auto">
          <div className="container">
            <div className="max-w-[684px] w-full">
              <h1 className="font-museo font-[700] text-[#FFFFFF] text-[72px]">
                Everything talent,
                <span className="text-grad">powered by AI</span>
              </h1>
              <p className="font-[Roboto] max-w-[570px] font-[400] text-[20px] leading-[34px] text-[#ffffff] pt-[20px] pb-[40px]">
                Our AI platform for all talent brings to light everything you
                need to hire and develop people to their highest potential
              </p>
              <button
                onClick={handleOpenModal}
                className="bg-[#008fbf] text-[#FFFFFF] py-[15px] px-[36px] rounded-[30px] font-museo font-[700] transition-all duration-300 hover:bg-[#316EDC]"
              >
                Ready for Greatness?
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] sm:pt-[110px] pt-[50px]">
        <p className="text-center text-[48px] text-[#484B53] font-[500] font-museo leading-[57.6px]">
          The Talent Intelligence Platform
        </p>
        <p className="max-w-[780px] m-auto w-full text-center text-[#484B58CC] text-[18px] font-[400] leading-[30.6px]">
          Powered by deep-learning AI, our unrivaled Talent Intelligence
          Platform shows you what you need, when you need it. Whether you’re
          finding or developing talent, our skills-driven approach backed by our
          unparalleled talent insights enables the outcomes you need to stay
          ahead.{" "}
        </p>
      </div>
      <div className="py-[100px] px-[70px] relative justify-around flex-col items-center">
        <div className="">
          <video
            controls
            className="max-w-[70%] z-10 relative w-full m-auto rounded-[10px]"
          >
            <source
              src="https://gsblob.blob.core.windows.net/webpage-goodspace/GoodSpace%20Demo%20Video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="h-[160px]"></div>
        <div
          style={{ boxShadow: "0 0 10px #0000001a" }}
          className="max-w-[90%] m-auto w-full h-[60%] p-[20px] rounded-[10px] bg-[#f1f4f7] absolute bottom-0 overflow-hidden"
        >
          <div className={`line-loop-container !absolute`}>
            <div className="line-loop flex items-center gap-[14px]">
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Film Production House
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Digital media services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Advertising Agency
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Creative Services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Film Production House
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Digital media services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Advertising Agency
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Creative Services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Film Production House
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Digital media services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Advertising Agency
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Creative Services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Film Production House
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Digital media services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Advertising Agency
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
              <h6 className="font-[700] font-museo text-[36px] w-full leading-[44.64px] text-[#1C1C1C]">
                Creative Services
              </h6>
              <img alt="" src="assets/home/vector2.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="corporate">
        <h3>CORPORATE JOIN WITH US</h3>
        <br />
        <h2>
          <span>30,00,000+ Professional</span> from
          <span>16,500 companies</span> are
          <br /> cutting short thier path to success
          <div className="w-full h-full mt-6 flex pt-[40px] flex-row justify-evenly">
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
          </div>
          <div className="w-full h-full mt-6 flex flex-row justify-evenly">
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
            <img alt="" src={google} className="w-24 h-24 animate-bounce"></img>
            <img alt="" src={google} className="w-14 h-14 animate-bounce"></img>
          </div>
        </h2>
        <br />
        <br />
        {/* <img alt="" className="core" src={cor} /> */}
      </div>
      <div className="flex flex-col">
        <div className="sticky-section bg-[#FFFFFF] flex flex-row justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#295EC9] font-museo">
              Post your job on Gethire.ai <br /> in seconds
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#6c757d] mb-[10px]">
              We prioritize your hiring requirements over everything else. You
              define what you need and we deliver!
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
              Get shortlisted candidates <br />
              within a day
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#FFFFFF] mb-[10px]">
              You sit back and relax while we source and shortlist high quality
              potential candidates for you!
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
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#295EC9] font-museo">
              Make great hiring <br />a team effort
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#6c757d] mb-[10px]">
              Shortlisted candidates are great, but interviewed candidates are
              better. These are your perfect match!
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/img1.webp"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>
        <div className="sticky-section1 bg-[#FFFFFF] flex flex-row-reverse justify-between px-[90px] h-[66vh]">
          <div className="max-w-[55%] w-full px-[3%] mb-[10px] flex flex-col justify-center">
            <h3 className="text-[42px] leading-[50px] font-[600] py-[16px] mb-[16px] border-b border-[#d1d4d7] text-[#FFFFFF] font-museo">
              Make great hires
              <br />
              Faster than ever.
            </h3>
            <p className="text-[20px] font-[400] leading-[30px] text-[#FFFFFF] mb-[10px]">
              Streamline and automate your processes with visual hiring
              pipelines and the tools you need to hire the best people. From
              communicating with candidates to scheduling interviews, make
              faster and better decisions.
            </p>
          </div>
          <div className="flex justify-center overflow-hidden">
            <img
              alt=""
              src="/assets/home/img2.webp"
              className="w-auto h-[75%] relative bottom-[-26%]"
            />
          </div>
        </div>
      </div>
      {/* <div className="max-w-[1170px] m-auto w-full flex flex-col">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] items-center">
          <div>
            <img alt="" src="/assets/home/img1.webp" alt="" />
          </div>
          <div>
            <h6 className="text-[#007bff] font-[500] font-museo uppercase text-[20px] leading-[24px]">
              Collaborate & Engage
            </h6>
            <h2 className="mb-[24px] font-museo text-[46px] font-[700] leading-[55.2px]">
              Make great hiring <br />a team effort
            </h2>
            <p className="font-museo mt-[12px] text-[#122239BF] font-[600] text-[16px] leading-[28px]">
              Leverage the combined intelligence of people, technology, and
              processes with Recooty.
            </p>
            <p className="font-museo mt-[12px] text-[#122239BF] font-[500] text-[16px] leading-[28px]">
              Recooty empowers your hiring team by combining the intelligence of
              recruiting technology and hiring workflows. It provides a clear
              view of the current situation. Guide you towards fair and
              objective hiring by mitigating biases. Collaborate, brainstorm,
              and shortlist the best candidates with ease.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-[50px] items-center">
          <div>
            <h6 className="text-[#007bff] font-[500] font-museo uppercase text-[20px] leading-[24px]">
              EVALUATE & HIRE
            </h6>
            <h2 className="mb-[24px] font-museo text-[46px] font-[700] leading-[55.2px]">
              Make great hires
              <br />
              Faster than ever.
            </h2>
            <p className="font-museo mt-[12px] text-[#122239BF] font-[500] text-[16px] leading-[28px]">
              Streamline and automate your processes with visual hiring
              pipelines and the tools you need to hire the best people. From
              communicating with candidates to scheduling interviews, make
              faster and better decisions.
            </p>
            <ul className="m-0 p-0">
              <li className="flex items-center gap-[14px] font-museo mt-[12px] text-[#122239BF] font-[600] text-[16px] leading-[28px]">
                <img alt="" src="assets/home/icon1.svg" alt="" /> Assessments
              </li>
              <li className="flex items-center gap-[14px] font-museo mt-[12px] text-[#122239BF] font-[600] text-[16px] leading-[28px]">
                <img alt="" src="assets/home/icon1.svg" alt="" /> Interview scheduling
              </li>
              <li className="flex items-center gap-[14px] font-museo mt-[12px] text-[#122239BF] font-[600] text-[16px] leading-[28px]">
                <img alt="" src="assets/home/icon1.svg" alt="" /> Email & calendar
                integration
              </li>
            </ul>
          </div>
          <div>
            <img alt="" src="/assets/home/img2.webp" alt="" />
          </div>
        </div>
      </div> */}
      <div className="w-full pt-[100px]">
        <img
          alt=""
          src="assets/home/photo5.png"
          className="w-full object-cover"
        />
      </div>
      <div className="bg-[#122239]">
        <div className="max-w-[1370px] flex flex-col items-center m-auto w-full">
          <div className="max-w-[760px] w-full m-auto">
            <h2 className="text-[46px] mb-[24px] font-[700] font-museo leading-[55.2px] text-[#FFFFFF] text-center">
              Build your strong employer brand with our{" "}
              <span>careers page</span> solutions
            </h2>
            <p className="text-[#ffffffbf] text-[18px] leading-[24px] font-[400] font-museo text-center">
              Your career page is the most important recruiting channel. Create
              your own branded careers page or update your existing one to give
              it a fresh look with Recooty. Attract great talent effectively by
              easily publishing all your current openings.
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
      <div className="demo-section">
        <div className="container">
          <div className="max-w-[1140px] py-[100px] m-auto w-full grid grid-cols-2 gap-[40px]">
            <div>
              <h6 className="font-[500] mb-[30px] text-[#FFFFFF] font-museo max-w-[470px] w-full text-[48px] leading-[57.6px]">
                Ready for greatness? Transform your talent process with AI.
              </h6>
              <button className="bg-[#FFFFFF] transition-all duration-300 hover:bg-[#E8E8E8] text-[#008fbf] py-[15px] px-[36px] rounded-[30px] font-museo text-[16px] font-[700]">
                Request Demo
              </button>
            </div>
            <div>
              <img alt="" src="assets/home/img3.webp" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="aboutvision">
        <div className="aboutvision-left">
          <h3>About Vision</h3>
          <br />
          <h2>You make the hire. We make it simple.</h2>
          <br />
          <p>
            AI powered hiring platform to automate end to end recruitment
            process . Hence connecting talent with best opportunities faster .
            Bring the revolution of recruitment.
          </p>
          <br />
          <button>
            Learn More <img alt="" src={arrow} />
          </button>
        </div>
        <div className="aboutvision-right">
          <img alt="" src={mac} />
        </div>
      </div> */}
      {/* <div className="aboutproducts">
        <br />
        <br />
        <p>About Product</p>

        <h3>Gen AI-Powered Solution for Hiring and Exam Delivery</h3>
        <br />
        <br />
        <br />
        <br />
        <div className="lap">
          <div className="lap-one">
            <div className="lap-one-box">
              <img alt="" src={mac1} />
              <br />
              <br />
              <br />
              <h3>Screening</h3>

              <p>
                Automated Process Strucutre complete process and let power of
                automation do the Hustle
              </p>
            </div>
            <br />

            <div className="lap-one-box">
              <img alt="" src={mac1} />
              <br />
              <br />
              <h3>Bulk Sourcing</h3>
              <br />

              <p>Post jobs on 300+ Job Boards</p>
            </div>
          </div>
          <div className="lap-two">
            <img alt="" src={phone} />
            <br />
            <br />
            <br />
            <h3>Ai powered video Interviewing</h3>
          </div>
          <div className="lap-one">
            <div className="lap-one-box">
              <img alt="" src={mac1} />
              <br />
              <br />
              <br />
              <h3>Online Assesment</h3>

              <p>
                Smart Recomedation From 200+ Assessments to video interview,
                gethire finds the best application for the job
              </p>
            </div>
            <br />

            <div className="lap-one-box">
              <img alt="" src={mac1} />
              <br />
              <br />
              <h3>Interactive Onboarding</h3>
              <br />

              <p>
                Smart Recruiter content From Company profile to Induction
                sessions, showcase your culture{" "}
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* <div className="hiring">
        <h3>HIRING STAGES</h3>
        <div className="hiring-heading">
          <a href="#smart-screen" className="no-underline text-[#000000]">
            <p>Smart Sourcing</p>
          </a>
          <a href="#ai" className="no-underline text-[#000000]">
            <p>AI Screen</p>
          </a>
          <a href="#automated" className="no-underline text-[#000000]">
            <p>Automated Onboarding</p>
          </a>
        </div>
        <div className="candidate-profile">
          <div className="candidate-profile-left">
            <p>Coding Practice :</p>
            <br />
            <h2>Explore and expand your skills.</h2>
            <br />

            <h3>
              Every idea has a first line of code. Prep for jobs and sharpen
              your skills alongside a global community of developers. Access the
              content you need to develop new skills – and land the job you’ve
              dreamed of.
            </h3>
            <br />
            <br />

            <br />

            <button>Signup & Practice</button>
          </div>
          <div className="candidate-profile-right">
            <img alt="" src={candi} />
          </div>
        </div>
      </div> */}

      {/* <div className="practice" id="smart-screen">
        <br />
        <p>Coding Practice :</p>
        <br />

        <h2>Join the movement. Screen on skills.</h2>
        <br />
        <br />
        <br />

        <img alt="" className="dash1" src={img2} />
      </div> */}

      {/* <div className="binary">
        <div className="binary-left">
          <h1>Leave the binary tree behind.</h1>
          <br />
          <p>
            Build coding questions using our library of dev-friendly content
            that challenges them to solve the problems they’d actually tackle on
            the job.
          </p>
          <br />
          <br />
          <button>Start Free Trial</button>
        </div>
        <div className="binary-right">
          <img alt="" src={img3} />
        </div>
      </div>
      <br />
      <br />
      <br /> */}

      {/* <div className="binary">
        <div className="binary-left">
          <h1>Leave the binary tree behind.</h1>
          <br />
          <p>
            Build coding questions using our library of dev-friendly content
            that challenges them to solve the problems they’d actually tackle on
            the job.
          </p>
          <br />
          <br />
          <button>Start Free Trial</button>
        </div>
        <div className="binary-right">
          <img alt="" src={img3} />
        </div>
      </div>
      <br />
      <br />
      <br /> */}

      {/* <div className="binary">
        <div className="binary-left">
          <h1>Leave the binary tree behind.</h1>
          <br />
          <p>
            Build coding questions using our library of dev-friendly content
            that challenges them to solve the problems they’d actually tackle on
            the job.
          </p>
          <br />
          <br />
          <button>Start Free Trial</button>
        </div>
        <div className="binary-right">
          <img alt="" src={img3} />
        </div>
      </div>
      <br />
      <br />
      <br /> */}

      {/* <div className="tec-Interview" id="automated">
        <p>TECHNICAL INTERVIEW</p>
        <h1>Interview like it’s 2023</h1>
        <h3>
          Ditch out of reach and out of touch interview questions about golf
          balls and 747s — and turn off your clunky screen share for good. Code,
          create, and collaborate with an IDE built to showcase real-world
          skills in a real-world environment.
        </h3>
        <button>Learn More</button>
      </div> */}

      {/* <div className="TESTMONIALS">
        <p>TESTMONIALS</p>
        <h1>Our Customers</h1>
        <h2>
          The world’s largest global enterprises use Codility’s results-driven
          technical
          <br /> hiring solution to hire top developer talent 2.5x fatser - but
          don’t take our word
          <br /> for it. Here’s what they had to say.
        </h2>
      </div> */}

      {/* <div className="test-tab">
        <ul>
          <li
            className={activeTab === 0 ? "active" : ""}
            onClick={() => changeTab(0)}
          >
            Swift
          </li>
          <li
            className={activeTab === 1 ? "active" : ""}
            onClick={() => changeTab(1)}
          >
            Unity
          </li>
          <li
            className={activeTab === 2 ? "active" : ""}
            onClick={() => changeTab(2)}
          >
            Live Rump
          </li>
          <li
            className={activeTab === 3 ? "active" : ""}
            onClick={() => changeTab(3)}
          >
            Asseco
          </li>
        </ul>
        <br />
        <br />
        <div className="bar" style={{ width: `${activeTab * 122}px` }}></div>
      </div>
      <br></br>
      <br></br>
      <br></br> */}

      {/* <div className="TESTMONIALS-section">
        <div className="review">
          <div className="review-head">
            <img alt="" src={img4} />
            <div>
              <p>Mick joe..</p>

              <h2>Head of Sales And Marketing</h2>
            </div>
          </div>
          <br />
          <br />

          <h3>
            “Codility enables us to shorten the feedback loap between the stack
            holders. We solved the pain points by digitizing one places of the
            puzzle-the technical assessment. today, we bring the best tailent
            into the organization by being agile and flexible,”{" "}
          </h3>
          <br />
          <br />
          <button>Read Case Study</button>
        </div>
      </div> */}
      {/* <div className="platform" id="ai">
        <div className="platform-left">
          <h2>AI-POWERED JOB SIMULATION PLATFORM</h2>
          <br />

          <h1>Uncover skills At Scale</h1>
          <br />

          <p>
            The Best Hiring decisions are made when candidates ‘show’ not tell’.
          </p>

          <br />
          <br />

          <button>Request Demo</button>

          <div className="apps">
            <img alt="" src={google} />
            <img alt="" src={start} />
            <img alt="" src={playstore} />
            <img alt="" src={start} />
          </div>
        </div>
        <div className="platform-right">
          <img alt="" src={img5} />
        </div>
      </div>
      <br /> */}
      {/* <div className="accordion accordion2">
        <br />
        <br />
        <br />
        <br />
        <div className="center">
          <br />
          <br />
          <div className="faq">FAQ</div>
          <br />
          <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
          <br />
          <br />
        </div>

        <br />
        {accordionData.map((section, index) => (
          <div className="accordion-section" key={index}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              {section.title}
            </div>
            {activeIndex === index && (
              <div className="accordion-content">{section.content}</div>
            )}
          </div>
        ))}
        <br />
        <br />
        <br />
      </div> */}
      <Footer />
      <Modal show={showModal} onClose={handleCloseModal} />
    </>
  );
}

export default Home;
