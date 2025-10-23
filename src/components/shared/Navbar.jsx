// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import logo from "../../assets/logo.png";

// const Navbar = () => {
//   const { user, logout, loading } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <nav className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-200 shadow-md sticky top-0 z-40">
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
//             <span className=" ">
//               <img
//                 src={logo}
//                 alt=""
//                 className="w-full h-full object-contain rounded-full"
//               />
//             </span>
//           </div>
//           <span className="text-2xl font-extrabold text-white">ToyTopia</span>
//         </Link>
//         {/* navlinks */}
//         <div className="hidden md:flex items-center gap-3">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "btn btn-ghost btn-sm text-white"
//                 : "btn btn-ghost btn-sm text-white/90"
//             }
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               isActive
//                 ? "btn btn-ghost btn-sm text-white"
//                 : "btn btn-ghost btn-sm text-white/90"
//             }
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="/my-profile"
//             className={({ isActive }) =>
//               isActive
//                 ? "btn btn-ghost btn-sm text-white"
//                 : "btn btn-ghost btn-sm text-white/90"
//             }
//           >
//             My Profile
//           </NavLink>
//         </div>
//         {/* auth */}
//         <div className="flex items-center gap-3">
//           {loading ? (
//             <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
            
//           ) : user ? (
//             <>
//               <div
//                 title={user.displayName || user.email}
//                 className="tooltip tooltip-bottom"
//                 data-tip={user.displayName || user.email}
//               >
//                 <img
//                   src={
//                     user.photoURL ||
//                     "https://i.ibb.co/6ykWQvS/avatar-placeholder.png"
//                   }
//                   alt="user"
//                   className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
//                 />
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-sm btn-outline bg-white/20 text-white"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="/auth/login" className="btn btn-sm btn-accent">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-200 shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
            <span className=" ">
              <img
                src={logo}
                alt=""
                className="w-full h-full object-contain rounded-full"
              />
            </span>
          </div>
          <span className="text-2xl font-extrabold text-white">ToyTopia</span>
        </Link>

        {/* navlinks */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/my-profile"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            My Profile
          </NavLink>
        </div>

        {/* auth */}
        <div className="flex items-center gap-3">
          {/* ✅ Loader when checking auth state */}
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
              <span className="text-sm text-white/80">Loading...</span>
            </div>
          ) : user ? (
            <>
              {/* ✅ Show user photo & name after login */}
              <div
                title={user.displayName || user.email}
                className="tooltip tooltip-bottom flex items-center gap-2"
                data-tip={user.displayName || user.email}
              >
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/6ykWQvS/avatar-placeholder.png"
                  }
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                />
                <span className="hidden md:inline text-white font-semibold">
                  {user.displayName?.split(" ")[0] || "User"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline bg-white/20 text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/auth/login" className="btn btn-sm btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

