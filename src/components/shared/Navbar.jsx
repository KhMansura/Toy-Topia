// src/components/Shared/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Navbar() {
  const { user, loading } = useAuth();
  const location = useLocation();

  const handleLogout = () => signOut(auth);

  const isActive = (path) => location.pathname === path 
    ? "font-bold text-pink-600 border-b-2 border-pink-400" 
    : "text-gray-700 hover:text-pink-500";

  return (
    <nav className="bg-white shadow-sm py-3 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          <span className="text-pink-500">🧸</span>
          <span className="text-gray-800">ToyTopia</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className={isActive("/")}>Home</Link>
          
          {loading ? (
            <div className="skeleton w-10 h-10 rounded-full"></div>
          ) : user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="cursor-pointer">
                <div className="avatar">
                  <div className="w-10 rounded-full ring ring-pink-200">
                    <img 
                      src={user.photoURL || "https://placehold.co/100?text=U&font=roboto"} 
                      alt="user" 
                      className="bg-pink-100"
                    />
                  </div>
                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2 border border-pink-100">
                <li><span className="text-sm font-semibold px-2 text-gray-700">{user.displayName || "User"}</span></li>
                <li><Link to="/my-profile" className="px-2 py-1 hover:bg-pink-50 rounded">My Profile</Link></li>
                <li><button onClick={handleLogout} className="w-full text-left px-2 py-1 hover:bg-red-50 rounded text-red-600">Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/login" className="btn btn-sm btn-pink">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';


// export default function Navbar() {
// const { user, logout } = useContext(AuthContext);


// return (
// <div className="navbar bg-base-200 sticky top-0 z-50">
// <div className="navbar-start container-max">
// <Link to="/" className="btn btn-ghost normal-case text-xl">ToyTopia</Link>
// </div>
// <div className="navbar-center hidden lg:flex">
// <NavLink to="/" className={({isActive})=>isActive? 'btn btn-ghost active':'btn btn-ghost'}>Home</NavLink>
// <NavLink to="/profile" className={({isActive})=>isActive? 'btn btn-ghost active':'btn btn-ghost'}>My Profile</NavLink>
// </div>
// <div className="navbar-end container-max">
// {user ? (
// <div className="flex items-center gap-3">
// <img src={user.photoURL || 'https://i.ibb.co/placeholder.png'} alt="user" title={user.displayName} className="w-10 h-10 rounded-full" />
// <button className="btn btn-outline" onClick={logout}>Logout</button>
// </div>
// ) : (
// <Link to="/login" className="btn">Login</Link>
// )}
// </div>
// </div>
// );
// }