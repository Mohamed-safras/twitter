import React from "react";
import "./SideBarRow.css";

const SideBarRow = ({ active,title, Icon }) => {
  return (
    <div className={`sidebarRow ${active && 'sidebarrow--active'}`}>
      <Icon />
      <h2>{title}</h2>
    </div>
  );
};

export default SideBarRow;
