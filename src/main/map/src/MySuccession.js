import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MySuccession.css';

function MySuccession() {
  const [successionData, setSuccessionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/mySuccession')
      .then(response => {
        console.log(response.data);
        if (response.data) {
          setSuccessionData(response.data);
        } else {
          setSuccessionData(null);
        }
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
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
    <div>
      {successionData ? (
        <div>
            <h2 className="card-title">내가 쓴 승계글</h2>
            <button onClick={handleBack} className="back-button">뒤로 가기</button>
         <p><strong>주소:</strong> {successionData.address} / {successionData.addressDetail}</p>
                   <h3 className="content-title">{successionData.contentTitle}</h3>
                   <p className="content-text">{successionData.contentText}</p>
                   <p><strong>보증금/월세:</strong> {successionData.deposit} / {successionData.fee}</p>
                   <p><strong>주거형태/결제유형:</strong> {successionData.houseType} / {successionData.payType}</p>
                   <p><strong>옵션 상태/승계 상태:</strong> {successionData.optionQuality} / {successionData.successionQuality}</p>
                   <p><strong>등록일:</strong> {new Date(successionData.regDate).toLocaleDateString()}</p>
        </div>
      ) : (
        <p>아직 내가 쓴 승계글이 없습니다.</p>
      )}
    </div>
  );
}

export default MySuccession;
