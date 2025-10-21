import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./routes/Router";
import { RouterProvider } from "react-router";
import AuthProvider from "./provider/AuthProvider";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
