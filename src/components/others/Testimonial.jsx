import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Heading from '../Utils/Heading';
import testimonialsData from '../../data/others/TestimonialData';

const Testimonial = () => {
  return (
    <section className="relative container mx-auto pt-20 pb-10 md:pt-10 px-4 animate-fade-in h-auto max-w-[1200px] border-l-2 border-r-2 border-dashed border-gray-500 dark:border-gray-700">
      
      <Heading
        name="< Testimonials. />"
        tagline={<> Hear What Others <br /> Say About Me </>}
      />

      <div className="mt-10 text-emerald-400">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-[50%]   testimonial-swiper" 
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="w-full p-6 bg-gray-100 dark:bg-white/10 backdrop-blur-md shadow-lg h-full">
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                  {testimonial.text}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="dark:text-emerald-400 text-md sm:text-base text-emerald-600 font-bold">
                      {testimonial.name}
                    </p>
                    <p className="dark:text-emerald-400 text-sm sm:text-base text-emerald-600 font-bold">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
