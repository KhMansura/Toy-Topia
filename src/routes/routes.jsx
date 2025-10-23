// import { createBrowserRouter } from "react-router";

// const router = createBrowserRouter([
//     {
//         path:'/',
//         element:<h2>home layout</h2>,
//     },
//     {
//         path:"/auth",
//         element:<h2>authentication layout</h2>
//     }
// ]);
// export default router;
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ToyDetails from "../pages/ToyDetails";
import MyProfile from "../pages/MyProfile";
import ForgotPassword from "../pages/ForgotPassword";
import ExtraPage from "../pages/ExtraPage";
import NotFound from "../pages/NotFound";
import PrivatesRoutes from "./PrivatesRoutes";
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "toy/:id",
        element: (
          <PrivatesRoutes>
            <ToyDetails />
          </PrivatesRoutes>
        ),
      },
      {
        path: "my-profile",
        element: (
          <PrivatesRoutes>
            <MyProfile />
          </PrivatesRoutes>
        ),
      },
      {
        path: "dashboard",
        element: (
          <PrivatesRoutes>
            <ExtraPage />
          </PrivatesRoutes>
        ),
      },
      { path: "forgot-password", element: <ForgotPassword /> },
       { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "/auth",
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },

 

]);

export default router;
