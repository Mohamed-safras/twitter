import React from "react";
import "./SideRow.css";
const SideRow = ({ Icon, title }) => {
  return (
    <div className="sidebarRow">
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default SideRow;
