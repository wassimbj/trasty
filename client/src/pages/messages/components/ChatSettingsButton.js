import React, { useState } from "react";
import Icon from "@hackclub/icons";
import { ChatSettingsBtn } from "../style";
import DeleteChatRoomModal from "./DeleteChatRoomModal";
import styled from "styled-components";
import Tip from "../../../components/tip";

const CloseRoomBtn = styled.div`
  text-align: center;
  font-weight: 500;
  padding: 10px;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  &:hover {
    color: #f00000;
  }
`;

export default function ChatSettingsButton({ roomId, chatWithUserId }) {
//   const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <CloseRoomBtn onClick={() => setIsModalOpen(true)}>
        <Icon glyph="forbidden" size={19} />
        Close chat room
      </CloseRoomBtn>
      {isModalOpen && (
        <DeleteChatRoomModal
          chatWithUserId={chatWithUserId}
          roomId={roomId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
