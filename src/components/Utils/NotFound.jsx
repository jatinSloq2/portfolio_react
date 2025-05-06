import React from 'react';

const NotFound = () => {
  return (
    <section className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1000px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
      <div className="text-center">
       
        {/* Heading */}
        <h1 className="font-bold text-4xl text-gray-800 dark:text-white">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Oops! The page you are looking for doesn't exist.
        </p>

        {/* Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-5 inline-block border border-gray-500 dark:border-gray-400 font-bold text-emerald-600 dark:text-white px-6 py-3 hover:bg-emerald-600 hover:text-white transition duration-300"
        >
          Go Back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
