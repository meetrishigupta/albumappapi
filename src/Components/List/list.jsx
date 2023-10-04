import React from "react";
import EditIcon from "@mui/icons-material/Edit"; //using Material UI Icons
import DeleteIcon from "@mui/icons-material/Delete"; //using Material UI Icons
import "./list.css";
import { Link } from "react-router-dom";

const List = (props) => {
  //create function for passing the data to prop function
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
            //add event handler onClick passing album prop array to setUpdateAlub state
            onClick={() => props.setUpdateAlbum(props.album)}
            className="editicons"
          >
            <EditIcon />
          </div>
        </Link>
        <div className="deleteicons">
          <DeleteIcon 
          //add event hanler onCLick passing the handleDelete using syntactic sugar 
          onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default List;
