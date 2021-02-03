/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getNewNotifsNum() {
  try {
    const resp = await axios.get('/notifs/news');
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(err);
  }
}
