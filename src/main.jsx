import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import "./style.css";
import "./styles/home.css"; // เพิ่มเข้ามา
import "./styles/about.css"; // เพิ่มเข้ามา

// Import ไฟล์ Font Awesome หรือคอมเมนต์ออกถ้ายังไม่ได้ติดตั้ง
// import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </React.StrictMode>
);
