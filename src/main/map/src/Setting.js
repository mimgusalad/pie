// Setting.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Setting() {
    const [nickname, setNickname] = useState('');
    const [userInfo, setUserInfo] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // API에서 현재 설정을 가져옵니다.
        axios.get('http://localhost:8080/api/user-info')
            .then(response => {
                const data = response.data;
                setNickname(data.nickname);
                setUserInfo(data.userInfo);
                setLoading(false);
            })
            .catch(error => console.error('사용자 정보 가져오기 오류:', error));
    }, []);



    const handleSave = () => {
        const updatedData = { nickname, userInfo };
        axios.post('http://localhost:8080/api/updateUserInfo', updatedData)
            .then(response => {
                if (response.data.success) {
                    alert('설정이 성공적으로 업데이트되었습니다!');
                } else {
                    alert('설정 업데이트에 실패했습니다.');
                }
            })
            .catch(error => console.error('사용자 정보 업데이트 오류:', error));
    };
    const handleBack = () => {
                 navigate('/myPage');
            };
    if (loading) return <p>로딩 중...</p>;

    return (
        <div>
            <h2>계정 설정</h2>
            <button onClick={handleBack} className="back-button">뒤로 가기</button>
            <div>
                <label>닉네임:</label>
                <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} />
            </div>
            <button onClick={handleSave}>변경 사항 저장</button>
        </div>
    );
}

export default Setting;
