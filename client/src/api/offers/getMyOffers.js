/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getMyOffers() {
  try {
    const resp = await axios.get('/offers/mine');
    return { success: true, resp: resp.data };
  } catch (err) {
    return { success: false, resp: [] };
  }
}
