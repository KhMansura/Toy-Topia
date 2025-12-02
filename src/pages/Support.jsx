// src/pages/Support.jsx
import React, { useState } from "react";

const faqs = [
  { q: "How do I track my order?", a: "Use the tracking link in your confirmation email or visit My Profile > Orders." },
  { q: "What’s your return policy?", a: "Returns accepted within 14 days in original packaging. See Returns policy." },
  { q: "Do you ship internationally?", a: "Yes, we ship to 30+ countries with transparent rates at checkout." },
];

const Support = () => {
  const [open, setOpen] = useState(0);

  return (
    <main className="container mx-auto px-4 md:px-8 lg:px-12 py-12">
      {/* Header */}
      <section className="mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold">Support</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Find quick answers, or reach our team for dedicated help.
        </p>
      </section>

      {/* Quick help */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Help center</h2>
          <p className="mt-2 text-gray-600">Guides and FAQs to get you unstuck fast.</p>
          <a href="/support#faqs" className="btn btn-link p-0 mt-2">Browse FAQs</a>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Order issues</h2>
          <p className="mt-2 text-gray-600">Delayed delivery, damaged item, or missing parts?</p>
          <a href="/contact" className="btn btn-link p-0 mt-2">Contact support</a>
        </div>
        <div className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">Account & billing</h2>
          <p className="mt-2 text-gray-600">Payments, invoices, and profile settings.</p>
          <a href="/login" className="btn btn-link p-0 mt-2">Sign in</a>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold">Frequently asked questions</h3>
        <div className="mt-4 space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="collapse bg-base-200">
              <input type="radio" name="faq" checked={open === idx} onChange={() => setOpen(idx)} />
              <div className="collapse-title text-lg font-medium">{item.q}</div>
              <div className="collapse-content">
                <p className="text-gray-700">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center mt-10">
        <a href="/contact" className="btn btn-primary">Still need help? Contact us</a>
      </section>
    </main>
  );
};

export default Support;