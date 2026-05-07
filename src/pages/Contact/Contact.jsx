
import "./contact.css";
import emailjs from "emailjs-com";
import { useState } from "react";
import { NavLink } from "react-router";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

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

    emailjs
      .sendForm(
        "service_248vvxb",
        "template_m1hfcl6",
        e.target,
        "Y2oktYdMFhwEhWryt"
      )
      .then(
        () => setStatus(alert("Message sent. Thank you for reaching out!")),
        e.target.reset(),
        () => setStatus(alert("There seems to be a problem! try again later."))
      );
  };


    return(
        <>

        <div className="contact" >

        <div className="contact-intro" data-aos="fade-up" >

            <p id="header">Want to work together? feel free to say hi!</p>
            <p id="contact-desc">Send me a message so that we can work together on a 
project or just say hi to me! Hit me up and I’ll get back to
you as soon as possible.</p>

        </div>

        <div className="contact-page" data-aos="fade-up">

        <form className="contact-form" onSubmit={sendEmail}>
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