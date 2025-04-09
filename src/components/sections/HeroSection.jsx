import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 min-h-screen flex items-center bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ข้อความด้านซ้าย */}
          <div className="text-center lg:text-left">
            <div className="inline-block border-2 border-primary px-4 py-1 rounded mb-5 relative">
              <span>สวัสดีค่ะ ทุกท่าน</span>
              <div className="absolute w-2 h-2 bg-white border-2 border-primary -top-1 -left-1"></div>
              <div className="absolute w-2 h-2 bg-white border-2 border-primary -bottom-1 -right-1"></div>
            </div>

            <h1 className="text-3xl md:text-4xl font-semibold mb-2 text-gray-800">
              นางสาว <span className="text-primary">จิรนันท์ เสนี</span>,
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
              ครู วิทยฐานะชำนาญการพิเศษ
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-5 text-gray-800">
              ประจำแผนกวิชาการตลาด
            </h3>

            <p className="text-base md:text-lg mb-8 leading-relaxed text-gray-700">
              คุณครูผู้เชี่ยวชาญด้านการตลาด ที่มุ่งมั่นพัฒนาทักษะนักศึกษา
              <br className="hidden md:block" />
              ด้วยวิธีการสอนสมัยใหม่
              เพื่อสร้างนักการตลาดที่พร้อมแข่งขันในยุคดิจิทัล
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/about"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 text-center font-medium shadow-md hover:shadow-lg"
              >
                ดูโปรไฟล์
              </Link>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center font-medium"
              >
                ติดต่อฉัน
              </a>
            </div>
          </div>

          {/* รูปภาพและแบดจ์ด้านขวา */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            <div className="relative z-10 max-w-[450px]">
              <img
                src="/src/assets/Asset1.png"
                alt="Profile Picture"
                className="w-full h-auto"
              />
            </div>

            {/* แบดจ์รอบรูปภาพ */}
            <div className="absolute top-1/4 right-4 md:right-10 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-20 text-sm md:text-base animate-pulse">
              Digital Marketing
            </div>
            <div className="absolute bottom-1/4 left-4 md:left-10 bg-white text-primary px-4 py-2 rounded-full shadow-lg z-20 text-sm md:text-base border border-primary">
              Content Specialist
            </div>
            <div className="absolute top-1/2 right-0 bg-white text-primary px-4 py-2 rounded-full shadow-lg z-20 text-sm md:text-base border border-primary">
              Strategy Expert
            </div>
            <div className="absolute bottom-1/2 left-0 bg-primary text-white px-4 py-2 rounded-full shadow-lg z-20 text-sm md:text-base animate-pulse">
              Data Analytics
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
