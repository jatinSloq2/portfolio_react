import React from 'react';

const Heading = (props) => {
  return (
    <div className="text-center">
      {/* Section Heading */}
      <h2 className="text-emerald-600 dark:text-gray-400 text-2xl font-bold animate-text mb-2">
        {props.name}
      </h2>
      <h1 
        className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 animate-text"
      >
        {props.tagline}
      </h1>
    </div>
  );
}

export default Heading;
