import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I schedule a property viewing?",
      answer: "You can schedule a property viewing through our website by selecting the property you're interested in and clicking the 'Schedule Viewing' button. Our agents will contact you to confirm the appointment."
    },
    {
      question: "What documents do I need to rent a property?",
      answer: "Typically, you'll need proof of income, identification documents, and references. Our agents will provide you with a complete list of required documents during the application process."
    },
    {
      question: "How can I list my property for sale?",
      answer: "You can list your property by contacting our sales team through the 'List Your Property' section on our website. We'll guide you through the process and help you get the best value for your property."
    },
    {
      question: "What are your service fees?",
      answer: "Our service fees vary depending on the type of service you require. For detailed information about our fees, please contact our sales team or visit our pricing page."
    },
    {
      question: "How long does the property buying process take?",
      answer: "The property buying process typically takes 4-8 weeks, depending on various factors such as property type, financing, and legal requirements. Our agents will guide you through each step of the process."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
              {openIndex === index ? (
                <FaChevronUp className="text-gray-500" />
              ) : (
                <FaChevronDown className="text-gray-500" />
              )}
            </div>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ; 