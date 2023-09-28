import React from "react";
import "./album.css";
import { Navbar } from "../Navbar/navbar";
import List from "../List/list";
export const Albumlist = (props) => {
  return (
    <>
      <div className="album-list">
        {props.album.map((album) => (
          <List key={album.id} album={album} />
        ))}
      </div>
    </>
  );
};
