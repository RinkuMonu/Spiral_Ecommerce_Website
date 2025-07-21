import React from "react";
import { FaShoppingBag, FaClock, FaClipboardCheck } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaShoppingBag className="text-red-500 text-3xl" />,
      title: "Shop Styles",
      description:
        "Browse our curated collections for Men, Women, Kids & Accessories.",
    },
    {
      icon: <FaClock className="text-red-500 text-3xl" />,
      title: "Pick Your Fit",
      description:
        "Find your perfect size with our detailed fit guides and style notes for every piece.",
    },
    {
      icon: <FaClipboardCheck className="text-red-500 text-3xl" />,
      title: "Checkout Fast",
      description:
        "Enjoy a quick and secure checkout experience with flexible payment options.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-red-100 to-whitepy-16 px-4 py-8 rounded-t-[100px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">How It Works</h2>
        <p className="text-lg text-gray-700">Just Pick, Pack and Ship</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-3xl shadow-sm p-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-4 border-r last:border-r-0 px-4"
          >
            <div className="w-16 h-16 border-2 border-red-500 rounded-full flex items-center justify-center">
              {step.icon}
            </div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-600 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
