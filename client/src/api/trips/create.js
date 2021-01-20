/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function createTrip(from, to, travelDate, backDate, tripType, cb) {
  try {
    const resp = await axios.post('/trip/create', {
      from,
      to,
      travelDate,
      backDate: backDate || null,
      tripType
    });
    // console.log('Resp -> ', resp);
    return cb({ success: true, resp: resp.data });
    // return cb({ success: false });
  } catch (err) {
    throw new Error(err);
  }
}
