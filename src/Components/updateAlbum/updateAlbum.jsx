import React from "react";
import "./updateAlbum.css";
const UpdateAlbum = () => {
  return (
    <div className="page">
      <div className="outer-box">
        <h2>Update User’s Data</h2>
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
            <button>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAlbum;
