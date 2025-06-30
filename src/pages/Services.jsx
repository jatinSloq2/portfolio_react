import React from 'react';
import services from "../data/others/services.js";
import Heading from '../components/Utils/Heading.jsx';
import ServicesCard from '../components/Main/ServicesCard.jsx';

const Services = () => {
  return (
    <>
      {/* Section: Services */}
      <section
        id="services"
        className="relative container mx-auto pt-20 pb-10 md:pt-22 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700"
      >
        <div className="container mx-auto text-center">
        <Heading name="< Services. />" tagline={<>Crafting Solutions <br className="hidden lg:block" /> Tailored to Your Needs</>}/>
         <ServicesCard services={services}/>
        </div>
      </section>
    </>
  );
};

export default Services;
