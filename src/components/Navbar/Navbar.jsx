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
        
        <NavLink to="#" data-aos="fade-left">Reimier Reyes</NavLink>

        <div className="links" data-aos="fade-right">
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Projects</NavLink>
        </div>
      </nav>
    </>
  );
}