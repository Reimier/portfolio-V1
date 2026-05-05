
import "./about.css";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

export default function About(){

      useEffect(() => {
        AOS.init({
          duration: 800, 
          once: true,
          easing: 'ease-in-out',
        });
      }, []);

    return(
        <>

        <div className="about">
            
            <div className="about-intro" data-aos="fade-up">
            
            <p id="header">Website developer turning ideas into beautiful UI.</p>
            <p id="about-desc"> I’m Reimier Reyes, a 21 years old Web Developer and Designer based in the Philippines. I specialize in creating modern, user-friendly web applications that blend clean design with purposeful functionality. I love building digital experiences that are both visually striking and intuitive to use.</p>

            </div>

            <div className="about-img" data-aos="fade-up">

                <img src="reimier-about-img.png">
                </img>

            </div>

            <div className="about-exp">

                <p className="about-titles" data-aos="fade-up">Professional Experience</p>

                <p className="exp-sub" data-aos="fade-up">Salesforce – Virtual Internship | 2025</p>

                <p className="exp-desc" data-aos="fade-up">Successfully completed and collected numerous Superbadges in Salesforce Trailhead, demonstrating proficiency in key platform functionalities.</p>

                <p className="exp-sub" data-aos="fade-up">Calumpit MTO – Work Immersion Intern | 2023</p>

                <p className="exp-desc" data-aos="fade-up">Completed an 80-hour work immersion, enhancing knowledge of the local municipal treasury industry workflow and financial documentation processes.</p>

                <p className="exp-desc" data-aos="fade-up">Streamlined organizational flow by arranging and archiving multiple paperwork, receipts, and related documents, resulting in an organized workplace.</p>


            </div>

            <div className="about-educ">

                <p className="about-titles" data-aos="fade-up" >Education</p>

                <p className="educ-sub" data-aos="fade-up" >Bulacan State University - Main Campus | 2027</p>

                <p className="educ-desc" id="educ-desc" data-aos="fade-up">Bachelor of Science in Information Technology.</p>
                <p className="educ-desc" data-aos="fade-up" >Specializes in Web and Mobile App Development.</p>

                <p className="educ-sub" data-aos="fade-up">FreeCodeCamp | 2026</p>

                <p className="educ-desc" id="educ-desc" data-aos="fade-up">Front-End Development Libraries Certification.</p>

                <p className="educ-sub" data-aos="fade-up">Technical Education and Skills Development Authority | 2025</p>

                <p className="educ-desc" id="educ-desc" data-aos="fade-up">TESDA Online Program (TOP).</p>
                <p className="educ-desc" data-aos="fade-up">Certificate of Completion on Microsoft Digital Literacy, Computer System Servicing, and SMART Technopreneurship 101.</p>


            </div>

            <div className="about-cert">

                <img data-aos="fade-up" src="salesforce-cert.svg">
                </img>

                <img data-aos="fade-up" src="tesda-ms.svg">
                </img>

                <img data-aos="fade-up" src="tesda-css.svg">
                </img>

                <img data-aos="fade-up" src="tesda-smart.svg">
                </img>

            </div>

            
        </div>
        
        </>
    )

}