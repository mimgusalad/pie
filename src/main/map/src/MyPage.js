import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const [myReviewList, setMyReviewList] = useState([]);
  const [noReview, setNoReview] = useState(false);
  const [noSuccession, setNoSuccession] = useState(false);
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
    axios.post('http://localhost:8080/api/logout')
      .then(response => {
        window.location.href = '/login';
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">사용자 정보</h2>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"><a href="#" onClick={navigateToMyReviews}>내가 쓴 리뷰</a></li>
                <li className="list-group-item"><a href="#" onClick={navigateToMySuccessions}>내가 쓴 승계글</a></li>
                <li className="list-group-item"><a href="#" onClick={navigateToFavorites}>즐겨찾기</a></li>
                <li className="list-group-item"><a href="#" onClick={navigateToSettings}>계정설정</a></li>
                <li className="list-group-item">
                  <button className="btn btn-danger" onClick={handleLogout}>로그아웃</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body" id="centerContent">
              {myReviewList.length > 0 ? (
                <div>
                  <h2 className="card-title"></h2>
                  {myReviewList.map(myReview => (
                    <div key={myReview.articleNo} className="content_each_review">
                      <h1 className="text_address">{myReview.address}</h1>
                      <div className="bottom_info">
                        <h1 className="text_regdate">{myReview.regdate}</h1>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {noReview && <p>아직 내가 쓴 리뷰가 없습니다.</p>}
                  {noSuccession && <p>아직 내가 쓴 승계글이 없습니다.</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
