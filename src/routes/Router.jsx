import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Root from "../layout/Root";
import Register from "../pages/Register";
import Login from "../pages/Login";
import axios from "axios";
import ToyDetails from "../pages/ToyDetails";
import Loading from "../components/Loading";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import Feedback from "../pages/Feedback";
import AllItems from "../pages/AllItems";

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
        path: "/toy/:toyId",
        Component: ToyDetails,
        loader: async () => {
          return axios(`/data.json`);
        },
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/forget-password",
        Component: ForgetPassword,
      },
      {
        path: "/all-items",
        Component: AllItems,
        loader: async () => {
          return axios(`/data.json`);
        },
      },
      {
        path: "/feedback",
        element: (
          <PrivateRoute>
            <Feedback />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
