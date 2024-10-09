import React from "react";
import about from "../Assets/job-support.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CanSlider from "../Components/CanSlider";

function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="container">
          <h1 className="text-[36px] text-[#FFFFFF] capitalize font-[400] text-center pt-[120px] pb-[40px]">
            Our Story
          </h1>
          <img src="/assets/home/company1.jpg" alt="" />
        </div>
      </div>
      <div className="bg-[#f7f7f7]">
        <div className="container py-[60px]">
          <div className="grid grid-cols-2 gap-[40px]">
            <div className="">
              <p className="mb-[20px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                Our simple goal is to make hiring easy. To help businesses get
                the talent they need to succeed. And to help people find a job
                they love.
              </p>
              <p className="mb-[20px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                Everyone is incredibly frustrated by how hard it is to find
                amazing talent. We share that frustration.
              </p>
              <p className="mb-[20px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                Recruiting is a fragmented, opaque process undermined by
                outdated technology that turns off candidates and hiring
                managers.
              </p>
              <p className="mb-[20px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                Now, imagine a world where it’s easy to find great candidates,
                it’s easy for people to show interest in jobs, it’s easy for
                hiring teams to collaborate, and your recruiting vendors are
                just a click away.
              </p>
              <p className="mb-[20px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                We imagined it. And then we delivered it.
              </p>
              <p className="mb-[20px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                <strong>
                  SmartRecruiters <br />
                  Your Hiring Success Platform
                </strong>
              </p>
              <p className="mb-[0px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                <strong>Jerome Terynck</strong>
              </p>
              <p className="mb-[0px] font-[Poppins] text-[16px] leading-[24px] text-[#242424]">
                Founder and Chairman of the Board
              </p>
            </div>
            <div className="">
              <ul className="our-slide">
                <li>
                  <h4 className="font-[Poppins] font-[600] text-[22px]leading-[26px]">
                    2018
                  </h4>
                  <p className="our-text font-[500] font-[Poppins] text-[#122239]">
                    Launched beta version of Recooty.
                  </p>
                </li>
                <li>
                  <h4 className="font-[Poppins] font-[600] text-[22px]leading-[26px]">
                    2020
                  </h4>
                  <p className="our-text font-[500] font-[Poppins] text-[#122239]">
                    Recoty got rated #1 ATS by Gartner.
                  </p>
                </li>
                <li>
                  <h4 className="font-[Poppins] font-[600] text-[22px]leading-[26px]">
                    2022
                  </h4>
                  <p className="our-text font-[500] font-[Poppins] text-[#122239]">
                    10,000+ growing companies & 50,000 hires.
                  </p>
                </li>
                <li>
                  <h4 className="font-[Poppins] font-[600] text-[22px]leading-[26px]">
                    2023
                  </h4>
                  <p className="our-text font-[500] font-[Poppins] text-[#122239]">
                    Recoty got accelerated & funded by Upekkha.
                  </p>
                </li>
                <li>
                  <h4 className="font-[Poppins] font-[600] text-[22px]leading-[26px]">
                    2024
                  </h4>
                  <p className="our-text font-[500] font-[Poppins] text-[#122239]">
                    Lunched AI-powered HR tools.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] pb-[80px]">
        <div className="container">
          <h1 className="text-[36px] text-[#242424] capitalize font-[400] text-center pt-[60px] pb-[40px]">
            Leadership
          </h1>

          <div className="grid grid-cols-3 pb-[60px] gap-[40px]">
            <div>
              <img
                src="/assets/home/r5.jpg"
                className="rounded-[20px]"
                alt=""
              />
              <p className="mt-[15px] mb-[10px] font-[600] text-[16px] text-[#000000] font-[Poppins]">
                Rebecca Carr
              </p>
              <p className="font-[400] text-[14px] text-[#242424] font-[Poppins]">
                CEO [Interim] & Chief Product Officer
              </p>
            </div>
            <div>
              <img
                src="/assets/home/r6.jpg"
                className="rounded-[20px]"
                alt=""
              />
              <p className="mt-[15px] mb-[10px] font-[600] text-[16px] text-[#000000] font-[Poppins]">
                Jerome Ternyck
              </p>
              <p className="font-[400] text-[14px] text-[#242424] font-[Poppins]">
                Founder and Chairman of the Board
              </p>
            </div>
            <div>
              <img
                src="/assets/home/r7.jpg"
                className="rounded-[20px]"
                alt=""
              />
              <p className="mt-[15px] mb-[10px] font-[600] text-[16px] text-[#000000] font-[Poppins]">
                Thomas DiDesidero
              </p>
              <p className="font-[400] text-[14px] text-[#242424] font-[Poppins]">
                Chief Financial Officer [Interim]
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#FFFFFF] pb-[40px]">
        <h1 className="text-[36px] text-[#242424] capitalize font-[400] text-center pb-[40px]">
          In the Limelight
        </h1>
        <CanSlider />
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
