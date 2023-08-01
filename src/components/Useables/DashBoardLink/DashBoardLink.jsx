import React from "react";
import { NavLink } from "react-router-dom";

function DashBoardLink({ url, icon, text }) {
  return (
    <li  className="dashboard-list">
      <NavLink
        to={url}
        style={(navData) =>
          navData.isActive
            ? { color: "rgb(16, 185, 129)", textDecoration: "none" }
            : { color: "#000000", textDecoration: "none" }
        }
      >
        {icon}
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

export default DashBoardLink;
