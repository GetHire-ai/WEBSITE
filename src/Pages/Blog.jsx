import card from "../Assets/Group 11.svg";
import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://kstraining-server.vercel.app/api/blog/all"
        );
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="workwithus">
        <h1>Blogs</h1>
      </div>
      <br />
      <br />
      <div className="blog-cardsa">
        {blogs.map((blog) => (
          <Link className="link" to={`/blog/${blog._id}`} key={blog._id}>
            <div className="blog-carda">
              <img src={card} alt={`Card for ${blog.title}`} />
              <div className="blogdesc">
                <h1>{blog.title}</h1>
                <p>{blog.content}</p>
                <h6>
                  <i className="bi bi-calendar2-week"></i>
                  {blog.publishDate}
                </h6>
                <button>
                  Read More <i className="bi bi-arrow-right-circle"></i>
                </button>
              </div>
            </div>
          </Link>
        ))}
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

export default Blog;
