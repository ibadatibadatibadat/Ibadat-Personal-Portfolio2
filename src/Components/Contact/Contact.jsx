import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";
import emailjs, { send } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tv3rlxl",
        "template_goc3p9w",
        form.current,
        "fGXaUaK4tp7t9vRbU2amU"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section className="contactPage">
      <div className="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of the notable companies I have work with includes
        </p>
        <div className="clientImgs">
          <img className="clientImg" src={walmart} alt="" />
          <img className="clientImg" src={adobe} alt="" />
          <img className="clientImg" src={microsoft} alt="" />
          <img className="clientImg" src={facebook} alt="" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please Fill Out The Form Below To Discuss Any Work Opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="send" onClick={sendEmail} >
            Submit
          </button>
          <div className="links">
            <img src={facebookIcon} alt="facebook" className="link" />
            <img src={twitterIcon} alt="twitter" className="link" />
            <img src={youtubeIcon} alt="youtube" className="link" />
            <img src={instagramIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
