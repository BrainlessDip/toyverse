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
import About from "../pages/About";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";

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
        path: "/:toyId",
        element: (
          <PrivateRoute>
            <ToyDetails />
          </PrivateRoute>
        ),
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
        path: "/about",
        element: (
          <PrivateRoute>
            <About />
          </PrivateRoute>
        ),
      },
      {
        path: "/*",
        Component: NotFound,
      },
    ],
  },
]);
