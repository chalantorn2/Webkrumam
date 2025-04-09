import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const FeaturesSection = () => {
  // ข้อมูลสำหรับการ์ดแต่ละอัน
  const features = [
    {
      icon: "fas fa-award",
      title: "รางวัลและเกียรติบัตร",
      description: "ความสำเร็จและการยอมรับในวิชาชีพ",
      link: "/awards",
    },
    {
      icon: "fas fa-lightbulb",
      title: "สิ่งประดิษฐ์",
      description: "นวัตกรรมและผลงานสร้างสรรค์",
      link: "/innovation",
    },
    {
      icon: "fas fa-users",
      title: "การเป็นวิทยากร",
      description: "การถ่ายทอดความรู้และประสบการณ์",
      link: "/speaker",
    },
    {
      icon: "fas fa-graduation-cap",
      title: "ผลงานวิชาการ",
      description: "งานวิจัยและบทความทางวิชาการ",
      link: "/academic",
    },
  ];

  return (
    <section className="py-16 bg-primary-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-primary-dark mb-12 relative">
          ผลงานที่โดดเด่น
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-primary rounded-full mt-2"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary-light text-primary rounded-full flex items-center justify-center mb-4 text-2xl">
                <i className={feature.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <Link
                to={feature.link}
                className="mt-auto py-2 px-5 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-colors duration-300 inline-block"
              >
                ดูเพิ่มเติม
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
