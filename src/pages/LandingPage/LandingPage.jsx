
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
        
          <p id="header">Creative website developer and UI/UX designer.</p>
          <p id="landing-desc" >I create modern websites that combine elegant visuals with engaging design. My work is focused on bringing ideas to life with creative and user-centered digital experiences.</p>
          

        </div>

        <div className="cta" data-aos="fade-up" >

          <div className="cta-btns">
            <a href="#contact" >
            <button id="contact">
              Let's Talk
            </button>
            </a>

            <a href="https://drive.google.com/file/d/1cq0MdXr3m4K2iiLEo9welGJled5pKADn/view?usp=sharing" target="_blank" rel="noreferrer">
            <button id="cv">
              Download CV
            </button>
            </a>
          </div>

            <div className="landing-socials-icon">
            <a href="https://github.com/reimier" target="_blank" rel="noreferrer" className="icons"> <i class="fa-brands fa-github"></i> </a>
            <a href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer" className="icons"> <i class="fa-brands fa-instagram"></i> </a>
            <a href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer" className="icons"> <i class="fa-brands fa-linkedin-in"></i></a>
            </div>


        </div>


        <div className="projects" id="projs">

          <ProjectCard

          images={[
            "pokemon1.png",
            "pokemon2.png",
            "pokemon3.png",
          ]}

          title= "Guess the Pokémon (2025)"
          desc = "An interactive web-app designed to test a user’s knowledge of Pokémon through silhouette and feature recognition. Users will have difficulty options and the UI is made appealing to users by using react components from the UIverse website."
          site = "https://reimier.github.io/pokemon-game/#/easy"
        
          />

          <ProjectCard

            images={[
            "shop1.png",
            "shop2.png",
            "shop3.png",
          ]}

          title= "Shop Express (2026)"
          desc = "Shop express is an e-commerce mockup and is a personal project that I made using the Dummy JSON and Firebase. The Shop express is a project that I made to display my technical skills about API, Auth and Realtime database using Firebase."
          site = "https://reimier.github.io/shop-express/#/home"
        
          />

          <ProjectCard

          images={[
            "currency1.png",
            "currency2.png",
            "currency3.png",
          ]}
          title= "Currency Hub (2025)"
          desc = "A small project to give users quick and precise currency changes.  The web-app incorporates an open-source REST API to obtain latest currency rates and instantly calculate conversion results as the user enters an amount."
          site = "https://reimier.github.io/currency-exchange/#/"
        
          />

          {/* <ProjectCard

            images={[
            "shop1.png",
            "shop2.png",
            "shop3.png",
          ]}
          title= "Fairfly Travel and Tours (2026)"
          desc = "A franchising portal-like system with AI chatbot for business inquiry. Fairfly is a capstone project that our group made for Fairfly travel agency to enhance the business scalability using realtime database of Firebase."
          site = "https://reimier.github.io/shop-express/#/home"
        
          /> */}

        </div>

        <div className="landing-about" >

          <a id="learn-more" href="#about">
          <p data-aos="fade-up" >Learn more about me.</p>
          </a>


        </div>

    </div>

    </>
  );
}