import React, { useState, useEffect } from "react";
import user_icon from "../images/user-icon.png";
import hamburg from "../images/hamburg.png";
import moment from "moment";

const ListView = (props) => {
  const [age, setAge] = useState();
  useEffect(() => {
    var dt = moment(props.data1.data.dob).format("DD MMM YYYY");
    var years = moment().diff(dt, "years");
    setAge(years);
  });
  return (
    <div className="listview-container1">
      <div className="userProf-info">
        <img
          src={user_icon}
          alt="User"
          style={{ height: "25px", width: "25px", marginRight: "15px" }}
        />
        <div>
          {props.data1.data.username} - {age} year - {props.data1.data.state}
        </div>
      </div>
      <div>
        <img
          src={hamburg}
          alt="hamburg"
          style={{ height: "15px", width: "21px" }}
        />
      </div>
    </div>
  );
};

export default ListView;
