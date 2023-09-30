import React from "react";
import "./updateAlbum.css";
import { useRef } from "react";
const UpdateAlbum = (props) => {
  const inputuserid = useRef();
  const inputusername = useRef();

  const UpdateListAlbum = () => {
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
  //updateAlbuminList
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
            placeholder={props.album.userId}
            ref={inputuserid}
            required
            type="number"
          />
          <br />
          <div className="button-container">
            <p className="back">Back to Homepage</p>
            <button onClick={UpdateListAlbum}>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateAlbum;
