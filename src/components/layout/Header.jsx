import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="w-36">
          <Link to="/">
            <img src="/src/assets/Asset2.png" alt="Logo" className="h-auto" />
          </Link>
        </div>

        {/* เมนูเบอร์เกอร์สำหรับมือถือ */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-primary mb-1.5 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-primary mb-1.5 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-primary transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* เมนูหลัก */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block absolute md:relative top-full left-0 right-0 md:top-auto bg-white md:bg-transparent w-full md:w-auto shadow-md md:shadow-none border-t md:border-t-0`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0">
            <li className="py-2 md:py-0">
              <Link
                to="/"
                className={`block py-2 px-3 md:px-0 rounded-md md:rounded-none md:py-0 transition-colors duration-300 hover:text-primary ${
                  isActive("/") ? "text-primary font-medium" : "text-gray-700"
                }`}
                onClick={closeMenu}
              >
                หน้าแรก
              </Link>
            </li>

            {/* Dropdown เมนูผลงาน */}
            <li className="py-2 md:py-0 relative group">
              <button
                className="flex items-center py-2 px-3 md:px-0 rounded-md md:rounded-none w-full text-left md:pr-0 transition-colors duration-300 hover:text-primary text-gray-700 focus:outline-none"
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    const dropdown = e.currentTarget.nextElementSibling;
                    if (dropdown.style.maxHeight) {
                      dropdown.style.maxHeight = null;
                    } else {
                      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
                    }
                  }
                }}
              >
                ผลงาน
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              <ul className="md:absolute md:left-0 md:top-full md:min-w-[180px] bg-white md:shadow-md md:rounded-md overflow-hidden max-h-0 md:max-h-none md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 md:mt-2">
                <li>
                  <Link
                    to="/committee"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    กรรมการ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/speaker"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    วิทยากร
                  </Link>
                </li>
                <li>
                  <Link
                    to="/innovation"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    สิ่งประดิษฐ์
                  </Link>
                </li>
                <li>
                  <Link
                    to="/incubator"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    ศูนย์บ่มเพาะ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    ทักษะวิชาชีพ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/academic"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    ผลงานวิชาการ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/student-work"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    ผลงานนักศึกษา
                  </Link>
                </li>
              </ul>
            </li>

            {/* Dropdown เมนูความสำเร็จ */}
            <li className="py-2 md:py-0 relative group">
              <button
                className="flex items-center py-2 px-3 md:px-0 rounded-md md:rounded-none w-full text-left md:pr-0 transition-colors duration-300 hover:text-primary text-gray-700 focus:outline-none"
                onClick={(e) => {
                  if (window.innerWidth < 768) {
                    e.preventDefault();
                    const dropdown = e.currentTarget.nextElementSibling;
                    if (dropdown.style.maxHeight) {
                      dropdown.style.maxHeight = null;
                    } else {
                      dropdown.style.maxHeight = dropdown.scrollHeight + "px";
                    }
                  }
                }}
              >
                ความสำเร็จ
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
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
              <ul className="md:absolute md:left-0 md:top-full md:min-w-[180px] bg-white md:shadow-md md:rounded-md overflow-hidden max-h-0 md:max-h-none md:opacity-0 md:invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 md:mt-2">
                <li>
                  <Link
                    to="/training"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    การอบรม
                  </Link>
                </li>
                <li>
                  <Link
                    to="/qualification"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    คุณวุฒิ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/certificate"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    เกียรติบัตร
                  </Link>
                </li>
                <li>
                  <Link
                    to="/award"
                    className="block py-2 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors duration-200"
                    onClick={closeMenu}
                  >
                    รางวัล
                  </Link>
                </li>
              </ul>
            </li>

            <li className="py-2 md:py-0">
              <Link
                to="/entrepreneur"
                className={`block py-2 px-3 md:px-0 rounded-md md:rounded-none md:py-0 transition-colors duration-300 hover:text-primary ${
                  isActive("entrepreneur")
                    ? "text-primary font-medium"
                    : "text-gray-700"
                }`}
                onClick={closeMenu}
                id="nav-entrepreneur"
              >
                การสร้างผู้ประกอบการใหม่
              </Link>
            </li>

            <li className="py-2 md:py-0">
              <Link
                to="/about"
                className={`block py-2 px-3 md:px-0 rounded-md md:rounded-none md:py-0 transition-colors duration-300 hover:text-primary ${
                  isActive("about")
                    ? "text-primary font-medium"
                    : "text-gray-700"
                }`}
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
