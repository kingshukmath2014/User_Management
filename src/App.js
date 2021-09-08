import React from "react";
import "./css/App.scss";
import {
  Link,
  Redirect,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Topbar from "./component/Topbar";
import AddUser from "./component/AddUser";
import UserList from "./component/UserList";
import Weather from "./component/Weather";

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="topbar">
          <Topbar />
          <Route exact path="/" component={AddUser} />
          <Route exact path="/user-list" component={UserList} />
          <Route exact path="/weather" component={Weather} />
        </div>
      </div>
    </Router>
  );
}

export default App;
