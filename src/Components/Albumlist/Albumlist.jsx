import React from "react";
import "./album.css";
import { ToastContainer } from "react-toastify";
import List from "../List/list";
export const Albumlist = (props) => {
  return (
    <>
      <div className="album-list">
        {props.album.map((album) => (
          <List
            key={album.id}
            album={album}
            deleteAlbumFromList={props.deleteAlbumFromList}
            setUpdateAlbum={props.setUpdateAlbum}
          />
        ))}
      </div>
    </>
  );
};
