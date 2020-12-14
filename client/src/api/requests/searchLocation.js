/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function searchLocation(searchQuery) {
  try {
    const { data: locationsFound } = await axios.get('/search/location', {
      params: { searchQuery }
    });
    return { success: true, data: locationsFound };
  } catch (err) {
    return { success: false, data: [] };
  }
}
