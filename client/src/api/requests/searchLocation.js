/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function searchLocation(searchQuery) {
  try {
    const res = await axios.get('/search/location', {
      params: { searchQuery }
    });
    return { success: true, data: res.data };
  } catch (err) {
    return { success: false, data: [] };
  }
}
