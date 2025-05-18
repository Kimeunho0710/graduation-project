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
          <span>자신이 원하는 직업에 대한</span><br/>
          <span className="checkIcon">✔ </span><span>로드맵 제공</span><br/>
          <span className="checkIcon">✔ </span><span>필요한 자격증 추천</span><br/>
          <span className="checkIcon">✔ </span><span>전공 선택 과목 추천</span>
        </p>

        {/* 로그인 버튼 */}
        <button className="kakaotalk-login-button" onClick={handleLogin}>
          {/* 버튼 안에 카카오톡 로고 이미지 */}
          <img src="kakaotalk-logo.png" alt="카카오톡 로고" className="kakaotalk-logo" />
          <span>카카오톡 아이디로 시작하기</span>
        </button>
      </div>
    </div>
  );
}

export default Home; // 컴포넌트 내보내기
