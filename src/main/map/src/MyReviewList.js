import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyReviewList.css';

function MyReviewList() {
  const [myReviews, setMyReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // userId를 가져오는 API 호출
        const userIdResponse = await axios.get('http://localhost:8080/api/user-info');
        const userId = userIdResponse.data.userId;
        if (!userId) return;

        setUserId(userId); // userId 상태 변수 업데이트

        const reviewsResponse = await axios.get('http://localhost:8080/api/myReviewList')
        setMyReviews(reviewsResponse.data);
      } catch (error) {
        console.error('리뷰를 불러오는 중 오류가 발생했습니다', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleBack = () => {
    navigate('/myPage');
  };

  const handleDelete = (articleNo) => {
    if (window.confirm('해당 리뷰를 삭제하시겠습니까?')) {
      axios.delete(`http://localhost:8080/api/reviews/${articleNo}`)
        .then(response => {
          // 삭제 성공 후 UI 업데이트
          alert('리뷰가 삭제되었습니다.');
          console.log('리뷰 삭제 성공:', response.data);
          setMyReviews(prevReviews => prevReviews.filter(review => review.articleNo !== articleNo));
        })
        .catch(error => {
          console.error('리뷰 삭제에 실패했습니다.', error);
        });
    }
  };

  if (isLoading) {
    return <p className="loading-message_myReviewList">로딩 중...</p>;
  }

  return (
    <div className="myReviewList-container">
      <h2 className="card-title">내가 쓴 리뷰</h2>
      <button onClick={handleBack} className="back-button_myReviewList">뒤로 가기</button>
      {myReviews.length > 0 ? (
        <ul>
          {myReviews.map((review) => (
            <li key={review.articleNo} className="review-item">
              <p><strong>주소:</strong> {review.address} {review.addressdetail}</p>
              <h3 className="content-title">{review.contentTitle}</h3>
              <p className="content-text">{review.contentText}</p>
              <p><strong>보증금/월세:</strong> {review.deposit} / {review.fee}</p>
              <p><strong>주거형태/거주기간:</strong> {review.houseType} / {review.livingYear}년</p>
              <p><strong>작성일:</strong> {new Date(review.regdate).toLocaleDateString()}</p>
              <button onClick={() => handleDelete(review.articleNo)} className="delete-button">삭제</button>
              <button onClick={() => navigate(`/detail/review/${review.articleNo}/${userId}`)} className="detail-button">리뷰 상세 페이지로 이동</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="loading-message_myReviewList">아직 내가 쓴 리뷰가 없습니다.</p>
      )}
    </div>
  );
}

export default MyReviewList;
