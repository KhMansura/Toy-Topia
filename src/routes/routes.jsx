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
import Terms from "../pages/Terms";
import Privacy from "../pages/Privacy";
import Contact from "../pages/Contact";
import AllToys from "../pages/AllToys";
import PrivatesRoutes from "../routes/PrivatesRoutes";
import AboutUs from "../pages/AboutUs";
import Support from "../pages/Support";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";
import ShopOffers from "../pages/ShopOffers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "terms", element: <Terms /> },
      { path: "privacy", element: <Privacy /> },
      { path: "contact", element: <Contact /> },
      { path: "about-us", element: <AboutUs/> },
      { path: "support", element: <Support /> },
      { path: "/cart", element: <CartPage /> },
      {path:'/offers', element:<ShopOffers/>},


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
      {
        path: "all-toys",
        element: (
          
            <AllToys />
          
        ),
      },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

export default router;


