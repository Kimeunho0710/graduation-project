import React, { use, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../pages-css/MajorSelectPage.css';

function MajorSelectPage() {
  const location = useLocation();
  const jobId = location.state?.jobId;

  const [showDeptList, setShowDeptList] = useState(false);
  const [showGradeList, setShowGradeList] = useState(false);
  const [showSemesterList, setShowSemesterList] = useState(false);
  const [selectedDept, setSelectedDept] = useState('학과');
  const [selectedGrade, setSelectedGrade] = useState('학년');
  const [selectedSemester, setSelectedSemester] = useState('학기');
  const [subjects, setSubjects] = useState([]);
  const [favorites, setFavorites] = useState({});

  const departments = [
    '전체',
    '컴퓨터SW학과',
    '미디어SW학과',
    '정보통신학과',
    '정보보호학과',
    '데이터과학부',
  ];

  const grades = ['전체', '1학년', '2학년', '3학년', '4학년'];

  const semesters = ['전체', '1학기', '2학기'];

  const handleDeptSelect = (dept) => {
    setSelectedDept(dept);
    setShowDeptList(false);
  };

  const handleGradeSelect = (grade) => {
    setSelectedGrade(grade);
    setShowGradeList(false);
  };

  const handleSemesterSelect = (sem) => {
    setSelectedSemester(sem);
    setShowSemesterList(false);
  };

  // 즐겨찾기 버튼 효과
  const toggleFavorite = (index) => {
    setFavorites((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="MajorSelectPage">
      <div className="FilterBar">
        <div className="FilterDropdown">
          <button
            className="FilterButton"
            onClick={() => setShowDeptList(!showDeptList)}
          >
            <div>{selectedDept}</div>
            <div>⬇</div>
          </button>
          {showDeptList && (
            <div className="Dropdown">
              {departments.map((dept, i) => (
                <div
                  className="DropdownItem"
                  key={i}
                  onClick={() => handleDeptSelect(dept)}
                >
                  {dept}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="FilterDropdown">
          <button
            className="FilterButton"
            onClick={() => setShowGradeList(!showGradeList)}
          >
            <div>{selectedGrade}</div>
            <div>⬇</div>
          </button>
          {showGradeList && (
            <div className="Dropdown">
              {grades.map((grade, i) => (
                <div
                  className="DropdownItem"
                  key={i}
                  onClick={() => handleGradeSelect(grade)}
                >
                  {grade}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="FilterDropdown">
          <button
            className="FilterButton"
            onClick={() => setShowSemesterList(!showSemesterList)}
          >
            <div>{selectedSemester}</div>
            <div>⬇</div>
          </button>
          {showSemesterList && (
            <div className="Dropdown">
              {semesters.map((sem, i) => (
                <div
                  className="DropdownItem"
                  key={i}
                  onClick={() => handleSemesterSelect(sem)}
                >
                  {sem}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="SubjectList">
        {(subjects.length > 0 ? subjects : [null, null, null]).map(
          (subject, index) => (
            <div className="SubjectItem" key={index}>
              <div className="SubjectInfo">
                {subject ? subject.subjectName : ''}
              </div>
              <div className="Star" onClick={() => toggleFavorite(index)}>
                <img
                  src={favorites[index] ? '/star_full.png' : '/star.png'}
                  alt="즐겨찾기"
                  className="StarImage"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default MajorSelectPage;
