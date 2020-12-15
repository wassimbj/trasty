/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getRequests(data) {
  try {
    const resp = await axios.get('/requests/all', {
      params: data
    });
    console.log('Resp -> ', resp);
    return resp.data;
  } catch (err) {
    return [];
  }
}
