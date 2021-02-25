/* eslint-disable comma-dangle */
import axios from '../../utils/axios';

export default async function isRoomExist(roomId, chatWithUserId) {
  try {
    const resp = await axios.get(`/messages/check/${roomId}`, {
      params: {
        chatWithUserId
      }
    });
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(err);
  }
}
