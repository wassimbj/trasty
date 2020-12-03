// import React from 'react';
import axios from '../../utils/axios';

export default async function logOut() {
  try {
    await axios.get('/logout');
    return 1;
  } catch (err) {
    return 0;
  }
}
