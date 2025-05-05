import React from "react";
import { useNavigate } from 'react-router-dom'; // 페이지 이동을 위한 훅

function Home() {
  const navigate = useNavigate(); // 페이지 이동 기능 생성

  // 로그인 버튼 클릭 시 호출될 함수
  const handleLogin = () => {
    navigate("/select-job"); // 직업 선택 페이지로 이동
  };

  return (
    <div className="Container">
      <div className="App">
        {/* 상단 메인 로고 이미지 */}
        <img src="mainIcon.png" alt="진로레시피 로고" className="App-logo" />

        {/* 설명 텍스트 (줄바꿈 포함) */}
        <p className="App-description">
          자신이 원하는 직업에 대한<br/>
          로드맵 제공<br/>
          필요한 자격증 추천<br/>
          전공 선택 과목 추천
        </p>

        {/* 로그인 버튼 */}
        <button className="Suwon-login-button" onClick={handleLogin}>
          {/* 버튼 안에 수원대 로고 이미지 */}
          <img src="suwon-logo.png" alt="수원대 로고" className="Suwon-logo" />
          <span>수원대학교 포털 아이디로 시작하기</span>
        </button>
      </div>
    </div>
  );
}

export default Home; // 컴포넌트 내보내기
