/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getUserRequests(userid, limit, offset) {
  try {
    const resp = await axios.get(`/requests/user/${userid}`, {
      params: { limit, offset }
    });
    // console.log('Resp -> ', resp);
    return resp.data;
  } catch (err) {
    return [];
  }
}
