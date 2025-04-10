import React from "react";

const TimelineSection = () => {
  return (
    <section className="timeline-section">
      <div className="container">
        <h2 className="section-title">ประสบการณ์ทางวิชาชีพ</h2>

        <div className="timeline-container">
          {/* รายการไทม์ไลน์ */}
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2023 - ปัจจุบัน</h3>
              <h4>ตำแหน่งปัจจุบัน</h4>
              <p>รายละเอียดตำแหน่งและความรับผิดชอบในปัจจุบัน</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2020 - 2023</h3>
              <h4>ตำแหน่งก่อนหน้า</h4>
              <p>รายละเอียดตำแหน่งและความรับผิดชอบในอดีต</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>2017 - 2020</h3>
              <h4>ตำแหน่งเริ่มต้น</h4>
              <p>รายละเอียดตำแหน่งและความรับผิดชอบเมื่อเริ่มทำงาน</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
