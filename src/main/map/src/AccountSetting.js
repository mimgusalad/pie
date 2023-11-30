// AccountSettings.js
import React, { useState } from 'react';
import axios from 'axios';

function AccountSettings() {
  const [nickname, setNickname] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const saveAccountSettings = () => {
    // 계정 설정을 저장하는 로직
  };

  return (
    <div>
      <h2 className="card-title">계정설정</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nickname">닉네임</label>
          <input
            type="text"
            className="form-control"
            id="nickname"
            placeholder="바꿀 닉네임을 적어주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userInfo">관심지역</label>
          <input
            type="text"
            className="form-control"
            id="userInfo"
            placeholder="관심지역을 입력해주세요."
            value={userInfo}
            onChange={(e) => setUserInfo(e.target.value)}
          />
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={saveAccountSettings}
        >
          수정
        </button>
        {/* 취소 버튼 등의 로직 추가 */}
      </form>
    </div>
  );
}

export default AccountSettings;
