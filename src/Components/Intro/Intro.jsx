import React from "react";
import "./intro.css";
import BG from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="Intro">
      <div className="IntroContent">
        <span className="hello">Hello,</span>
        <span className="IntroText">
          I'm <span className="IntroName">Ibadat</span>
          <br />
          Website Designer
        </span>
        <p className="IntroPara">
          I'm A Skilled Web Designer With Experience In Creating
          <br />
          Visually appealing and user friendly Websites
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} className="btnimg" alt="hire me" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={BG} alt="proile" className="BG" />
    </section>
  );
};

export default Intro;
