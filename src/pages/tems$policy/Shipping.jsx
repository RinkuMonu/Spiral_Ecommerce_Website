// Full code for Shipping & Delivery page styled like Terms of Service
"use client";

import React from "react";

export default function ShippingDelivery() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-extrabold text-[#9d3089] mb-4 text-center border-b-slate-200 border-b pb-4 border-gray-300">Shipping & Delivery</h1>

      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#9d3089]">
        <p className="mb-4 text-justify leading-relaxed text-gray-700">
          It takes approx. <strong>5 - 8 working days</strong> to deliver your product at your doorstep. Sometimes delivery may take longer due to Bad weather, Flight delays, Political disruptions, or Other unforeseen circumstances.
        </p>

        <p className="mb-4 text-justify leading-relaxed text-gray-700">
          In such cases, our customer support proactively will be in touch with you. Also, we will not be able to compensate for any mental agony caused due to delay in delivery. The customer can cancel the order at any moment of time if the delivery time exceeds the expected delivery time. If it is a prepaid order, the customer will be refunded the amount as soon as the order is successfully cancelled.
        </p>

        <p className="mb-4 text-justify leading-relaxed text-gray-700">
          We deliver in almost every part of India (subject to confirmation from courier vendor).
        </p>

        <p className="mb-4 text-justify leading-relaxed text-gray-700">
          Orders above <strong>INR 999</strong> will be eligible for <strong>free shipping</strong>. Below that, Rs. 100 will be levied as Shipping Charges.
        </p>

        <p className="mb-2 text-justify leading-relaxed text-gray-700">
          <strong>Note:</strong> Minimum Purchase Of <strong>500</strong> to Maximum <strong>10000</strong> Is Available On Cash Delivery.
        </p>
      </div>

      <div className="mt-12 text-sm text-gray-600 space-y-2 border-t border-gray-300 pt-6">
        <p>
          <strong>Shop by Craft:</strong>{" "}
          <span className="text-gray-700">
            Jajam Block Print | Dabu Print | Sanganeri Print | Discharge Print | Tine And Dye Print | Black And White Print
          </span>
        </p>
        <p>
          <strong>Shop by Collection:</strong>{" "}
          <span className="text-gray-700">
            Cotton Suit Sets | Cotton Suit With Chiffon Dupatta | Cotton Suit With Cotton Dupatta | Cotton Suit With Kota Doria Dupatta | Maheshwari Silk Suit | Chanderi Silk Suit Sets
          </span>
        </p>
      </div>
    </div>
  );
}
