import React from "react";
import HeroSection from "./components/HeroSection";
import AboutSec from "./components/AboutSec";
import SkillsSection from "./components/Skills/SkillsSection";
import Project from "./components/Projects/ProjectsDetails";
import ContactForm from "./components/Contact";


const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutSec/>
      <SkillsSection/>
      <Project/>
     <ContactForm/>
    </main>
  );
};

export default Home;
