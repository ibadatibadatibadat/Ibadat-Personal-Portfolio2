import React from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";

const Contact = () => {
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
      <div className="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please Fill Out The Form Below To Discuss Any Work Opportunities
        </span>
        <form className="contactForm">
          <input type="text" className="name" placeholder="Your Name" />
          <input type="email" className="email" placeholder="Your Email" />
          <textarea
            name="message"
            rows="5"
            className="msg"
            placeholder="Your Message"
          ></textarea>
          <button className="submitBtn" type="submit" value="send">
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
