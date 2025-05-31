import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';
import FAQ from '../components/FAQ';

const ContactSupport = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Contact & Support</h1>
        <p className="text-xl text-gray-300">We're here to help you with any questions or concerns</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Get in Touch</h2>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-white">Our Location</h3>
                <p className="text-gray-300">Blooms Coliving Pg and Astra Coliving pg, Brookfield, Bengaluru</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaPhone className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-white">Phone Number</h3>
                <p className="text-gray-300">+91 8279780197</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaEnvelope className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-white">Email Address</h3>
                <p className="text-gray-300">support@realestate.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <FaClock className="text-yellow-500 mt-1 mr-4" />
              <div>
                <h3 className="font-medium text-white">Business Hours</h3>
                <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-white mb-6">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8">
          <FAQ />
        </div>
      </div>
    </div>
  );
};

export default ContactSupport; 