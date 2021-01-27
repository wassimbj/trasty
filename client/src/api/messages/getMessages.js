/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function getMessages(roomId) {
  try {
    const resp = await axios.get(`/messages/get/${roomId}`);
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(`Get chat rooms ERROR ${err}`);
  }
}
