import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          {/* ข้อความด้านซ้าย */}
          <div className="hero-text">
            {/* <div className="greeting-box">
              <span>สวัสดีค่ะ ทุกท่าน</span>
              <div></div>
              <div></div>
            </div> */}

            <h1>
              นางสาว <span className="highlight">จิรนันท์ เสนี</span>,
            </h1>
            <h2>ครู วิทยฐานะชำนาญการพิเศษ</h2>
            <h3>ประจำแผนกวิชาการตลาด</h3>

            <p className="hero-description">
              คุณครูผู้เชี่ยวชาญด้านการตลาด ที่มุ่งมั่นพัฒนาทักษะนักศึกษา
              <br />
              ด้วยวิธีการสอนสมัยใหม่
              เพื่อสร้างนักการตลาดที่พร้อมแข่งขันในยุคดิจิทัล
            </p>

            <div className="hero-buttons">
              <Link to="/about" className="hero-btn hero-btn-primary">
                ดูโปรไฟล์
              </Link>
              <a href="#contact" className="hero-btn hero-btn-outline">
                ติดต่อฉัน
              </a>
            </div>
          </div>

          {/* รูปภาพและแบดจ์ด้านขวา */}
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/assets/Asset1.png" alt="Profile Picture" />
            </div>

            {/* แบดจ์รอบรูปภาพ */}
            <div className="badge marketing">Digital Marketing</div>
            <div className="badge specialist">Content Specialist</div>
            <div className="badge strategy">Strategy Expert</div>
            <div className="badge analytics">Data Analytics</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
