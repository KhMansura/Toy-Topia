// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.jsx";
// import { RouterProvider } from "react-router";
// import router from "./routes/routes.jsx";

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <RouterProvider router={router}></RouterProvider>
//   </StrictMode>
// );
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);