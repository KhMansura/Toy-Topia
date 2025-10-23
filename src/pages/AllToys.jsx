import React, { useEffect, useState } from "react";
import ToyCard from "../components/shared/ToyCard";
import Loader from "../components/shared/Loader";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "ToyTopia — All Toys";
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-6 text-pink-300">All Toys</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default AllToys;

