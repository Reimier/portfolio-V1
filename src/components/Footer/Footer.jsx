import "./footer.css";


export default function Footer() {

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
              <li><a href="#">Home</a></li>
              <li><a href="#projs">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
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
        <p >©reimierreyes2026</p>
      </div>
    </footer>
  );
}