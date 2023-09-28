import React from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
export const Navbar = (props) => {
  return (
    <div className="contianer">
      <div className="textcontent-logo">
        <Link to="/">
          <p>Albumlist</p>
        </Link>
      </div>
      <div className="button-add">
        <Link to="/add">
          <button>Add User</button>
        </Link>
      </div>
    </div>
  );
};
