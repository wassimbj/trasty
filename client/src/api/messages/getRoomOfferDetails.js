/* eslint-disable comma-dangle */
import axios from '../../utils/axios';

export default async function getRoomOfferDetails(roomId) {
  try {
    const resp = await axios.get(`/messages/offer/details/${roomId}`);
    return { success: true, data: resp.data };
  } catch (err) {
    throw new Error(err);
  }
}
