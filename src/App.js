import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import { Albumlist } from "./Components/Albumlist/Albumlist";
import { Navbar } from "./Components/Navbar/navbar";
import Addalbumlist from "./Components/addAlbumlist/addAlbumlist";
import "./App.css"
function App() {
  const [albums, setAlbum] = useState([]);

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Albumlist album={albums} />
        </>
      ),
    },
    {
      path: "add", // This will be a child route of "/"
      element: (
        <>
          <Navbar />
          <Addalbumlist />,
        </>
      ),
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
