import React, { useEffect } from "react";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-about">
      {/* About Profile Section (Combined Hero + Profile) */}
      <section className="about-profile">
        <div className="container">
          <div className="about-header">
            <h1 className="about-title">
              ยินดีต้อนรับสู่
              <span className="highlight"> ข้อมูลเกี่ยวกับฉัน</span>
            </h1>
            <p className="about-subtitle">
              ผู้เชี่ยวชาญด้านการตลาดและการสร้างผู้ประกอบการรุ่นใหม่
            </p>
            <div className="about-line"></div>
          </div>

          <div className="profile-container">
            <div className="profile-image">
              <img src="/src/assets/Asset3.png" alt="โปรไฟล์" />
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

      {/* Education Section */}
      <section className="about-education bg-alt">
        <div className="container">
          <h2 className="section-title">ประวัติการศึกษา</h2>

          <div className="education-grid">
            {/* มหาวิทยาลัยกรุงเทพธนบุรี */}
            <div className="education-card">
              <div className="education-logo">
                <img
                  src="/src/assets/logo_2559.png"
                  alt="มหาวิทยาลัยกรุงเทพธนบุรี"
                />
              </div>
              <div className="education-year">
                <span>2559</span>
              </div>
              <div className="education-content">
                <h3>ศึกษาศาสตร์มหาบัณฑิต (ศษ.ม.)</h3>
                <p className="education-school">มหาวิทยาลัยกรุงเทพธนบุรี</p>
                <p className="education-detail">
                  สำเร็จการศึกษาระดับปริญญาโท สาขาศึกษาศาสตร์
                  <br /> เพื่อพัฒนาทักษะการสอนและการบริหารการศึกษา
                </p>
              </div>
            </div>

            {/* มหาวิทยาลัยรามคำแหง */}
            <div className="education-card">
              <div className="education-logo">
                <img
                  src="/src/assets/logo_2551.png"
                  alt="มหาวิทยาลัยรามคำแหง"
                />
              </div>
              <div className="education-year">
                <span>2551</span>
              </div>
              <div className="education-content">
                <h3>บริหารธุรกิจมหาบัณฑิต (บธ.ม.)</h3>
                <p className="education-school">มหาวิทยาลัยรามคำแหง</p>
                <p className="education-detail">
                  สำเร็จการศึกษาระดับปริญญาโท <br />
                  สาขาบริหารธุรกิจ เน้นด้านการตลาดและการจัดการ
                </p>
              </div>
            </div>

            {/* มหาวิทยาลัยราชภัฎภูเก็ต */}
            <div className="education-card">
              <div className="education-logo">
                <img
                  src="/src/assets/logo_2549.png"
                  alt="มหาวิทยาลัยราชภัฎภูเก็ต"
                />
              </div>
              <div className="education-year">
                <span>2549</span>
              </div>
              <div className="education-content">
                <h3>บริหารธุรกิจบัณฑิต (บธ.บ.)</h3>
                <p className="education-school">มหาวิทยาลัยราชภัฏภูเก็ต</p>
                <p className="education-detail">
                  สำเร็จการศึกษาระดับปริญญาตรี สาขาบริหารธุรกิจ
                  ด้วยความมุ่งมั่นในการพัฒนาความรู้ด้านการตลาด
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service History Section */}
      <section className="about-service">
        <div className="container">
          <h2 className="section-title">ประวัติการรับราชการ</h2>

          <div className="service-timeline">
            {/* ตำแหน่งปัจจุบัน */}
            <div className="service-item">
              <div className="service-date">
                <div>1 ตุลาคม 2566</div>
                <div>ถึง</div>
                <div>ปัจจุบัน</div>
              </div>
              <div className="service-point"></div>
              <div className="service-content">
                <div className="service-details">
                  <h3>ครูชำนาญการพิเศษ</h3>
                  <p className="service-location">วิทยาลัยเทคนิคกระบี่</p>
                </div>
              </div>
            </div>

            {/* ตำแหน่งที่ 2 */}
            <div className="service-item">
              <div className="service-date">
                <div>29 เมษายน 2562</div>
                <div>ถึง</div>
                <div>1 ตุลาคม 2566</div>
              </div>
              <div className="service-point"></div>
              <div className="service-content">
                <div className="service-details">
                  <h3>ครูชำนาญการ</h3>
                  <p className="service-location">วิทยาลัยเทคนิคกระบี่</p>
                </div>
              </div>
            </div>

            {/* ตำแหน่งที่ 3 */}
            <div className="service-item">
              <div className="service-date">
                <div>22 เมษายน 2558</div>
                <div>ถึง</div>
                <div>1 เมษายน 2562</div>
              </div>
              <div className="service-point"></div>
              <div className="service-content">
                <div className="service-details">
                  <h3>ครู คศ.1</h3>
                  <p className="service-location">วิทยาลัยเทคนิคสตูล</p>
                </div>
              </div>
            </div>

            {/* ตำแหน่งที่ 4 */}
            <div className="service-item">
              <div className="service-date">
                <div>22 เมษายน 2556</div>
                <div>ถึง</div>
                <div>1 ตุลาคม 2557</div>
              </div>
              <div className="service-point"></div>
              <div className="service-content">
                <div className="service-details">
                  <h3>ครูผู้ช่วย</h3>
                  <p className="service-location">วิทยาลัยเทคนิคสตูล</p>
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
