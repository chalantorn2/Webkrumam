import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo และคำอธิบาย */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">PORTFOLIO</h2>
            <p className="text-gray-300 mb-4">ผลงานและประสบการณ์ทางวิชาชีพ</p>
          </div>

          {/* เมนูหลัก */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-primary inline-block">
              เมนูหลัก
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>หน้าแรก
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>เกี่ยวกับฉัน
                </Link>
              </li>
              <li>
                <Link
                  to="/works"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>ผลงาน
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>ติดต่อ
                </a>
              </li>
            </ul>
          </div>

          {/* ผลงาน */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-primary inline-block">
              ผลงาน
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/innovation"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>สิ่งประดิษฐ์
                </Link>
              </li>
              <li>
                <Link
                  to="/speaker"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>วิทยากร
                </Link>
              </li>
              <li>
                <Link
                  to="/academic"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>ผลงานวิชาการ
                </Link>
              </li>
              <li>
                <Link
                  to="/student-work"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span>ผลงานนักศึกษา
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* ลิขสิทธิ์ด้านล่าง */}
        <div className="pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Professional Portfolio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
