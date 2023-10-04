import React from "react";
import { useRef } from "react";
import "./addAlbumlist.css";
import { Link } from "react-router-dom";
const Addalbumlist = (props) => {
  //using useRef() for getting the current value of input field
  const inputid = useRef();
  const inputname = useRef();
  //function that store the value into the variable and pass the data into the props function
  function getDatafrominputfields(e) {
    e.preventDefault();
    const userID = inputid.current.value;
    const userName = inputname.current.value;
    props.addAlbumlistdata(Number(userID), userName);
  }
  return (
    <body>
      <div className="page">
        <div className="outer-box">
          <h2>Add User to Homepage</h2>
          <form>
            <label>
              <p>User's Name</p>
            </label>
            <br />
            <input ref={inputname} required type="text" />
            <br />
            <label>
              <p>User's ID</p>
            </label>
            <br />
            <input ref={inputid} required type="number" />
            <br />
            <div className="button-container">
              <Link className="back" to="/">
                <p className="back">Back to Homepage</p>
              </Link>
              <button onClick={getDatafrominputfields} className="add">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Addalbumlist;
