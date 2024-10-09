import React from "react";
import "../App.css";

function Coming() {
  return (
    <>
      <section className="coming-soon">
        <div className="container">
          <div className="coming-content text-center">
            <h1 className="coming-title">Coming Soon</h1>
            <p className="coming-text-bottom">
              An exciting new feature is on the way that will make your
              experience even better. <br />
              <span className="coming-span">Stay tuned!</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Coming;
