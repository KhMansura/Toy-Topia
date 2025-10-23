import React, { useEffect } from "react";

const Terms = () => {
  useEffect(() => {
    document.title = "ToyTopia — Terms & Conditions";
  }, []);

  return (
    <div className="container mx-auto px-6 py-10 text-gray-700">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Terms & Conditions</h2>
      <p>
        Welcome to ToyTopia! By using our website, you agree to the following terms:
      </p>
      <ul className="list-disc ml-6 mt-4 space-y-2">
        <li>All listed toys are provided by verified local sellers.</li>
        <li>Users are responsible for maintaining the accuracy of their account info.</li>
        <li>Reviews must be respectful and based on real experiences.</li>
        <li>We reserve the right to update our terms without prior notice.</li>
      </ul>
      <p className="mt-4">
        Please review these terms regularly to stay informed of any updates.
      </p>
    </div>
  );
};

export default Terms;
