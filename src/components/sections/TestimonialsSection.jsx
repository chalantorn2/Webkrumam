import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">ความสำเร็จในการพัฒนาผู้เรียน</h2>

        <div className="testimonials-container">
          {/* Testimonial item 1 */}
          <div className="testimonial-item">
            <div className="testimonial-image">
              <img
                src="/assets/placeholder.jpg"
                alt="Profile"
                onError={(e) => {
                  e.target.onerror = null;
                  // ใช้รูปภาพใน project แทน
                  e.target.src = "/assets/fallback.jpg";
                }}
              />
            </div>
            <div className="testimonial-content">
              <p>"ข้อความจากนักศึกษาหรือผู้เรียนที่ประสบความสำเร็จ"</p>
              <h4>ชื่อนักศึกษา</h4>
              <p className="testimonial-info">ตำแหน่งปัจจุบัน / บริษัท</p>
            </div>
          </div>

          {/* Testimonial item 2 */}
          <div className="testimonial-item">
            <div className="testimonial-image">
              <img
                src="/assets/placeholder.jpg"
                alt="Profile"
                onError={(e) => {
                  e.target.onerror = null;
                  // ใช้รูปภาพใน project แทน
                  e.target.src = "/assets/fallback.jpg";
                }}
              />
            </div>
            <div className="testimonial-content">
              <p>"ข้อความจากนักศึกษาหรือผู้เรียนที่ประสบความสำเร็จ"</p>
              <h4>ชื่อนักศึกษา</h4>
              <p className="testimonial-info">ตำแหน่งปัจจุบัน / บริษัท</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
