import React from "react";
import "./SideBar.css";
import SideBarRow from "./SideBarRow";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import NotificationNoneIcon from "@material-ui/icons/NotificationsNone";
import Search from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarksIcon from "@material-ui/icons/BookmarkSharp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
const SideBar = () => {
  return (
    <div className="sideBar">
      <TwitterIcon  className="twitterIcon" />
      <SideBarRow active Icon={HomeIcon} title="Home" />
      <SideBarRow Icon={Search} title="Explore" />
      <SideBarRow Icon={NotificationNoneIcon} title="Notifications" />
      <SideBarRow Icon={MailOutlineIcon} title="Messages" />
      <SideBarRow Icon={BookmarksIcon} title="Bookmarks" />
      <SideBarRow Icon={ListAltIcon} title="List" />
      <SideBarRow Icon={PermIdentityIcon} title="Profile" />
      <SideBarRow Icon={MoreHorizIcon} title="More" />

      <Button className="tweetButton" variant="outlined" fullWidth>
        Tweet
      </Button>
    </div>
  );
};

export default SideBar;
