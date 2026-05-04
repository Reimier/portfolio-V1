
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./landing-page.css";
import { NavLink } from "react-router";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

export default function LandingPage() {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>

    <div className="landing">

        <div className="intro" data-aos="fade-up" >
        
          <p id="header">Web developer turning ideas into beautiful interfaces.</p>
          <p id="desc" >I create modern websites that combine elegant visuals with engaging design. My work is focused on bringing ideas to life with creative, user-centered digital experiences.</p>

        </div>

        <div className="cta" data-aos="fade-up" >

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
          tools = "React.js | Node.js | REST API | Firebase"
          site = "https://reimier.github.io/shop-express/#/home"
        
          />

          <ProjectCard

          image = "pokemonIMG1.png"
          title = "Guess the Pokémon"
          tools = "React.js | Node.js | REST API"
          site = "https://reimier.github.io/pokemon-game/#/easy"
        
          />

          <ProjectCard

          image = "currencyIMG1.png"
          title = "Currency Exchange Hub"
          tools = "React.js | Node.js | REST API"
          site = "https://reimier.github.io/currency-exchange/#/"
        
          />

          <ProjectCard

          image = "shopexpressIMG1.png"
          title = "Fairfly Travel and Tours"
          tools = "React.js | Node.js | REST API | Firebase"
        
          />

        </div>

        <div className="landing-about" data-aos="fade-up" >

          <p>I’m Reimier Reyes, a web developer and designer based in the Philippines. I specialize in creating modern, user-friendly web applications that blend clean design with purposeful functionality. I love building digital experiences that are both visually striking and intuitive to use.</p>

          <a id="learn-more">Learn more about me.</a>


        </div>

    </div>

    </>
  );
}