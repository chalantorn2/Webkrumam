import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-container">
          {/* ข้อมูลติดต่อ */}
          <div className="contact-info">
            <h2>ติดต่อฉัน</h2>
            <p className="contact-description">
              สามารถติดต่อได้ผ่านช่องทางต่อไปนี้
            </p>

            <ul className="contact-list">
              <li>
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>email@example.com</span>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <span>099-999-9999</span>
              </li>
              <li>
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>ที่อยู่สถานที่ทำงาน</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="social-icons">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* แบบฟอร์มติดต่อ */}
          <div className="contact-form">
            <h3>ส่งข้อความถึงฉัน</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ชื่อ-นามสกุล"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="อีเมล"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="หัวข้อ"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  placeholder="ข้อความ"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                ส่งข้อความ
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
