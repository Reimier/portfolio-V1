
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./landing-page.css";
import { NavLink } from "react-router";
import Footer from "../../components/Footer/Footer";
import Contact from "../Contact/Contact";

export default function LandingPage() {


  return (
    <>

    <div className="landing">

        <div className="intro"  >
        
          <p id="header">Hello! I'm a  <span>Creative Web Developer</span> with UI/UX Design Experience.</p>
          <p id="landing-desc" > I create modern websites that combine elegant visuals with engaging design. My work is focused on bringing ideas to life with creative and user-centered digital experiences.</p>

        </div>

        <div className="cta" >

          <div className="cta-btns">
            <NavLink to="#contact-header" >
            <button id="contact">
             <i class="fa-regular fa-message"></i> Let's Talk
            </button>
            </NavLink>

            <a href="https://drive.google.com/file/d/1cq0MdXr3m4K2iiLEo9welGJled5pKADn/view?usp=sharing" target="_blank" rel="noreferrer">
            <button id="cv">
             <i class="fa-solid fa-file-lines"></i> View Full CV
            </button>
            </a>
          </div>

            <div className="landing-socials-icon">
            <a href="https://github.com/reimier" target="_blank" rel="noreferrer" className="icons" id="github"> <i class="fa-brands fa-github"></i> </a>
            <a href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer" className="icons" id="ig" > <i class="fa-brands fa-instagram"></i> </a>
            <a href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer" className="icons" id="in"> <i class="fa-brands fa-linkedin-in"></i></a>
            <a href="mailto:reimierreyes0221@gmail.com" target="_blank" rel="noreferrer" className="icons" id="email"><i class="fa-regular fa-envelope"></i></a>
            </div>


        </div>


        <div className="projects" id="projs">

          <ProjectCard 

          images={[
            "pokemon1.png",
            "pokemon2.png",
            "pokemon3.png",
          ]}

          title= "Guess the Pokémon " 
          desc = "An interactive quiz web app that tests Pokémon knowledge using silhouette and feature recognition. Features multiple difficulty levels, smooth animations, and a polished UI built with React components. Users guess from increasingly challenging clues in a fun, engaging format."
          site = "https://reimier.github.io/pokemon-game/#/easy"
        
          />

          <ProjectCard

            images={[
            "fairfly1.png",
            "fairfly2.png",
            "fairfly3.png",
            "fairfly4.png",
          ]}
          title= "Fairfly Travel and Tours"
          desc = "A franchising portal-like system with AI chatbot for business inquiry. Fairfly is a capstone project that our team made for Fairfly travel agency to enhance the business scalability using realtime database of Firebase."
          site = "https://reimier.github.io/shop-express/#/home"
        
          /> 

          <ProjectCard

            images={[
            "shop1.png",
            "shop2.png",
            "shop3.png",
          ]}

          title= "Shop Express "
          desc = "An e-commerce mockup showcasing a modern online store. Built with dummy API product data and Firebase for authentication and real-time database. Includes product browsing, user authentication, and a clean design."
          site = "https://reimier.github.io/shop-express/#/home"
        
          />

          <ProjectCard

          images={[
            "currency1.png",
            "currency2.png",
            "currency3.png",
          ]}
          title= "Currency Hub "
          desc = "A real-time currency converter that delivers instant exchange rate calculations. Users can input any amount and instantly see the conversions across multiple currencies using live data from a public REST API."
          site = "https://reimier.github.io/currency-exchange/#/"
        
          />


        </div>

        <Contact></Contact>

        <Footer></Footer>

    </div>

    </>
  );
}