import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-blue-100 text-center px-4">
      <h1 className="text-6xl font-bold text-purple-600">404</h1>
      <p className="text-xl text-gray-700 mt-4">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary mt-6">Go Home</Link>
    </div>


    );
};

export default ErrorPage;