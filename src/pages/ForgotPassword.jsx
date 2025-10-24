import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

const ForgotPassword = () => {
  useEffect(() => {
    document.title = "ToyTopia — Reset Password";
  }, []);
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If navigated from login with prefilled email
    if (location.state?.email) setEmail(location.state.email);
  }, [location.state]);

  const handleReset = (e) => {
    e.preventDefault();
    resetPassword(email)
      .then(() => {
        Swal.fire(
          "Check your inbox",
          "A password reset email was sent (you'll be redirected to Gmail if available).",
          "success"
        ).then(() => {
          // Redirect to Gmail
          window.open("https://mail.google.com", "_blank");
        });
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card p-8 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-black">Reset Password</h2>
        <form onSubmit={handleReset} className="space-y-4">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            required
          />
          <div className="flex justify-between items-center">
            <button className="btn btn-primary">Send Reset Email</button>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-ghost"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
