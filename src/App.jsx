import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
