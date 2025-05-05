import { useEffect, useState } from 'react'; // 리액트 훅 import

function MyPage() {
  const [favorites, setFavorites] = useState([]); 
  // 즐겨찾기 목록을 저장하는 state. 처음엔 빈 배열

  useEffect(() => {
    // 컴포넌트가 처음 화면에 뜰 때 실행 (mount 시점)
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    // localStorage에서 'favorites' 키로 저장된 값 가져오기 (없으면 빈 배열)
    setFavorites(savedFavorites); // 가져온 데이터를 state에 저장
  }, []);

  return (
    <div>
      <h2>⭐ 즐겨찾기한 과목</h2>
      <ul>
        {favorites.map((subject, index) => (
          <li key={index}>
            {subject}
            {/* 필요하면 여기에서 과목 삭제하는 버튼 추가할 수 있음 */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyPage; // 컴포넌트 내보내기