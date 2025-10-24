// import React from 'react';
// import { Link } from 'react-router-dom';


// export default function ToyCard({toy}){
// return (
// <div className="card w-80 bg-base-100 shadow-md">
// <figure><img src={toy.pictureURL} alt={toy.toyName} className="h-48 object-cover"/></figure>
// <div className="card-body">
// <h2 className="card-title">{toy.toyName}</h2>
// <p>Price: ${toy.price}</p>
// <p>Rating: {toy.rating} ⭐</p>
// <p>Available: {toy.availableQuantity}</p>
// <div className="card-actions justify-end">
// <Link to={`/toy/${toy.toyId}`} className="btn btn-primary">View More</Link>
// </div>
// </div>
// </div>
// );
// }

// import React from "react";
// import { Link } from "react-router-dom";

// const ToyCard = ({ toy }) => {
//   return (
//     <div className="card bg-white shadow-md rounded-lg overflow-hidden">
//       <figure className="h-48 overflow-hidden">
//         <img src={toy.pictureURL} alt={toy.toyName} className="w-full h-full object-cover transform hover:scale-105 transition" />
//       </figure>
//       <div className="p-4">
//         <h3 className="font-bold text-lg mb-1 text-blue-500">{toy.toyName}</h3>
//         <p className="text-sm text-gray-600 mb-2 line-clamp-2">{toy.description}</p>
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm text-blue-300"><strong>${toy.price}</strong></p>
//             <p className="text-xs text-yellow-600">{toy.rating} ⭐</p>
//           </div>
//           <Link to={`/toy/${toy.toyId}`} className="btn btn-sm btn-primary">View More</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ToyCard;

import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, pictureURL, rating, availableQuantity, price } = toy;

  return (
    <div className="card bg-purple-100 shadow-md hover:shadow-xl transition">
      <figure className="h-48 overflow-hidden">
        <img src={pictureURL} alt={toyName} className="object-contain h-full" />
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg text-gray-400">{toyName}</h3>
        <p className="text-gray-500">⭐ {rating} | Qty: {availableQuantity}</p>
        <p className="font-bold text-purple-600">${price}</p>
        <div className="card-actions justify-end">
          <Link to={`toy/${toyId}`} className="btn btn-outline btn-sm btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

