import React from 'react';
import toast from 'react-hot-toast';
import {useFormik} from 'formik';
import { MsgInput, MsgInputWrapper, SendButton } from '../style'
import createMessage from '../../../api/messages/createMessage';

export default function MessageTextarea({ roomId, onNewMsgSent }) {
  const formik = useFormik({
    initialValues: {
      msg: '',
    },
    onSubmit: async ({ msg }, { resetForm }) => {
      try{
        if(!msg){
          return;
        }
        await createMessage(roomId, msg);
        // socketIo.emit('new_msg_sent', { roomId })
        onNewMsgSent()
        resetForm({});
      }catch(err){
        toast.error('Something went wong, try again later.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <MsgInputWrapper>
      <MsgInput
        rows="1"
        placeholder="write your message..."
        name="msg"
        value={formik.values.msg}
        onChange={formik.handleChange}
      />
      <SendButton type="submit"> Send </SendButton>
    </MsgInputWrapper>
    </form>
  )
}
