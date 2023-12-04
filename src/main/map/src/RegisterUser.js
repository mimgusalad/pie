import React from 'react';
import axios from 'axios';

export const createSendbirdUser = async (email, nickname) => {
  try {
    const response = await fetch(`https://api-${process.env.REACT_APP_APP_ID}.sendbird.com/v3/users`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Api-Token': process.env.REACT_APP_API_TOKEN
      },
      body: JSON.stringify({
        "user_id": email,
        "nickname": nickname,
        "profile_url": ""
      })
    });
    const responseData = response.data;
    return JSON.stringify(responseData);
  } catch (error) {
    console.log('createSendbirdUser error: ' + error.response.status);
    return null;
  }
};

export default { createSendbirdUser};
