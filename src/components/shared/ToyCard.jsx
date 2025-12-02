import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../pages/CartContext";

const ToyCard = ({ toy }) => {
  const { toyId, toyName, pictureURL, rating, availableQuantity, price } = toy;
  const { addToCart } = useContext(CartContext);


  //  Placeholder handlers 
  const handleAddToCart = () => {
    console.log("Add to cart:", toyId);
  };

  const handleAddToWishlist = () => {
    console.log("Add to wishlist:", toyId);
  };

  return (
    <div className="card  bg-purple-100 shadow-md hover:shadow-xl transition">
      <figure className="h-48 overflow-hidden relative">
        <img src={pictureURL} alt={toyName} className="object-contain h-full" />
        {/* Wishlist button */}
        <button
          onClick={handleAddToWishlist}
          className="absolute top-2 right-2 btn btn-circle btn-sm bg-white/70 hover:bg-pink-100"
          aria-label="Add to wishlist"
        >
          <FaHeart className="text-pink-500" />
        </button>
      </figure>
      <div className="card-body">
        <h3 className="card-title text-lg text-gray-400">{toyName}</h3>
        <p className="text-gray-500">⭐ {rating} | Qty: {availableQuantity}</p>
        <p className="font-bold text-purple-600">${price}</p>
        <div className="card-actions justify-between items-center">
          {/* Add to Cart button */}
          <button
            onClick={() => addToCart(toy)}
            className="btn btn-outline btn-sm btn-primary flex items-center gap-1"
          >
            <FaShoppingCart size={12} /> Add to Cart
          </button>

          {/* View More button */}
          <Link to={`/toy/${toyId}`} className="btn btn-outline btn-sm btn-primary">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;

