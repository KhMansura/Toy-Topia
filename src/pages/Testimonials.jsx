const testimonials = [
  {
    name: "Emily Johnson",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    feedback:
      "I bought a wooden train set for my son, and he absolutely loves it! The quality is fantastic.",
  },
  {
    name: "Michael Smith",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "These toys are amazing! I got a set of action figures, and they are very detailed and sturdy.",
  },
  {
    name: "Sofia Martinez",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "I purchased a plush teddy bear for my niece, and she hasn’t let go of it since!",
  },
];

const TestimonialSection = () => {
  return (
    <div className="container mx-auto px-4 py-16 ">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-12">
        What Our Happy Customers Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-purple-100 dark:bg-purple-400 shadow-lg rounded-lg p-6 text-center transition hover:scale-105"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-pink-500"
            />
            <p className="text-gray-700 dark:text-gray-200 italic mb-4">
              "{t.feedback}"
            </p>
            <h3 className="text-lg font-bold text-purple-700 dark:text-pink-200">
              {t.name}
            </h3>
            <span className="text-sm text-gray-800 dark:text-gray-900">
              {t.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;