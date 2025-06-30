import React from 'react'

const Services = ({services}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 px-6 mb-5 mt-16">
            {/* Loop through the services array */}
            {services.map((service, index) => (
              <div
                key={index} // Unique key for each service
                className="bg-gray-100 dark:bg-white/10 backdrop-blur-md p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105"
              >
                {/* Service Image */}
                <img
                  src={service.image} // Image for the service
                  alt={service.alt} // Alt text for the image (for accessibility)
                  className="w-16 h-16 mb-3 object-contain" // Styling for the image
                />
                
                {/* Service Title */}
                <h3 className="dark:text-emerald-400 text-emerald-600 text-xl font-semibold mb-2">
                  {service.title} {/* Dynamically displayed title */}
                </h3>
                
                {/* Service Description */}
                <p className="text-black dark:text-white text-sm text-opacity-80">
                  {service.description} {/* Dynamically displayed description */}
                </p>
              </div>
            ))}
          </div>
  )
}

export default Services