import "./navbar.css";
import { NavLink } from "react-router";
import AOS from "aos"; // Added AOS import
import "aos/dist/aos.css"; // Added AOS styles
import { useEffect } from "react";

export default function Navbar() {

    useEffect(() => {
      AOS.init({
        duration: 800, 
        once: true,
        easing: 'ease-in-out',
      });
    }, []);

  return (
    <>
      <nav>
        
        <a href="#" data-aos="fade-left">Reimier Reyes</a>

        <div className="links" data-aos="fade-right">
          <a href="#about">About</a>
          <a href="#projs">Projects</a>
        </div>
      </nav>
    </>
  );
}