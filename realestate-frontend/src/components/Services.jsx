import React from 'react';
import { FaHome, FaBuilding, FaSearch, FaHandshake, FaChartLine, FaTools } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHome className="w-8 h-8 text-yellow-500" />,
      title: "Property Management",
      description: "Comprehensive property management services including maintenance, tenant screening, and rent collection."
    },
    {
      icon: <FaBuilding className="w-8 h-8 text-yellow-500" />,
      title: "Commercial Real Estate",
      description: "Expert guidance in commercial property investments, leasing, and development opportunities."
    },
    {
      icon: <FaSearch className="w-8 h-8 text-yellow-500" />,
      title: "Property Search",
      description: "Advanced property search tools with detailed filters and virtual tours for residential and commercial properties."
    },
    {
      icon: <FaHandshake className="w-8 h-8 text-yellow-500" />,
      title: "Real Estate Consulting",
      description: "Professional consulting services for property investment, market analysis, and strategic planning."
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-yellow-500" />,
      title: "Investment Analysis",
      description: "Detailed investment analysis and market research to help make informed real estate decisions."
    },
    {
      icon: <FaTools className="w-8 h-8 text-yellow-500" />,
      title: "Property Maintenance",
      description: "Regular maintenance services and emergency repairs for both residential and commercial properties."
    }
  ];

  return (
    <div className="py-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive real estate solutions tailored to your needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-700 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services; 