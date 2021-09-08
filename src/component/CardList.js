import React, { useState, useEffect } from "react";
import user_icon from "../images/user-icon.png";
import moment from "moment";

const CardList = (props) => {
  const [age, setAge] = useState();

  useEffect(() => {
    var dt = moment(props.data1.data.dob).format("DD MMM YYYY");
    var years = moment().diff(dt, "years");
    setAge(years);
  });

  return (
    <div className="cardlist-container">
      <div className="img-container">
        <img
          src={user_icon}
          alt="User"
          style={{ height: "50px", width: "50px" }}
        />
      </div>
      <div className="text-prop">
        <div>{props.data1.data.username}</div>
        <div>{age} years</div>
        <div>{props.data1.data.state}</div>
      </div>
    </div>
  );
};

export default CardList;
