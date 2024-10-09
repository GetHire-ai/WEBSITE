import React from "react";
import aws from "../Assets/1729030.webp";
import aws2 from "../Assets/i1.webp";
import aws3 from "../Assets/aws.png";
import Navbar from "../Components/Navbar";

function Technology() {
  return (
    <>
      <Navbar />
      <div className="workwithus">
        <h1>Technology</h1>
      </div>
      <div className="tech">
        <div className="tech-left">
          <h1>AWS Devops Online job support from India</h1>
          <br />{" "}
          <p>
            A team of qualified specialists with more than decades of experience
            from India provide AWS devops Job Support. If you're a novice or
            seasoned professional unfamiliar with AWS or having trouble with
            your everyday coursework, our AWS devops Job Support is the best
            option for you. AWS online training and AWS online job help are both
            offered by Online KBS Training, both of which are based in India.
            KBS Training employs qualified DevOps specialists that can provide
            AWS DevOps online work assistance from India to individuals in the
            USA, UK, and Canada and all around the globe.
          </p>
        </div>
        <div className="tech-right">
          <img src={aws} alt=""   />
        </div>
      </div>

      <div className="tech2">
        <div className="tech2-left">
          <img src={aws2} alt="" />
        </div>
        <div className="tech2-right">
          <h1>AWS Devops Proxy Support from India</h1>
          <br />{" "}
          <p>
            We provide AWS Proxy Job Support if you need help with a complicated
            operation in AWS or are having trouble understanding technology. Our
            expert will handle all of your regular meetings, formal meetings,
            documentation, research, writing code, and other matters while
            working full-time or part-time on your behalf. Depending on your
            needs, we may work full- or part-time, and we'll finish every
            assignment before the deadline.You may connect with our consultant
            via zoom, skype, or webex and share your desktop so that our
            skillful AWS developer can assist you with your daily AWS Devops
            Proxy Support Requirements.
          </p>
        </div>
      </div>
      <div className="tech3">
        <div className="tech3-left">
          <h1>AWS Devops Online job support from India</h1>
          <br />{" "}
          <p>
            A team of qualified specialists with more than decades of experience
            from India provide AWS devops Job Support. If you're a novice or
            seasoned professional unfamiliar with AWS or having trouble with
            your everyday coursework, our AWS devops Job Support is the best
            option for you. AWS online training and AWS online job help are both
            offered by Online KBS Training, both of which are based in India.
            KBS Training employs qualified DevOps specialists that can provide
            AWS DevOps online work assistance from India to individuals in the
            USA, UK, and Canada and all around the globe.
          </p>
        </div>
        <div className="tech3-right">
          <img src={aws3} alt="" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="whyus-section">
        <div className="whyus">
          <h1>Why Choose Our Job Support Services</h1>
          <br />
          <br />

          <ul>
            <li>
              <i class="bi bi-arrow-right"></i>
              We have been offering AWS assistance for several years, and all of
              our consultants are working professionals with more than decades
              of AWS expertise.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              KBS Training offers 24x7 monitoring and incident response to IT
              infrastructures and applications located on AWS.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              KBS Training brings together people, processes and technology to
              respond to and mitigate incidents. We follow and implement the
              best ITSM strategies for incident response management.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              While your internal teams concentrate on your company's core
              operations, the KBS Training team is also capable of managing your
              AWS cloud environments and workloads on a daily basis.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              Our team comprises Certified MNC consultants, and we provide
              dedicated support as per your individual needs.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              You can get flexible timings for job support services. No matter
              where you are and what time you need support, our team is here
              ready to serve you.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              You get the flexible mode of payments and you can also learn from
              the experts the piece of code that you don’t understand or the
              doubts that you may have.
            </li>
            <li>
              <i class="bi bi-arrow-right"></i>
              Whether it’s day-to-day assignment or one-time assignment, our
              team of experts at KBS Training will handle all your queries
              efficiently.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
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

export default Technology;
