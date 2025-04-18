import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// นำเข้า CSS หลัก
import "./styles/style.css"; // CSS พื้นฐาน
import "./styles/base.css"; // CSS พื้นฐานแทน Tailwind
import "./styles/layout.css"; // CSS สำหรับ layout
import "./styles/sections.css"; // CSS สำหรับ sections
import "./styles/about/index.css"; // CSS สำหรับหน้า about และ works

// นำเข้า CSS เฉพาะส่วน (จะถูกโหลดเมื่อจำเป็น)
import "./styles/about/index.css";

// นำเข้า Font Awesome Icons เฉพาะที่ใช้ แทนการนำเข้าทั้งหมด
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faSearch, faAward, faTrophy, faLightbulb,
//   faUsers, faGraduationCap, faCalendarAlt,
//   faEnvelope, faPhone, faMapMarkerAlt
// } from '@fortawesome/free-solid-svg-icons';
// import {
//   faFacebookF, faTwitter, faLinkedinIn, faInstagram
// } from '@fortawesome/free-brands-svg-icons';

// library.add(
//   faSearch, faAward, faTrophy, faLightbulb,
//   faUsers, faGraduationCap, faCalendarAlt,
//   faEnvelope, faPhone, faMapMarkerAlt,
//   faFacebookF, faTwitter, faLinkedinIn, faInstagram
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
