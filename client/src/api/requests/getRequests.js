/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getRequests(data) {
  try {
    const resp = await axios.post('/requests/all', data);
    console.log('Resp -> ', resp);
    return cb({ success: true, resp: resp.data });
  } catch (err) {
    return cb({ success: false });
  }
}
