// import React from 'react';
import axios from '../../utils/axios';

export default async function getLoggedInUser() {
  try {
    const res = await axios.get('/me');
    return { isLoggedIn: true, data: res.data.me };
  } catch (err) {
    return { isLoggedIn: false };
  }
}
