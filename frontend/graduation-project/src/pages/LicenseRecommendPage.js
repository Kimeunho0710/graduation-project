// src/pages/LicenseRecommendPage.js
// 얘는 걍 없는거라 생각하기, 아예 다시 만져아함
import React from 'react';
import '../pages-css/LicenseRecommendPage.css'; // CSS 파일 import

function LicenseRecommendPage() {
  const licenseList = [
    {
      name: '정보처리기사',
      desc: 'IT 분야 전반에 필요한 필수 자격증',
      date: '상시 시행',
      link: '(링크)',
    },
  ];

  return (
    <div className="LicenseRecommendPage">
      {licenseList.map((item, index) => (
        <div className="LicenseCard" key={index}>
          <div>
            <strong>{item.name}</strong>
          </div>
          <div>설명: {item.desc}</div>
          <div>시기: {item.date}</div>
          <div>{item.link}</div>
        </div>
      ))}
    </div>
  );
}

export default LicenseRecommendPage;
