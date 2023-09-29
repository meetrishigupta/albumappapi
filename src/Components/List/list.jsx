import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./list.css";
const List = (props) => {
  function handleDelete() {
    props.deleteAlbumFromList(props.album.id);
  }
  return (
    <div className="card">
      <div className="card-text">
        <p>
          User Name: <span>{props.album.title}</span>
        </p>
        <p>
          User ID: <span>{props.album.id}</span>{" "}
        </p>
      </div>
      <div className="func-buttons">
        <div className="editicons">
          <EditIcon />
        </div>
        <div className="deleteicons">
          <DeleteIcon onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default List;
