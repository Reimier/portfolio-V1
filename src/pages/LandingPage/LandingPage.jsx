import Navbar from "../../components/Navbar/Navbar";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./landing-page.css";
import { NavLink } from "react-router";

export default function LandingPage() {
  return (
    <>

    <div className="landing">

        <div className="nav">

            <Navbar></Navbar>
          
        </div>

        <div className="intro">
        
          <p id="header">Creative Web Developer and Designer</p>
          <p id="desc" >I create modern websites that combine elegant visuals with functional design.  My goal is to bring ideas to life with creative, user-centered digital experiences.</p>

        </div>

        <div className="cta">

          <button id="cv">
            Download CV
          </button>
          <button id="contact">
            Let's Talk
          </button>

        </div>


        <div className="projects">

          <ProjectCard></ProjectCard>

        </div>

    </div>

    </>
  );
}