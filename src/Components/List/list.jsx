import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./list.css";
import { Link } from "react-router-dom";
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
      </div>
      <div className="func-buttons">
        <Link to="/update">
          <div
            onClick={() => props.setUpdateAlbum(props.album)}
            className="editicons"
          >
            <EditIcon />
          </div>
        </Link>
        <div className="deleteicons">
          <DeleteIcon onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default List;
