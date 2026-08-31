import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./landing-page.css";
import { NavLink } from "react-router";
import Footer from "../../components/Footer/Footer";
import Contact from "../Contact/Contact";
import About from "../About/About";

export default function LandingPage() {
  return (
    <>
      <div className="landing">
        <div className="intro">
          <p id="header">Hello! I'm a <span id="wd">Website Developer</span> that Builds and Scale <span id="dp">Digital Products.</span></p>
          <p id="landing-desc">
            I build clean and usable websites for real people that don’t feel like they were made just to look good. Most of my work starts messy and ends up simple. That’s the part I enjoy.
          </p>
        </div>

        <div className="cta">
          <div className="cta-btns">
            <NavLink to="#contact-header">
              <button id="contact">
                <i className="fa-regular fa-message"></i> Let's Talk
              </button>
            </NavLink>

            <a href="https://drive.google.com/file/d/1cq0MdXr3m4K2iiLEo9welGJled5pKADn/view?usp=sharing" target="_blank" rel="noreferrer">
              <button id="cv">
                <i className="fa-solid fa-file-lines"></i> View Full CV
              </button>
            </a>
          </div>

          <div className="landing-socials-icon">
            <a title="GitHub" href="https://github.com/reimier" target="_blank" rel="noreferrer" className="icons" id="github">
              <i className="fa-brands fa-github"></i>
            </a>
            <a title="Instagram" href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer" className="icons" id="ig">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer" className="icons" id="in">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a title="Email" href="mailto:reimierreyes0221@gmail.com" target="_blank" rel="noreferrer" className="icons" id="email">
              <i className="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>

        <div className="projects" id="projs">
          <ProjectCard
            images={[
              "fairfly1.png",
              "fairfly2.png",
              "fairfly3.png",
              "fairfly4.png",
            ]}
            title="Fairfly Travel and Tours"
            desc="A portal-like system with AI chatbot for business inquiry. Fairfly is a capstone project that our team made for Fairfly travel agency."
            site=""
            stack={["JavaScript", "React", "Vite", "Node.js", "Firebase", "GitHub", "Gemini API"]}
          />

          <ProjectCard
            images={[
              "monster1.png",
              "monster2.png",
              "monster3.png",
              "monster4.png",
            ]}
            title="Guessmon"
            desc="An interactive quiz web app that tests Pokémon knowledge using silhouette and feature recognition."
            site="https://monster-game-lyart.vercel.app/#/register"
            stack={["JavaScript", "React", "Vite", "Node.js", "Firebase", "GitHub", "REST API"]}
          />

          <ProjectCard
            images={[
              "shop1.png",
              "shop2.png",
              "shop3.png",
            ]}
            title="Shop Express"
            desc="An e-commerce mockup showcasing REST API and Firebase for authentication and database integration."
            site="https://reimier.github.io/shop-express/#/home"
            stack={["JavaScript", "React", "Vite", "Node.js", "Firebase", "GitHub", "REST API"]}
          />

          <ProjectCard
            images={[
              "currency1.png",
              "currency2.png",
              "currency3.png",
            ]}
            title="Currency Hub"
            desc="A real-time currency converter with instant exchange rate calculations. This app updates everyday."
            site="https://reimier.github.io/currency-exchange/#/"
            stack={["JavaScript", "React", "Vite", "Node.js", "GitHub", "REST API"]}
          />
        </div>

        <About />

        <Contact />

        <Footer />
      </div>
    </>
  );
}