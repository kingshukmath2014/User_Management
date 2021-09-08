import React, { useState } from "react";
import "../css/Sidebar.scss";
import { useHistory } from "react-router-dom";
import logo from "../images/Logo.png";
import active_user from "../images/active-user.png";
import users from "../images/users.png";
import weather from "../images/weather.png";
import users_active from "../images/users-active.png";
import weather_active from "../images/weather-active.png";
import add_user from "../images/add-user.png";

const Topbar = () => {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const HandleActive = (i, link) => {
    setActive(i);
    history.push(link);
  };

  return (
    <div className="sidebar-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" style={{ height: "32px", width: "106px" }} />
      </div>
      <div className="menu-container">
        <ul className="menu">
          {[
            {
              icon: add_user,
              text: "Add User",
              active_icon: active_user,
              link: "/",
            },
            {
              icon: users,
              text: "Users",
              active_icon: users_active,
              link: "/user-list",
            },
            {
              icon: weather,
              text: "Weather",
              active_icon: weather_active,
              link: "/weather",
            },
          ].map((item, i) => (
            <li
              key={i}
              style={{ backgroundColor: i == active ? "#A2E0FF" : "#fff" }}
              onClick={() => HandleActive(i, item.link)}
            >
              <div>
                <img
                  src={i == active ? item.active_icon : item.icon}
                  alt=""
                  style={{
                    height: "20px",
                    width: "20px",
                    marginRight: "15px",
                  }}
                />
              </div>
              <div style={{ color: i == active ? "#fff" : "#A1E0FF" }}>
                {item.text}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
