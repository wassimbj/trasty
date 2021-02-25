/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function createMessage(roomId, userChattingWithId, msg) {
  try {
    const resp = await axios.post('/messages/create', {
      roomId,
      userChattingWithId,
      msg
    });
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(err);
  }
}
