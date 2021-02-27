/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function deleteChatRoom(roomId, chatWithUserId) {
  try {
    const resp = await axios.post('/room/delete', {
      roomId, chatWithUserId
    });
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(err);
  }
}
