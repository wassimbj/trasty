/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function deleteTrip(tripId) {
  try {
    const resp = await axios.post(`/trip/delete/${tripId}`);
    return resp.data;
  } catch (err) {
    throw new Error(err);
  }
}
