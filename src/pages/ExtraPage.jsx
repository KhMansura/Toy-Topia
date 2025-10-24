import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ExtraPage = () => {
  useEffect(() => {
    document.title = "ToyTopia — Dashboard";
  }, []);

  const [toys] = useState([
    { name: "Lego Classic", sales: 125 },
    { name: "Barbie Dreamhouse", sales: 80 },
    { name: "Hot Wheels", sales: 150 },
    { name: "Play-Doh", sales: 70 },
    { name: "Nerf Blaster", sales: 95 },
    { name: "UNO Cards", sales: 60 },
  ]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-blue-500 mb-6">
        Toy Insights Dashboard
      </h2>

      <p className="text-center text-gray-600 mb-10">
        A quick overview of our top-selling toys and ratings performance.
      </p>

      {/* Sales Chart */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">
          Weekly Toy Sales Overview
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={toys}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#60a5fa" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Rating Info */}
      <div className="grid md:grid-cols-3 gap-6">
        {toys.map((toy, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-100 rounded-2xl shadow-sm p-4 hover:shadow-md transition"
          >
            <h4 className="text-lg font-bold text-blue-600">{toy.name}</h4>
            <p className="text-gray-600 mt-2">
              Estimated Weekly Sales: <span className="font-semibold">{toy.sales}</span>
            </p>
            <p className="text-gray-500 text-sm mt-1">
              Growth: {Math.round((toy.sales / 150) * 100)}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraPage;

