import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function BlogPage() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="pt-[180px]">
          <img src="/assets/home/photo10.png" alt="" />
          <p className="text-center pt-[20px] text-[#172b4d] font-[Inter] text-[16px] leading-[28px] pb-[56px]">
            Dive into a wealth of resources designed to help you secure your
            dream job. Our Training Center features:
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
      <div className="bg-[#f3f2ef] mt-[48px] rounded-[56px] sm:py-[80px] py-[40px] sm:px-[140px] px-[20px]">
        <h6 className="pb-[40px] text-[32px] font-[600] text-[#2a2546] leading-[36px]">
          Career Advice
        </h6>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Market Insights:
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Up-to-date information and trends to guide your job search.
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Career Advice Neha - August 9, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Interview Tips:
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Expert advice to help you prepare and succeed in your
                  interviews.
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Career Advice Neha - August 8, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Cover Letter Templates:
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Professionally crafted templates to make your cover letter
                  stand out.
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Career Advice Neha - August 1, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            Fresher Advice
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Top Career Options for Freshers Entering the Job Market
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  A vast number of students in India feel flustered when it
                  comes to choosing their career option right after the
                  completion of formal education....
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Career Advice apnaTime - March 4, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-b border-[#e1e1ea] pt-[80px]"></div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            Interview Advice
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  How to Negotiate Salary With HR Confidently With Sample
                  Answers
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Though negotiating salary is a very important part of the job
                  search process, it can sometimes be a daunting task to
                  approach salary negotiation...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Interview Advice Neha - August 2, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-b border-[#e1e1ea] pt-[80px]"></div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            Resume Tips
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  How to Negotiate Salary With HR Confidently With Sample
                  Answers
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Though negotiating salary is a very important part of the job
                  search process, it can sometimes be a daunting task to
                  approach salary negotiation...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Interview Advice Neha - August 2, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-b border-[#e1e1ea] pt-[80px]"></div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            News
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  How to Negotiate Salary With HR Confidently With Sample
                  Answers
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Though negotiating salary is a very important part of the job
                  search process, it can sometimes be a daunting task to
                  approach salary negotiation...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Interview Advice Neha - August 2, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-b border-[#e1e1ea] pt-[80px]"></div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            Hiring Advice
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  How to Negotiate Salary With HR Confidently With Sample
                  Answers
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Though negotiating salary is a very important part of the job
                  search process, it can sometimes be a daunting task to
                  approach salary negotiation...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Interview Advice Neha - August 2, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-b border-[#e1e1ea] pt-[80px]"></div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            Hiring Platform
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  How to Negotiate Salary With HR Confidently With Sample
                  Answers
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Though negotiating salary is a very important part of the job
                  search process, it can sometimes be a daunting task to
                  approach salary negotiation...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Interview Advice Neha - August 2, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="border-b border-[#e1e1ea] pt-[80px]"></div>
      </div>
      <div className="sm:pt-[80px] pt-[40px] sm:px-[140px] px-[20px]">
        <div className="pb-[40px] flex justify-between items-center">
          <h6 className="text-[32px] font-[600] text-[#2a2546] leading-[36px]">
            Hiring Guidelines
          </h6>
          <button className="font-[Inter] font-[600] text-[18px] text-[#1f8268]">
            View all blogs
          </button>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  How to Negotiate Salary With HR Confidently With Sample
                  Answers
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Though negotiating salary is a very important part of the job
                  search process, it can sometimes be a daunting task to
                  approach salary negotiation...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Interview Advice Neha - August 2, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Find the Best Company, MNC and Corporate Job Vacancy for
                  Freshers in Delhi
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  Delhi is not only the national capital but also the centre of
                  innumerable job opportunities in variety of sectors. While
                  searching for MNC jobs...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  apna India apnaTime - February 20, 2024
                </p>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/blog/blog-detail">
              <img
                src="/assets/home/photo11.jpg"
                className="rounded-[16px]"
                alt=""
              />
              <div className="pt-[16px]">
                <h6 className="font-[Inter] text-[24px] leading-[36px] font-[600] text-[#172b4d]">
                  Job Options in Commerce: Your Roadmap to Career Success
                </h6>
                <p className="text-[#172b4d] font-[Inter] text-[16px] leading-[24px]">
                  In this article, we’ll discuss the most lucrative career
                  choices for commerce students in India. It will help you to
                  understand the various work...
                </p>
                <p className="font-[Inter] text-[14px] leading-[20px] font-[600] text-[#5e6c84] mt-[16px]">
                  Fresher Advice apnaTime - February 7, 2024
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BlogPage;
