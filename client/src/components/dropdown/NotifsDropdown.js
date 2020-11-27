import React from 'react';
import Icon from '@hackclub/icons';
import {
  AcceptedOfferIcon, GotNewOfferIcon, HightLight, NewNotifDot,
  NotifDate, NotifItem, NotifItemContent,
  NotifsContainer, NotifsContent, NotifsDropDownCard, NotifsTitle,
} from './style';

export default function NotifsDropdown({ isOpen }) {
  return (
    <NotifsDropDownCard isOpen={isOpen}>
      <NotifsContainer>
        <NotifsTitle> Notifications </NotifsTitle>
        <NotifsContent>
          {/* <EmptyNotifs>
            <div>
              <Icon glyph="rep" size={50} />
              <p>Nothing new yet...</p>
            </div>
          </EmptyNotifs> */}
          <NotifItem>
            {/* <NewNotifDot /> */}
            <NotifItemContent>
              <AcceptedOfferIcon>
                <Icon glyph="checkmark" size={28} />
              </AcceptedOfferIcon>
              <div>
                <p>
                  <HightLight> Ali batata </HightLight>
                  accepted your offer
                </p>
                <NotifDate> 5 hours ago </NotifDate>
              </div>
            </NotifItemContent>
          </NotifItem>
          <NotifItem>
            <NewNotifDot />
            <NotifItemContent>
              <GotNewOfferIcon>
                <Icon glyph="message-simple" size={28} />
              </GotNewOfferIcon>
              <div>
                <p>
                  You got a new offer from
                  <HightLight> Ali batata </HightLight>
                  for
                  {' '}
                  <HightLight>
                    Apple Watch Series 6 GPS, 44mm Space Gray...
                  </HightLight>
                </p>
                <NotifDate> 5 hours ago </NotifDate>
              </div>
            </NotifItemContent>
          </NotifItem>
        </NotifsContent>
      </NotifsContainer>
    </NotifsDropDownCard>
  );
}
