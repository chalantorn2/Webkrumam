import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
// เปลี่ยน path ให้ตรงกับโครงสร้างโฟลเดอร์ของคุณ
import EntrepreneurPage from "./pages/EntrepreneurPage";
import AboutPage from "./pages/AboutPage";
// เปลี่ยน path ของหน้า works ให้ชี้ไปที่โฟลเดอร์ work แทน
import CommitteePage from "./pages/work/CommitteePage";
import SpeakerPage from "./pages/work/SpeakerPage";
import InnovationPage from "./pages/work/InnovationPage";
import IncubatorPage from "./pages/work/IncubatorPage";
import SkillsPage from "./pages/work/SkillsPage";
import AcademicPage from "./pages/work/AcademicPage";
import StudentWorkPage from "./pages/work/StudentWorkPage";
// หน้า achievements ยังอยู่ในโฟลเดอร์ achievements ตามเดิม
import TrainingPage from "./pages/achievements/TrainingPage";
import QualificationPage from "./pages/achievements/QualificationPage";
import CertificatePage from "./pages/achievements/CertificatePage";
import AwardPage from "./pages/achievements/AwardPage";

// ลำดับการนำเข้า CSS
import "./styles/style.css"; // CSS พื้นฐาน
import "./styles/base.css"; // CSS พื้นฐานแทน Tailwind
import "./styles/layout.css"; // CSS สำหรับ layout
import "./styles/sections.css"; // CSS สำหรับ sections
import "./styles/about/index.css"; // CSS สำหรับหน้า about และ works

// Import ไฟล์ Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/entrepreneur" element={<EntrepreneurPage />} />

          {/* Routes สำหรับเมนูผลงาน */}
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/speaker" element={<SpeakerPage />} />
          <Route path="/innovation" element={<InnovationPage />} />
          <Route path="/incubator" element={<IncubatorPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/academic" element={<AcademicPage />} />
          <Route path="/student-work" element={<StudentWorkPage />} />

          {/* Routes สำหรับเมนูความสำเร็จ */}
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/qualification" element={<QualificationPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/award" element={<AwardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
