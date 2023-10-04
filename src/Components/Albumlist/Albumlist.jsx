import React from "react";
import "./Albumlist.css";
import List from "../List/list";
export const Albumlist = (props) => {
  return (
    <>
      <div className="album-list">
        {/* mapping the array of album and passing the data as props to List component */}
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
