import { NavLink, useLocation } from "react-router";
import "./footer.css";
import ScrollToTop from "../../ScrollToTop";

export default function Footer() {
  const location = useLocation();

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
          <h1>Get In <span>Touch</span> With Me!</h1>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h3>SITEMAP:</h3>
            <ul>
              <li><NavLink to="/" onClick={ScrollToTop}>Home</NavLink></li>
              <li><NavLink to="/" onClick={() => scrollToSection("projs")}>Projects</NavLink></li>
              <li><NavLink to="/" onClick={() => scrollToSection("about")}>About</NavLink></li>
              <li><NavLink to="/" onClick={() => scrollToSection("contact-header")}>Contact</NavLink></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>CONNECT:</h3>
            <ul>
              <li><a href="https://github.com/reimier" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> GitHub</a></li>
              <li><a href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer"><i class="fa-brands fa-instagram"></i> Instagram</a></li>
              <li><a href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i> LinkedIn</a></li>
              <li><a href="mailto:reimierreyes0221@gmail.com" target="_blank" rel="noreferrer"><i class="fa-solid fa-envelope"></i> Email</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>ADDRESS:</h3>
            <p>reimierreyes0221@gmail.com</p>
            <p>Bulacan, Philippines</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Reimier Reyes. All rights reserved.</p>
      </div>
    </footer>
  );
}