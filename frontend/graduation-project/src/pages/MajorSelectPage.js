import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import '../pages-css/MajorSelectPage.css';

function MajorSelectPage() {
  const location = useLocation();
  const jobId = location.state?.jobId;

  const [subjects, setSubjects] = useState([]);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    if (jobId) {
      const department = '컴퓨터sw';
      const grade = 2;
      const semesterId = 2;

      axios
        .get(`/api/jobs/${jobId}/subjects`, {
          params: {
            department: department,
            grade: grade,
            semester_id: semesterId
          }
        })
        .then((res) => setSubjects(res.data))
        .catch((err) => console.error('전공 과목 추천 조회 실패:', err));
    }
  }, [jobId]);


  const toggleFavorite = (index) => {
    setFavorites((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="MajorSelectPage">
      <div className="FilterBar">
        <button className="FilterButton">
          <div>학과</div>
          <div>⬇</div>
        </button>
        <button className="FilterButton">
          <div>학년</div>
          <div>⬇</div>
        </button>
        <button className="FilterButton">
          <div>학기</div>
          <div>⬇</div>
        </button>
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
