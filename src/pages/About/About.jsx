
import "./about.css";
import { useEffect } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css"; 

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../components/Footer/Footer";

export default function About(){

      useEffect(() => {
        AOS.init({
          duration: 800, 
          once: true,
          easing: 'ease-in-out',
          offset: 100,
        });
      }, []);

    return(
        <>

        <div className="about">
            
            <div className="about-intro" data-aos="fade-up">
            
            <p id="header">Turning Ideas Into Engaging UI.</p>
            <p className="about-desc"> I'm Reimier Reyes, a 21-year-old website developer and UI/UX designer based in the province of Bulacan, Philippines.</p>
            <p className="about-desc"> I specialize in building modern, responsive web applications that combine clean, elegant design with smooth functionality. From interactive web apps to e-commerce experiences, I focus on creating user-centered digital products that are both visually appealing and highly intuitive. </p>

            </div>

            <div className="about-img" data-aos="fade-up">

                <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                >

                <SwiperSlide>
                <img src="reimier-about-img3.png" alt="About 1" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="reimier-about-img2.png" alt="About 1" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="reimier-about-img4.png" alt="About 1" />
                </SwiperSlide>

                <SwiperSlide>
                <img src="reimier-about-img5.png" alt="About 1" />
                </SwiperSlide>

            </Swiper>

            </div>

                <div className="about-exp">

                <p className="about-titles"><i class="fa-brands fa-black-tie"></i> Professional Experience</p>

                <p className="exp-sub">Salesforce – Virtual Internship | 2025</p>

                <p className="exp-desc" >Successfully completed and collected numerous Superbadges in Salesforce Trailhead, demonstrating proficiency in key platform functionalities.</p>

                <p className="exp-sub" >Calumpit MTO – Work Immersion Internship | 2023</p>

                <p className="exp-desc" >Streamlined organizational flow by arranging and archiving multiple paperwork, receipts, and related documents, resulting in an organized workplace.</p>

            </div>

            <div className="about-educ">

                <p className="about-titles"  ><i class="fa-solid fa-graduation-cap"></i> Education</p>

                <p className="educ-sub"  >Bulacan State University - Malolos Campus | 2027</p>

                <p className="educ-desc"  >Bachelor of Science in Information Technology (BSIT). Specializes in Web and Mobile App Development.</p>
                
                <p className="educ-sub" >FreeCodeCamp | 2026</p>

                <p className="educ-desc"  >Responsive Web Design Certification & Front-End Development Libraries Certification (In progress).</p>

                <p className="educ-sub" >Technical Education and Skills Development Authority | 2025</p>

                <p className="educ-desc"  >TESDA Online Program (TOP). Certificate of Completion on Microsoft Digital Literacy, Computer System Servicing, and SMART Technopreneurship 101.</p>


            </div>

            <div className="about-tech">

                <p className="about-titles" ><i class="fa-solid fa-code"></i> Tech Stack</p>

                <p className="tech-sub" >
                    <i className="fa-brands fa-react"></i>
                    <i className="fa-brands fa-node-js"></i>
                    <i className="fa-brands fa-npm"></i>
                    <i className="fa-brands fa-html5"></i>
                    <i className="fa-brands fa-css3-alt"></i>
                    <i className="fa-brands fa-js"></i>
                    <i className="fa-brands fa-git-alt"></i>
                    <i className="fa-brands fa-github"></i>
                    <i className="fa-brands fa-figma"></i>
                </p>

            </div>

            <div className="about-cert">

                <a className="cert-link" href="https://drive.google.com/drive/folders/11N6U03qG1wlc3Or73msltMCmMV7vEpyG?usp=sharing" target="_blank" rel="noreferrer">
                <p >Check out my certificates.</p>
                </a>


            </div>

            <Footer></Footer>

            
        </div>
        
        </>
    )

}