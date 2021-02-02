/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getAllNotifs() {
  try {
    const resp = await axios.get('/notifs/all');
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(err);
  }
}
