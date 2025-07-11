import React, { useState, useEffect } from "react";
import "../../styles/work/innovation.css";

const InnovationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ข้อมูลสิ่งประดิษฐ์จากไฟล์ PDF
  const innovations = [
    {
      id: 1,
      year: 2567,
      name: "บ้าบินกรอบ (Crispy Berserk)",
      description: "นวัตกรรมอาหารกรอบที่ผสมผสานรสชาติไทยและวัตถุดิบท้องถิ่น",
      image: "/assets/invention/crispyBerserk.jpg",
      category: "อาหาร",
    },
    {
      id: 2,
      year: 2567,
      name: "กล่องทําความสะอาดจี้ไฟฟ้าผ่าตัด (Surgical Electric Pendant Cleaning Box)",
      description:
        "นวัตกรรมทางการแพทย์ที่ช่วยทำความสะอาดอุปกรณ์การผ่าตัดอย่างมีประสิทธิภาพ",
      image: "/assets/invention/surgicalPendantCleaner.jpg",
      category: "การแพทย์",
    },
    {
      id: 3,
      year: 2565,
      name: "เส้นพาสต้าข้าวไรห่อมบอน (Hom-Bon Rice Pasta)",
      description:
        "นวัตกรรมอาหารที่ใช้วัตถุดิบจากข้าวไรห่อมบอน ทดแทนการใช้แป้งสาลี",
      image: "/assets/invention/homBonRicePasta.jpg",
      category: "อาหาร",
    },
    {
      id: 4,
      year: 2564,
      name: "สบู่แผ่นน้ำนมแพะ (Goat milk soap sheets)",
      description:
        "สบู่แผ่นบางที่สะดวกในการพกพา ผลิตจากน้ำนมแพะที่มีคุณสมบัติบำรุงผิว",
      image: "/assets/invention/goatMilkSoapSheets.jpg",
      category: "เครื่องสำอาง",
    },
    {
      id: 5,
      year: 2564,
      name: "คุกกี้โปรตีนจากเห็ดแครง (Mushroom cookie)",
      description: "ขนมคุกกี้ที่มีโปรตีนสูงจากเห็ดแครง เหมาะสำหรับผู้รักสุขภาพ",
      image: "/assets/invention/mushroomCookie.jpg",
      category: "อาหาร",
    },
    {
      id: 6,
      year: 2563,
      name: "เห็ดแครงอบกรอบ (Crispy Mushroom)",
      description:
        "ขนมขบเคี้ยวเพื่อสุขภาพจากเห็ดแครงอบกรอบ ทางเลือกใหม่สำหรับคนรักสุขภาพ",
      image: "/assets/invention/crispyMushroom.jpg",
      category: "อาหาร",
    },
    {
      id: 7,
      year: 2563,
      name: "อุปกรณ์อัดกะปิ",
      description:
        "อุปกรณ์ที่ช่วยในการอัดกะปิให้แน่นและได้รูปทรงที่สวยงาม ช่วยเพิ่มมูลค่าสินค้า",
      image: "/assets/invention/shrimpPastePresser.jpg",
      category: "เครื่องมือ",
    },
    {
      id: 8,
      year: 2562,
      name: "B.A Batik Accessories",
      description: "เครื่องประดับจากผ้าบาติกที่สะท้อนเอกลักษณ์ท้องถิ่น",
      image: "/assets/invention/baBatikAccessories.jpg",
      category: "หัตถกรรม",
    },
    {
      id: 9,
      year: 2562,
      name: "Crispy Gaba Cake (เค้กกรอบจากแป้งข้าวสังข์หยด)",
      description:
        "เค้กกรอบที่ผลิตจากแป้งข้าวสังข์หยด มีสารกาบา (GABA) สูง เป็นประโยชน์ต่อสุขภาพ",
      image: "/assets/invention/crispyGabaCake.jpg",
      category: "อาหาร",
    },
    {
      id: 10,
      year: 2562,
      name: "Picture of My House (ภาพที่ระลึกจากวัสดุท้องถิ่น)",
      description: "งานฝีมือที่สร้างสรรค์จากวัสดุท้องถิ่นเพื่อเป็นของที่ระลึก",
      image: "/assets/invention/pictureOfMyHouse.jpg",
      category: "หัตถกรรม",
    },
    {
      id: 11,
      year: 2562,
      name: "อุปกรณ์จับจีบขนมกะหรี่ปั๊บ",
      description: "อุปกรณ์ที่ช่วยในการจับจีบขนมกะหรี่ปั๊บให้สวยงามและรวดเร็ว",
      image: "/assets/invention/curryPuffPleatTool.jpg",
      category: "เครื่องมือ",
    },
    {
      id: 12,
      year: 2561,
      name: "อุปกรณ์หยิบตัดอเนกประสงค์ (Multi purpose Scissors)",
      description: "กรรไกรอเนกประสงค์ที่สามารถใช้งานได้หลากหลาย ทั้งหยิบและตัด",
      image: "/assets/invention/multiPurposeTool.jpg",
      category: "เครื่องมือ",
    },
    {
      id: 13,
      year: 2560,
      name: "กรรไกรฉลาด",
      description: "กรรไกรที่ออกแบบพิเศษเพื่อความสะดวกและปลอดภัยในการใช้งาน",
      image: "/assets/invention/smartScissors.jpg",
      category: "เครื่องมือ",
    },
    {
      id: 14,
      year: 2559,
      name: "เปลนอนในรถยนต์สำหรับเด็กอ่อน",
      description: "อุปกรณ์ช่วยให้เด็กอ่อนนอนได้อย่างปลอดภัยและสบายในรถยนต์",
      image: "/assets/invention/babyCarHammock.jpg",
      category: "เครื่องใช้",
    },
    {
      id: 15,
      year: 2559,
      name: "กรรไกรหยิบตัดอเนกประสงค์",
      description: "กรรไกรที่สามารถใช้หยิบและตัดวัสดุได้หลายประเภท",
      image: "/assets/invention/grabCutScissors.jpg",
      category: "เครื่องมือ",
    },
    {
      id: 16,
      year: 2558,
      name: "อุปกรณ์สัญญาณเตือนการกระชากกระเป๋า",
      description:
        "อุปกรณ์ป้องกันการโจรกรรมที่ส่งสัญญาณเตือนเมื่อมีการกระชากกระเป๋า",
      image: "/assets/invention/antiSnatchAlarm.jpg",
      category: "ความปลอดภัย",
    },
    {
      id: 17,
      year: 2557,
      name: "แผ่นกันเปื้อนใต้วงแขน",
      description: "ผลิตภัณฑ์ป้องกันเหงื่อและคราบเปื้อนที่วงแขนของเสื้อ",
      image: "/assets/invention/underarmShield.jpg",
      category: "เครื่องแต่งกาย",
    },
    {
      id: 18,
      year: 2556,
      name: "แผ่นกันเปื้อนปกเสื้อ",
      description: "อุปกรณ์ป้องกันคราบเปื้อนบริเวณปกเสื้อ ใช้งานง่ายและสะดวก",
      image: "/assets/invention/collarShield.jpg",
      category: "เครื่องแต่งกาย",
    },
    {
      id: 19,
      year: 2555,
      name: "อุปกรณ์ตัดหอยก้นแหลม",
      description: "เครื่องมือเฉพาะทางสำหรับตัดหอยก้นแหลมได้อย่างมีประสิทธิภาพ",
      image: "/assets/invention/shellTailCutter.jpg",
      category: "เครื่องมือ",
    },
    {
      id: 20,
      year: 2555,
      name: "อุปกรณ์จุดไฟเตือนแก๊ส",
      description:
        "อุปกรณ์เพื่อความปลอดภัยที่ช่วยตรวจจับและเตือนเมื่อมีแก๊สรั่ว",
      image: "/assets/invention/gasIgniterTool.jpg",
      category: "ความปลอดภัย",
    },
  ];

  // State สำหรับการค้นหาและกรอง
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInnovations, setFilteredInnovations] = useState(innovations);
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [selectedYear, setSelectedYear] = useState("ทั้งหมด");
  const [isFiltering, setIsFiltering] = useState(false);

  // ดึงหมวดหมู่ทั้งหมดจากข้อมูล
  const allCategories = [
    "ทั้งหมด",
    ...new Set(innovations.map((item) => item.category)),
  ];

  // ดึงปีทั้งหมดจากข้อมูล และเรียงจากมากไปน้อย
  const allYears = [
    "ทั้งหมด",
    ...new Set(innovations.map((item) => item.year.toString())),
  ].sort((a, b) => b - a);

  // คำนวณเมื่อมีการเปลี่ยนแปลงการค้นหาหรือตัวกรอง
  useEffect(() => {
    let results = innovations;

    // กรองตามคำค้นหา
    if (searchTerm) {
      results = results.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // กรองตามหมวดหมู่
    if (selectedCategory !== "ทั้งหมด") {
      results = results.filter((item) => item.category === selectedCategory);
    }

    // กรองตามปี
    if (selectedYear !== "ทั้งหมด") {
      results = results.filter((item) => item.year.toString() === selectedYear);
    }

    setFilteredInnovations(results);

    // เอฟเฟกต์การกรอง
    setIsFiltering(true);
    const timer = setTimeout(() => {
      setIsFiltering(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, selectedCategory, selectedYear]);

  // ฟังก์ชันจัดการการเปลี่ยนแปลงของช่องค้นหา
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // ฟังก์ชันจัดการการเปลี่ยนแปลงของตัวกรองหมวดหมู่
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // ฟังก์ชันจัดการการเปลี่ยนแปลงของตัวกรองปี
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  // สถานะสำหรับการแสดงรายละเอียดสิ่งประดิษฐ์
  const [selectedInnovation, setSelectedInnovation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // เปิดโมดัลแสดงรายละเอียด
  const openInnovationDetails = (innovation) => {
    setSelectedInnovation(innovation);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // ป้องกันการเลื่อนหน้าเมื่อโมดัลเปิด
  };

  // ปิดโมดัล
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // อนุญาตให้เลื่อนหน้าได้อีกครั้งเมื่อปิดโมดัล
  };

  return (
    <main className="page-innovation mb-5">
      <div className="innovation-hero">
        <div className="container">
          <h1 className="innovation-title">สิ่งประดิษฐ์และนวัตกรรม</h1>
          <p className="innovation-subtitle">
            ผลงานสิ่งประดิษฐ์และนวัตกรรมที่ได้พัฒนาร่วมกับนักศึกษาและคณะทำงาน
          </p>
        </div>
      </div>

      <div className="container innovation-container">
        <div className="innovation-filters">
          <div className="search-bar">
            <i className="fas fa-search"></i>
            <input
              type="text"
              placeholder="ค้นหาสิ่งประดิษฐ์..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <label htmlFor="category-filter">หมวดหมู่:</label>
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={handleCategoryChange}
              >
                {allCategories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="year-filter">ปี:</label>
              <select
                id="year-filter"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {allYears.map((year, index) => (
                  <option key={index} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className={`innovation-grid ${isFiltering ? "filtering" : ""}`}>
          {filteredInnovations.length > 0 ? (
            filteredInnovations.map((innovation) => (
              <div
                key={innovation.id}
                className="innovation-card"
                onClick={() => openInnovationDetails(innovation)}
              >
                <div className="innovation-image">
                  <img src={innovation.image} alt={innovation.name} />
                  <div className="innovation-year">{innovation.year}</div>
                  <div className="innovation-category">
                    {innovation.category}
                  </div>
                </div>
                <div className="innovation-info">
                  <h3>{innovation.name}</h3>
                  <p>{innovation.description.substring(0, 100)}...</p>
                  <button className="view-details">ดูรายละเอียด</button>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>ไม่พบสิ่งประดิษฐ์ที่ตรงกับการค้นหาของคุณ</p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("ทั้งหมด");
                  setSelectedYear("ทั้งหมด");
                }}
              >
                ล้างการค้นหา
              </button>
            </div>
          )}
        </div>

        {/* โมดัลแสดงรายละเอียดสิ่งประดิษฐ์ */}
        {isModalOpen && selectedInnovation && (
          <div className="innovation-modal">
            <div
              className="innovation-modal-overlay"
              onClick={closeModal}
            ></div>
            <div className="innovation-modal-content">
              <button className="innovation-close-modal" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="innovation-modal-body">
                <div className="innovation-modal-image">
                  <img
                    src={selectedInnovation.image}
                    alt={selectedInnovation.name}
                  />
                  <div className="innovation-modal-year-badge">
                    {selectedInnovation.year}
                  </div>
                </div>
                <div className="innovation-modal-info">
                  <span className="innovation-modal-category">
                    {selectedInnovation.category}
                  </span>
                  <h2>{selectedInnovation.name}</h2>
                  <p className="innovation-modal-description">
                    {selectedInnovation.description}
                  </p>

                  <div className="innovation-stats">
                    <div className="stat-item">
                      <i className="fas fa-calendar-alt"></i>
                      <div className="stat-info">
                        <span className="stat-title">ปีที่พัฒนา</span>
                        <span className="stat-value">
                          {selectedInnovation.year}
                        </span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <i className="fas fa-tag"></i>
                      <div className="stat-info">
                        <span className="stat-title">หมวดหมู่</span>
                        <span className="stat-value">
                          {selectedInnovation.category}
                        </span>
                      </div>
                    </div>
                    <div className="stat-item">
                      <i className="fas fa-trophy"></i>
                      <div className="stat-info">
                        <span className="stat-title">รางวัล</span>
                        <span className="stat-value">รอข้อมูล</span>
                      </div>
                    </div>
                  </div>

                  <div className="innovation-modal-actions">
                    <button className="action-btn primary">
                      <i className="fas fa-download"></i> ดาวน์โหลดเอกสาร
                    </button>
                    <button className="action-btn secondary">
                      <i className="fas fa-share-alt"></i> แชร์
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* <div className="innovation-stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <div className="stat-number">{innovations.length}</div>
              <div className="stat-label">สิ่งประดิษฐ์ทั้งหมด</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-award"></i>
              </div>
              <div className="stat-number">12</div>
              <div className="stat-label">รางวัลที่ได้รับ</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-users"></i>
              </div>
              <div className="stat-number">50+</div>
              <div className="stat-label">นักศึกษาที่ร่วมพัฒนา</div>
            </div>
            <div className="stat-box">
              <div className="stat-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <div className="stat-number">{allYears.length - 1}</div>
              <div className="stat-label">ปีแห่งนวัตกรรม</div>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default InnovationPage;
