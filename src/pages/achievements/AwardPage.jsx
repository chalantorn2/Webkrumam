import React, { useEffect } from "react";

const AwardPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-award py-5">
      <div className="container mt-5 pt-5">
        <h1 className="section-title">รางวัลที่ได้รับ</h1>

        <div className="awards-container mt-4">
          {/* รางวัล 1 */}
          <div className="award-card">
            <div className="award-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="award-content">
              <h3>รางวัลครูดีเด่นด้านนวัตกรรมการสอน</h3>
              <p className="award-date">พ.ศ. 2565</p>
              <p className="award-org">
                หน่วยงานที่มอบรางวัล: สำนักงานคณะกรรมการการอาชีวศึกษา
              </p>
              <p className="award-description">
                รางวัลที่มอบให้แก่ครูผู้สร้างสรรค์นวัตกรรมการสอนที่ส่งผลดีต่อการพัฒนาผู้เรียน
                และส่งเสริมทักษะด้านการตลาดในยุคดิจิทัล
              </p>
            </div>
          </div>

          {/* รางวัล 2 */}
          <div className="award-card">
            <div className="award-icon">
              <i className="fas fa-medal"></i>
            </div>
            <div className="award-content">
              <h3>รางวัลผู้ส่งเสริมการประกอบการดีเด่น</h3>
              <p className="award-date">พ.ศ. 2564</p>
              <p className="award-org">หน่วยงานที่มอบรางวัล: กระทรวงพาณิชย์</p>
              <p className="award-description">
                รางวัลสำหรับผู้ที่มีผลงานโดดเด่นในการส่งเสริมและพัฒนาผู้ประกอบการรุ่นใหม่
                ในสถานศึกษาและชุมชน
              </p>
            </div>
          </div>

          {/* รางวัล 3 */}
          <div className="award-card">
            <div className="award-icon">
              <i className="fas fa-award"></i>
            </div>
            <div className="award-content">
              <h3>รางวัลผลงานวิจัยดีเด่น</h3>
              <p className="award-date">พ.ศ. 2563</p>
              <p className="award-org">
                หน่วยงานที่มอบรางวัล: สมาคมวิจัยการศึกษา
              </p>
              <p className="award-description">
                รางวัลสำหรับงานวิจัยด้านการพัฒนาการสอนการตลาดดิจิทัล
                ที่มีประโยชน์ต่อวงการการศึกษาและอาชีวศึกษา
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AwardPage;
