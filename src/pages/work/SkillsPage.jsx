import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import skillsData from "../../components/data/skillsData"; // นำเข้า skillsData
import "../../styles/work/skills.css";

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [filteredSkills, setFilteredSkills] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    medal: "",
    level: "",
    year: "",
  });
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const filterOptions = {
    medals: [
      { value: "", label: "ทุกประเภทเหรียญ" },
      { value: "ทอง", label: "เหรียญทอง" },
      { value: "เงิน", label: "เหรียญเงิน" },
      { value: "ทองแดง", label: "เหรียญทองแดง" },
    ],
    levels: [
      { value: "", label: "ทุกระดับ" },
      { value: "ชาติ", label: "ระดับชาติ" },
      { value: "ภาค", label: "ระดับภาค" },
    ],
    years: [
      { value: "", label: "ทุกปีการศึกษา" },
      { value: "2567", label: "ปีการศึกษา 2567" },
      { value: "2566", label: "ปีการศึกษา 2566" },
      { value: "2565", label: "ปีการศึกษา 2565" },
      { value: "2564", label: "ปีการศึกษา 2564" },
      { value: "2563", label: "ปีการศึกษา 2563" },
      { value: "2562", label: "ปีการศึกษา 2562" },
      { value: "2561", label: "ปีการศึกษา 2561" },
    ],
  };

  const stats = [
    { icon: "fas fa-trophy", count: 13, label: "รางวัลรวม" },
    { icon: "fas fa-medal", count: 10, label: "เหรียญทอง" },
    { icon: "fas fa-award", count: 6, label: "ระดับชาติ" },
    { icon: "fas fa-star", count: 7, label: "ระดับภาค" },
  ];

  const filterSkills = () => {
    setIsFiltering(true);

    setTimeout(() => {
      let result = [...skillsData]; // ใช้ skillsData ที่นำเข้า

      if (searchTerm) {
        result = result.filter(
          (skill) =>
            skill.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            skill.details.toLowerCase().includes(searchTerm.toLowerCase()) ||
            skill.place.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      if (filters.medal) {
        result = result.filter((skill) => skill.medal === filters.medal);
      }

      if (filters.level) {
        result = result.filter((skill) => skill.level === filters.level);
      }

      if (filters.year) {
        result = result.filter((skill) => skill.year === filters.year);
      }

      setFilteredSkills(result);
      setIsFiltering(false);
    }, 500);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setFilters({
      medal: "",
      level: "",
      year: "",
    });
  };

  const openModal = (skill) => {
    setSelectedSkill(skill);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedSkill(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    filterSkills();
  }, [searchTerm, filters]);

  useEffect(() => {
    setSkills(skillsData); // ใช้ skillsData ที่นำเข้า
    setFilteredSkills(skillsData); // ใช้ skillsData ที่นำเข้า
    window.scrollTo(0, 0);
  }, []);

  const getMedalIcon = (medal) => {
    if (medal === "ทอง") return <i className="fas fa-medal medal-gold"></i>;
    if (medal === "เงิน") return <i className="fas fa-medal medal-silver"></i>;
    if (medal === "ทองแดง")
      return <i className="fas fa-medal medal-bronze"></i>;
    return null;
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    pauseOnHover: true,
    customPaging: () => <div className="slick-dot-custom"></div>,
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots-custom"> {dots} </ul>
      </div>
    ),
    prevArrow: (
      <div className="slick-arrow-custom slick-prev-custom">
        <i className="fas fa-chevron-left"></i>
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow-custom slick-next-custom">
        <i className="fas fa-chevron-right"></i>
      </div>
    ),
  };

  const slideImages = [
    {
      id: 1,
      src: "/assets/slides/slide1.jpg",
      caption: "ความสำเร็จในการแข่งขันทักษะ",
    },
    { id: 2, src: "/assets/slides/slide2.jpg", caption: "ทีมงานที่ทุ่มเท" },
    { id: 3, src: "/assets/slides/slide3.jpg", caption: "ช่วงเวลาที่น่าจดจำ" },
    {
      id: 4,
      src: "/assets/slides/slide4.jpg",
      caption: "นวัตกรรมและความคิดสร้างสรรค์",
    },
    { id: 5, src: "/assets/slides/slide5.jpg", caption: "ก้าวสู่ชัยชนะ" },
  ];

  return (
    <main className="page-skills">
      <section className="skills-hero">
        <div className="container">
          <h1 className="skills-title">ทักษะวิชาชีพ</h1>
          <p className="skills-subtitle">
            ผลงานและความสำเร็จในการแข่งขันทักษะวิชาชีพด้านการเขียนแผนธุรกิจในระดับต่างๆ
          </p>
        </div>
      </section>

      {/* <section className="skills-slider">
        <div className="container">
          <Slider {...sliderSettings}>
            {slideImages.map((slide) => (
              <div key={slide.id} className="slide-item">
                <div className="slide-image">
                  <img src={slide.src} alt={slide.caption} />
                  <div className="slide-caption">
                    <h3>{slide.caption}</h3>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section> */}

      <section className="skills-section">
        <div className="skills-container">
          <div className="skills-filters">
            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="ค้นหารางวัลทักษะวิชาชีพ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="filter-controls">
              <div className="filter-group">
                <label>ประเภทเหรียญ</label>
                <select
                  value={filters.medal}
                  onChange={(e) =>
                    setFilters({ ...filters, medal: e.target.value })
                  }
                >
                  {filterOptions.medals.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>ระดับการแข่งขัน</label>
                <select
                  value={filters.level}
                  onChange={(e) =>
                    setFilters({ ...filters, level: e.target.value })
                  }
                >
                  {filterOptions.levels.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>ปีการศึกษา</label>
                <select
                  value={filters.year}
                  onChange={(e) =>
                    setFilters({ ...filters, year: e.target.value })
                  }
                >
                  {filterOptions.years.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className={`skills-grid ${isFiltering ? "filtering" : ""}`}>
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill) => (
                <div
                  className="skill-card"
                  key={skill.id}
                  onClick={() => openModal(skill)}
                >
                  <div className="skill-image-preview">
                    <img src={skill.images[0]} alt={`${skill.title} - Cover`} />
                  </div>
                  <div className="skill-header">
                    {skill.medal && (
                      <div
                        className={`skill-medal medal-${
                          skill.medal === "ทอง"
                            ? "gold"
                            : skill.medal === "เงิน"
                            ? "silver"
                            : "bronze"
                        }`}
                      >
                        <i className="fas fa-medal"></i>
                      </div>
                    )}
                    <h3 className="skill-title">{skill.title}</h3>
                    <div className="skill-meta">
                      <span className="skill-level">ระดับ{skill.level}</span>
                      <span className="skill-year">ปี {skill.year}</span>
                    </div>
                  </div>
                  <div className="skill-info">
                    <p className="skill-details">{skill.details}</p>
                    <p className="skill-place">ณ {skill.place}</p>
                    <button className="view-details">ดูรายละเอียด</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <i className="fas fa-search"></i>
                <p>ไม่พบข้อมูลที่ตรงกับเงื่อนไขการค้นหา</p>
                <button onClick={resetFilters}>รีเซ็ตการกรอง</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedSkill && (
        <div className="skill-modal">
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="modal-body">
              <div className="modal-header">
                <h2 className="modal-title">{selectedSkill.title}</h2>
                <div className="modal-subtitle">
                  <div className="modal-subtitle-item">
                    ระดับ{selectedSkill.level}
                  </div>
                  {selectedSkill.medal && (
                    <div className="modal-subtitle-item">
                      เหรียญ{selectedSkill.medal}
                    </div>
                  )}
                  <div className="modal-subtitle-item">
                    ปีการศึกษา {selectedSkill.year}
                  </div>
                </div>
              </div>

              <div className="modal-images">
                <div className="modal-image">
                  <img
                    src={selectedSkill.images[0]}
                    alt={`${selectedSkill.title} - ภาพที่ 1`}
                  />
                </div>
                <div className="modal-image">
                  <img
                    src={selectedSkill.images[1]}
                    alt={`${selectedSkill.title} - ภาพที่ 2`}
                  />
                </div>
              </div>

              <div className="modal-details">
                <div className="detail-item">
                  <span className="detail-label">สถานที่จัดการแข่งขัน</span>
                  <span className="detail-value">{selectedSkill.place}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">ระดับการแข่งขัน</span>
                  <span className="detail-value">
                    ระดับ{selectedSkill.level}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">ปีการศึกษา</span>
                  <span className="detail-value">{selectedSkill.year}</span>
                </div>
                {selectedSkill.medal && (
                  <div className="detail-item">
                    <span className="detail-label">ประเภทเหรียญ</span>
                    <span className="detail-value">
                      เหรียญ{selectedSkill.medal}
                    </span>
                  </div>
                )}
              </div>

              <div className="modal-description">
                <h3>รายละเอียดเพิ่มเติม</h3>
                <p>{selectedSkill.description}</p>
                <p>
                  การแข่งขันทักษะการเขียนแผนธุรกิจเป็นการเปิดโอกาสให้นักศึกษาได้แสดงความสามารถ
                  และพัฒนาทักษะการเป็นผู้ประกอบการ
                  โดยมีการฝึกฝนและเตรียมความพร้อมอย่างต่อเนื่อง
                  เพื่อให้นักศึกษาสามารถแข่งขันและคว้ารางวัลในระดับต่างๆ ได้
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default SkillsPage;
