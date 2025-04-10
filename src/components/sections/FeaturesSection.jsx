import React from "react";
import { Link } from "react-router-dom";

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
    <section className="features">
      <div className="container">
        <h2 className="section-title">ผลงานที่โดดเด่น</h2>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <i className={feature.icon}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <Link to={feature.link} className="feature-btn">
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
