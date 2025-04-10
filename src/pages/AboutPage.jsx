import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-about">
      {/* About Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h2>เกี่ยวกับฉัน</h2>
            <p>ยินดีต้อนรับสู่หน้าประวัติและผลงานของฉัน</p>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="about-profile">
        <div className="container">
          <div className="profile-container">
            <div className="profile-image">
              <img src="/src/assets/Asset1.png" alt="โปรไฟล์" />
            </div>
            <div className="profile-content">
              <h2>นางสาวจิรนันท์ เสนี</h2>
              <p className="profile-title">ครู วิทยฐานะชำนาญการพิเศษ</p>

              <div className="profile-info">
                <p>
                  <i className="fas fa-briefcase"></i> ประจำแผนกวิชาการตลาด
                </p>
                <p>
                  <i className="fas fa-graduation-cap"></i> การศึกษา: ปริญญาโท
                  สาขาบริหารธุรกิจ
                </p>
                <p>
                  <i className="fas fa-envelope"></i> อีเมล: example@email.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> เบอร์โทร: 099-999-9999
                </p>
              </div>

              <div className="profile-description">
                <p>
                  ครูผู้เชี่ยวชาญด้านการตลาดดิจิทัลและการสร้างผู้ประกอบการใหม่
                  มีประสบการณ์การสอนมากกว่า 10 ปี
                  มุ่งมั่นพัฒนาทักษะนักศึกษาด้วยวิธีการสอนสมัยใหม่
                  เพื่อสร้างนักการตลาดที่พร้อมแข่งขันในยุคดิจิทัล
                </p>
                <p>
                  เป็นผู้ริเริ่มโครงการบ่มเพาะผู้ประกอบการรุ่นใหม่ในสถานศึกษา
                  และได้รับรางวัลครูดีเด่นด้านนวัตกรรมการสอนหลายรางวัล
                </p>
              </div>

              <div className="profile-buttons">
                <a href="#" className="btn btn-primary">
                  ดาวน์โหลด Resume
                </a>
                <a href="#contact" className="btn btn-secondary">
                  ติดต่อฉัน
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="about-skills">
        <div className="container">
          <h2 className="section-title">ทักษะความเชี่ยวชาญ</h2>

          <div className="skills-container">
            <div className="skill-category">
              <h3>
                <i className="fas fa-chart-line"></i> ทักษะการตลาด
              </h3>

              <div className="skill-item">
                <span className="skill-name">การตลาดดิจิทัล</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">การวางแผนกลยุทธ์</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">การวิเคราะห์ตลาด</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-laptop-code"></i> ทักษะเทคโนโลยี
              </h3>

              <div className="skill-item">
                <span className="skill-name">สื่อสังคมออนไลน์</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "95%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">การวิเคราะห์ข้อมูล</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">การออกแบบเว็บไซต์</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="skill-category">
              <h3>
                <i className="fas fa-users"></i> ทักษะการสอน
              </h3>

              <div className="skill-item">
                <span className="skill-name">การสอนแบบ Active Learning</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">การบ่มเพาะผู้ประกอบการ</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="skill-item">
                <span className="skill-name">การพัฒนาสื่อการสอน</span>
                <div className="progress-bar">
                  <div
                    className="progress-level"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
