import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import mask from "../Assets/Mask group.svg";
import brands from "../Assets/Group 318.svg";
import workshop from "../Assets/design-svgrepo-com 7.svg";
import festival from "../Assets/Group 319.svg";
import img2 from "../Assets/image 50.svg";
import img3 from "../Assets/image 51.svg";
import img4 from "../Assets/image 52.svg";
import img5 from "../Assets/image 53.svg";
import img6 from "../Assets/image 54.svg";
import img7 from "../Assets/image 55.svg";
import img8 from "../Assets/image 57.svg";

function PageTwo() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title:
        "What are the engagement and connection services offfered bt tring ?",
      content: "Content for Section 1",
    },
    {
      title: "What is the process to book a Tring Video?",
      content: "Content for Section 2",
    },
    {
      title: "How Much time does it take for my request to get delivered ?",
      content: "Content for Section 3",
    },
    {
      title:
        "are the prices visible on the website also applicable for brand/corporate orders?",
      content: "Content for Section 3",
    },
    {
      title: "What if Celebrity does not complete the video ?",
      content: "Content for Section 3",
    },
    {
      title: "Why did my orders get declined ?",
      content: "Content for Section 3",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="pagetwo">
        <div className="pagetwo-left">
          <h1>
            WELCOME TO THE
            <br /> GETHIRE.AI PLACEMENT
            <br /> FEST 2023
          </h1>
          <br />

          <p>
            where innovation meets opportunity! Join us for an unforgettable day
            of
            <br /> recruitment, networking, and cultural celebrations
          </p>
        </div>
        <div className="pagetwo-right">
          <img alt="" src={mask} />
        </div>
      </div>
      <div className="marq">
      <marquee behavior="scroll" direction="left">
          “PARTNERSHIP IN INDIA’S BIGGEST CAREER FAIR” * “PARTYCIPATE IN INDIA’S
          BIGGEST CAREER FAIR” * “PARTYCIPATE IN INDIA’S BIGGEST CAREER FAIR” *

      </marquee>
      </div>

      <div className="event-btns">
        <button className="b1">About Event</button>
        <button className="b2">WorkShop</button>
        <button className="b1">Register</button>
        <button className="b2">Partner with us</button>
      </div>

      <div className="vision">
        <div className="vision-left">
          <div className="visionbtn">OUR VISION</div>
          <br />
          <h1>
            Discover Your Future with
            <br />
            Skillgenic - India's First <br />
            Smart Employment Platform
          </h1>
          <br /> <br />
          <button>Learn More</button>
          <br /> <br />
        </div>
        <div className="vision-right">
          <p>
            Whether you're a company looking for top talent or a student ready
            to embark on a career journey, Skillgenic has
            <br /> you covered
          </p>
        </div>
      </div>

      <div className="largestAI">
        <div className="largestAI-section">
          <h1>
            The largest AI event of the year.
            <br /> Free and on demand.
          </h1>
          <br />
          <p>
            Catch all the groundbreaking innovations, inspiring keynotes, and
            surprising
            <br /> moments. Dive into 120+ episodes and watch the best learning,
            moments,
            <br /> and announcements for you by role, topic, or industry.
            Dreamforce 2023 is
            <br /> done, but the magic lives on.
          </p>
          <br /> <br />
          <div className="slider">
            <div className="slider-card">
              <button>Speaker Spotlight Series:</button>
            </div>
            <div className="slider-card s1">
              <button>Speaker Spotlight Series:</button>
            </div>
            <div className="slider-card s2">
              <button>Speaker Spotlight Series:</button>
            </div>
            <div className="slider-card">
              <button>Speaker Spotlight Series:</button>
            </div>
            <div className="slider-card">
              <button>Speaker Spotlight Series:</button>
            </div>
            <div className="slider-card">
              <button>Speaker Spotlight Series:</button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="hiriing">
          <div className="hiriing-left">
            <div className="visionbtn2">COMPANIES HIRING</div>
            <br />
            <h1>
              Explore our sponsor <br />
              network and see how they <br />
              can help you solve{" "}
              <span>
                more <br />
                challenges.
              </span>
            </h1>
            <br /> <br />
            <button>All Sponsors</button>
            <br /> <br />
          </div>
          <div className="hiriing-right">
            <img alt="" src={brands} />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <h1 className="skill">Skill Development Workshop</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="workshop">
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>

          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>

          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
          <div className="CAD">
            <img alt="" src={workshop} />
            <p>
              Computer Aided
              <br /> Design (CAD)
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="festival">
        <div className="festival-left">
          <br />
          <br />
          <br />

          <h1>Festival Passes</h1>
          <br />
          <br />
          <br />

          <div className="generalAdmission">
            <h2>General Admission</h2>
            <br />
            <p>
              Allows entrance to the Venue and <br />
              Camping all weekend.
            </p>
          </div>
          <br />
          <br />
          <div className="generalAdmission">
            <h2>General Admission</h2>
            <br />
            <p>
              Allows entrance to the Venue and <br />
              Camping all weekend.
            </p>
          </div>
          <br />
          <br />
          <div className="generalAdmission">
            <h2>General Admission</h2>
            <br />
            <p>
              Allows entrance to the Venue and <br />
              Camping all weekend.
            </p>
          </div>
          <br />
          <br />
          <button>View All Passes</button>
        </div>
        <div className="festival-right">
          .
          <img alt="" src={festival} />
        </div>
      </div>

      <div className="ENDQUOTE">
        <div className="endq">END Quote</div>
        <br />
        <br />
        <h1>Get a free front-row seat to the future of business.</h1>
        <br />
        <br />

        <p>Watch Dreamforce live from anywhere on Salesforce+.</p>
        <br />
        <br />

        <button>Watch Now</button>
      </div>

      <div className="demoo">
        <img alt="" src={img2} />
        <div className="demo-text">
          <div className="endq">DEMO</div>
          <br />
          <h1>Request a free demo</h1>
          <br />
          <br />
          <p>
            Unlock the Power of Smart Recruitment with Skillgenic! Schedule a
            personalized demonstration to experience firsthand how our
            innovative platform can transform your recruitment processes and
            elevate your hiring strategy.
          </p>
          <br />
          <br />
          <br />
          <br />
          <h4>Sign up for demo</h4>
          <br />
          <input placeholder="Your Email Address" />
          <button>Sign Up</button>
        </div>
      </div>

      <div className="partners">
        <div className="partnerbtn">PARTNERS</div>
        <br />

        <h1>Our Partners and Sponsors</h1>
        <br />
        <br />
        <br />
        <br />
        <div className="brn">
          <img alt="" src={img3} />
          <img alt="" src={img4} />
          <img alt="" src={img5} />
        </div>
        <br />
        <br />
        <br />
        <div className="brn">
          <img alt="" src={img6} />
          <img alt="" src={img7} />
          <img alt="" src={img8} />
        </div>
      </div>
      <div className="accordion">
        <br />
        <br />
        <br />
        <br />
        <div className="center">
          <br />
          <br />
          <div className="partnerbtn">PARTNERS</div>
          <br />
          <br />
          <h1 style={{ textAlign: "center" }}>Frequently Asked Questions</h1>
          <br />
          <br />
        </div>

        <br />
        {accordionData?.map((section, index) => (
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
      </div>

      <footer>
        <div className="footer-top">
          <div className="f1">
            <div className="logo">
              <p>logo</p>
            </div>
            <br />
            <h3>Mission</h3>
            <br />
            <p>
              We are a social enterprise on a mission to accelerate the
              regeneration of nature. We enable companies to gift trees that are
              brought back in the heart of Africa. Easily, at scale, and with an
              epic customizable gifting experience.
            </p>
            <br />
            <h4>Sign up for Our Newsletter</h4>
            <br />
            <div className="footerinput">
              {" "}
              <input placeholder="Enter your email" />
              <button>Sign Up</button>
            </div>
          </div>
          <div className="f2">
            <ul>
              Pages
              <li>Plateform</li>
              <li>Solution</li>
              <li>Resources</li>
              <li>Our Customers</li>
              <li>Event</li>
            </ul>
          </div>
          <div className="f3">
            <h5>Registration for sponsorship & collaboration</h5>
            <br /> <button>REGISTER</button>
            <br />
            <br />
            <h3>Contact Info</h3>
            <br />
            <h2>+4863154859</h2>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li>Terms and condition</li>
            <li>Privacy policy</li>
            <li>All rights reserved gethire.ai..</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default PageTwo;
