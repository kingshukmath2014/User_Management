import React from "react";
import "../css/Topbar.scss";
import moment from "moment";
import user_icon from "../images/user-icon.png";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="current-date">{moment().format("ddd DD MMM h:mm A")}</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span className="user_name">Welcome John</span>
        <img
          src={user_icon}
          alt="user"
          style={{ height: "66px", width: "66px" }}
        />
      </div>
    </div>
  );
};

export default Topbar;
