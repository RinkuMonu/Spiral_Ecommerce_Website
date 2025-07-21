import React from "react";
import { FaTruck, FaBoxOpen, FaCreditCard, FaHeadset } from "react-icons/fa";

const DeliveryFeatures = () => {
  const features = [
    {
      icon: <FaTruck className="text-red-500 text-3xl" />,
      title: "Free Standard Delivery",
      description: "On all Orders Over $100",
    },
    {
      icon: <FaBoxOpen className="text-red-500 text-3xl" />,
      title: "Quick Delivery",
      description: "Delivery within 3 Days across US",
    },
    {
      icon: <FaCreditCard className="text-red-500 text-3xl" />,
      title: "Secure Payments",
      description: "Secure Payment Methods",
    },
    {
      icon: <FaHeadset className="text-red-500 text-3xl" />,
      title: "Top Rated Customer Service",
      description: "Quick Responses & Solutions",
    },
  ];

  return (
    <section className="bg-red-50 py-20 px-4 rounded-full m-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            {item.icon}
            <h4 className="font-bold text-base mt-2">{item.title}</h4>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DeliveryFeatures;
