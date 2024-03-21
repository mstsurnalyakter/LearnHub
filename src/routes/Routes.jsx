import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import MainLayout from "../layouts/MainLayout";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/bookmarks",
        element: <Bookmarks />,
      }
    ],
  },
]);