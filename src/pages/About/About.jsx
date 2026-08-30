import "./about.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const frontendSkills = [
    {
      name: "React",
      icon: (
          <svg viewBox="0 0 256 228" className="skill-icon">
            <path fill="#00d8ff" d="M210.483 73.824a172 172 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171 171 0 0 0-6.375 5.848a156 156 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a171 171 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a146 146 0 0 0 6.921 2.165a168 168 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a146 146 0 0 0 5.342-4.923a168 168 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145 145 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844m-6.365 70.984q-2.102.694-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14m-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a157 157 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345q.785 3.162 1.386 6.193M87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a157 157 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a135 135 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94M50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a135 135 0 0 1-6.318-1.979m12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144 144 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160 160 0 0 1-1.76-7.887m110.427 27.268a348 348 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381 381 0 0 0-7.365-13.322m-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322 322 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18M82.802 87.83a323 323 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a322 322 0 0 0-7.848 12.897m8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321 321 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147m37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486m52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382 382 0 0 0 7.859-13.026a347 347 0 0 0 7.425-13.565m-16.898 8.101a359 359 0 0 1-12.281 19.815a329 329 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310 310 0 0 1-12.513-19.846h.001a307 307 0 0 1-10.923-20.627a310 310 0 0 1 10.89-20.637l-.001.001a307 307 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329 329 0 0 1 12.335 19.695a359 359 0 0 1 11.036 20.54a330 330 0 0 1-11 20.722m22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026q-.518 2.504-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a161 161 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3M128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86" />
          </svg>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <svg viewBox="0 0 256 256" className="skill-icon">
          <path fill="#f7df1e" d="M0 0h256v256H0z" />
          <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
        </svg>
      ),
    },
    {
      name: "HTML5",
      icon: (
        <svg viewBox="0 0 512 512" className="skill-icon">
          <path fill="#e44d26" d="M71.2 447L35.8 50h440.4L440.8 447 256 498.4z" />
          <path fill="#f16529" d="M256 461.5V85.7h184.9l-30.8 345.8z" />
          <path fill="#ebebeb" d="M129.6 156.4h126.4v51.6h-73.4l4.8 52.8h68.6v51.5h-121.2m2.3 25.9h53.7l3.6 41.3 57.7 15.5v53.9l-105.9-29.5" />
          <path fill="#fff" d="M388.2 156.4H256v51.6h124.5m-4.7 52.8H256v51.6h63.6l-6 67.1-57.6 15.5v53.6l105.7-29.3" />
        </svg>
      ),
    },
    {
      name: "CSS3",
      icon: (
        <svg viewBox="0 0 256 361" className="skill-icon">
          <path fill="#264DE4" d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z" />
          <path fill="#2965F1" d="m212.417 314.547l19.86-222.49H128V337.95z" />
          <path fill="#EBEBEB" d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z" />
          <path fill="#FFF" d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z" />
        </svg>
      ),
    },
    {
      name: "Vite",
      icon: (
        <svg viewBox="0 0 256 257" className="skill-icon">
          <defs>
            <linearGradient id="vtA" x1="-.828%" x2="57.636%" y1="7.652%" y2="78.411%">
              <stop offset="0%" stopColor="#41D1FF" />
              <stop offset="100%" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vtB" x1="43.376%" x2="50.316%" y1="2.242%" y2="89.03%">
              <stop offset="0%" stopColor="#FFEA83" />
              <stop offset="8.333%" stopColor="#FFDD35" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>
          </defs>
          <path fill="url(#vtA)" d="M255.153 37.938L134.897 252.976c-2.483 4.44-8.862 4.466-11.382.048L.875 37.958c-2.746-4.814 1.371-10.646 6.827-9.67l120.385 21.517a6.5 6.5 0 0 0 2.322-.004l117.867-21.483c5.438-.991 9.574 4.796 6.877 9.62" />
          <path fill="url(#vtB)" d="M185.432.063L96.44 17.501a3.27 3.27 0 0 0-2.634 3.014l-5.474 92.456a3.268 3.268 0 0 0 3.997 3.378l24.777-5.718c2.318-.535 4.413 1.507 3.936 3.838l-7.361 36.047c-.495 2.426 1.782 4.5 4.151 3.78l15.304-4.649c2.372-.72 4.652 1.36 4.15 3.788l-11.698 56.621c-.732 3.542 3.979 5.473 5.943 2.437l1.313-2.028l72.516-144.72c1.215-2.423-.88-5.186-3.54-4.672l-25.505 4.922c-2.396.462-4.435-1.77-3.759-4.114l16.646-57.705c.677-2.35-1.37-4.583-3.769-4.113" />
        </svg>
      ),
    },
  ];

  const backendSkills = [
    {
      name: "Node.js",
      icon: (
        <svg viewBox="0 0 256 289" className="skill-icon">
          <path fill="#539e43" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505c7.155-2.385 8.48-2.915 15.9-7.156c.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915l-105.74-60.953c-1.06-.53-2.385-.53-3.18 0L20.405 80.166c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.636 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.326-3.18 3.181-3.18h13.516c1.59 0 3.18 1.325 3.18 3.18v120.58c0 20.936-11.396 33.126-31.272 33.126c-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 220.885 0 213.465 0 205.515V83.346C0 75.396 4.24 67.976 11.13 64L116.87 2.783c6.625-3.71 15.635-3.71 22.26 0L244.87 64C251.76 67.975 256 75.395 256 83.346v122.17c0 7.95-4.24 15.37-11.13 19.345L139.13 286.08c-3.445 1.59-7.42 2.385-11.13 2.385" />
        </svg>
      ),
    },
    {
      name: "Firebase",
      icon: (
        <svg viewBox="0 0 256 322" className="skill-icon">
          <path fill="#ff9100" d="M80.18 312.295c13.455 5.414 28.05 8.628 43.376 9.163a127.5 127.5 0 0 0 58.098-11.71c-21.145-8.307-40.294-20.455-56.638-35.56c-10.594 16.963-26.263 30.36-44.835 38.107" />
          <path fill="#ffc400" d="M125.013 274.193c-37.307-34.504-59.939-84.444-58.026-139.218c.062-1.78.156-3.557.266-5.334a96.63 96.63 0 0 0-50.456.528C6.838 147.614.828 167.63.079 189.069C-1.853 244.403 31.632 292.75 80.178 312.3c18.572-7.747 34.24-21.13 44.835-38.107" />
          <path fill="#dd2c00" d="M134.761 0c-24.44 19.58-43.738 45.396-55.414 75.136a180.5 180.5 0 0 0-12.113 54.515c42.912 11.07 73.917 50.745 72.306 96.865c-.612 17.532-5.887 33.79-14.545 47.687a180.7 180.7 0 0 0 56.637 35.56c42.441-19.618 72.553-61.833 74.297-111.764c1.129-32.351-11.3-61.184-28.864-85.521C208.517 86.738 134.76 0 134.76 0" />
        </svg>
      ),
    },
    {
      name: "Python",
      icon: (
        <svg viewBox="0 0 256 255" className="skill-icon">
          <defs>
            <linearGradient id="pyA" x1="12.959%" x2="79.639%" y1="12.039%" y2="78.201%">
              <stop offset="0%" stopColor="#387eb8" />
              <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="pyB" x1="19.128%" x2="90.742%" y1="20.579%" y2="88.429%">
              <stop offset="0%" stopColor="#ffe052" />
              <stop offset="100%" stopColor="#ffc331" />
            </linearGradient>
          </defs>
          <path fill="url(#pyA)" d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072" />
          <path fill="url(#pyB)" d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897" />
        </svg>
      ),
    },
    {
      name: "REST API",
      icon: (
        <span className="skill-fa-icon" style={{ color: "#6366f1" }}>
          <i className="fa-solid fa-cloud"></i>
        </span>
      ),
    },
  ];

  const toolsSkills = [
    {
      name: "Git",
      icon: (
        <svg viewBox="0 0 256 256" className="skill-icon">
          <path fill="#de4c36" d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21l29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693c5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657c7.663 7.66 7.663 20.075 0 27.74c-7.665 7.666-20.08 7.666-27.749 0c-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462l-.003 69.637a19.8 19.8 0 0 1 5.188 3.71c7.663 7.66 7.663 20.076 0 27.747c-7.665 7.662-20.086 7.662-27.74 0c-7.663-7.671-7.663-20.086 0-27.746a19.7 19.7 0 0 1 6.421-4.281V94.196a19.4 19.4 0 0 1-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442L4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 256 250" className="skill-icon">
          <path fill="#161614" d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0" />
        </svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 256 384" className="skill-icon">
          <path fill="#0acf83" d="M64 384c35.328 0 64-28.672 64-64v-64H64c-35.328 0-64 28.672-64 64s28.672 64 64 64" />
          <path fill="#a259ff" d="M0 192c0-35.328 28.672-64 64-64h64v128H64c-35.328 0-64-28.672-64-64" />
          <path fill="#f24e1e" d="M0 64C0 28.672 28.672 0 64 0h64v128H64C28.672 128 0 99.328 0 64" />
          <path fill="#ff7262" d="M128 0h64c35.328 0 64 28.672 64 64s-28.672 64-64 64h-64z" />
          <path fill="#1abcfe" d="M256 192c0 35.328-28.672 64-64 64s-64-28.672-64-64s28.672-64 64-64s64 28.672 64 64" />
        </svg>
      ),
    },
    {
      name: "VS Code",
      icon: (
        <span className="skill-fa-icon" style={{ color: "#007acc" }}>
          <i className="fa-solid fa-code"></i>
        </span>
      ),
    },
    {
      name: "npm",
      icon: (
        <svg viewBox="0 0 256 256" className="skill-icon">
          <path fill="#c12127" d="M0 256V0h256v256z" />
          <path fill="#fff" d="M48 48h160v160h-32V80h-48v128H48z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="about" id="about">
      {/* Intro */}
      <div className="about-intro">
        <p className="about-main-header">Turning Ideas Into <span>Engaging</span> UI.</p>
        <p className="about-desc">
          I'm Reimier Reyes, a 21-year-old website developer and UI/UX designer based in the province of Bulacan, Philippines.  I specialize in building modern, responsive web applications that combine clean, elegant design with smooth functionality.
        </p>

      </div>

      {/* Image Carousel */}
      <div className="about-img">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src="reimier-about-img3.png" alt="About 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="reimier-about-img2.png" alt="About 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="reimier-about-img4.png" alt="About 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="reimier-about-img5.png" alt="About 4" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Work Experience in Card */}
      <div className="about-section-wrap" data-aos="fade-up">
        <p className="about-titles">
          <i className="fa-solid fa-suitcase"></i> Work Experience
        </p>

        <div className="about-card">
          {/* <div className="card-item">
            <p className="exp-sub">Capstone – Lead Researcher | 2026</p>
            <p className="exp-desc">
              Lead and manage a team of 5 members to complete and accomplish a capstone project
            </p>
          </div>

          <div className="card-divider"></div> */}

          <div className="card-item">
            <p className="exp-sub">Salesforce Trailhead – Virtual Internship | 2025</p>
            <p className="exp-desc">
              Successfully completed and collected numerous Superbadges in Salesforce Trailhead, demonstrating proficiency in key platform functionalities.
            </p>
          </div>

          <div className="card-divider"></div>

          <div className="card-item">
            <p className="exp-sub">Calumpit MTO – Work Immersion Internship | 2023</p>
            <p className="exp-desc">
              Streamlined organizational flow by arranging and archiving multiple paperwork, receipts, and related documents, resulting in an organized workplace.
            </p>
          </div>
        </div>
      </div>

      {/* Education in Card */}
      <div className="about-section-wrap" data-aos="fade-up">
        <p className="about-titles">
          <i className="fa-solid fa-graduation-cap"></i> Education
        </p>

        <div className="about-card">
          <div className="card-item">
            <p className="educ-sub">Bulacan State University - Malolos Campus | 2027</p>
            <p className="educ-desc">
              Bachelor of Science in Information Technology (BSIT). Specializes in Web and Mobile App Development.
            </p>
          </div>

          <div className="card-divider"></div>

          <div className="card-item">
            <p className="educ-sub">Technical Education and Skills Development Authority | 2025</p>
            <p className="educ-desc">
              TESDA Online Program (TOP). Certificate of Completion on Microsoft Digital Literacy, Computer System Servicing, and SMART Technopreneurship 101.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack in Categorized Cards */}
      <div className="about-section-wrap" data-aos="fade-up">
        <p className="about-titles">
          <i className="fa-solid fa-layer-group"></i> Technologies & Tools
        </p>

        <div className="tech-stack-container">
          {/* Frontend */}
          <div className="about-card tech-card">
            <p className="tech-category-heading">FRONTEND DEVELOPMENT</p>
            <div className="tech-pills-wrap">
              {frontendSkills.map((tech) => (
                <div key={tech.name} className="tech-pill">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="about-card tech-card">
            <p className="tech-category-heading">BACKEND & APIS</p>
            <div className="tech-pills-wrap">
              {backendSkills.map((tech) => (
                <div key={tech.name} className="tech-pill">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="about-card tech-card">
            <p className="tech-category-heading">TOOLS, DESIGN & SYSTEMS</p>
            <div className="tech-pills-wrap">
              {toolsSkills.map((tech) => (
                <div key={tech.name} className="tech-pill">
                  {tech.icon}
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certification in Card */}
      <div className="about-section-wrap" data-aos="fade-up">
        <p className="about-titles">
          <i className="fa-solid fa-certificate"></i> Certification
        </p>

        <div className="about-card about-cert-card">
          <a
            className="cert-link"
            href="https://drive.google.com/drive/folders/11N6U03qG1wlc3Or73msltMCmMV7vEpyG?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              Check out my certificates <i className="fa-solid fa-arrow-right"></i>
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}