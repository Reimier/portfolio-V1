import "./navbar.css";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <nav>
        <div className="brand" data-aos="fade-left">
          <img className="navbar-img" src="favicon1.svg" alt="logo" />
          <a href="#">Reimier Reyes</a>
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`} data-aos="fade-right">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projs" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}