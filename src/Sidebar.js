import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/javaid.khan19/"
      >
        <SidebarRow src={user.photoURL} title={user.displayName} />
      </a>

      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/Clever-Coder-110967380692730/"
      >
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/javaid.khan19/friends/"
      >
        <SidebarRow Icon={PeopleIcon} title="Friends" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://facebook-messenger-clone-5b10c.web.app/"
      >
        <SidebarRow Icon={ChatIcon} title="Messenger" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/marketplace/?ref=app_tab/"
      >
        <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/javaid.khan19/videos/"
      >
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/marketplace/?ref=app_tab/"
      >
        <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
      </a>
    </div>
  );
}

export default Sidebar;
