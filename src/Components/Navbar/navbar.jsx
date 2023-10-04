import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="contianer">
      <div className="textcontent-logo">
        {/* using Link comes from react router dom and link to the relevant page */}
        <Link to="/">
          <p>Albumlist</p>
        </Link>
      </div>
      <div className="button-add">
        {/* using Link comes from react router dom and link to the relevant page */}
        <Link to="/add">
          <button>Add User</button>
        </Link>
      </div>
    </div>
  );
};
