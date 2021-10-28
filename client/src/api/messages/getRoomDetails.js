/* eslint-disable comma-dangle */
import axios from '../../utils/axios';

export default async function getRoomDetails(roomId) {
  try {
    const resp = await axios.get(`/messages/room/details/${roomId}`);
    return resp.data
  } catch (err) {
    throw new Error(err);
  }
}
