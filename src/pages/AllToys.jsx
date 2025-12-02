// import React, { useEffect, useState } from "react";
// import ToyCard from "../components/shared/ToyCard";
// import Loader from "../components/shared/Loader";

// const AllToys = () => {
//   const [toys, setToys] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     document.title = "ToyTopia — All Toys";
//     fetch("/toys.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setToys(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   if (loading) return <Loader />;

//   return (
//     <div className="container mx-auto px-4 py-10">
//       <h2 className="text-2xl font-bold mb-6 text-pink-300">All Toys</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//         {toys.map((toy) => (
//           <ToyCard key={toy.toyId} toy={toy} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllToys;

import React, { useEffect, useState } from "react";
import ToyCard from "../components/shared/ToyCard";
import Loader from "../components/shared/Loader";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);
  const [loading, setLoading] = useState(true);

  // Search, filter, sort states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const toysPerPage = 9;

  useEffect(() => {
    document.title = "ToyTopia — All Toys";
    fetch("/toys.json")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setFilteredToys(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Handle search, filter, sort
  useEffect(() => {
    let data = [...toys];

    // Search
    if (search) {
      data = data.filter((t) =>
        t.toyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category filter
    if (category !== "All") {
      data = data.filter((t) => t.subCategory === category);
    }

    // Sorting
    if (sort === "priceLow") {
      data.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHigh") {
      data.sort((a, b) => b.price - a.price);
    } else if (sort === "rating") {
      data.sort((a, b) => b.rating - a.rating);
    }

    setFilteredToys(data);
    setCurrentPage(1); // reset to first page
  }, [search, category, sort, toys]);

  if (loading) return <Loader />;

  // Pagination logic
  const indexOfLastToy = currentPage * toysPerPage;
  const indexOfFirstToy = indexOfLastToy - toysPerPage;
  const currentToys = filteredToys.slice(indexOfFirstToy, indexOfLastToy);
  const totalPages = Math.ceil(filteredToys.length / toysPerPage);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-purple-700">
        🧸 All Toys
      </h2>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between items-center bg-gradient-to-r from-pink-100 to-blue-100 p-4 rounded-lg shadow">
        <input
          type="text"
          placeholder="Search toys..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full md:w-1/3"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full md:w-1/4"
        >
          <option value="All">All Categories</option>
          <option value="Building Blocks">Building Blocks</option>
          <option value="Dolls & Accessories">Dolls & Accessories</option>
          <option value="Vehicles">Vehicles</option>
          <option value="Stuffed Animals">Stuffed Animals</option>
          <option value="Wooden Toys">Wooden Toys</option>
          <option value="Electronics">Electronics</option>
          <option value="Pretend Play">Pretend Play</option>
          <option value="Action Figures">Action Figures</option>
          <option value="Educational Toys">Educational Toys</option>
          <option value="Bath Toys">Bath Toys</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="select select-bordered w-full md:w-1/4"
        >
          <option value="default">Sort By</option>
          <option value="priceLow">Price: Low to High</option>
          <option value="priceHigh">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* Toys Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentToys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="btn bg-purple-300 btn-sm"
        >
          Previous
        </button>
        <span className="text-purple-600 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="btn bg-purple-300 btn-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllToys;