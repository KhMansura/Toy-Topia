// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FaShoppingCart } from "react-icons/fa";

// const ToyDetails = () => {
//   const { id } = useParams();
//   const [toy, setToy] = useState(null);

//   useEffect(() => {
//     fetch("/toys.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((t) => t.toyId === parseInt(id));
//         setToy(found);
//       });
//   }, [id]);

//   const handleTryNow = (e) => {
//     e.preventDefault();
//     Swal.fire("Success!", "Your request has been submitted!", "success");
//   };

//   if (!toy) return <p className="text-center py-10">Loading toy...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <div className="flex flex-col md:flex-row gap-6">
//         <img
//           src={toy.pictureURL}
//           alt={toy.toyName}
//           className="w-full md:w-1/2 rounded-lg"
//         />
//         <div>
//           <h2 className="text-3xl font-bold mb-2 text-blue-400">
//             {toy.toyName}
//           </h2>
//           <p className="text-black">{toy.description}</p>
//           <p className="mt-3 text-lg font-semibold text-purple-600">
//             Price: ${toy.price}
//           </p>
//           <p className="text-gray-500">Rating: {toy.rating} ⭐</p>
//           <p className="text-gray-400">Available: {toy.availableQuantity}</p>
//          <button  className="btn btn-primary mt-4"><FaShoppingCart />
//             Add to Cart
//           </button>
//         </div>
        
//       </div>

//       <form onSubmit={handleTryNow} className="mt-8 bg-base-200 p-6 rounded-lg">
//         <h3 className="text-xl font-bold mb-4">Try Now</h3>
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="input input-bordered"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="input input-bordered"
//             required
//           />
//           <button type="submit" className="btn btn-primary">
//             Try Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ToyDetails;
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Swal from "sweetalert2";
// import { FaShoppingCart } from "react-icons/fa";

// const ToyDetails = () => {
//   const { id } = useParams();
//   const [toy, setToy] = useState(null);

//   useEffect(() => {
//     fetch("/toys.json")
//       .then((res) => res.json())
//       .then((data) => {
//         const found = data.find((t) => t.toyId === parseInt(id));
//         setToy(found);
//       });
//   }, [id]);

//   // Add to Cart functionality
//   const handleAddToCart = () => {
//     let cart = JSON.parse(localStorage.getItem("cart")) || [];
//     cart.push(toy);
//     localStorage.setItem("cart", JSON.stringify(cart));
//     Swal.fire("Added!", `${toy.toyName} has been added to your cart.`, "success");
//   };

//   const handleTryNow = (e) => {
//     e.preventDefault();
//     Swal.fire("Success!", "Your request has been submitted!", "success");
//   };

//   if (!toy) return <p className="text-center py-10">Loading toy...</p>;

//   return (
//     <div className="max-w-5xl mx-auto p-6">
//       {/* Product Hero */}
//       <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl shadow-lg p-6">
//         {/* Image */}
//         <div className="w-full md:w-1/2 flex items-center justify-center">
//           <img
//             src={toy.pictureURL}
//             alt={toy.toyName}
//             className="w-full h-[400px] object-contain rounded-lg"
//           />
//         </div>

//         {/* Product Info */}
//         <div className="w-full md:w-1/2 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold mb-3 text-purple-700">{toy.toyName}</h2>
//           <p className="text-gray-700 mb-4">{toy.description}</p>
//           <p className="text-xl font-semibold text-pink-600 mb-2">Price: ${toy.price}</p>
//           <p className="text-gray-600 mb-1">Rating: {toy.rating} ⭐</p>
//           <p className="text-gray-500 mb-4">Available: {toy.availableQuantity}</p>

//           <button
//             onClick={handleAddToCart}
//             className="btn btn-primary flex items-center gap-2 w-fit"
//           >
//             <FaShoppingCart /> Add to Cart
//           </button>
//         </div>
//       </div>

//       {/* Try Now Form */}
//       <form
//         onSubmit={handleTryNow}
//         className="mt-10 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg shadow-md"
//       >
//         <h3 className="text-xl font-bold mb-4 text-purple-700">Try Now</h3>
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Name"
//             className="input input-bordered border-purple-400 focus:ring focus:ring-purple-300"
//             required
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             className="input input-bordered border-purple-400 focus:ring focus:ring-purple-300"
//             required
//           />
//           <button
//             type="submit"
//             className="btn bg-pink-500 hover:bg-pink-600 text-white"
//           >
//             Try Now
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ToyDetails;
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaShoppingCart } from "react-icons/fa";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);
  const [relatedToys, setRelatedToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.toyId === parseInt(id));
        setToy(found);

        // Related toys (excluding current)
        const related = data
          .filter((t) => t.toyId !== parseInt(id))
          .slice(0, 4);
        setRelatedToys(related);
      });
  }, [id]);

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(toy);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire("Added!", `${toy.toyName} has been added to your cart.`, "success");
  };

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire("Success!", "Your request has been submitted!", "success");
  };

  if (!toy) return <p className="text-center py-10">Loading toy...</p>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Product Hero */}
      <div className="flex flex-col md:flex-row gap-8 bg-gradient-to-r from-pink-50 to-blue-50 rounded-xl shadow-lg p-6">
        {/* Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="w-full h-[400px] object-contain rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-3 text-purple-700">{toy.toyName}</h2>
          <p className="text-gray-700 mb-4">{toy.description}</p>
          <p className="text-xl font-semibold text-pink-600 mb-2">Price: ${toy.price}</p>
          <p className="text-gray-600 mb-1">Rating: {toy.rating} ⭐</p>
          <p className="text-gray-500 mb-4">Available: {toy.availableQuantity}</p>

          <button
            onClick={handleAddToCart}
            className="btn btn-primary flex items-center gap-2 w-fit"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>

      {/* Product Description */}
      {/* <section className="mt-10 bg-white p-6 rounded-lg shadow">
        <h3 className="text-2xl font-bold mb-4 text-purple-700">Product Description</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Includes 30 big building blocks for toddlers aged 1–3</li>
          <li>All 26 alphabet blocks included</li>
          <li>Reusable storage bag for easy cleanup</li>
          <li>Durable, easy-to-grip design for little hands</li>
          <li>Compatible with all MEGA BLOKS sets</li>
          <li>Endorsed by Fisher-Price for developmental benefits</li>
        </ul>
      </section> */}
{/* Product Description */}
<section className="mt-10 bg-white p-6 rounded-lg shadow">
  <h3 className="text-2xl font-bold mb-4 text-purple-700">Product Description</h3>
  <p className="text-gray-700 mb-4">{toy.description}</p>

  {Array.isArray(toy.features) && toy.features.length > 0 && (
    <ul className="list-disc pl-6 text-gray-700 space-y-2">
      {toy.features.map((feature, idx) => (
        <li key={idx}>{feature}</li>
      ))}
    </ul>
  )}
</section>
      {/* Try Now Form */}
      <form
        onSubmit={handleTryNow}
        className="mt-10 bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-lg shadow-md"
      >
        <h3 className="text-xl font-bold mb-4 text-purple-700">Try Now</h3>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered border-purple-400 focus:ring focus:ring-purple-300"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered border-purple-400 focus:ring focus:ring-purple-300"
            required
          />
          <button
            type="submit"
            className="btn bg-pink-500 hover:bg-pink-600 text-white"
          >
            Try Now
          </button>
        </div>
      </form>

      {/* You May Also Like */}
<section className="mt-12">
  <h3 className="text-2xl font-bold mb-6 text-purple-700 text-center">You May Also Like</h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {relatedToys.map((item) => (
      <div
        key={item.toyId}
        className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition flex flex-col h-full"
      >
        <img
          src={item.pictureURL}
          alt={item.toyName}
          className="h-40 w-full object-contain mb-3"
        />
        <h4 className="text-lg font-semibold text-purple-600">{item.toyName}</h4>
        <p className="text-sm text-gray-500 mb-2">⭐ {item.rating}</p>
        <p className="text-pink-600 font-bold mb-2">${item.price}</p>
        <div className="flex-grow"></div>
        <Link
          to={`/toy/${item.toyId}`}
          className="btn btn-sm btn-outline btn-primary mt-3"
        >
          View Details
        </Link>
      </div>
    ))}
  </div>
</section>
    </div>
  );
};

export default ToyDetails;