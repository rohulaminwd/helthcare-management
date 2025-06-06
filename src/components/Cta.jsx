import React from 'react';
import { Link } from 'react-router-dom';

const Cta = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Healthcare Experience?
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10">
          Join HealthChain today and take the first step towards owning your
          medical data.
        </p>
        <div className="flex flex-col gap-x-3 sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x 6">
          <Link
            to="/dashboard"
            className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded lg hover:bg-indigo-700 transition duration-300 shadow-lg"
          >
            Sign Up Now
          </Link>
          <a
            href="#"
            className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 text-lg font semibold rounded-lg hover:bg-indigo-50 transition duration-300"
          >
            Contact Sales
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;
