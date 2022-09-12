import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav" id="myTopnav">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/fights">Fights</Link>
      <Link to="/createfighter">Create Fight</Link>
    </div>
  );
}

export default NavBar;
