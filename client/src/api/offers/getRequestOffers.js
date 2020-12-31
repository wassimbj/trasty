/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getRequestOffers(requestId, requestBy) {
  try {
    const resp = await axios.get(`/offers/request/${requestId}`, {
      params: { request_by: requestBy }
    });
    return { success: true, resp: resp.data };
  } catch (err) {
    return { success: false, resp: [] };
  }
}
