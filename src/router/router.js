import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  export {router}