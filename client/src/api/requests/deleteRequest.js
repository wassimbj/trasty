/* eslint-disable comma-dangle */
// import React from 'react';
import axios from '../../utils/axios';

export default async function deleteRequest(requestId, requestBy) {
  try {
    const resp = await axios.post('/request/delete', { requestId, requestBy });
    return { success: true, resp: resp.data };
  } catch (err) {
    throw new Error('something went wrong');
  }
}
