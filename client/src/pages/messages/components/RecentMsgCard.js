import React, { useState } from "react";
// import styled from "styled-components";
import Icon from "@hackclub/icons";
import ChatMoreDropdown from "../../../components/dropdown/ChatMoreDropdown";
import {
  CardLink,
  FlexBetween,
  RecentMsgUserInfo,
  UserImg,
  UserName,
  IsRequesterBadge,
  IsTravelerBadge,
  MoreBtn,
} from "../style";
import DeleteChatRoomModal from "./DeleteChatRoomModal";

export default function RecentMsgCard({
  userImg,
  userId,
  userName,
  roomId,
  isTraveler,
  isActive,
}) {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <CardLink isActive={isActive} to={`/messages/${roomId}/${userId}`}>
        <FlexBetween>
          <RecentMsgUserInfo>
            <UserImg src={userImg} alt="" />
            <div>
              <UserName>{userName}</UserName>
              {isTraveler ? (
                <IsTravelerBadge>Traveler</IsTravelerBadge>
              ) : (
                <IsRequesterBadge>Requester</IsRequesterBadge>
              )}
            </div>
          </RecentMsgUserInfo>

          {isTraveler && (
            <div style={{ position: "relative" }}>
              <MoreBtn
                onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
              >
                <Icon glyph="more" size={23} />
              </MoreBtn>
              {isMoreDropdownOpen && (
                <ChatMoreDropdown
                  onClickCloseChat={() => setIsModalOpen(true)}
                  isOpen={true}
                />
              )}
            </div>
          )}
        </FlexBetween>
      </CardLink>
      {isModalOpen && (
        <DeleteChatRoomModal
          chatWithUserId={userId}
          roomId={roomId}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
