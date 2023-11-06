import React from 'react';
import axios from 'axios';

const createSendbirdUser = async (userId, nickname, profileUrl = '') => {
  const url = `https://api-${process.env.REACT_APP_APP_ID}.sendbird.com/v3/users`;
  const apiHeaders = {
    'Api-Token': process.env.REACT_APP_API_TOKEN,
  };
  const data = {
    user_id: userId,
    nickname: nickname,
    profile_url: profileUrl,
  };

  try {
    const response = await axios.post(url, data, { headers: apiHeaders });
    const responseData = response.data;
    return JSON.stringify(responseData);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const SendbirdUser = () => {
  // Call the createSendbirdUser function
  createSendbirdUser('test01', 'test01', '')
    .then((result) => {
      console.log(result);
      // Handle the result as needed
    })
    .catch((error) => {
      console.error(error);
      // Handle the error as needed
    });

  return;
};

export default SendbirdUser;
