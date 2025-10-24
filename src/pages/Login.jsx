import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";



const Login = () => {
  useEffect(() => { document.title = "ToyTopia — Login"; }, []);
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    // prefill email if passed from forgot-password flow
    if (location.state?.prefillEmail) setEmail(location.state.prefillEmail);
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => {
        Swal.fire("Welcome back!", "You are logged in.", "success");
        navigate(from, { replace: true });
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Logged in", "Google sign-in successful", "success");
        navigate(from, { replace: true });
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
      <div className="card p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-black" >Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
          type="email"
           placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            className="input input-bordered w-full" />
          <div className="relative">
            <input type={show ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input input-bordered w-full" />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-2 btn btn-ghost btn-sm">
              {show ? "Hide" : "Show"}
            </button>
          </div>
          <div className="flex items-center justify-between">
            <button className="btn btn-primary">Login</button>
            <p
  onClick={() => navigate("/forgot-password", { state: { email } })}
  className="text-sm text-blue-500 hover:underline cursor-pointer text-right"
>
  Forgot Password?
</p>

          </div>
        </form>

        <div className="divider">OR</div>
        <button onClick={handleGoogle} className="btn btn-outline w-full mb-2 text-gray-600">Continue with Google</button>
        <p className="text-sm text-center text-gray-400">Don't have an account? <Link to="/auth/register" className="link text-red-500">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
