import HeroSlider from "../components/HeroSlider";
import { FaHome, FaSearch, FaHandshake, FaBuilding, FaMapMarkerAlt, FaChartLine, FaShieldAlt, FaUserFriends } from 'react-icons/fa';
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

    const propertyTypes = [
        {
            icon: <FaBuilding className="text-3xl text-emerald-500" />,
            title: "Apartments",
            count: "2,500+"
        },
        {
            icon: <FaHome className="text-3xl text-emerald-500" />,
            title: "Villas",
            count: "1,200+"
        },
        {
            icon: <FaMapMarkerAlt className="text-3xl text-emerald-500" />,
            title: "Plots",
            count: "800+"
        },
        {
            icon: <FaBuilding className="text-3xl text-emerald-500" />,
            title: "Commercial",
            count: "500+"
        }
    ];

    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Property Buyer",
            text: "Found my dream home within weeks. The platform made it so easy to connect with verified sellers."
        },
        {
            name: "Priya Patel",
            role: "Property Seller",
            text: "Great experience selling my property. The platform helped me reach genuine buyers quickly."
        },
        {
            name: "Amit Kumar",
            role: "Real Estate Agent",
            text: "As an agent, this platform has helped me expand my client base and close deals faster."
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

            {/* Property Types Section */}
            <section className="py-20 px-4 bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                    >
                        Explore Property Types
                    </motion.h2>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {propertyTypes.map((type, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-700 transition-all duration-300"
                            >
                                {type.icon}
                                <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                                    {type.title}
                                </h3>
                                <p className="text-emerald-400 font-bold">
                                    {type.count}
                                </p>
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

            {/* Testimonials Section */}
            <section className="py-20 px-4 bg-gray-900">
                <div className="max-w-6xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
                    >
                        What Our Clients Say
                    </motion.h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-gray-800 p-6 rounded-lg"
                            >
                                <div className="flex flex-col">
                                    <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                                    <div className="mt-auto">
                                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                                        <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="bg-gray-900 text-gray-300">
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
                            <p className="text-sm leading-relaxed">
                                RealEstateConnect is an advertising platform to help connect buyers and sellers and is not a party to any transaction, 
                                nor shall be responsible or liable to resolve any disputes between them.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Properties</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Agents</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                            <ul className="space-y-2">
                                <li>Email: info@realestateconnect.com</li>
                                <li>Phone: +91 1234567890</li>
                                <li>Address: 123 Real Estate Street, City, State</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-emerald-400 transition-colors">RERA Compliance</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 pt-8">
                        <div className="text-sm leading-relaxed">
                            <p className="mb-4">
                                Any information provided on this website, including facts and figures, should be verified independently before entering into any transaction. 
                                Information on projects can be verified from RERA website of respective state where the Project is located; and RealEstateConnect being 
                                an advertising platform has not validated the compliance of these Projects under RERA.
                            </p>
                            <p className="mb-4">
                                RealEstateConnect is neither functioning as a Real Estate Agent nor has any means to ascertain any actual real estate sale/purchase transactions 
                                made by the users of this Website or to identify the parties to it and therefore we disclaim all liability and responsibility under RERA.
                            </p>
                            <p className="text-center mt-8">
                                © {new Date().getFullYear()} RealEstateConnect. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;