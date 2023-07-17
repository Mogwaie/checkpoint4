import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./main.scss";
import Home from "./pages/Home";
import BirdDescription from "./pages/BirdDescription";
import BirdModif from "./pages/BirdModif";
import CreateBird from "./pages/CreateBird";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/card-bird/:id",
        element: <BirdDescription />,
      },
      {
        path: "/card-bird-modif/:id",
        element: <BirdModif />,
      },
      {
        path: "/create-bird",
        element: <CreateBird />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
