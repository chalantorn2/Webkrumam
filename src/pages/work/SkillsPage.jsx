import React, { useState, useEffect } from "react";
import skillsData from "../../data/works/skills";
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

  // แก้ไขในไฟล์ SkillsPage.jsx - เพิ่มการ sort ในฟังก์ชัน filterSkills

  const filterSkills = () => {
    setIsFiltering(true);

    setTimeout(() => {
      let result = [...skillsData];

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

      // ⭐ เพิ่มการเรียงลำดับตามปี (มากไปน้อย = ปีล่าสุดก่อน)
      result.sort((a, b) => {
        // เรียงตามปีก่อน (ปีใหม่ไปเก่า)
        if (b.year !== a.year) {
          return parseInt(b.year) - parseInt(a.year);
        }

        // ถ้าปีเดียวกัน ให้ระดับชาติขึ้นก่อน
        if (a.level !== b.level) {
          return a.level === "ชาติ" ? -1 : 1;
        }

        // ถ้าปีและระดับเดียวกัน ให้เรียงตาม id เดิม
        return a.id - b.id;
      });

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
    setSkills(skillsData);
    setFilteredSkills(skillsData);
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="page-skills">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="container">
          <h1 className="skills-title">ทักษะวิชาชีพ</h1>
          <p className="skills-subtitle">
            ผลงานและความสำเร็จในการแข่งขันทักษะวิชาชีพด้านการเขียนแผนธุรกิจในระดับต่างๆ
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="skills-section">
        <div className="skills-container">
          {/* Filters */}
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

          {/* Skills Grid */}
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

      {/* Modal */}
      {selectedSkill && (
        <div className="skill-modal">
          <div className="skills-modal-overlay" onClick={closeModal}></div>
          <div className="skills-modal-content">
            <button className="skills-close-modal" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </button>

            <div className="skills-modal-body">
              <div className="skills-modal-header">
                <h2 className="skills-modal-title">{selectedSkill.title}</h2>
                <div className="skills-modal-meta">
                  <span className="meta-item">ระดับ{selectedSkill.level}</span>
                  {selectedSkill.medal && (
                    <span className="meta-item medal">
                      เหรียญ{selectedSkill.medal}
                    </span>
                  )}
                  <span className="meta-item">
                    ปีการศึกษา {selectedSkill.year}
                  </span>
                </div>
              </div>

              <div className="skills-modal-images">
                <img
                  src={selectedSkill.images[0]}
                  alt={`${selectedSkill.title} - ภาพที่ 1`}
                  className="skills-modal-image"
                />
                <img
                  src={selectedSkill.images[1]}
                  alt={`${selectedSkill.title} - ภาพที่ 2`}
                  className="skills-modal-image"
                />
              </div>

              <div className="skills-modal-details">
                <div className="detail-row">
                  <span className="detail-label">สถานที่จัดการแข่งขัน:</span>
                  <span className="detail-value">{selectedSkill.place}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">ระดับการแข่งขัน:</span>
                  <span className="detail-value">
                    ระดับ{selectedSkill.level}
                  </span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">ปีการศึกษา:</span>
                  <span className="detail-value">{selectedSkill.year}</span>
                </div>
                {selectedSkill.medal && (
                  <div className="detail-row">
                    <span className="detail-label">ประเภทเหรียญ:</span>
                    <span className="detail-value">
                      เหรียญ{selectedSkill.medal}
                    </span>
                  </div>
                )}
              </div>

              <div className="skills-modal-description">
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
