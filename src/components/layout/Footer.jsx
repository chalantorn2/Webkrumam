import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo และคำอธิบาย */}
          <div>
            <h2 className="footer-title">PORTFOLIO</h2>
            <p className="footer-text">ผลงานและประสบการณ์ทางวิชาชีพ</p>
          </div>

          {/* เมนูหลัก */}
          <div>
            <h3 className="footer-section-title">เมนูหลัก</h3>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="/" className="footer-link">
                  <span className="footer-link-icon">›</span>หน้าแรก
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/about" className="footer-link">
                  <span className="footer-link-icon">›</span>เกี่ยวกับฉัน
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/works" className="footer-link">
                  <span className="footer-link-icon">›</span>ผลงาน
                </Link>
              </li>
              <li className="footer-nav-item">
                <a href="#contact" className="footer-link">
                  <span className="footer-link-icon">›</span>ติดต่อ
                </a>
              </li>
            </ul>
          </div>

          {/* ผลงาน */}
          <div>
            <h3 className="footer-section-title">ผลงาน</h3>
            <ul className="footer-nav">
              <li className="footer-nav-item">
                <Link to="/innovation" className="footer-link">
                  <span className="footer-link-icon">›</span>สิ่งประดิษฐ์
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/speaker" className="footer-link">
                  <span className="footer-link-icon">›</span>วิทยากร
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/academic" className="footer-link">
                  <span className="footer-link-icon">›</span>ผลงานวิชาการ
                </Link>
              </li>
              <li className="footer-nav-item">
                <Link to="/student-work" className="footer-link">
                  <span className="footer-link-icon">›</span>ผลงานนักศึกษา
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ลิขสิทธิ์ด้านล่าง */}
        <div className="footer-bottom">
          <p>&copy; 2025 Professional Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
