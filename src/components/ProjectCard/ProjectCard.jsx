import "./project-card.css";
import AOS from "aos"; // Added AOS import
import "aos/dist/aos.css"; // Added AOS styles
import { useEffect } from "react";

export default function ProjectCard({image, title, tools, site, more}){

        useEffect(() => {
          AOS.init({
            duration: 800, 
            once: true,
            easing: 'ease-in-out',
          });
        }, []);

    return(
    <>


    <div className="card" data-aos="fade-up">

        <div className="image">

            <img src={image}>
            
            </img>

        </div>

        <div className="title">

            <p>{title}</p>


        </div>

        <div className="tools">

            <p>{tools}</p>

        </div>

        <div className="btn">

        <a href={more} target="_blank">

        <button id="more">Learn more</button>

        </a>
        <a href={site} target="_blank">

        <button id="visit">Visit site</button>

        </a>

        </div>


    </div>
    
    </>
    )
}