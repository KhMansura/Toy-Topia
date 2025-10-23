import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";

const PopularToys = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => setToys(data.slice(0, 6)));
  }, []);

  return (
    <section className="my-10">
      <h2 className="text-3xl font-bold text-center mb-8">🎁 Popular Toys</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </section>
  );
};

export default PopularToys;
