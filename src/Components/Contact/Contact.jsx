import React from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import adobe from "../../assets/adobe.png";
import microsoft from "../../assets/microsoft.png";
import facebook from "../../assets/facebook.png";

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
      <div className="contactPage"></div>
    </section>
  );
};

export default Contact;
