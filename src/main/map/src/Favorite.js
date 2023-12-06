import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Favorite.css';

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);


  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const userIdResponse = await axios.get('http://localhost:8080/api/user-info');
        const fetchedUserId = userIdResponse.data.userId;
        if (!fetchedUserId) return;

        setUserId(fetchedUserId);
        const favoritesResponse = await axios.get(`http://localhost:8080/favorite?userId=${fetchedUserId}`);
        setFavorites(favoritesResponse.data);
      } catch (error) {
        console.error('즐겨찾기를 불러오는 중 오류가 발생했습니다', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  const handleBack = () => {
           navigate('/myPage');
      };

  return (
      <div className="favorite-container">
        <h2 className="favorite-title">즐겨찾기 목록</h2>
        <button onClick={handleBack} className="back-button_favorite">뒤로 가기</button>
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
           <Link to={`/detail/review/${favorite.review_article.articleNo}/${userId}`}> {/* 상세 페이지로 이동하는 링크 */}
            <div key={favorite.review_article.articleNo} className="favorite-item">
              <div className="address">{favorite.review_article.address}</div>
              <div className="content-title">{favorite.review_article.contentTitle}</div>
              <div className="content-text">{favorite.review_article.contentText}</div>
              <p><strong>보증금/월세:</strong> {favorite.review_article.deposit} / {favorite.review_article.fee}</p>
              <p><strong>작성일:</strong> {new Date(favorite.review_article.regdate).toLocaleDateString()}</p>
              {/* 이미지 URL 처리, 필요에 따라 추가 */}
            </div>
           </Link>
          ))
        ) : (
          <p>즐겨찾기가 없습니다.</p>
        )}
      </div>
    );
  }
export default Favorite;
