import React from "react";
import "./addAlbumlist.css";
//addAlbumlistdata
const Addalbumlist = (props) => {
  function getDatafrominputfields() {}
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
            <input required type="text" />
            <br />
            <label>
              <p>User's ID</p>
            </label>
            <br />
            <input required type="number" />
            <br />
            <div className="button-container">
              <p className="back">Back to Homepage</p>
              <button className="add">Add</button>
            </div>
          </form>
        </div>
      </div>
    </body>
  );
};

export default Addalbumlist;
