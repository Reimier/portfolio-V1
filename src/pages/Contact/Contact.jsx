import "./contact.css";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const loadingToast = toast.loading('Sending your message...');

    emailjs
      .sendForm(
        "service_248vvxb",
        "template_m1hfcl6",
        e.target,
        "Y2oktYdMFhwEhWryt"
      )
      .then(
        () => {
          setIsSending(false);
          toast.success("Message sent!", {
            id: loadingToast,
          });
          e.target.reset();
        },
        (error) => {
          setIsSending(false);
          toast.error("Something went wrong. Please try again.", {
            id: loadingToast,
          });
        }
      );
  };

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <div className="contact" id="contact-header" data-aos="fade-up">
        <div className="contact-intro" >
          <p id="contact-header-title" >
            Let's Make Something <span>Great!</span>
          </p>
          <p id="contact-desc" >
            Send me a message so that we can work together on a 
            project or just say hi to me! Hit me up and I’ll get back to
            you as soon as possible.
          </p>
        </div>

        <div className="contact-page" data-aos="fade-up">
          <form className="contact-form" onSubmit={sendEmail}>
            <div className="socials-icon">
              <a title="GitHub" href="https://github.com/reimier" target="_blank" rel="noreferrer" className="icons" id="github">
                <i className="fa-brands fa-github"></i>
              </a>
              <a title="Instagram" href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer" className="icons" id="ig">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a title="LinkedIn" href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer" className="icons" id="in">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a title="Email" href="mailto:reimierreyes0221@gmail.com" target="_blank" rel="noreferrer" className="icons" id="email">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>

            <label>Name</label>
            <input placeholder="Juan Dela Cruz..." name="name" type="text" required />

            <label>Email</label>
            <input placeholder="your_email@gmail.com..." name="email" type="email" required />

            <label>Message</label>
            <textarea placeholder="Enter your message here..." name="message" rows="6" required></textarea>

            <button className="submit-btn" disabled={isSending}>
              <i className="fa-solid fa-paper-plane"></i> {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}