import React, { useState } from "react";
import CardList from "./CardList";
import ListView from "./ListView";
import search from "../images/search.png";

const UserList = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );
  const [data1, setData1] = useState(
    JSON.parse(localStorage.getItem("userdata"))
  );

  const searchName = (e) => {
    var output = data.filter((data) => {
      return data.data.username
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setData1(output);
  };

  return (
    <div>
      <div className="comp-heading">Users</div>
      <div className="content-wrap users-container">
        <div className="search-heading">Search</div>
        <div className="search-container">
          <img
            src={search}
            alt="search"
            style={{
              height: "18px",
              width: "18px",
              position: "absolute",
              right: "-14px",
              top: "10px",
            }}
          />
          <input
            type="text"
            placeholder="Search user by name . . . "
            onChange={(e) => {
              searchName(e);
            }}
          />
        </div>
        <div className="cardview-container">
          <div className="title">Card View</div>
          <div className="cardview-path">
            {data1 && data1.map((item, i) => <CardList key={i} data1={item} />)}
          </div>
        </div>
        <div className="listview-container">
          <div className="title">List View</div>
          <div className="listview-path">
            {data1 && data1.map((item, i) => <ListView key={i} data1={item} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
