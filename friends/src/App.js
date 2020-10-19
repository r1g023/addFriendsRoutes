import React from "react";
import "./App.css";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import { Link, Router, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <h1>MAIN APP COMPONENT</h1>
      <nav>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
        <li>
          {" "}
          <Link to="/friends-list">FRIEND LIST</Link>
        </li>
      </nav>

      <Switch>
        <Login path="/login" component={Login} />
        <PrivateRoute path="/friends-list" component={FriendsList} />
      </Switch>
    </div>
  );
}

export default App;
