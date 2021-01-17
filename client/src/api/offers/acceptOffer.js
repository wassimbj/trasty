/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function acceptOffer(offerId, offerBy, requestId, requestBy) {
  try {
    const resp = await axios.post('/offer/accept', {
      offerId,
      offerBy,
      requestBy,
      requestId
    });
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error('Something went wrong');
  }
}
