import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

// นำเข้าหน้าแรกแบบปกติเพราะเป็นหน้าที่โหลดทันที
import HomePage from "./pages/HomePage";

// Lazy load หน้าอื่นๆ เพื่อแบ่ง bundle
const AboutPage = lazy(() => import("./pages/AboutPage"));
const EntrepreneurPage = lazy(() => import("./pages/EntrepreneurPage"));

// Lazy load หน้าในส่วน work
const CommitteePage = lazy(() => import("./pages/work/CommitteePage"));
const SpeakerPage = lazy(() => import("./pages/work/SpeakerPage"));
const InnovationPage = lazy(() => import("./pages/work/InnovationPage"));
const IncubatorPage = lazy(() => import("./pages/work/IncubatorPage"));
const SkillsPage = lazy(() => import("./pages/work/SkillsPage"));
const AcademicPage = lazy(() => import("./pages/work/AcademicPage"));
const StudentWorkPage = lazy(() => import("./pages/work/StudentWorkPage"));

// Lazy load หน้าในส่วน achievements
const TrainingPage = lazy(() => import("./pages/achievements/TrainingPage"));
const QualificationPage = lazy(() =>
  import("./pages/achievements/QualificationPage")
);
const CertificatePage = lazy(() =>
  import("./pages/achievements/CertificatePage")
);
const AwardPage = lazy(() => import("./pages/achievements/AwardPage"));

// Component สำหรับแสดงระหว่างโหลด
const LoadingComponent = () => (
  <div className="loading-container">
    <div className="container mt-5 pt-5 text-center">
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
      <p className="mt-3">กำลังโหลด...</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* หน้าหลักโหลดทันทีไม่ต้อง lazy load */}
            <Route index element={<HomePage />} />

            {/* หน้าพื้นฐาน */}
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
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
