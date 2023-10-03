import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Albumlist } from "./Components/Albumlist/Albumlist";
import { Navbar } from "./Components/Navbar/navbar";
import Addalbumlist from "./Components/addAlbumlist/addAlbumlist";
import "./App.css";
import UpdateAlbum from "./Components/updateAlbum/updateAlbum";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [albums, setAlbum] = useState([]);
  const [updatesAlbum, setUpdateAlbum] = useState({});

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
        id: userId,
        title: title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response) => response.json());

    const newAlbum = {
      id: userId,
      title: title,
    };

    setAlbum([...albums, newAlbum]);
    toast.success("New Album added successfully in the bottom!!");
  };
  const handleSetUpdateAlbum = (album) => {
    setUpdateAlbum(album);
  };

  const updateAlbuminList = async (id, updatetitle, updateid, oldAlbum) => {
    let updatedAlbum = [];
    if (id < 100) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/${id}`,
          {
            method: "PUT",
            body: JSON.stringify({
              userId: updateid,
              id: id,
              title: updatetitle,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        updatedAlbum = await response.json();
      } catch (error) {
        console.error("Error updating album:", error);
        toast.error("Issue with updating the list");
      }
    } else {
      updatedAlbum = {
        userId: updateid,
        id: id,
        title: updatetitle,
      };
    }
    const updatedAlbums = [...albums];
    const index = updatedAlbums.findIndex((album) => album.id === oldAlbum.id);
    updatedAlbums[index] = updatedAlbum;
    setAlbum(updatedAlbums);
    toast.success("Album is succussfully updated");
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Albumlist
            album={albums}
            setUpdateAlbum={handleSetUpdateAlbum}
            deleteAlbumFromList={deleteUpdateAlbum}
          />
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
          <UpdateAlbum
            album={updatesAlbum}
            updateAlbuminList={updateAlbuminList}
          />
          ,
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
