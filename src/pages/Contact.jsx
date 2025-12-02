// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';



// const Contact = () => {
//   useEffect(() => {
//     document.title = "ToyTopia — Contact Us";
//   }, []);

//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast("Thank you for contacting us! We’ll get back to you soon.");
//     setFormData({ name: "", email: "", message: "" });
//   };

//   return (
//     <div className="container mx-auto px-6 py-10 text-gray-700">
//       <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
//       <p className="mb-6">
//         Have questions or feedback? Fill out the form below, and our team will reach out shortly.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-md bg-white p-6 rounded-lg shadow space-y-4"
//       >
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           rows="4"
//           value={formData.message}
//           onChange={handleChange}
//           className="w-full border p-2 rounded"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
//         >
//           Send Message
//         </button>
//       </form>
//       <ToastContainer />

//     </div>
//   );
// };

// export default Contact;
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  useEffect(() => {
    document.title = "ToyTopia — Contact Us";
  }, []);

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 py-12 text-gray-700">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-600">Contact Us</h1>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions, feedback, or need support? Fill out the form or reach
          us directly — we’re here to help.
        </p>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form (kept intact) */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Company Info */}
        <div className="bg-gray-50 p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-blue-600">Get in Touch</h2>
          <p className="text-gray-600">
            You can also reach us directly via email or phone. Our support team
            is available Sunday–Thursday, 9:00–18:00 BST.
          </p>

          <div className="space-y-3">
            <p><span className="font-semibold">Email:</span> support@toytopia.com</p>
            <p><span className="font-semibold">Phone:</span> +880 1234 567 890</p>
            <p><span className="font-semibold">Address:</span> House 12, Road 34, Gulshan 2, Dhaka</p>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default Contact;
