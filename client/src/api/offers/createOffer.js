/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function createOffer(data, cb) {
  try {
    const resp = await axios.post('/offer/create', data);
    return cb({ success: true, resp: resp.data });
  } catch (err) {
    return cb({ success: false });
  }
}
