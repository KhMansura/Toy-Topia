import React from 'react';

const AboutUs = () => {
    return (
        <main className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
      {/* Hero */}
      <section className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold">About ToyTopia</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We craft joyful experiences through thoughtfully designed toys—combining safety,
          creativity, and lasting quality for all ages.
        </p>
      </section>

      {/* Mission, vision, values */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Our Mission</h2>
          <p className="mt-2 text-gray-600">
            Inspire imagination with safe, high‑quality toys that spark curiosity and learning.
          </p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Our Vision</h2>
          <p className="mt-2 text-gray-600">
            A world where play empowers growth, confidence, and connection—one toy at a time.
          </p>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Our Values</h2>
          <ul className="mt-2 space-y-2 text-gray-600 list-disc pl-5">
            <li>Safety first</li>
            <li>Design with purpose</li>
            <li>Inclusive play</li>
            <li>Customer delight</li>
          </ul>
        </div>
      </section>

      {/* Trust badges */}
      <section className="rounded-xl border bg-white p-6 shadow-sm mb-12">
        <h3 className="text-lg font-semibold">Trusted by families and collectors</h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">10K+</p>
            <p className="text-gray-600">Happy customers</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">4.8/5</p>
            <p className="text-gray-600">Average rating</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">100%</p>
            <p className="text-gray-600">Safety compliance</p>
          </div>
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="font-bold">30+ Countries</p>
            <p className="text-gray-600">Global reach</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <a href="/all-items" className="btn btn-primary">Explore our collection</a>
      </section>
    </main>


    );
};

export default AboutUs;