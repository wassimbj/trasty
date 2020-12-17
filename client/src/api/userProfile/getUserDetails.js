/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getUserDetails(userid) {
  try {
    const resp = await axios.get(`/user/profile/${userid}`);
    console.log('Resp -> ', resp);
    return resp.data[0] || null;
  } catch (err) {
    return null;
  }
}
