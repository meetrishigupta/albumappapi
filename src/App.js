import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import { Albumlist } from "./Components/Albumlist/Albumlist";
import { Navbar } from "./Components/Navbar/navbar";
import Addalbumlist from "./Components/addAlbumlist/addAlbumlist";
import "./App.css";
import UpdateAlbum from "./Components/updateAlbum/updateAlbum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [albums, setAlbum] = useState([]);
  const [updateAlbum, setUpdateAlbum] = useState({});

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((json) => {
          console.log(json);
          setAlbum(json);
        });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const deleteUpdateAlbum = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
      method: "DELETE",
    });
    const newAlbum = albums.filter((album) => album.id !== id);
    toast.success("Your selected album is deleted from the Album list ");
    setAlbum(newAlbum);
  };
  const addAlbumlistdata = (userId, title) => {
    fetch("https://jsonplaceholder.typicode.com/albums", {
      method: "POST",
      body: JSON.stringify({
        userId: userId,
        id: albums.length > 0 ? albums[albums.length - 1].id + 1 : 1,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

    const newAlbum = {
      userId: userId,
      id: albums.length > 0 ? albums[albums.length - 1].id + 1 : 1,
      title: title,
    };

    setAlbum([...albums, newAlbum]);
    toast.success("New Album added successfully in the bottom!!");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Albumlist album={albums} deleteAlbumFromList={deleteUpdateAlbum} />
        </>
      ),
    },
    {
      path: "add", // This will be a child route of "/"
      element: (
        <>
          <Navbar />
          <Addalbumlist addAlbumlistdata={addAlbumlistdata} />,
        </>
      ),
    },
    {
      path: "update", // This will be a child route of "/"
      element: (
        <>
          <Navbar />
          <UpdateAlbum />,
        </>
      ),
    },
  ]);

  return (
    <>
      <div className="App">
        <ToastContainer />
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
