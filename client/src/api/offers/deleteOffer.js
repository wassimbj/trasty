/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function deleteOffer(offerId, offerBy, requestBy) {
  try {
    const resp = await axios.post('/offer/delete', { offerId, offerBy, requestBy });
    return { success: true, resp: resp.data };
  } catch (err) {
    throw new Error('something went wrong');
  }
}
