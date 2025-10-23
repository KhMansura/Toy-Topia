import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  const slides = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2016/03/31/20/11/lego-1297582_1280.png",
      title: "Creative Building Blocks",
      text: "Unleash imagination with colorful blocks!",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2017/02/16/12/15/doll-2076350_1280.jpg",
      title: "Cute Dolls & Friends",
      text: "Meet your new best plush friend today!",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2017/01/06/19/15/train-1959401_1280.jpg",
      title: "Adventure Trains",
      text: "All aboard for fun and excitement!",
    },
  ];

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 2500 }}
      loop
      className="my-6 rounded-2xl overflow-hidden shadow-lg"
    >
      {slides.map((s) => (
        <SwiperSlide key={s.id}>
          <div className="relative w-full h-[400px]">
            <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
              <h2 className="text-3xl font-bold mb-2">{s.title}</h2>
              <p className="max-w-md">{s.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
