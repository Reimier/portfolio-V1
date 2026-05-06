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

        <div className="brand" data-aos="fade-left">
          <img className="navbar-img" src="favicon1.svg" alt="logo" />
          <a href="#">Reimier Reyes</a>
        </div>

        <div className="links" data-aos="fade-right">
          <a href="#about">About</a>
          <a href="#projs">Projects</a>
        </div>
      </nav>
    </>
  );
}