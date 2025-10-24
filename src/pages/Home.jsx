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
              <div
                className="h-56 md:h-96 bg-cover bg-center rounded-lg relative"
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
      </section>

      {/* Popular Toys */}
      <section className="my-10">
        <h2 className="text-2xl font-bold mb-4 text-pink-300">Popular Toys</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {toys.slice(0, 6).map((toy) => (
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

     
    </div>
  );
};

export default Home;

