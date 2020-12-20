/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function createRequest(data, cb) {
  try {
    const resp = await axios.post('/request/create', data);
    console.log('Resp -> ', resp);
    if (resp.status === 200) {
      return cb({ success: true, resp: resp.data });
    }

    return cb({ success: false });
  } catch (err) {
    throw new Error(err);
  }
}
