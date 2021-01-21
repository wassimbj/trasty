/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getUserTrips(userid, limit, offset) {
  try {
    const resp = await axios.get(`/trips/user/${userid}`, {
      params: {
        limit, offset
      }
    });
    return resp.data;
  } catch (err) {
    throw new Error(err);
  }
}
