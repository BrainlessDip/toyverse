import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Container from "./Container";
import { Link, NavLink } from "react-router";
import Login from "./../pages/Login";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const { user, handleSignout } = useContext(AuthContext);
  console.log(user?.photoURL);

  return (
    <>
      <Container>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLink to={"/"} className="text-[20px]">
                    Home
                  </NavLink>
                </li>
                {user && (
                  <li>
                    <NavLink to={"/profile"} className="text-[20px]">
                      My Profile
                    </NavLink>
                  </li>
                )}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Toy Verse</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <NavLink to={"/"} className="text-[20px]">
                  Home
                </NavLink>
              </li>

              {user && (
                <li>
                  <NavLink to={"/profile"} className="text-[20px]">
                    My Profile
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex justify-between items-center gap-2">
                <div
                  data-tip={user.displayName}
                  className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom tooltip-success"
                >
                  {user.photoURL ? (
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  ) : (
                    <RxAvatar className="text-3xl" />
                  )}
                </div>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    handleSignout();
                  }}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to={"/login"} className="btn btn-success rounded-full">
                Login
              </Link>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
