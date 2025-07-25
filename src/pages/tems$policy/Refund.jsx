// Full code for Exchange & Return page styled like Terms of Service
"use client";

import React from "react";

export default function ExchangeReturn() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-extrabold text-[#9d3089] mb-4 text-center border-b-slate-200 border-b pb-2 border-gray-300">Exchange & Return Policy</h1>

      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#9d3089] space-y-4">
        <p className="text-justify text-gray-700 leading-relaxed">
          Return will not be accepted if the customer does not like the material or color of the dress. We suggest that the customer read the product description before ordering.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Exchange is accepted if the customer wants to exchange the dress with a different dress of similar or higher value. (We do not give free shipping for exchanged dresses. The original product is sent by the customer at their own expense. If the customer pays shipping charges for exchanges, then we can arrange reverse pickup (₹80) and dispatch a new parcel (₹70). In total, ₹150 shipping charges must be paid by the customer.)
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Return will not be accepted if the customer does not like the color of the dress. We try our best to ensure exact colors as shown. However, 5–10% variation is unavoidable due to lighting effects.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Return will not be accepted if the customer is not satisfied, as we commit to deliver what we have displayed and for the prices we have charged which is the best possible.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Return will not be accepted if the product is washed or worn.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Any small issues like tassels pulled, which might happen during transit, can be easily fixed by the customer.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          One time exchange is only accepted.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Returns are accepted ONLY IF THERE IS A MANUFACTURING DEFECT. The customer must inform us within 2 days of delivery. The item should be dispatched back to us within 4 days after delivery. Only after receiving the garment, an email will be sent. Then we will dispatch the replacement item.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Every suit material at Jajam Block Print goes through 3–4 levels of stringent quality checks. Any mischievous act of damaging the product by the customer will result in forfeiting the claim for both exchange and return.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          If a product is wrongly delivered, we will arrange reverse pickup and send the correct product. A 6–10% color difference may occur due to screen resolution and lights, so please do not expect an exchange or return for the same.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Our policy lasts for 7 days. If 7 days have gone by since your purchase, unfortunately we can’t offer a refund or exchange. To be eligible for a return, your item must be unused, unwashed, and in the same condition that you received it. It must also be in the original packaging.
        </p>

        <h2 className="text-xl font-semibold text-[#9d3089] pt-4">Refunds</h2>

        <p className="text-justify text-gray-700 leading-relaxed">
          Refunds (if applicable): Once your return is received and inspected, we will send you an email or WhatsApp to notify you. We will also notify you of the approval or rejection of your refund. If approved, your refund will be processed and credited within 5–6 banking days. We request customers to share their bank details.
        </p>

        <p className="text-justify text-gray-700 leading-relaxed">
          Late or missing refunds (if applicable): If you haven’t received a refund yet, please check with your bank or credit card provider. If you've done this and still haven’t received the refund, please contact us at <a href="mailto:jajamblockprint@gmail.com" className="text-blue-600">jajamblockprint@gmail.com</a>.
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
