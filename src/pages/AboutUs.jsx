// import React from 'react';

// const AboutUs = () => {
//     return (
//         <main className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
//       {/* Hero */}
//       <section className="text-center mb-10">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-500">About ToyTopia</h1>
//         <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
//           We craft joyful experiences through thoughtfully designed toys—combining safety,
//           creativity, and lasting quality for all ages.
//         </p>
//       </section>

//       {/* Mission, vision, values */}
//       <section className="grid md:grid-cols-3 gap-6 mb-12">
//         <div className="rounded-xl border bg-pink-100 p-6 shadow-sm">
//           <h2 className="text-xl font-semibold">Our Mission</h2>
//           <p className="mt-2 text-gray-600">
//             Inspire imagination with safe, high‑quality toys that spark curiosity and learning.
//           </p>
//         </div>
//         <div className="rounded-xl border bg-blue-100 p-6 shadow-sm">
//           <h2 className="text-xl font-semibold">Our Vision</h2>
//           <p className="mt-2 text-gray-600">
//             A world where play empowers growth, confidence, and connection—one toy at a time.
//           </p>
//         </div>
//         <div className="rounded-xl border bg-yellow-100 p-6 shadow-sm">
//           <h2 className="text-xl font-semibold">Our Values</h2>
//           <ul className="mt-2 space-y-2 text-gray-600 list-disc pl-5">
//             <li>Safety first</li>
//             <li>Design with purpose</li>
//             <li>Inclusive play</li>
//             <li>Customer delight</li>
//           </ul>
//         </div>
//       </section>

//       {/* Trust badges */}
//       <section className="rounded-xl border bg-purple-100 p-6 shadow-sm mb-12">
//         <h3 className="text-lg font-semibold">Trusted by families and collectors</h3>
//         <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//           <div className="p-4 rounded-lg bg-gray-50">
//             <p className="font-bold">10K+</p>
//             <p className="text-gray-600">Happy customers</p>
//           </div>
//           <div className="p-4 rounded-lg bg-gray-50">
//             <p className="font-bold">4.8/5</p>
//             <p className="text-gray-600">Average rating</p>
//           </div>
//           <div className="p-4 rounded-lg bg-gray-50">
//             <p className="font-bold">100%</p>
//             <p className="text-gray-600">Safety compliance</p>
//           </div>
//           <div className="p-4 rounded-lg bg-gray-50">
//             <p className="font-bold">30+ Countries</p>
//             <p className="text-gray-600">Global reach</p>
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="text-center">
//         <a href="/all-items" className="btn btn-primary">Explore our collection</a>
//       </section>
//     </main>


//     );
// };

// export default AboutUs;

import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <main className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-400">
          About ToyTopia
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-500 max-w-2xl mx-auto">
          We craft joyful experiences through thoughtfully designed toys—combining safety,
          creativity, and lasting quality for all ages.
        </p>
      </section>

      {/* Mission, vision, values with flip animation */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          {
            title: "Our Mission",
            front: "Inspire imagination with safe, high‑quality toys that spark curiosity and learning.",
            back: "We continuously innovate to bring joy and creativity to every household."
          },
          {
            title: "Our Vision",
            front: "A world where play empowers growth, confidence, and connection—one toy at a time.",
            back: "We envision ToyTopia as a global leader in creative play and learning."
          },
          {
            title: "Our Values",
            front: "Safety, Purposeful Design, Inclusive Play, Customer Delight.",
            back: "Our values guide every decision to ensure trust, happiness, and long‑term impact."
          }
        ].map((card, idx) => (
          <div key={idx} className="group perspective">
            <div className="relative preserve-3d w-full h-64 transition-transform duration-700 group-hover:rotate-y-180">
              {/* Front side */}
              <div className="absolute inset-0 rounded-xl border bg-pink-50 dark:bg-gray-700 p-6 shadow-md backface-hidden">
                <h2 className="text-xl font-semibold text-indigo-500 dark:text-indigo-300">{card.title}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{card.front}</p>
              </div>
              {/* Back side */}
              <div className="absolute inset-0 rounded-xl border bg-indigo-100 dark:bg-slate-800 p-6 shadow-md rotate-y-180 backface-hidden">
                <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-300">{card.title}</h2>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{card.back}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust badges with color hover */}
      <section className="rounded-xl border bg-yellow-50 dark:bg-indigo-900 p-6 shadow-md mb-12">
        <h3 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
          Trusted by families and collectors
        </h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Happy customers", value: "10K+" },
            { label: "Average rating", value: "4.8/5" },
            { label: "Safety compliance", value: "100%" },
            { label: "Global reach", value: "30+ Countries" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-lg bg-white dark:bg-slate-800 shadow-sm 
                         transition-colors duration-500 hover:bg-indigo-200 dark:hover:bg-indigo-700"
            >
              <p className="font-bold text-purple-600 dark:text-purple-300">{item.value}</p>
              <p className="text-gray-700 dark:text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <Link
          to="/all-toys"
          className="btn btn-primary transition-transform duration-300 hover:scale-105"
        >
          Explore our collection
        </Link>
      </section>
    </main>
  );
};

export default AboutUs;






