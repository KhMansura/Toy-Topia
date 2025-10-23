import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  useEffect(() => { document.title = "ToyTopia — 404"; }, []);
  return (
    <div className="min-h-screen grid place-items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold">404</h1>
        <p className="text-xl mt-2">Page not found.</p>
        <Link to="/" className="btn btn-primary mt-4">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
