import { NavLink } from "react-router";
import "./footer.css";
import ScrollToTop from "../../ScrollToTop";
import ScrollToHash from "../ScrollToHash/ScrollToHash";


export default function Footer() {

const scrollToSection = (id) => {

    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {

      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h1 >Get In Touch With Me!</h1>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h3>SITEMAP:</h3>
            <ul>
              <li><NavLink to="/" onClick={ScrollToTop}>Home</NavLink></li>
              <li><NavLink to="/" onClick={() => scrollToSection("projs")}>Projects</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/"onClick={() => scrollToSection("contact-header")}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>CONNECT:</h3>
            <ul>
              <li><a href="https://github.com/reimier" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a href="mailto:reimierreyes0221@gmail.com" target="_blank" rel="noreferrer">Email</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>ADDRESS:</h3>
            <p>reimierreyes0221@gmail.com</p>
            <p>Bulacan, Philippines</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom" >
        <p >© 2026 Reimier Reyes. All rights reserved.</p>
      </div>
    </footer>
  );
}