// import { useContext, useEffect, useState } from "react";

// import { CartContext } from "../pages/CartContext";
// import { FaTrash } from "react-icons/fa";

// const CartPage = () => {
//   const { cartCount, setCartCount } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, [cartCount]); // যখনই count বদলাবে তখন reload হবে

//   const handleRemove = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart);
//     setCartCount(updatedCart.length);
//   };

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   if (cartItems.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-10 text-center">
//         <h2 className="text-2xl font-bold text-purple-600">Your Cart is Empty 🛒</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-purple-700">🛒 Your Cart</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {cartItems.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
//           >
//             <div className="flex items-center gap-4">
//               <img
//                 src={item.pictureURL}
//                 alt={item.toyName}
//                 className="w-20 h-20 object-contain rounded"
//               />
//               <div>
//                 <h3 className="font-semibold text-lg text-purple-600">{item.toyName}</h3>
//                 <p className="text-gray-500">⭐ {item.rating}</p>
//                 <p className="text-pink-600 font-bold">${item.price}</p>
//               </div>
//             </div>
//             <button
//               onClick={() => handleRemove(index)}
//               className="btn btn-sm btn-error flex items-center gap-2"
//             >
//               <FaTrash /> Remove
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Total Price */}
//       <div className="mt-8 text-right">
//         <h3 className="text-xl font-bold text-purple-700">
//           Total: ${totalPrice.toFixed(2)}
//         </h3>
//         <button className="btn btn-primary mt-4">Proceed to Checkout</button>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/CartContext";
// import { FaTrash } from "react-icons/fa";

// const CartPage = () => {
//   const { setCartCount } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);

//   // ✅ Load cart once on mount
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);
//   }, []);

//   // ✅ Remove item and update UI immediately
//   const handleRemove = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart); // ✅ UI updates immediately
//     setCartCount(updatedCart.length); // ✅ Navbar updates immediately
//   };

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-purple-700">🛒 Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.pictureURL}
//                     alt={item.toyName}
//                     className="w-20 h-20 object-contain rounded"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg text-purple-600">
//                       {item.toyName}
//                     </h3>
//                     <p className="text-gray-500">⭐ {item.rating}</p>
//                     <p className="text-pink-600 font-bold">${item.price}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(index)}
//                   className="btn btn-sm btn-error flex items-center gap-2"
//                 >
//                   <FaTrash /> Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Total Price */}
//           <div className="mt-8 text-right">
//             <h3 className="text-xl font-bold text-purple-700">
//               Total: ${totalPrice.toFixed(2)}
//             </h3>
//             <button className="btn btn-primary mt-4">
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../pages/CartContext";
// import { FaTrash } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// const CartPage = () => {
//   const { setCartCount } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ track login state
//   const navigate = useNavigate();

//   // ✅ Load cart once on mount
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCartItems(cart);

//     // Example: check login status from localStorage or context
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user && user.token) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   // ✅ Remove item and update UI immediately
//   const handleRemove = (index) => {
//     const updatedCart = [...cartItems];
//     updatedCart.splice(index, 1);
//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//     setCartItems(updatedCart); // ✅ UI updates immediately
//     setCartCount(updatedCart.length); // ✅ Navbar updates immediately
//   };

//   const handleCheckout = () => {
//     if (!isLoggedIn) {
//       toast.error("⚠️ Please login first to proceed!");
//       navigate("/login"); // redirect to login page
//     } else {
//       toast.success("✅ Checkout processed successfully!");
//       // here you can also call API for checkout
//     }
//   };

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-3xl font-bold mb-6 text-purple-700">🛒 Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p className="text-center text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {cartItems.map((item, index) => (
//               <div
//                 key={index}
//                 className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.pictureURL}
//                     alt={item.toyName}
//                     className="w-20 h-20 object-contain rounded"
//                   />
//                   <div>
//                     <h3 className="font-semibold text-lg text-purple-600">
//                       {item.toyName}
//                     </h3>
//                     <p className="text-gray-500">⭐ {item.rating}</p>
//                     <p className="text-pink-600 font-bold">${item.price}</p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleRemove(index)}
//                   className="btn btn-sm btn-error flex items-center gap-2"
//                 >
//                   <FaTrash /> Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Total Price */}
//           <div className="mt-8 text-right">
//             <h3 className="text-xl font-bold text-purple-700">
//               Total: ${totalPrice.toFixed(2)}
//             </h3>
//             <button
//               onClick={handleCheckout}
//               className="btn btn-primary mt-4"
//             >
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../pages/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // ✅ SweetAlert2 import

const CartPage = () => {
  const { setCartCount } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // ✅ track login state
  const navigate = useNavigate();

  // ✅ Load cart once on mount
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

    // Example: check login status from localStorage or context
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (user && user.token) {
    //   setIsLoggedIn(true);
    // }
      const loggedIn = localStorage.getItem("isLoggedIn"); // যদি শুধু flag save করো
  if (loggedIn === "true") {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }

  }, []);

  // ✅ Remove item and update UI immediately
  const handleRemove = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart); // ✅ UI updates immediately
    setCartCount(updatedCart.length); // ✅ Navbar updates immediately
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: "error",
        title: "Please login first to proceed!",
        showConfirmButton: true,
      }).then(() => {
        navigate("/login"); // redirect to login page
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Checkout processed successfully!",
        showConfirmButton: false,
        timer: 2000,
      });
      // here you can also call API for checkout
    }
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-purple-700">🛒 Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.pictureURL}
                    alt={item.toyName}
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-purple-600">
                      {item.toyName}
                    </h3>
                    <p className="text-gray-500">⭐ {item.rating}</p>
                    <p className="text-pink-600 font-bold">${item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="btn btn-sm btn-error flex items-center gap-2"
                >
                  <FaTrash /> Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-8 text-right">
            <h3 className="text-xl font-bold text-purple-700">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={handleCheckout}
              className="btn btn-primary mt-4"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
