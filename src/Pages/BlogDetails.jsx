import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function BlogDetails() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pt-[180px] pb-[50px]">
          <p className="text-center pt-[20px] text-[#172b4d] font-[Inter] text-[16px] leading-[28px] pb-[56px]">
            Best Marketing Jobs After Graduation: A Guide to Thriving Career
          </p>
          <div className="max-w-[1112px] w-full mx-auto">
            <div className="grid grid-cols-2 items-center gap-[30px]">
              <div>
                <img
                  src="/assets/home/photo11.jpg"
                  className="rounded-[32px]"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[#172b4d] font-[Inter] text-[14px] leading-[24px] font-[600] pb-[16px]">
                  Career Advice
                </p>
                <h6 className="text-[#172b4d] font-[Inter] pb-[10px] text-[28px] leading-[36px] font-[600]">
                  Best Marketing Jobs After Graduation: A Guide to Thriving
                  Career
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px] font-[500] pb-[16px]">
                  Graduating from college, getting that degree in your hand, and
                  tossing those caps high in the air on your graduation day is
                  an achievement...
                </p>
                <p className="text-[#5e6c84] font-[Inter] text-[14px] leading-[20px] font-[600]">
                  Neha - August 9, 2024
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

export default BlogDetails;
