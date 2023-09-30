import React from "react";
import { useRef } from "react";
import "./addAlbumlist.css";
//addAlbumlistdata
const Addalbumlist = (props) => {
  const inputid = useRef();
  const inputname = useRef();
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
              <p className="back">Back to Homepage</p>
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
