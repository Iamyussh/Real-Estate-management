import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FaSearch, FaFilter, FaHome, FaBed, FaBath, FaRuler, FaMapMarkerAlt } from 'react-icons/fa';

const PropertyBrowse = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        city: '',
        locality: '',
        type: '',
        minPrice: '',
        maxPrice: ''
    });
    const searchInputRef = useRef(null);
    const autocompleteRef = useRef(null);

    const indianCities = [
        { state: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli", "Mangalore"] },
        { state: "Maharashtra", cities: ["Mumbai", "Pune", "Nagpur", "Nashik"] },
        { state: "Delhi NCR", cities: ["New Delhi", "Gurgaon", "Noida", "Faridabad"] },
        { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai", "Salem"] },
        { state: "Telangana", cities: ["Hyderabad", "Warangal", "Karimnagar"] },
        { state: "Gujarat", cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"] },
        { state: "West Bengal", cities: ["Kolkata", "Siliguri", "Durgapur"] },
        { state: "Rajasthan", cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota"] },
        { state: "Kerala", cities: ["Kochi", "Thiruvananthapuram", "Kozhikode"] },
        { state: "Punjab", cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar"] }
    ];

    // Initialize Google Places Autocomplete
    useEffect(() => {
        if (window.google && searchInputRef.current) {
            const options = {
                componentRestrictions: { country: 'in' },
                types: ['locality', 'sublocality'],
                fields: ['address_components', 'geometry', 'name']
            };

            autocompleteRef.current = new window.google.maps.places.Autocomplete(
                searchInputRef.current,
                options
            );

            autocompleteRef.current.addListener('place_changed', () => {
                const place = autocompleteRef.current.getPlace();
                if (place.address_components) {
                    const locality = place.name;
                    setFilters(prev => ({
                        ...prev,
                        locality
                    }));
                }
            });
        }
    }, [filters.city]); // Re-initialize when city changes

    // Load Google Maps script
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&libraries=places`;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    // Fetch properties with filters
    useEffect(() => {
        const fetchProperties = async () => {
            try {
                setLoading(true);
                const queryParams = new URLSearchParams();
                if (filters.city) queryParams.append('city', filters.city);
                if (filters.locality) queryParams.append('locality', filters.locality);
                if (filters.type) queryParams.append('type', filters.type);
                if (filters.minPrice) queryParams.append('minPrice', filters.minPrice);
                if (filters.maxPrice) queryParams.append('maxPrice', filters.maxPrice);

                const response = await axios.get(`http://localhost:8080/api/properties?${queryParams.toString()}`);
                setProperties(response.data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchProperties();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [filters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetFilters = () => {
        setFilters({
            city: '',
            locality: '',
            type: '',
            minPrice: '',
            maxPrice: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-900">
            {/* Search and Filter Section */}
            <div className="bg-gray-800 py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap gap-4 items-start">
                        {/* Main Search and Filters */}
                        <div className="flex-1 space-y-4">
                            {/* Search Bar */}
                            <div className="relative">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    ref={searchInputRef}
                                    type="text"
                                    placeholder="Search by locality..."
                                    className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    value={filters.locality}
                                    onChange={(e) => setFilters(prev => ({ ...prev, locality: e.target.value }))}
                                />
                            </div>

                            {/* Other Filters */}
                            <div className="flex flex-wrap gap-4">
                                <select
                                    name="type"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    value={filters.type}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">All Types</option>
                                    <option value="Apartment">Apartment</option>
                                    <option value="House">House</option>
                                    <option value="Villa">Villa</option>
                                </select>

                                <input
                                    type="number"
                                    name="minPrice"
                                    placeholder="Min Price"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    value={filters.minPrice}
                                    onChange={handleFilterChange}
                                />

                                <input
                                    type="number"
                                    name="maxPrice"
                                    placeholder="Max Price"
                                    className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                    value={filters.maxPrice}
                                    onChange={handleFilterChange}
                                />

                                <button
                                    onClick={resetFilters}
                                    className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg transition duration-300"
                                >
                                    Reset Filters
                                </button>
                            </div>
                        </div>

                        {/* City Dropdown - Now on the right side */}
                        <div className="w-64">
                            <div className="relative">
                                <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <select
                                    name="city"
                                    className="w-full pl-10 pr-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none"
                                    value={filters.city}
                                    onChange={handleFilterChange}
                                >
                                    <option value="">Select City</option>
                                    {indianCities.map((stateGroup, index) => (
                                        <optgroup key={index} label={stateGroup.state}>
                                            {stateGroup.cities.map((city, cityIndex) => (
                                                <option key={cityIndex} value={city}>
                                                    {city}
                                                </option>
                                            ))}
                                        </optgroup>
                                    ))}
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Properties Grid */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                {loading ? (
                    <div className="text-center text-white">Loading properties...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map((property, index) => (
                            <motion.div
                                key={property.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                {/* Property Image */}
                                <div className="relative h-48">
                                    <img
                                        src={property.imageUrl || 'https://via.placeholder.com/400x300'}
                                        alt={property.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded">
                                        ₹{property.price.toLocaleString()}
                                    </div>
                                </div>

                                {/* Property Details */}
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-white mb-2">{property.title}</h3>
                                    <p className="text-gray-400 mb-4">{property.address}</p>

                                    {/* Property Features */}
                                    <div className="flex items-center gap-4 text-gray-400">
                                        <div className="flex items-center gap-1">
                                            <FaBed />
                                            <span>{property.bedrooms || 'N/A'} Beds</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaBath />
                                            <span>{property.bathrooms || 'N/A'} Baths</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaRuler />
                                            <span>{property.area || 'N/A'} sqft</span>
                                        </div>
                                    </div>

                                    {/* Contact Button */}
                                    <button className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white py-2 rounded transition duration-300">
                                        Contact Agent
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}

                {/* No Results Message */}
                {!loading && properties.length === 0 && (
                    <div className="text-center text-gray-400">
                        No properties found matching your criteria.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PropertyBrowse;