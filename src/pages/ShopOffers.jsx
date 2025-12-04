// import React from 'react';

// const ShopOffers = () => {
//   const offers = [
//     { id: 1, name: "Educational Puzzle Set", discount: "30%", price: "$20", oldPrice: "$28" },
//     { id: 2, name: "Creative Building Blocks", discount: "25%", price: "$15", oldPrice: "$20" },
//     { id: 3, name: "Plush Teddy Bear", discount: "20%", price: "$12", oldPrice: "$15" },
//     { id: 4, name: "Remote Control Car", discount: "30%", price: "$35", oldPrice: "$50" },
//   ];

//   return (
//     <main className="container mx-auto px-6 py-12">
//       <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8 text-center">
//         🛍️ Current Offers
//       </h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {offers.map((item) => (
//           <div
//             key={item.id}
//             className="rounded-xl bg-white dark:bg-blue-300 shadow-md p-6
//                        transform transition duration-300 hover:scale-105 hover:shadow-lg"
//           >
//             <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-00">
//               {item.name}
//             </h2>
//             <p className="mt-2 text-gray-700 dark:text-gray-300">
//               Save <span className="font-bold text-pink-700">{item.discount}</span>
//             </p>
//             <p className="mt-1 text-gray-500 line-through">{item.oldPrice}</p>
//             <p className="text-lg font-bold text-green-600">{item.price}</p>
//             <button className="btn btn-primary mt-4 w-full">Add to Cart</button>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };

// export default ShopOffers;
import React from "react";
import Swal from "sweetalert2";

const ShopOffers = () => {
  const offers = [
    {
      id: 1,
      name: "Educational Puzzle Set",
      discount: "30%",
      price: 20,
      oldPrice: 28,
      pictureURL: "https://via.placeholder.com/100",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Creative Building Blocks",
      discount: "25%",
      price: 15,
      oldPrice: 20,
      pictureURL: "https://via.placeholder.com/100",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Plush Teddy Bear",
      discount: "20%",
      price: 12,
      oldPrice: 15,
      pictureURL: "https://via.placeholder.com/100",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Remote Control Car",
      discount: "30%",
      price: 35,
      oldPrice: 50,
      pictureURL: "https://via.placeholder.com/100",
      rating: 4.6,
    },
  ];

  // ✅ Add to cart handler
  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));

    Swal.fire({
      icon: "success",
      title: `${item.name} added to cart!`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-8 text-center">
        🛍️ Current Offers
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((item) => (
          <div
            key={item.id}
            className="rounded-xl bg-white dark:bg-blue-300 shadow-md p-6 
                       transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-00">
              {item.name}
            </h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Save{" "}
              <span className="font-bold text-pink-700">{item.discount}</span>
            </p>
            <p className="mt-1 text-gray-500 line-through">${item.oldPrice}</p>
            <p className="text-lg font-bold text-green-600">${item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary mt-4 w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ShopOffers;
