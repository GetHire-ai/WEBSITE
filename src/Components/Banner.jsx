import React from "react";
import star from "../Assets/Star 57.svg";
import arrow from "../Assets/solar_arrow-left-broken.svg";

function Banner({ activeTab, handleTabChange }) {
  return (
    <>
      <div className="IMS">
        <div className="IMS-head-container">
          <ul className="IMS-head">
            <div className="tabs">
              <button
                className={activeTab === 1 ? "tab-btn active-btn" : "tab-btn"}
                onClick={() => handleTabChange(1)}
              >
                <li>Platform</li>
              </button>
              <button
                className={activeTab === 2 ? "tab-btn active-btn" : "tab-btn"}
                onClick={() => handleTabChange(2)}
              >
                <li>Screen</li>
              </button>
              <button
                className={activeTab === 3 ? "tab-btn active-btn" : "tab-btn"}
                onClick={() => handleTabChange(3)}
              >
                <li>Interview</li>
              </button>
              <button
                className={activeTab === 4 ? "tab-btn active-btn" : "tab-btn"}
                onClick={() => handleTabChange(4)}
              >
                <li>Schedule</li>
              </button>
              <button
                className={activeTab === 5 ? "tab-btn active-btn" : "tab-btn"}
                onClick={() => handleTabChange(5)}
              >
                <li>Structure</li>
              </button>
            </div>
            {/* <li>Interview</li>
        <li>Schedule</li>
        <li>Structure</li> */}

            <div className="tab-container"></div>
          </ul>
        </div>

        <div className="tab-content">
          {activeTab === 1 && (
            <p>
              <p>Smart Recruitment Automation </p>

              <h1>The Ultimate All-in-One AI Powered Hiring Platform</h1>
              <h3>
                Plan, conduct, analyze, and optimize your interview processes
                without any heavy lifting. Experience the evolution of
                interviewing.{" "}
              </h3>
              <div className="box-btns">
                <button className="book">
                  Book a Demo <img src={arrow} alt="" />
                </button>
                <button className="w2">Watch 2 minute video</button>
              </div>
              <div className="stars">
                <div className="rate">
                  <div className="flex">
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                  </div>
                  <p>G2 Reviews</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                  </div>
                  <p>Get App</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                  </div>
                  <p>Capterra</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                    <img alt="" src={star} />
                  </div>

                  <p>Software Advice</p>
                </div>
              </div>
            </p>
          )}
          {activeTab === 2 && (
            <p>
              <p> Ecosystem</p>
              <h1>Connecting talent with oppurtunities</h1>
              <h3>
                Centralized platform to connect students directly with the best
                opportunities with the biggest platform of hiring
              </h3>
              <div className="box-btns">
                <button className="book">
                  Book a Demo <img src={arrow} alt="arrow" />
                </button>
                <button className="w2">Watch 2 minute video</button>
              </div>
              <div className="stars">
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>G2 Reviews</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Get App</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Capterra</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>

                  <p>Software Advice</p>
                </div>
              </div>
            </p>
          )}
          {activeTab === 3 && (
            <p>
              <p>Smart Screen</p>

              <h1>AI Powered Skil Assesement </h1>

              <h3>
                From Soft skills to video Interviews . AI is here to automate
                and mask process faster . Discover the fastest and most flexible
                way to screen applications.
              </h3>

              <div className="box-btns">
                <button className="book">
                  Book a Demo <img src={arrow} alt="arrow" />
                </button>
                <button className="w2">Watch 2 minute video</button>
              </div>

              <div className="stars">
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>G2 Reviews</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Get App</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Capterra</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>

                  <p>Software Advice</p>
                </div>
              </div>
            </p>
          )}
          {activeTab === 4 && (
            <p>
              <p> AI Automation</p>

              <h1>End-to-end recruitment automation</h1>

              <h3>
                Modular, scalable, and easily adapts to any organization’s
                hiring process, automating everything from creating job
                requisitions, screening, scheduling interviews, to hiring and
                pre-onboarding.
              </h3>

              <div className="box-btns">
                <button className="book">
                  Book a Demo <img src={arrow} alt="arrow" />
                </button>
                <button className="w2">Watch 2 minute video</button>
              </div>

              <div className="stars">
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>G2 Reviews</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Get App</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Capterra</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>

                  <p>Software Advice</p>
                </div>
              </div>
            </p>
          )}
          {activeTab === 5 && (
            <p>
              <p>Smart Assistant</p>

              <h1>The Ultimate All-in-One AI Powered Hiring Platform</h1>

              <h3>
                The Leading AI Recruiting Software To Make Better Hires With
                Zero Guesswork
              </h3>

              <div className="box-btns">
                <button className="book">
                  Book a Demo <img alt="arrow"  src={arrow} />
                </button>
                <button className="w2">Watch 2 minute video</button>
              </div>

              <div className="stars">
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>G2 Reviews</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Get App</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p>Capterra</p>
                </div>
                <div className="rate">
                  <div className="flex">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>

                  <p>Software Advice</p>
                </div>
              </div>
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Banner;
