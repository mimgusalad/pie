import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MyReviewList.css';

function MyReviewList() {
  const [myReviews, setMyReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/myReviewList')
      .then(response => {
        console.log(response.data);
        setMyReviews(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('리뷰를 불러오는 데 실패했습니다.', error);
        setIsLoading(false);
      });
  }, []);

  const handleBack = () => {
       navigate('/myPage');
  };

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
      <div className="myReviewList-container">
        <h2 className="card-title">내가 쓴 리뷰</h2>
        <button onClick={handleBack} className="back-button">뒤로 가기</button>
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
              </li>
            ))}
          </ul>
        ) : (
          <p>아직 내가 쓴 리뷰가 없습니다.</p>
        )}
      </div>
    );
  }

export default MyReviewList;
