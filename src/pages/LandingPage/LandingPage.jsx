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
        
          <p id="header">Creative web developer and UI/UX designer.</p>
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

          <ProjectCard

          image = "shopexpressIMG1.png"
          title = "Shop Express"
          tools = "React | Node.js | REST API | JavaScript | Firebase"
          site = "https://reimier.github.io/shop-express/#/home"
        
          />

          <ProjectCard

          image = "pokemonIMG1.png"
          title = "Guess the Pokémon"
          tools = "React | Node.js | REST API | JavaScript"
          site = "https://reimier.github.io/pokemon-game/#/easy"
        
          />

          <ProjectCard

          image = "currencyIMG1.png"
          title = "Currency Exchange Hub"
          tools = "React | Node.js | REST API | JavaScript"
          site = "https://reimier.github.io/currency-exchange/#/"
        
          />

          <ProjectCard

          image = "shopexpressIMG1.png"
          title = "Fairfly Travel and Tours"
          tools = "React | Node.js | REST API | JavaScript | Firebase"
        
          />

        </div>

        <div className="landing-about">

          <p>I’m Reimier Reyes, a web developer and Designer based in the Philippines. I specialize in creating modern, user-friendly web applications that blend clean design with purposeful functionality. I love building digital experiences that are both visually striking and intuitive to use.</p>

          <a id="learn-more">Learn more about me.</a>


        </div>

    </div>

    </>
  );
}