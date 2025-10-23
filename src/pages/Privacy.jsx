import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "ToyTopia — Privacy Policy";
  }, []);

  return (
    <div className="container mx-auto px-6 py-10 text-gray-700">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Privacy Policy</h2>
      <p>
        At ToyTopia, we value your privacy. This policy explains how we handle your
        personal information:
      </p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>We collect only necessary data for account and order management.</li>
        <li>Your data is never sold or shared with third parties.</li>
        <li>We use cookies to improve your browsing experience.</li>
        <li>You can request data deletion at any time by contacting us.</li>
      </ul>
      <p className="mt-4">
        We are committed to ensuring your data remains safe and secure.
      </p>
    </div>
  );
};

export default Privacy;
