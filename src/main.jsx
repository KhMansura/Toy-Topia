import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import AuthProviders from "./Providers/AuthProviders";
import "./index.css";
import { CartProvider } from "./pages/CartContext";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <CartProvider>
      <RouterProvider router={router} />
      </CartProvider>
    </AuthProviders>
  </React.StrictMode>
);
