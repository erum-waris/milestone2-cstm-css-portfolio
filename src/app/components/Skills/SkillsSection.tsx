import React from "react";

import ImageSlider from "@/app/components/Image-slider";

import SkillsBar from "./Skillsbar";

const SkillsSection: React.FC = () => {
  return (
    <section>
      <div className="skills-container">
        <h2 className="skills-header">
          My{" "}
          <span className="skills-highlight">
            Skills
          </span>
        </h2>
        <div className="skills-grid">
          <div className="slider-container">
            <ImageSlider />
          </div>
          <div className="skills-bar-box">
          <div className="skills-bar-wrapper">
            <SkillsBar />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
