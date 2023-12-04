import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './MySuccession.css';

function MySuccession() {
  const [successionData, setSuccessionData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const deleteSuccession = (articleNo) => {
      if (window.confirm('해당 승계글을 삭제하시겠습니까?')) {
        axios.delete(`http://localhost:8080/api/successions/${articleNo}`)
          .then(response => {
            alert('승계글이 삭제되었습니다.');
            console.log('승계글 삭제 성공:', response.data);
            // 승계글 삭제 후 페이지 새로고침 또는 상태 업데이트
            window.location.reload();
          })
          .catch(error => {
            console.error('승계글 삭제에 실패했습니다:', error);
          });
      }
    };

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
     <h2 className="card-title">내가 쓴 승계글</h2>
     <button onClick={handleBack} className="back-button">뒤로 가기</button>
      {successionData ? (
        <div>
         <p><strong>주소:</strong> {successionData.address} / {successionData.addressDetail}</p>
                   <h3 className="content-title">{successionData.contentTitle}</h3>
                   <p className="content-text">{successionData.contentText}</p>
                   <p><strong>보증금/월세:</strong> {successionData.deposit} / {successionData.fee}</p>
                   <p><strong>주거형태/결제유형:</strong> {successionData.houseType} / {successionData.payType}</p>
                   <p><strong>옵션 상태/승계 상태:</strong> {successionData.optionQuality} / {successionData.successionQuality}</p>
                   <p><strong>등록일:</strong> {new Date(successionData.regDate).toLocaleDateString()}</p>
                   <button onClick={() => deleteSuccession(successionData.articleNo)} className="delete-button">삭제</button>

        </div>
      ) : (
        <p>아직 내가 쓴 승계글이 없습니다.</p>
      )}
    </div>
  );
}

export default MySuccession;
