import { NavLink } from "react-router";
import "./navbar.css";
import { useState, useEffect } from "react";
import ScrollToTop from "../../ScrollToTop";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
      <nav>
        <div className="brand" >
          <img className="navbar-img" src="favicon1.png" alt="logo" />
          <NavLink to="/" onClick={ScrollToTop}>Reimier Reyes</NavLink>
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`} >
          <NavLink to="/#projs" onClick={() => setMenuOpen(false)}>
            Projects
          </NavLink>

          <NavLink to="/#contact-header" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

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