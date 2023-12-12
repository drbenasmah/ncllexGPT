import React from "react";
import Back from "../common/back/Back";
import "./contact.css";
import Header from "../common/header/Header";
import Footer from "../common/web-footer/Footer";

const Contact = () => {
  const map = `
  https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d445.32605062862353!2d18.691117352080013!3d53.023367786454294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ccb40301d5a91%3A0x99ee141c296bc6c2!2sKonstytucji%203%20Maja%2040c%2C%2087-100%20Toru%C5%84!5e0!3m2!1sen!2spl!4v1702254384284!5m2!1sen!2spl" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
`;
  return (
    <>
      <Header />
      <Back title="Contact us" />
      <section className="contacts padding">
        <div className="container shadow flexSB">
          <div className="left row">
            <iframe src={map}></iframe>
          </div>
          <div className="right row">
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className="items grid2">
              <div className="box">
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="box">
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className="box">
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action="">
              <div className="flexSB">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
              </div>
              <input type="text" placeholder="Subject" />
              <textarea cols="30" rows="10">
                Create a message here...
              </textarea>
              <button className="primary-btn">SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
