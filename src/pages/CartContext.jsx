// src/context/CartContext.jsx
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(
    JSON.parse(localStorage.getItem("cart"))?.length || 0
  );

  const addToCart = (toy) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(toy);
    localStorage.setItem("cart", JSON.stringify(cart));
    setCartCount(cart.length); // update count
    // ✅ Toast
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${toy.toyName} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
