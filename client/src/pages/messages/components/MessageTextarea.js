import React from 'react';
import toast from 'react-hot-toast';
import {useFormik} from 'formik';
import { MsgInput, MsgInputWrapper, SendButton } from '../style'
import createMessage from '../../../api/messages/createMessage';

export default function MessageTextarea({ roomId }) {

  const formik = useFormik({
    initialValues: {
      msg: '',
    },

    onSubmit: async ({ msg }, { resetForm }) => {
      try{
        await createMessage(roomId, msg);
        // console.log('msssg: ', resp);
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
