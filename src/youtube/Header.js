import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsOutlinedIcon from "@material-ui/icons/AppsOutlined";
import NotificationsIcon from "@material-ui/icons/Notifications";

import { Avatar } from "@material-ui/core";
const Header = ({ ismenuOpen, setIsmenuOpen }) => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="Icon" onClick={() => setIsmenuOpen(!ismenuOpen)}>
          {ismenuOpen ? <MenuIcon /> : <MenuIcon />}
        </div>
        <img
          src="data:image/png;base64,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"
          alt="youtube"
        />
      </div>
      <div className="header__middle">
        <form>
          <input placeholder="Search" type="text" />
          <div className="serach">
            <SearchIcon />
          </div>
        </form>
        <div className="Icon">
          <MicIcon />
        </div>
      </div>
      <div className="header__right">
        <div className="Icon">
          <VideoCallIcon />
        </div>
        <div className="Icon">
          <AppsOutlinedIcon />
        </div>
        <div className="Icon">
          <NotificationsIcon />
        </div>
        <div className="Icon">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Header;
