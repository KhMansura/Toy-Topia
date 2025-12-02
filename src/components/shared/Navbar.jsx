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
//     <nav
//       className="bg-primary shadow-md px-4 md:px-8 lg:px-12
//  py-3 sticky top-0 z-40"
//     >
//       <div className="container mx-auto px-4 md:px-8 lg:px-12
//  py-3 flex items-center justify-between">
//         {/* Mobile dropdown menu */}
//         <div className="md:hidden dropdown">
//           <label tabIndex={0} className="btn btn-sm btn-ghost text-white">
//             ☰
//           </label>
//           <ul
//             tabIndex={0}
//             className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-3 z-50"
//           >
//             <li>
//               <NavLink to="/" className="text-black">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/dashboard" className="text-black">
//                 Dashboard
//               </NavLink>
//             </li>
//             <li>
//               <NavLink to="/my-profile" className="text-black">
//                 My Profile
//               </NavLink>
//             </li>
//           </ul>
//         </div>

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
//             to="dashboard"
//             className={({ isActive }) =>
//               isActive
//                 ? "btn btn-ghost btn-sm text-white"
//                 : "btn btn-ghost btn-sm text-white/90"
//             }
//           >
//             Dashboard
//           </NavLink>
//           <NavLink
//             to="my-profile"
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
//           {/* Loader when checking auth state */}
//           {loading ? (
//             <div className="flex items-center gap-2">
//               <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
//               <span className="text-sm text-white/80">Loading...</span>
//             </div>
//           ) : user ? (
//             <>
//               {/* Show user photo & name after login */}
//               <div
//                 title={user.displayName || user.email}
//                 className="tooltip tooltip-bottom flex items-center gap-2"
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
//                 <span className="hidden md:inline text-white font-semibold">
//                   {user.displayName?.split(" ")[0] || "User"}
//                 </span>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="btn btn-sm btn-outline bg-white/20 text-white"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <Link to="login" className="btn btn-sm btn-accent">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../assets/logo.png";
import AboutUs from "../../pages/AboutUs";

import Support from "../../pages/Support";
import { CartContext } from "../../pages/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const { cartCount } = useContext(CartContext);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <nav className="bg-primary shadow-md px-4 md:px-8 lg:px-12 py-3 sticky top-0 z-40">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between">
        {/* Mobile dropdown menu */}
        <div className="md:hidden dropdown">
          <label tabIndex={0} className="btn btn-sm btn-ghost text-white">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-3 z-50"
          >
            <li>
              <NavLink to="/" className="text-black">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-toys" className="text-black">
                All Items
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="text-black">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-black">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/support" className="text-black">
                Support
              </NavLink>
            </li>
            {/* Show Login/Register only if user is NOT logged in */}
            {!user && (
              <li>
                <NavLink to="/login" className="text-black">
                  Login/Register
                </NavLink>
              </li>
            )}

            {/* Private routes */}
            {user && (
              <>
                <li>
                  <NavLink to="/dashboard" className="text-black">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-profile" className="text-black">
                    My Profile
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow">
            <img
              src={logo}
              alt="ToyTopia Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <span className="text-2xl font-extrabold text-white">ToyTopia</span>
        </Link>

        {/* navlinks (desktop) */}
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
            to="/all-toys"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            All Items
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive
                ? "btn btn-ghost btn-sm text-white"
                : "btn btn-ghost btn-sm text-white/90"
            }
          >
            Support
          </NavLink>
          {/* Show Login/Register only if user is NOT logged in */}

          {!user && (
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "btn btn-ghost btn-sm text-white"
                  : "btn btn-ghost btn-sm text-white/90"
              }
            >
              Login/Register
            </NavLink>
          )}

          {/* Private routes */}
          {user && (
            <>
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
            </>
          )}
        </div>
        {/* <div className="relative">
          <FaShoppingCart className="text-2xl cursor-pointer" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-2">
              {cartCount}
            </span>
          )}
        </div> */}
        <div className="flex items-center gap-6">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-2">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* auth */}
        <div className="flex items-center gap-3">
          {loading ? (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gray-300 animate-pulse"></div>
              <span className="text-sm text-white/80">Loading...</span>
            </div>
          ) : user ? (
            <>
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
            <Link to="/login" className="btn btn-sm btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
