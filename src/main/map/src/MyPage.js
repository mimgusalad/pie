import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyPage.css';

function MyPage() {
  const [myReviewList, setMyReviewList] = useState([]);
  const [noReview, setNoReview] = useState(false);
  const [noSuccession, setNoSuccession] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [logoutMessage, setLogoutMessage] = useState('');
  const navigate = useNavigate();

   // '내가 쓴 리뷰' 링크 클릭 핸들러
    const navigateToMyReviews = () => {
      navigate('/myPage/myReviewList');
    };

    // '내가 쓴 승계글' 링크 클릭 핸들러
    const navigateToMySuccessions = () => {
      navigate('/myPage/mySuccession');
    };

    const navigateToSettings = () => {
        navigate('/myPage/setting');
      };

    const navigateToFavorites = () => {
        navigate('/myPage/favorites');
      };
  useEffect(() => {
  }, []);

  const handleLogout = () => {
      axios.post('http://localhost:8080/logout')
        .then(response => {
           alert('로그아웃이 정상적으로 완료되었습니다.'); // 로그아웃 성공 메시지 표시
           window.location.href = '/'; // 메인 페이지로 리다이렉트
        })
        .catch(error => {
          console.log(error);
        });
    };

    const confirmLogout = () => {
        setLogoutMessage(''); // 메시지 초기화
        navigate('/'); // 메인 화면으로 이동
      };

      const renderLogoutAlert = () => {
          if (logoutMessage) {
            return (
              <div className="logout-alert">
                <p>{logoutMessage}</p>
                <button onClick={confirmLogout}>확인</button>
              </div>
            );
          }
          return null;
        };

  return (
    <div className="container_myPage mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card_myPage">
            <div className="card-body_myPage">
              <h2 className="card-title_myPage">사용자 정보</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item_myPage"><a href="#" onClick={navigateToMyReviews}>내가 쓴 리뷰</a></li>
                <li className="list-group-item_myPage"><a href="#" onClick={navigateToMySuccessions}>내가 쓴 승계글</a></li>
                <li className="list-group-item_myPage"><a href="#" onClick={navigateToFavorites}>즐겨찾기</a></li>
                <li className="list-group-item_myPage"><a href="#" onClick={navigateToSettings}>계정설정</a></li>
                <li className="list-group-item_myPage">
                  <button className="btn btn-danger_myPage" onClick={handleLogout}>로그아웃</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
