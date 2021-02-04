import React, { useContext, useEffect, useState } from "react";
import Icon from "@hackclub/icons";
import Spinner from "../spinner";
import timeAgo from "../../utils/timeAgo";
import subStr from "../../utils/subStr";
import {
  AcceptedOfferIcon,
  EmptyNotifs,
  GotNewOfferIcon,
  HightLight,
  NotifDate,
  NotifItem,
  NotifItemContent,
} from "./style";
import getAllNotifs from "../../api/notifs/getAll";
import UserAuthContext from "../../contexts/UserAuthContext";
import SomethingWrongMsg from "../somethingWrongMsg";

export default function NotifsData({ isOpen }) {
  const [notifs, setNotifs] = useState({
    loading: true,
    data: [],
  });

  const { isLoggedIn } = useContext(UserAuthContext);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isOpen) {
      (async function () {
        try {
          const resp = await getAllNotifs();
          console.log(resp);
          setNotifs({
            loading: false,
            data: resp.data,
          });
        } catch (err) {
          setNotifs({ loading: false, data: [] });
          setError(true);
        }
      })();
    }
  }, [isOpen]);

  return (
    <>
      {notifs.loading ? (
        <Spinner center customStyle="margin-top: 3rem" width="25" />
      ) : error ?
        <SomethingWrongMsg />
      : !notifs.data.length ? (
        <EmptyNotifs>
          <div>
            <Icon glyph="rep" size={50} />
            <p>Nothing new yet...</p>
          </div>
        </EmptyNotifs>
      ) : (
        notifs.data.map((notif) => {
          if (notif.notif_type === "accepted_offer") {
            return (
              <NotifItem to="/my/offers">
                <NotifItemContent>
                  <AcceptedOfferIcon>
                    <Icon glyph="checkmark" size={28} />
                  </AcceptedOfferIcon>
                  <div>
                    <p>
                      <HightLight> {notif.fullname} </HightLight>
                      accepted your help offer for{" "}
                      <HightLight>{subStr(notif.product_title, 25)}</HightLight>
                    </p>
                    <NotifDate>{timeAgo(notif.created_at)}</NotifDate>
                  </div>
                </NotifItemContent>
              </NotifItem>
            );
          } else {
            return (
              <NotifItem to={`/user/${isLoggedIn.userid}`}>
                <NotifItemContent>
                  <GotNewOfferIcon>
                    <Icon glyph="message-simple" size={28} />
                  </GotNewOfferIcon>
                  <div>
                    <p>
                      New help offer from
                      <HightLight> {notif.fullname} </HightLight>
                      for{" "}
                      <HightLight>{subStr(notif.product_title, 25)}</HightLight>
                    </p>
                    <NotifDate>{timeAgo(notif.created_at)}</NotifDate>
                  </div>
                </NotifItemContent>
              </NotifItem>
            );
          }
        })
      )}
    </>
  );
}
