import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container flexSB">
          {/* <div className="logo-img">
            <img src="/logo192.png" width="80px" height="80px" alt="Logo" />
          </div> */}
          <div className="logo">
            <h1>NCLLEXGPT</h1>
            <span>Nursing College Exam GPT</span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
