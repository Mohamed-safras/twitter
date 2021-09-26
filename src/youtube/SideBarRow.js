import React from "react";
import "./SideBarRow1.css";

const SideBarRow = ({ Icon, title }) => {
  return (
    <div className="Sidebar1">
      <Icon />
      <h5 style={{ fontSize: "10px", fontWeight: "400" }}>{title}</h5>
    </div>
  );
};

export default SideBarRow;
