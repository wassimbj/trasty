import React, { useState } from "react";
import toast from "react-hot-toast";
// import { useFormik } from 'formik';
import { Redirect } from "react-router-dom";
import {
  Modal,
  ModalTitle,
  ModalBodyWrapper,
  ModalBody,
  ModalFooter,
} from "../../../components/modal";
import { DeleteRoomButton, CancelButton } from "../style";
import Spinner from "../../../components/spinner";
import deleteChatRoom from "../../../api/messages/deleteChatRoom";

export default function DeleteChatRoomModal({
  onClose,
  chatWithUserId,
  roomId,
}) {
  const [isAccepting, setIsAccepting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsAccepting(true);
    try {
      const resp = await deleteChatRoom(roomId, chatWithUserId);
      if (resp.success) {
        toast.success("Chat room has been closed", { duration: 9000 });
        setSuccess(true);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong, please try again later.");
    }
    setIsAccepting(false);
  };

  if (success) {
    return (window.location.pathname = "/messages");
  }

  return (
    <Modal onClose={onClose}>
      <ModalTitle>Close chat room ?</ModalTitle>
      <ModalBodyWrapper>
        <ModalBody>
          {/* <p style={{ textAlign: "center" }}>
            Are you sure you want to delete this chat room ?
          </p> */}
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Close chat room if the traveler is not able to deliver your request,
            so you can get back your credits.
          </p>
        </ModalBody>
      </ModalBodyWrapper>
      <ModalFooter>
        {isAccepting ? (
          <DeleteRoomButton type="button" isDisabled>
            <Spinner center width="22px" />
          </DeleteRoomButton>
        ) : (
          <DeleteRoomButton onClick={handleSubmit}>Close</DeleteRoomButton>
        )}
        <CancelButton onClick={onClose}>Cancel</CancelButton>
      </ModalFooter>
    </Modal>
  );
}
