import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import webDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        I'm a Skilled and passionate web designer with experience in creating
        visually user-friendly websites. I'm Proficient in HTML,CSS And
        JavaScript, as well as design software such as adobe photoshop and
        illustrator
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>
              this is a demo ui/ux text,Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Alias, ad.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={webDesign} alt="Web-Desing" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>
              this is a demo ui/ux text,Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Alias, ad.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App-Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              this is a demo ui/ux text,Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Alias, ad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
