import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅
import '../pages-css/JobSelectPage.css';

function JobSelectPage() {
  const navigate = useNavigate(); // 이동 기능 생성
  const [selectedJob, setSelectedJob] = useState(''); // 현재 선택된 직업 상태 저장

  // 직업 리스트 배열
  const jobList = [
    '백엔드 개발자',
    '프론트엔드 개발자',
    '게임 개발자',
    '임베디드 개발자',
    '정보보안 전문가',
    '네트워크 및 시스템 엔지니어',
    '데이터 엔지니어',
    '데이터 분석가',
    'AI 엔지니어',
    '데이터 사이언티스트',
    '클라우드 엔지니어',
    'UI/UX 디자이너',
    '빅데이터 엔지니어',
  ];

  // 직업 버튼 클릭 시 실행되는 함수
  const handleJobClick = (job) => {
    setSelectedJob(job); // 클릭한 직업을 선택된 직업으로 저장
    navigate('/job-detail', { state: { job } });
  };

  return (
    <div className="JobSelectPage">
      {/* 상단 "직업 목록" 버튼 */}
      <div className="JobSelect-top">
        <button className="JobSelect-category">직업 목록</button>
      </div>

      {/* 직업 리스트 버튼들 */}
      <div className="JobSelect-list">
        {jobList.map((job, index) => (
          <button
            key={index} // React에서 반복문 쓸 때 key 필수
            className={`JobSelect-button ${
              selectedJob === job ? 'selected' : ''
            }`} // 선택된 직업은 스타일 다르게
            onClick={() => handleJobClick(job)} // 클릭하면 직업 선택
          >
            {job}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JobSelectPage; // 컴포넌트 내보내기
