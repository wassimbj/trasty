import React, { useContext, useEffect, useState } from "react";
import Icon from "@hackclub/icons";
import Tip from "../../tip";
import { NewNotifDot, StyledLink } from "../style";
import ProfileDropdown from "../../dropdown/ProfileDropdown";
import NotifsDropdown from "../../dropdown/NotifsDropdown";
import AddDropdown from "../../dropdown/AddDropdown";
// import UserAuthContext from '../../../contexts/UserAuthContext';
// import initSocketIo from '../../../utils/socketIo'
import getNewNotifsNum from "../../../api/notifs/getNewNotifsNum";
import Layer from "../../layer";
import getNewNotif from "../../../events/getNewNotif";

export default function AuthNavItems({ onClickLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    profileDropdown: false,
    notifsDropdown: false,
    addDropdown: false,
  });
  // const { notifSocketIo } = useContext(UserAuthContext);

  // for notifications
  const [newNotif, setNewNotif] = useState(false);
  const [newMsgNotif, setNewMsgNotif] = useState(false);

  useEffect(() => {
    (async function () {
      const newNotifs = await getNewNotifsNum();
      if (newNotifs.data > 0) {
        setNewNotif(true);
      }
    })();
  }, []);

  useEffect(() => {
    getNewNotif((notifType) => {
      console.log(notifType);
      if (notifType === "msg") {
        setNewMsgNotif(true);
      } else {
        setNewNotif(true);
      }
    });
  }, []);

  // to close the dropdowns when clicking anywhere
  const handleDropdownToggle = (nav, isOpen) => () => {
    setIsDropdownOpen({
      profileDropdown: nav === "profile" ? isOpen : false,
      addDropdown: nav === "add" ? isOpen : false,
      notifsDropdown: nav === "notif" ? isOpen : false,
    });
    // when user open the notif dropdown, means user saw the new notifs.
    if (nav === "notif" && isOpen) {
      setNewNotif(false);
    }
  };

  const isSmallDevice = window.innerWidth < 450;
  return (
    <>
      {(isDropdownOpen.addDropdown ||
        isDropdownOpen.notifsDropdown ||
        isDropdownOpen.profileDropdown) && (
        <Layer
          zIndex="2"
          color="rgba(0,0,0,0)"
          onClick={() => {
            setIsDropdownOpen({
              profileDropdown: false,
              addDropdown: false,
              notifsDropdown: false,
            });
          }}
        />
      )}
      <Tip content="Add">
        <StyledLink
          aria-label="navElem"
          to="#"
          activeClassName="active"
          isActive={() => isDropdownOpen.addDropdown}
          onClick={handleDropdownToggle("add", !isDropdownOpen.addDropdown)}
          tabIndex="-1"
        >
          <Icon glyph="plus" size={35} aria-label="navElem" />
        </StyledLink>
      </Tip>
      <Tip content="Notifications">
        <StyledLink
          aria-label="navElem"
          isActive={() => isDropdownOpen.notifsDropdown}
          activeClassName="active"
          to={isSmallDevice ? "/notifs" : "#"}
          onClick={handleDropdownToggle(
            "notif",
            !isDropdownOpen.notifsDropdown
          )}
          tabIndex="-1"
        >
          {newNotif && <NewNotifDot />}
          <Icon glyph="notification" size={35} aria-label="navElem" />
        </StyledLink>
      </Tip>
      {/* <Tip content="Messages">
        <StyledLink to="/messages" activeClassName="active">
          {newMsgNotif && <NewNotifDot />}
          <Icon glyph="message" size={35} />
        </StyledLink>
      </Tip> */}
      <Tip content="Profile">
        <StyledLink
          aria-label="navElem"
          to="#"
          activeClassName="active"
          isActive={() => isDropdownOpen.profileDropdown}
          onClick={handleDropdownToggle(
            "profile",
            !isDropdownOpen.profileDropdown
          )}
          tabIndex="-1"
        >
          <Icon glyph="profile" size={35} aria-label="navElem" />
        </StyledLink>
      </Tip>
      {isDropdownOpen.profileDropdown && (
        <ProfileDropdown
          isOpen={isDropdownOpen.profileDropdown}
          onClickLogout={onClickLogout}
        />
      )}
      {isDropdownOpen.addDropdown && (
        <AddDropdown isOpen={isDropdownOpen.addDropdown} />
      )}
      {!isSmallDevice && isDropdownOpen.notifsDropdown && (
        <NotifsDropdown isOpen={isDropdownOpen.notifsDropdown} />
      )}
    </>
  );
}
