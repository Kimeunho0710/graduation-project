// pages/JobDetailPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/JobDetailPage.css'; // CSS 파일 import

function JobDetailPage() {
  const location = useLocation();
  const selectedJob = location.state?.job || '직업 미지정';

  return (
    <div className="JobDetailPage">
      {/* 선택된 직업명 표시 (길이 자동 대응) */}
      <div className="SelectedJob">{selectedJob}</div>

      {/* 버튼 리스트 */}
      <button className="JobDetailButton dark">전공(선택) 추천</button>
      <button className="JobDetailButton">로드맵</button>
      <button className="JobDetailButton">자격증 추천</button>
      <button className="JobDetailButton">직업 상세 설명</button>
    </div>
  );
}

export default JobDetailPage;
