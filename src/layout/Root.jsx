import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";

const Root = () => {
  const { loading } = use(AuthContext);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <div className="sticky top-0 z-50">
            <Navbar></Navbar>
          </div>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </>
  );
};

export default Root;
