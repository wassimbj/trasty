/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getChatRooms() {
  try {
    const resp = await axios.get('/messages/chatrooms');
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(`Get chat rooms ERROR ${err}`);
  }
}
