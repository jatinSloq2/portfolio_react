import React from 'react';
import { Link } from 'react-router-dom';
import HowICanHelp from '../components/Main/HowICanHelp';
import Testimonial from '../components/others/Testimonial';

const Home = () => {
  return (
    <>
   
   <section className="relative container mx-auto pt-28 md:pt-42 px-2 animate-fade-in pb-42 max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Decorative Image (Arrow decoration on the left side) */}
        <img 
          src="/images/arrrowGreen-2.png" 
          alt="Arrow Decoration" 
          className="hidden 2xl:block absolute top-[120px] left-0 w-[120px] h-auto opacity-70" 
        />
        
        {/* Text Content Section */}
        <div className="text-center mx-auto">
          {/* Greeting message with emoji */}
          <h3 className="font-bold text-emerald-600 dark:text-gray-400 animate-text text-2xl">
            Hi there <span className="text-4xl" role="img" aria-label="waving hand">👋</span>,
          </h3>

          {/* Main Introduction */}
          <h1 className="text-5xl md:text-7xl font-bold text-black dark:text-white mb-4 animate-text">
            I am Jatin <br /> Full Stack Developer
          </h1>

          {/* Brief description of passion */}
          <p className="text-lg text-black dark:text-gray-400 mb-6 px-2 md:px-0 animate-text">
            My passion for design, code, and web interaction fuels <br className="hidden md:block" /> my journey in the web design realm.
          </p>
          
          {/* Action Buttons for navigating to Projects or downloading CV */}
          <div className="flex sm:flex-row justify-center gap-4">
            <Link 
              to="/projects"
                className="px-6 border border-gray-500 text-black dark:text-white font-semibold py-2 hover:bg-emerald-400 hover:text-white dark:hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              See Work
            </Link>
            <Link 
              to={"/"} 
              className="inline-block text-emerald-600  hover:text-black dark:text-white px-6 py-3  font-bold dark:hover:text-emerald-600 transition duration-300"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
      <HowICanHelp/>
    </section>
      <Testimonial/>
      </>
  );
};

export default Home;
