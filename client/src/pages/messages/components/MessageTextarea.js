import React from 'react';
import toast from 'react-hot-toast';
import {useFormik} from 'formik';
import { DisabledSendButton, MsgInput, MsgInputWrapper, SendButton } from '../style'
import createMessage from '../../../api/messages/createMessage';
import {string as yupStr, object as yupObj} from 'yup';

export default function MessageTextarea({ roomId, userChattingWithId, onNewMsgSent }) {
  const formik = useFormik({
    initialValues: {
      msg: '',
    },
    validationSchema: yupObj().shape({
      msg: yupStr().required()
    }),
    onSubmit: async ({ msg }, { resetForm }) => {
      try{
        await createMessage(roomId, userChattingWithId, msg);
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
      {
        !formik.values.msg ? (
          <DisabledSendButton> Send </DisabledSendButton>
        ) : (
          <SendButton type="submit"> Send </SendButton>
        )
      }
    </MsgInputWrapper>
    </form>
  )
}
