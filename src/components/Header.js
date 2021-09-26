import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import SmsIcon from "@material-ui/icons/Sms";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsSharpIcon from "@material-ui/icons/AppsSharp";
const Header = () => {
  return (
    <div className="header">
    
    <div className="header__left">
        <img src="https://evergreenengineering.com/wp-content/uploads/2019/06/LinkedIn_logo_initials.png" />
        <form>
          <SearchIcon />
          <input className="input" type="text" />
        </form>
      </div>
      <div className="header__middle">
        <div className="header__middle__icons">
          <HomeIcon />
          <p>Home</p>
        </div>
        <div className="header__middle__icons">
          <SupervisorAccountIcon />
          <p>MyNetwork</p>
        </div>
        <div className="header__middle__icons">
          <WorkIcon />
          <p>Jobs</p>
        </div>
        <div className="header__middle__icons">
          <SmsIcon />
          <p>Messaging</p>
        </div>
        <div className="header__middle__icons">
          <NotificationsIcon />
          <p>Notification</p>
        </div>
        <div className="header__middle__icons">
          <Avatar
            className="avatar"
            src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-circle-512.png"
            className="avatar"
          />
        </div>
        <div className="header__middle__icons">
          <p>Me</p>
          <ArrowDropDownIcon />
        </div>
      </div>

      
      <div className="header__right">
        <div className="header__right__icons">
          <AppsSharpIcon />
          <div className="icon">
            <p>Work</p>
            <ArrowDropDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
