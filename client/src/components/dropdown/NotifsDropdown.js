import React, { useContext, useEffect, useState } from "react";
import Icon from "@hackclub/icons";
import Spinner from '../spinner';
import timeAgo from '../../utils/timeAgo';
import subStr from '../../utils/subStr';
import {
  AcceptedOfferIcon, EmptyNotifs,
  GotNewOfferIcon, HightLight,
  NewNotifDot, NotifDate, NotifItem,
  NotifItemContent, NotifsContainer, NotifsContent,
  NotifsDropDownCard, NotifsTitle,
} from "./style";
import getAllNotifs from "../../api/notifs/getAll";
import UserAuthContext from "../../contexts/UserAuthContext";

export default function NotifsDropdown({ isOpen }) {
  const [notifs, setNotifs] = useState({
    loading: true,
    data: [],
  });

  const {isLoggedIn} = useContext(UserAuthContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    if(isOpen){
      (async function () {
        try {
          const resp = await getAllNotifs();
          console.log(resp);
          setNotifs({
            loading: false,
            data: resp.data,
          });
        } catch (err) {
          setNotifs({loading: false, data: []})
          setError(true);
        }
      })();
    }
  }, [isOpen]);

  return (
    <NotifsDropDownCard isOpen={isOpen}>
      <NotifsContainer>
        <NotifsTitle> Notifications </NotifsTitle>
        <NotifsContent>
          {
            notifs.loading ? (
              <Spinner center customStyle="margin-top: 3rem" width="25" />
            ) : (
              error ? <p style={{textAlign: 'center', padding: '1rem 0'}}> Something went wrong... </p>
              : (
                !notifs.data.length ? (
                  <EmptyNotifs>
                    <div>
                      <Icon glyph="rep" size={50} />
                      <p>Nothing new yet...</p>
                    </div>
                  </EmptyNotifs>
                ) : (
                  notifs.data.map((notif) => {
                    if(notif.notif_type === 'accepted_offer'){
                      return (
                        <NotifItem to='/my/offers'>
                          <NotifItemContent>
                            <AcceptedOfferIcon>
                              <Icon glyph="checkmark" size={28} />
                            </AcceptedOfferIcon>
                            <div>
                              <p>
                                <HightLight> {notif.fullname} </HightLight>
                                accepted your help offer for
                                {' '}
                                <HightLight>{subStr(notif.product_title, 25)}</HightLight>
                              </p>
                              <NotifDate>{timeAgo(notif.created_at)}</NotifDate>
                            </div>
                          </NotifItemContent>
                        </NotifItem>
                      )
                    } else {
                      return(
                        <NotifItem to={`/user/${isLoggedIn.userid}`}>
                          <NotifItemContent>
                            <GotNewOfferIcon>
                              <Icon glyph="message-simple" size={28} />
                            </GotNewOfferIcon>
                            <div>
                              <p>
                                New help offer from
                                <HightLight> {notif.fullname} </HightLight>
                                for
                                {' '}
                                <HightLight>{subStr(notif.product_title, 25)}</HightLight>
                              </p>
                              <NotifDate>{timeAgo(notif.created_at)}</NotifDate>
                            </div>
                          </NotifItemContent>
                        </NotifItem>
                      )
                    }
                  })
                )
              )
            )
          }
        </NotifsContent>
      </NotifsContainer>
    </NotifsDropDownCard>
  );
}
