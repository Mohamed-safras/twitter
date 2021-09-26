import React from "react";
import SideRow from "./SideBarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import "./SideBar1.css";
const SideBar1 = () => {
  return (
    <div className="sidebar1">
      <SideRow title="Home" Icon={HomeIcon} />
      <SideRow title="Trending" Icon={WhatshotIcon} />
      <SideRow title="Subscriptions" Icon={SubscriptionsIcon} />
      <SideRow title="Library" Icon={VideoLibraryIcon} />
    </div>
  );
};

export default SideBar1;
