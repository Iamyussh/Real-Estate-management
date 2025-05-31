import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const footerSections = [
        {
            title: "Top Builders",
            links: [
                "Prestige Group",
                "Sobha Limited",
                "Kolte Patil Developers",
                "Godrej Properties",
                "Brigade Group",
                "Puravankara",
                "Parsvnath Developers",
                "Unitech",
                "Ansal API",
                "Amrapali Group"
            ]
        },
        {
            title: "Popular Searches",
            links: [
                "Builders in India",
                "Real Estate in India",
                "Property in bangalore",
                "Property in mumbai",
                "Property in pune",
                "Property in gurgaon",
                "Cities in India",
                "Properties in India"
            ]
        },
        {
            title: "Property Types",
            links: [
                "Apartments For Sale In India",
                "Villas in India",
                "New Apartments For Sale In India",
                "Upcoming Apartments For Sale In India",
                "Ready To Move Apartments In India",
                "Under Construction Property in India",
                "Plot For Sale In India",
                "Ongoing Projects in India"
            ]
        },
        {
            title: "Properties by City",
            links: [
                "Properties For Sale In bangalore",
                "Properties For Sale In mumbai",
                "Properties For Sale In pune",
                "Properties For Sale In gurgaon",
                "Properties For Sale In hyderabad"
            ]
        }
    ];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {footerSections.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-lg font-semibold text-white mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <Link 
                                            to={`/search?q=${encodeURIComponent(link)}`}
                                            className="hover:text-emerald-400 transition-colors duration-200"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Real Estate Management System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 