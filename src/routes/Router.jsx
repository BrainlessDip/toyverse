import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import axios from "axios";
import ToyDetails from "../pages/ToyDetails";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    HydrateFallback: Loading,
    children: [
      {
        Component: Home,
        path: "/",
        loader: async () => {
          return axios(`/data.json`);
        },
      },
      {
        Component: ToyDetails,
        path: "/:toyId",
        loader: async () => {
          return axios(`/data.json`);
        },
      },
      {
        path: "/profile",
        Component: Home,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
    ],
  },
]);
