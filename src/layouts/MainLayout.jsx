import React from "react";
import { Outlet,useLocation } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white to-pink-50">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
