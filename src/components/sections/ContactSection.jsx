import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ข้อมูลติดต่อ */}
          <div>
            <h2 className="text-3xl font-semibold text-primary mb-6">
              ติดต่อฉัน
            </h2>
            <p className="text-gray-700 mb-8">
              สามารถติดต่อได้ผ่านช่องทางต่อไปนี้
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <span>email@example.com</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center mr-4">
                  <i className="fas fa-phone"></i>
                </div>
                <span>099-999-9999</span>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span>ที่อยู่สถานที่ทำงาน</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* แบบฟอร์มติดต่อ */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              ส่งข้อความถึงฉัน
            </h3>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="ชื่อ-นามสกุล"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="อีเมล"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="หัวข้อ"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-6">
                <textarea
                  placeholder="ข้อความ"
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-300 shadow-md"
              >
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
