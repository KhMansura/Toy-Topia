import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



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
    toast("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto px-6 py-10 text-gray-700">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h2>
      <p className="mb-6">
        Have questions or feedback? Fill out the form below, and our team will reach out shortly.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-md bg-white p-6 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Send Message
        </button>
      </form>
      <ToastContainer />

    </div>
  );
};

export default Contact;
