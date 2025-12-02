import React, { useEffect, useState } from "react";
import ToyCard from "../components/shared/ToyCard";
import Loader from "../components/shared/Loader";
import ExtraSection1 from "../components/ExtraSection1";
import ExtraSection2 from "../components/ExtraSection2";
import Footer from "../components/shared/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    document.title = "ToyTopia — Home";
  }, []);

  const [toys, setToys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/toys.json")
      .then((r) => r.json())
      .then((data) => {
        setToys(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Slider Section */}
      {/* <section className="mb-8">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation
          autoplay={{ delay: 2500 }}
          loop
          modules={[Autoplay, Navigation]}
          className="rounded-lg overflow-hidden"
        >
          {toys.slice(0, 4).map((t) => (
            <SwiperSlide key={t.toyId}>
              <div
                className="h-[50vh]  bg-cover bg-center rounded-lg relative"
                style={{ backgroundImage: `url(${t.pictureURL})` }}
              >
                <div className="absolute bottom-4 left-4 bg-white/80 p-3 rounded">
                  <h3 className="font-bold">{t.toyName}</h3>
                  <p className="text-sm text-gray-700">
                    ${t.price} • {t.rating}⭐
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
        {/* Slider Section */}
  <section className="mb-8">
  <Swiper
    slidesPerView={1}
    spaceBetween={10}
    navigation
    autoplay={{ delay: 2500 }}
    loop
    modules={[Autoplay, Navigation]}
    className="rounded-lg overflow-hidden"
  >
    {toys.slice(0, 4).map((t) => (
      <SwiperSlide key={t.toyId}>
        <div className="flex flex-col md:flex-row items-center h-[60vh] rounded-lg shadow-lg overflow-hidden">
          
          {/* Image side */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center bg-white">
            <img
              src={t.pictureURL}
              alt={t.toyName}
              className="h-full max-h-[60vh] w-auto object-contain p-6"
            />
          </div>

          {/* Text side */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
              {t.toyName}
            </h2>
            <p className="text-gray-600 mb-4">
              ⭐ {t.rating} • Available: {t.availableQuantity}
            </p>
            <p className="text-xl font-semibold text-pink-600 mb-6">
              ${t.price}
            </p>
            <div className="flex gap-4">
              <Link
                to={`/toy/${t.toyId}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
              
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</section>



      {/* Popular Toys */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4 text-pink-300">Popular Toys</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {toys.slice(0, 8).map((toy) => (
            <ToyCard key={toy.toyId} toy={toy} />
          ))}
        </div>
        <div className="text-center mt-6">
  <Link to="all-toys">
    <button className="btn btn-primary">Show All</button>
  </Link>
</div>
      
 </section>
 

      {/* Extra Sections */}
      <ExtraSection1 />
      <ExtraSection2 />
      {/* Top Rated Section */}
<section className="bg-pink-50 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-pink-600">Top Rated Toys</h2>
    <p className="text-center text-gray-700 mb-6">
      Discover our most loved toys by customers worldwide.
    </p>
    {/* Add toy cards or highlights */}
  </div>
</section>

{/* Categories Section */}
<section className="container mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Categories</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
    <div className="p-6 bg-pink-300 rounded-lg shadow text-center font-semibold">Blocks</div>
    <div className="p-6 bg-blue-300 rounded-lg shadow text-center font-semibold">Dolls</div>
    <div className="p-6 bg-green-300 rounded-lg shadow text-center font-semibold">Vehicles</div>
    <div className="p-6 bg-yellow-300 rounded-lg shadow text-center font-semibold">Educational</div>
  </div>
</section>

{/* Blog Section */}
<section className="bg-gradient-to-r from-pink-100 to-blue-100 py-12">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">From Our Blog</h2>
    <div className="grid md:grid-cols-3 gap-6">
      <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="font-semibold mb-2 text-pink-600">5 Benefits of Creative Play</h3>
        <p className="text-gray-600">Learn how toys can boost creativity and problem-solving skills.</p>
        <Link to="/blog/creative-play" className="text-blue-600 hover:underline">Read More</Link>
      </article>
      <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="font-semibold mb-2 text-pink-600">Choosing Safe Toys</h3>
        <p className="text-gray-600">Tips for selecting toys that are safe for all ages.</p>
        <Link to="/blog/safe-toys" className="text-blue-600 hover:underline">Read More</Link>
      </article>
      <article className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <h3 className="font-semibold mb-2 text-pink-600">Top Trends in 2025</h3>
        <p className="text-gray-600">Explore the latest toy trends shaping the market.</p>
        <Link to="/blog/trends-2025" className="text-blue-600 hover:underline">Read More</Link>
      </article>
    </div>
  </div>
</section>

{/* Promotions / Offers Section */}
<section className="container mx-auto px-4 py-12 text-center bg-blue-50 rounded-lg shadow">
  <h2 className="text-3xl font-bold mb-4 text-blue-600">Special Offers</h2>
  <p className="text-gray-700 mb-6">Get up to 30% off selected toys this season!</p>
  <Link to="/offers" className="btn btn-secondary">Shop Offers</Link>
</section>

{/* Newsletter Section */}
<section className="bg-gradient-to-r from-pink-200 to-blue-200 py-12">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold mb-4 text-purple-700">Join Our Newsletter</h2>
    <p className="text-gray-700 mb-6">Stay updated with new arrivals and exclusive deals.</p>
    <form className="max-w-md mx-auto flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="input input-bordered flex-1"
        required
      />
      <button type="submit" className="btn btn-primary">Subscribe</button>
    </form>
  </div>
</section>

     
    </div>
  );
};

export default Home;

