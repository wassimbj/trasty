/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function createOffer(data) {
  try {
    const resp = await axios.post('/offer/create', data);
    return { success: true, resp: resp.data };
  } catch (err) {
    throw new Error('Something went wrong');
  }
}
