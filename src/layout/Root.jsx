import React, { use } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const { loading } = use(AuthContext);
  console.log(loading);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default Root;
