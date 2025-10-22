import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider";
import "./index.css";
import { Bounce, ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
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
        transition={Bounce}
      />
      <ToastContainer />
    </AuthProvider>
  </StrictMode>
);
