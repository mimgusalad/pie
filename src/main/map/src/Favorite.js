import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Favorite.css';

function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCurrentUserId = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/user-info');
        return response.data.userId;
      } catch (error) {
        console.error('Current user ID could not be retrieved.', error);
        return null; // Or handle the error as appropriate for your application
      }
    };

    const fetchFavorites = async (userId) => {
      if (!userId) return; // If no userId is found, we don't fetch the favorites
      try {
//        const response = await axios.get(`http://localhost:8080/favorite?userId=7`);
        const response = await axios.get(`http://localhost:8080/favorite?userId=${userId}`);
        console.log(response.data);
        setFavorites(response.data);
      } catch (error) {
        console.error('즐겨찾기를 불러오는 중 오류가 발생했습니다', error);
      } finally {
        setIsLoading(false);
      }
    };

    getCurrentUserId().then(fetchFavorites);
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
          favorites.map(favorite => (
            <div key={favorite.id} className="favorite-item">
              <div className="address">{favorite.review_article.address}</div>
              <div className="content-title">{favorite.review_article.contentTitle}</div>
              <div className="content-text">{favorite.review_article.contentText}</div>
              <p><strong>보증금/월세:</strong> {favorite.review_article.deposit} / {favorite.review_article.fee}</p>
              <p><strong>작성일:</strong> {new Date(favorite.review_article.regdate).toLocaleDateString()}</p>
            </div>
          ))
        ) : (
          <p>즐겨찾기가 없습니다.</p>
        )}
      </div>
    );
  }

export default Favorite;
