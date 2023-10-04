import React from "react";
import "./updateAlbum.css";
import { useRef } from "react";
import { Link } from "react-router-dom";
const UpdateAlbum = (props) => {
  //using useRef() for getting the current value of input field
  const inputuserid = useRef();
  const inputusername = useRef();
  //creating function for getting value into the variable and store into the variable as per condition & passing arguments to the props function
  const getupdatedata = (e) => {
    e.preventDefault();
    const id = props.album.id;
    let updatetitle = inputusername.current.value;
    let updateid = inputuserid.current.value;

    if (updatetitle === "") {
      updatetitle = props.album.title;
    }
    if (updateid === "") {
      updateid = props.album.userId;
    }
    props.updateAlbuminList(id, updatetitle, Number(updateid), props.album);
  };
  return (
    <div className="page">
      <div className="outer-box">
        <h2>Update User’s Data</h2>
        <form>
          <label>
            <p>User's Name</p>
          </label>
          <br />
          <input
            // getting value of clicked card
            placeholder={props.album.title}
            ref={inputusername}
            required
            type="text"
          />
          <br />
          <label>
            <p>User's ID</p>
          </label>
          <br />
          <input
            // getting value of clicked card
            placeholder={props.album.userId}
            ref={inputuserid}
            required
            type="number"
          />
          <br />
          <div className="button-container">
            <Link className="back" to="/">
              <p className="back">Back to Homepage</p>
            </Link>
            <button onClick={getupdatedata}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAlbum;
