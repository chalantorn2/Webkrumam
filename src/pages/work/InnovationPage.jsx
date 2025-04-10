import React, { useEffect } from "react";

const InnovationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-innovation py-5">
      <div className="container mt-5 pt-5">
        <h1 className="section-title">สิ่งประดิษฐ์และนวัตกรรม</h1>

        <div className="innovations-container mt-4">
          {/* สิ่งประดิษฐ์ 1 */}
          <div className="innovation-card">
            <div className="innovation-image">
              <img src="/src/assets/placeholder.jpg" alt="สิ่งประดิษฐ์ 1" />
            </div>
            <div className="innovation-content">
              <h3>ชื่อนวัตกรรม 1</h3>
              <p className="innovation-date">พ.ศ. 2565</p>
              <p className="innovation-description">
                รายละเอียดเกี่ยวกับนวัตกรรมและสิ่งประดิษฐ์ชิ้นนี้ว่าคืออะไร
                มีประโยชน์อย่างไรบ้าง และมีการนำไปใช้ในสถานการณ์ไหนบ้าง
              </p>
              <div className="innovation-features">
                <h4>คุณลักษณะเด่น:</h4>
                <ul>
                  <li>คุณสมบัติเด่น 1</li>
                  <li>คุณสมบัติเด่น 2</li>
                  <li>คุณสมบัติเด่น 3</li>
                </ul>
              </div>
            </div>
          </div>

          {/* สิ่งประดิษฐ์ 2 */}
          <div className="innovation-card">
            <div className="innovation-image">
              <img src="/src/assets/placeholder.jpg" alt="สิ่งประดิษฐ์ 2" />
            </div>
            <div className="innovation-content">
              <h3>ชื่อนวัตกรรม 2</h3>
              <p className="innovation-date">พ.ศ. 2564</p>
              <p className="innovation-description">
                รายละเอียดเกี่ยวกับนวัตกรรมและสิ่งประดิษฐ์ชิ้นนี้ว่าคืออะไร
                มีประโยชน์อย่างไรบ้าง และมีการนำไปใช้ในสถานการณ์ไหนบ้าง
              </p>
              <div className="innovation-features">
                <h4>คุณลักษณะเด่น:</h4>
                <ul>
                  <li>คุณสมบัติเด่น 1</li>
                  <li>คุณสมบัติเด่น 2</li>
                  <li>คุณสมบัติเด่น 3</li>
                </ul>
              </div>
            </div>
          </div>

          {/* สิ่งประดิษฐ์ 3 */}
          <div className="innovation-card">
            <div className="innovation-image">
              <img src="/src/assets/placeholder.jpg" alt="สิ่งประดิษฐ์ 3" />
            </div>
            <div className="innovation-content">
              <h3>ชื่อนวัตกรรม 3</h3>
              <p className="innovation-date">พ.ศ. 2563</p>
              <p className="innovation-description">
                รายละเอียดเกี่ยวกับนวัตกรรมและสิ่งประดิษฐ์ชิ้นนี้ว่าคืออะไร
                มีประโยชน์อย่างไรบ้าง และมีการนำไปใช้ในสถานการณ์ไหนบ้าง
              </p>
              <div className="innovation-features">
                <h4>คุณลักษณะเด่น:</h4>
                <ul>
                  <li>คุณสมบัติเด่น 1</li>
                  <li>คุณสมบัติเด่น 2</li>
                  <li>คุณสมบัติเด่น 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default InnovationPage;
