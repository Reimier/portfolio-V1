
import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { NavLink } from "react-router";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

import toast, { Toaster } from 'react-hot-toast';

export default function Contact(){

      useEffect(() => {
        AOS.init({
          duration: 800, 
          once: true,
          easing: 'ease-in-out',
        });
      }, []);

    const [status, setStatus] = useState("");

const sendEmail = (e) => {
  e.preventDefault();

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

        toast.success("Message sent!", {
          id: loadingToast,
        });
        e.target.reset();
      },
      (error) => {

        toast.error("Something went wrong. Please try again.", {
          id: loadingToast,
        });
      }
    );
};

    return(
        <>
        <Toaster position="bottom-center" reverseOrder={false} />

        <div className="contact" >

        <div className="contact-intro" data-aos="fade-up" >

            <p id="header">WANT TO WORK TOGETHER? FEEL FREE TO SAY HELLO.</p>
            <p id="contact-desc">Send me a message so that we can work together on a 
                                  project or just say hi to me! Hit me up and I’ll get back to
                                  you as soon as possible.</p>

        </div>

        <div className="contact-page" data-aos="fade-up">

        <form className="contact-form" onSubmit={sendEmail}>

            <div className="socials-icon">
            <a href="https://github.com/reimier" target="_blank" rel="noreferrer" className="icons"> <i class="fa-brands fa-github"></i> </a>
            <a href="https://www.instagram.com/ier_reyes/?hl=en" target="_blank" rel="noreferrer" className="icons"> <i class="fa-brands fa-instagram"></i> </a>
            <a href="https://www.linkedin.com/in/reimier-reyes-380a67355/" target="_blank" rel="noreferrer" className="icons"> <i class="fa-brands fa-linkedin-in"></i></a>
            <a href="mailto:reimierreyes0221@gmail.com" target="_blank" rel="noreferrer" className="icons"><i class="fa-regular fa-envelope"></i></a>
            </div>

            <label>Name</label>
            <input placeholder="Enter your name" name="name" type="text" required />

            <label>Email</label>
            <input placeholder="Enter your email" name="email" type="email" required />

            <label>Message</label>
            <textarea placeholder="Enter your message here" name="message" rows="6" required></textarea>

            <button className="submit-btn">Send Message</button>

        </form>

        {status && <p>{status}</p>}
        </div>
        </div>


        </>
    )
}