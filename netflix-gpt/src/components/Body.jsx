import React from "react";
import Browse from "./Browse";
import Login from "./Login";
import Error from "./Error";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
const Body = () => {

  //
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    { path: "/browse", element: <Browse /> },
    { path: "/error", element: <Error /> },
  ]);


  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
