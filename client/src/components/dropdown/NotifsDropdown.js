import React from "react";
import {
  NotifsContainer, NotifsContent,
  NotifsDropDownCard, NotifsTitle,
} from "./style";
import NotifsData from "../notifsData";

export default function NotifsDropdown({ isOpen }) {
  return (
    <NotifsDropDownCard isOpen={isOpen}>
      <NotifsContainer>
        <NotifsTitle> Notifications </NotifsTitle>
        <NotifsContent>
          <NotifsData isOpen={isOpen} />
        </NotifsContent>
      </NotifsContainer>
    </NotifsDropDownCard>
  );
}
