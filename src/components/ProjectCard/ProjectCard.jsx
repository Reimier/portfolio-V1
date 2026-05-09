import "./project-card.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function ProjectCard({ images, title, desc, site }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  

  return (
    <div className="card" data-aos="fade-up">

      <div className="image-slider">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Project ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="title">
        <a href={site} target="_blank" rel="noreferrer">
            <p>{title}</p>
        </a>
      </div>

      <div className="card-desc">
        <p>{desc}</p>
      </div>


    </div>
  );
}