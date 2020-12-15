/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getSingleDetails(slug) {
  try {
    const resp = await axios.get(`/request/details/${slug}`);
    // console.log('Resp -> ', resp);
    return resp.data[0] || {};
  } catch (err) {
    return {};
  }
}
