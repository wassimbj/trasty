import React, { useState } from 'react'
import Icon from '@hackclub/icons';
import { ChatSettingsBtn } from '../style'
// import ChatSettingsDropdown from '../../../components/dropdown/ChatSettingsDropdown';
import {DropDown, SilentDropdownItem, ItemIcon} from '../../../components/dropdown/style';
import DeleteChatRoomModal from './DeleteChatRoomModal';

export default function ChatSettingsButton({ roomId, chatWithUserId }) {
   const [isOpen, setIsOpen] = useState(false)
   const [isModalOpen, setIsModalOpen] = useState(false)
   return (
      <>
      <ChatSettingsBtn tabIndex="-1" onClick={() => setIsOpen(!isOpen)}>
         <Icon glyph="more" />
         <DropDown isOpen={isOpen} customStyle="right: unset; font-size: 14px;">
            <SilentDropdownItem onClick={() => setIsModalOpen(true)}>
               <ItemIcon><Icon glyph="delete" size={26} /></ItemIcon>
               <span> Delete Chat room </span>
            </SilentDropdownItem>
         </DropDown>
      </ChatSettingsBtn>
      {
         isModalOpen && <DeleteChatRoomModal
            chatWithUserId={chatWithUserId}
            roomId={roomId}
            onClose={() => setIsModalOpen(false)}
         />
      }
      </>
   )
}
