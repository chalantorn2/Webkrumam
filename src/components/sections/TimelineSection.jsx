import React from "react";

const TimelineSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-primary-dark mb-12 relative">
          ประสบการณ์ทางวิชาชีพ
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 h-1 bg-primary rounded-full mt-2"></span>
        </h2>

        <div className="max-w-3xl mx-auto relative">
          {/* เส้นแนวตั้งตรงกลาง */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light"></div>

          {/* รายการไทม์ไลน์ */}
          <div className="relative z-10">
            {/* ไอเทม 1 */}
            <div className="flex items-center mb-8">
              <div className="w-1/2 pr-10 text-right">
                <h3 className="text-xl font-semibold text-primary">
                  2023 - ปัจจุบัน
                </h3>
                <h4 className="text-lg font-medium mb-2">ตำแหน่งปัจจุบัน</h4>
                <p className="text-gray-600">
                  รายละเอียดตำแหน่งและความรับผิดชอบในปัจจุบัน
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-10"></div>
            </div>

            {/* ไอเทม 2 */}
            <div className="flex items-center mb-8">
              <div className="w-1/2 pr-10"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-10">
                <h3 className="text-xl font-semibold text-primary">
                  2020 - 2023
                </h3>
                <h4 className="text-lg font-medium mb-2">ตำแหน่งก่อนหน้า</h4>
                <p className="text-gray-600">
                  รายละเอียดตำแหน่งและความรับผิดชอบในอดีต
                </p>
              </div>
            </div>

            {/* ไอเทม 3 */}
            <div className="flex items-center">
              <div className="w-1/2 pr-10 text-right">
                <h3 className="text-xl font-semibold text-primary">
                  2017 - 2020
                </h3>
                <h4 className="text-lg font-medium mb-2">ตำแหน่งเริ่มต้น</h4>
                <p className="text-gray-600">
                  รายละเอียดตำแหน่งและความรับผิดชอบเมื่อเริ่มทำงาน
                </p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white"></div>
              <div className="w-1/2 pl-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
