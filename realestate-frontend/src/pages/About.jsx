import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHandshake, FaChartLine, FaUsers } from 'react-icons/fa';

const About = () => {
    const features = [
        {
            icon: <FaBuilding className="w-8 h-8" />,
            title: "Trusted Platform",
            description: "India's most trusted real estate platform with verified listings and trusted builders."
        },
        {
            icon: <FaHandshake className="w-8 h-8" />,
            title: "Expert Guidance",
            description: "Professional real estate agents to guide you through every step of your property journey."
        },
        {
            icon: <FaChartLine className="w-8 h-8" />,
            title: "Market Insights",
            description: "Access to real-time market data and property trends to make informed decisions."
        },
        {
            icon: <FaUsers className="w-8 h-8" />,
            title: "Customer First",
            description: "Dedicated to providing exceptional service and support to all our customers."
        }
    ];

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="relative py-20 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            About Real Estate Management System
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Your trusted partner in real estate, connecting buyers, sellers, and agents across India
                            with innovative solutions and exceptional service.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-300 text-lg mb-6">
                                To revolutionize the real estate industry in India by providing a transparent,
                                efficient, and user-friendly platform that connects property seekers with their
                                dream homes and investment opportunities.
                            </p>
                            <p className="text-gray-300 text-lg">
                                We strive to make property transactions seamless, secure, and satisfying for
                                all stakeholders through innovative technology and personalized service.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="bg-gray-800 p-8 rounded-lg"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">✓</span>
                                    <span>Verified property listings</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">✓</span>
                                    <span>Expert real estate agents</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">✓</span>
                                    <span>Transparent pricing</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">✓</span>
                                    <span>24/7 customer support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-emerald-400 mr-2">✓</span>
                                    <span>Secure transactions</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold mb-4">What Sets Us Apart</h2>
                        <p className="text-gray-300 text-lg">
                            We combine technology with human expertise to deliver exceptional real estate services
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900 p-6 rounded-lg"
                            >
                                <div className="text-emerald-400 mb-4">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-4xl font-bold text-emerald-400 mb-2">10K+</div>
                            <div className="text-gray-300">Properties Listed</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="text-4xl font-bold text-emerald-400 mb-2">5K+</div>
                            <div className="text-gray-300">Happy Clients</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
                            <div className="text-gray-300">Cities Covered</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
                            <div className="text-gray-300">Expert Agents</div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 