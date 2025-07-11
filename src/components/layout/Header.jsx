import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // ฟังก์ชันสำหรับกำหนด active class ให้กับเมนูตามหน้าที่กำลังแสดง
  const isActive = (path) => {
    if (
      path === "/" &&
      (location.pathname === "/" || location.pathname.includes("index"))
    ) {
      return true;
    }
    if (path !== "/" && location.pathname.includes(path)) {
      return true;
    }
    return false;
  };

  // ปิดเมนูเมื่อคลิกที่ลิงก์ (สำหรับมือถือ)
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // ฟังก์ชันสำหรับจัดการ dropdown
  const handleDropdownToggle = (e, dropdown) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">
            <img src="/assets/Asset2.png" alt="Logo" />
          </Link>
        </div>

        {/* เมนูเบอร์เกอร์สำหรับมือถือ */}
        <button
          className={`mobile-menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* เมนูหลัก */}
        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link
                to="/"
                className={`nav-link ${isActive("/") ? "active" : ""}`}
                onClick={closeMenu}
              >
                หน้าแรก
              </Link>
            </li>

            {/* Dropdown เมนูผลงาน - เหลือเฉพาะที่ทำเสร็จแล้ว */}
            <li
              className={`nav-item dropdown ${
                activeDropdown === "works" ? "open" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={(e) => handleDropdownToggle(e, "works")}
              >
                ผลงาน
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dropdown-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="dropdown-menu">
                {/* ✅ เมนูที่เสร็จแล้ว */}
                <li>
                  <Link
                    to="/innovation"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    สิ่งประดิษฐ์
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    ทักษะวิชาชีพ
                  </Link>
                </li>

                {/* 🔄 เมนูที่ยังไม่เสร็จ - ซ่อนไว้ก่อน */}
                {/* 
                <li>
                  <Link
                    to="/committee"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    กรรมการ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speaker"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    วิทยากร
                  </Link>
                </li>
                <li>
                  <Link
                    to="/incubator"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    ศูนย์บ่มเพาะ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academic"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    ผลงานวิชาการ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-work"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    ผลงานนักศึกษา
                  </Link>
                </li>
                */}
              </ul>
            </li>

            {/* Dropdown เมนูความสำเร็จ - เหลือเฉพาะที่ทำเสร็จแล้ว */}
            <li
              className={`nav-item dropdown ${
                activeDropdown === "achievements" ? "open" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={(e) => handleDropdownToggle(e, "achievements")}
              >
                ความสำเร็จ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="dropdown-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <ul className="dropdown-menu">
                {/* ✅ เมนูที่เสร็จแล้ว */}
                <li>
                  <Link
                    to="/award"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    รางวัล
                  </Link>
                </li>

                {/* 🔄 เมนูที่ยังไม่เสร็จ - ซ่อนไว้ก่อน */}
                {/* 
                <li>
                  <Link
                    to="/training"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    การอบรม
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualification"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    คุณวุฒิ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificate"
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    เกียรติบัตร
                  </Link>
                </li>
                */}
              </ul>
            </li>

            <li className="nav-item">
              <Link
                to="/entrepreneur"
                className={`nav-link ${
                  isActive("entrepreneur") ? "active" : ""
                }`}
                onClick={closeMenu}
                id="nav-entrepreneur"
              >
                การสร้างผู้ประกอบการใหม่
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                className={`nav-link ${isActive("about") ? "active" : ""}`}
                onClick={closeMenu}
                id="nav-about"
              >
                เกี่ยวกับฉัน
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
