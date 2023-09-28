import "./App.css";
import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Albumlist } from "./Components/Albumlist/Albumlist";
function App() {
  const [album, setAlbum] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums").then((response) => {
      response.json().then((json) => {
        console.log(json);
        setAlbum(json);
      });
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Albumlist />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Albumlist album={album} />
      </RouterProvider>
    </div>
  );
}

export default App;
