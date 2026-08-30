import { NavLink } from "react-router";
import "./navbar.css";
import { useState, useEffect } from "react";
import ScrollToTop from "../../ScrollToTop";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const projsEl = document.getElementById("projs");
      const aboutEl = document.getElementById("about");
      const contactEl = document.getElementById("contact-header");

      const scrollPos = window.scrollY + 220;

      // When near the top, no link is active
      if (window.scrollY < 200) {
        setActiveSection("");
        return;
      }

      const sections = [
        { id: "projs", top: projsEl?.offsetTop || 0 },
        { id: "about", top: aboutEl?.offsetTop || 0 },
        { id: "contact-header", top: contactEl?.offsetTop || 0 },
      ];

      let current = "";
      for (const section of sections) {
        if (section.top && scrollPos >= section.top) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setMenuOpen(false);
  };

  return (
    <>
      <nav>
        <div className="brand">
          <img className="navbar-img" src="favicon1.png" alt="logo" />
          <NavLink
            to="/"
            onClick={() => {
              ScrollToTop();
              setActiveSection("");
            }}
          >
            Reimier Reyes
          </NavLink>
        </div>

        <div className={`links ${menuOpen ? "active" : ""}`}>
          <NavLink
            to="/#projs"
            className={`nav-item ${activeSection === "projs" ? "active-link" : ""}`}
            onClick={() => handleNavClick("projs")}
          >
            Projects
          </NavLink>

          <NavLink
            to="/#about"
            className={`nav-item ${activeSection === "about" ? "active-link" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            About
          </NavLink>

          <NavLink
            to="/#contact-header"
            className={`nav-item ${activeSection === "contact-header" ? "active-link" : ""}`}
            onClick={() => handleNavClick("contact-header")}
          >
            Contact
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