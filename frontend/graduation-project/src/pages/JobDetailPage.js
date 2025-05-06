import React from 'react';
import { useLocation } from 'react-router-dom';
import '../pages-css/JobDetailPage.css'; // CSS 파일 import

function JobDetailPage() {
  const location = useLocation();
  const selectedJob = location.state?.job || '직업 미지정';

  return (
    <div className="JobDetailPage">
      <div className="JobDetail-top">
        <div className="SelectedJob">{selectedJob}</div>
      </div>

      {/* 버튼 리스트 */}
      <div className="ButtonList">
        <button className="JobDetailButton">전공(선택) 추천</button>
        <button className="JobDetailButton">로드맵</button>
        <button className="JobDetailButton">자격증 추천</button>
        <button className="JobDetailButton">직업 상세 설명</button>
      </div>
    </div>
  );
}

export default JobDetailPage;