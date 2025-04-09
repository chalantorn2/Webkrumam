import React from "react";

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-background-alt">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-primary-dark mb-12 relative">
          ความสำเร็จในการพัฒนาผู้เรียน
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-primary rounded-full mt-2"></span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial item 1 */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8 flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src="/src/assets/placeholder.jpg"
                alt="Profile"
                onError={(e) => {
                  e.target.onerror = null;
                  // ใช้รูปภาพใน project แทน
                  e.target.src = "/src/assets/fallback.jpg";
                }}
              />
            </div>
            <div>
              <p className="text-gray-700 italic mb-4">
                "ข้อความจากนักศึกษาหรือผู้เรียนที่ประสบความสำเร็จ"
              </p>
              <h4 className="text-lg font-semibold text-primary">
                ชื่อนักศึกษา
              </h4>
              <p className="text-gray-500">ตำแหน่งปัจจุบัน / บริษัท</p>
            </div>
          </div>

          {/* Testimonial item 2 */}
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8 flex flex-col md:flex-row items-center">
            <div className="w-24 h-24 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
              <img
                src="/src/assets/placeholder.jpg"
                alt="Profile"
                onError={(e) => {
                  e.target.onerror = null;
                  // ใช้รูปภาพใน project แทน
                  e.target.src = "/src/assets/fallback.jpg";
                }}
              />
            </div>
            <div>
              <p className="text-gray-700 italic mb-4">
                "ข้อความจากนักศึกษาหรือผู้เรียนที่ประสบความสำเร็จ"
              </p>
              <h4 className="text-lg font-semibold text-primary">
                ชื่อนักศึกษา
              </h4>
              <p className="text-gray-500">ตำแหน่งปัจจุบัน / บริษัท</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
