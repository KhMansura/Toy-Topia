// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;