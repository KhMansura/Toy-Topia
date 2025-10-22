// src/pages/Home.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Home() {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    document.title = "ToyTopia - Discover Joyful Toys";
    fetch("/toys.json")
      .then(res => res.json())
      .then(data => setToys(data.slice(0, 6)));
  }, []);

  const sliderToys = toys.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Slider */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-pink-100">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={20}
          slidesPerView={1}
          className="h-80 md:h-96"
        >
          {sliderToys.map(toy => (
            <SwiperSlide key={toy.toyId}>
              <div className="relative h-full bg-gradient-to-r from-pink-50 to-yellow-50 flex items-center">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{toy.toyName}</h1>
                    <p className="mt-2 text-gray-600">{toy.description.substring(0, 120)}...</p>
                    <p className="mt-3 text-2xl font-bold text-pink-600">${toy.price}</p>
                    <Link to={`/toy/${toy.toyId}`} className="btn btn-pink mt-4">View Toy</Link>
                  </div>
                  <div className="w-full md:w-1/2 flex justify-center">
                    <img
                      src={toy.pictureURL.trim()}
                      alt={toy.toyName}
                      className="h-64 object-contain drop-shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popular Toys */}
      <div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🌟 Popular Toys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toys.map(toy => (
            <div key={toy.toyId} className="card bg-white border border-pink-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <figure className="bg-pink-50 p-4">
                <img
                  src={toy.pictureURL.trim()}
                  alt={toy.toyName}
                  className="h-48 object-contain mx-auto"
                />
              </figure>
              <div className="card-body p-5">
                <h3 className="text-xl font-bold text-gray-800">{toy.toyName}</h3>
                <p className="text-sm text-gray-500">by {toy.sellerName}</p>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-lg font-bold text-pink-600">${toy.price}</span>
                  <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                    <span className="text-yellow-600">⭐</span>
                    <span className="ml-1 text-sm">{toy.rating}</span>
                  </div>
                </div>
                <div className="card-actions justify-end mt-4">
                  <Link to={`/toy/${toy.toyId}`} className="btn btn-outline btn-pink btn-sm">View More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Extra Sections */}
      <div className="text-center py-8 bg-yellow-50 rounded-2xl border border-yellow-200">
        <h3 className="text-2xl font-bold text-pink-600">🎁 New This Week!</h3>
        <p className="mt-2 text-gray-600">Fresh toys added every Monday!</p>
      </div>
    </div>
  );
}