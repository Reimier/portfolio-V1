import "./navbar.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <nav>
        <div className="brand" >
          <img className="navbar-img" src="favicon1.png" alt="logo" />
          <a href="#">Reimier Reyes</a>
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`} >
          <a href="#projs" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact-header" onClick={() => setMenuOpen(false)}>
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