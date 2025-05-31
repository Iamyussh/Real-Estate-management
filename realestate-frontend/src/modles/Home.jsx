import HeroSlider from "../components/HeroSlider";
import { FaHome, FaSearch, FaHandshake } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => {
    const features = [
        {
            icon: <FaHome className="text-4xl text-emerald-500" />,
            title: "Wide Range of Properties",
            description: "Explore our extensive collection of properties suited to your needs"
        },
        {
            icon: <FaSearch className="text-4xl text-emerald-500" />,
            title: "Smart Search",
            description: "Find your dream property with our advanced search features"
        },
        {
            icon: <FaHandshake className="text-4xl text-emerald-500" />,
            title: "Expert Agents",
            description: "Connect with professional agents to guide your journey"
        }
    ];

    return (
        <div className="bg-gray-900 min-h-screen">
            {/* Hero Section */}
            <HeroSlider 
                headingText={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Find Your Dream Property
                        </h1>
                        <p className="text-xl text-gray-300">
                            Discover the perfect place to call home
                        </p>
                    </motion.div>
                }
                button1Text="Agent Portal"
                button1Link="/agentAuth"
                button2Text="Start Browsing"
                button2Link="/properties"
            />

            {/* Features Section */}
            <section className="py-20 px-4 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                    >
                        Why Choose Us
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
                            >
                                <div className="flex flex-col items-center text-center">
                                    {feature.icon}
                                    <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-emerald-600">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold text-white mb-2">500+</h3>
                            <p className="text-emerald-100">Properties Listed</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold text-white mb-2">100+</h3>
                            <p className="text-emerald-100">Expert Agents</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-center"
                        >
                            <h3 className="text-4xl font-bold text-white mb-2">1000+</h3>
                            <p className="text-emerald-100">Happy Clients</p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;