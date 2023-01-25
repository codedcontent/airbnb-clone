import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import Room from "./components/room/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/rooms/:roomId",
    element: <Room />,
  },
]);

const App = () => {
  return (
    <div className="min-h-screen w-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
