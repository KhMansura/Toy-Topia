// import React, { useEffect, useState } from "react";
// import useAuth from "../hooks/useAuth";
// import { useNavigate, Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

// const passwordValid = (pw) => pw.length >= 6 && /[A-Z]/.test(pw) && /[a-z]/.test(pw);

// const Register = () => {
//   useEffect(() => { document.title = "ToyTopia — Register"; }, []);
//   const { register, googleLogin } = useAuth();
//   const [name, setName] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [show, setShow] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!passwordValid(password)) {
//       return Swal.fire("Weak password", "Password must be at least 6 chars and include uppercase & lowercase", "error");
//     }
//     try {
//       await register(name, email, password, photoURL);
//       Swal.fire("Registered", "Your account was created.", "success");
//       navigate("/");
//     } catch (err) {
//       Swal.fire("Error", err.message, "error");
//     }
//   };

//   const handleGoogle = () => {
//     googleLogin().then(() => {
//       Swal.fire("Logged in", "Google sign-in successful", "success");
//       navigate("/");
//     }).catch((err) => Swal.fire("Error", err.message, "error"));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
//       <div className="card p-8 w-full max-w-md shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-blue-400">Create an account</h2>
//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} required className="input input-bordered w-full" />
//           <input placeholder="Photo URL (optional)" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="input input-bordered w-full" />
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input input-bordered w-full" />
//           <div className="relative">
//             <input type={show ? "text" : "password"} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input input-bordered w-full" />
//             <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-2 top-2 btn btn-ghost btn-sm">{show ? <FaEyeSlash /> : <FaEye />}</button>
//           </div>

//           <div className="flex items-center justify-between">
//             <button className="btn btn-primary">Register</button>
//             <span className="text-xs text-gray-600">Min 6 chars, upper & lower</span>
//           </div>
//         </form>

//         <div className="divider text-black">OR</div>
//         <button onClick={handleGoogle} className="btn btn-outline w-full mb-2 text-gray-600">Sign up with Google</button>
//         <p className="text-sm text-center text-gray-400">Already have an account? <Link to="/auth/login" className="link text-blue-500">Login</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const passwordValid = (pw) =>
  pw.length >= 6 && /[A-Z]/.test(pw) && /[a-z]/.test(pw);

const Register = () => {
  useEffect(() => {
    document.title = "ToyTopia — Register";
  }, []);

  const { register, googleLogin } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordValid(password)) {
      return Swal.fire(
        "Weak password",
        "Password must be at least 6 chars and include uppercase & lowercase",
        "error"
      );
    }
    try {
      // ✅ Step 1: Register with email + password ONLY
      const userCredential = await register(email, password);

      // ✅ Step 2: Update profile with name & photo
      await userCredential.user.updateProfile({
        displayName: name,
        photoURL: photoURL || null,
      });

      Swal.fire("Registered", "Your account was created.", "success");
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogle = () => {
    googleLogin()
      .then(() => {
        Swal.fire("Logged in", "Google sign-in successful", "success");
        navigate("/");
      })
      .catch((err) => {
        console.error("Google login error:", err);
        Swal.fire("Error", err.message, "error");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-pink-50">
      <div className="card p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-blue-400">
          Create an account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <input
            placeholder="Photo URL (optional)"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="input input-bordered w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input input-bordered w-full"
          />
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input input-bordered w-full"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-2 top-2 btn btn-ghost btn-sm"
            >
              {show ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
            <span className="text-xs text-gray-600">
              Min 6 chars, upper & lower
            </span>
          </div>
        </form>

        <div className="divider text-black">OR</div>
        <button
          onClick={handleGoogle}
          className="btn btn-outline w-full mb-2 text-gray-600"
        >
          Sign up with Google
        </button>
        <p className="text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/auth/login" className="link text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
