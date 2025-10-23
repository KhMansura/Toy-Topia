import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((t) => t.toyId === parseInt(id));
        setToy(found);
      });
  }, [id]);

  const handleTryNow = (e) => {
    e.preventDefault();
    Swal.fire("Success!", "Your request has been submitted!", "success");
  };

  if (!toy) return <p className="text-center py-10">Loading toy...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={toy.pictureURL} alt={toy.toyName} className="w-full md:w-1/2 rounded-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-2 text-blue-400">{toy.toyName}</h2>
          <p className="text-black">{toy.description}</p>
          <p className="mt-3 text-lg font-semibold text-purple-600">Price: ${toy.price}</p>
          <p className="text-gray-500">Rating: {toy.rating} ⭐</p>
          <p className="text-gray-400">Available: {toy.availableQuantity}</p>
        </div>
      </div>

      <form onSubmit={handleTryNow} className="mt-8 bg-base-200 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Try Now</h3>
        <div className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="input input-bordered" required />
          <input type="email" placeholder="Email" className="input input-bordered" required />
          <button type="submit" className="btn btn-primary">Try Now</button>
        </div>
      </form>
    </div>
  );
};

export default ToyDetails;

