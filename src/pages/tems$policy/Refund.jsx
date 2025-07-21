// import React from "react";
// import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

// const Refund = () => {
//   return (
//     <main>
//       <section
//         className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start"
//         style={{ backgroundColor: "#f5f5f5" }}
//       >
//         <div className="container">
//           <div className="breadcrumb__content p-relative z-index-1">
//             <h3 className="breadcrumb__title">Refund Policy</h3>
//             <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
//               <span>
//                 <a href="index.html">Home</a>
//               </span>
//               <ChevronRight className="breadcrumb-icon" />
//               <span>Refund Policy</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tp-page-area pb-80 pt-50">
//         <div className="container">
//           <div className="ck-content">
//             <h3 className="section-heading">
//               <strong>Return And Refund Policy</strong>
//             </h3>

//             <h3 className="section-heading">
//               <strong>Return Policy</strong>
//             </h3>
//             <ul className="terms-list">
//               <li>
//                 All Products purchased from the Website enjoy Ten (10) days
//                 Return Policy.
//               </li>
//               <li>
//                 Any Product purchased from the Website can be returned to the
//                 Company within Ten (10) days of delivery by placing a Cancel
//                 Order request by logging a call with the Company’s Customer Care
//                 Centre at 9660339514 (Mon to Sat-10AM to 6PM).
//               </li>
//               <li>
//                 Any Product purchased from the Website can be returned only if
//                 the Product is damaged, defective, or different from what was
//                 ordered.
//               </li>
//               <li>
//                 The User shall ensure not to accept delivery of any Product
//                 whose original packaging is damaged or tampered in any manner.
//               </li>
//               <li>
//                 If the Product is damaged/defective/different from what was
//                 ordered, the User must immediately inform the Company’s Customer
//                 Care Centre, and the Company will arrange for replacement or a
//                 refund of the price, including shipping charges if applicable.
//               </li>
//               <li>
//                 In case of Cancellation (Return/Exchange) after delivery, the
//                 Customer must cooperate fully to return the Product with all
//                 original packaging, manuals, accessories, freebies, and other
//                 materials received with the Product. Refund or exchange will
//                 only be processed after receipt of the product.
//               </li>
//             </ul>

//             <p className="section-text">
//               All free gifts, in original packing and unused condition, must be
//               returned along with the Product in case of cancellation of the
//               Product with which the free gift(s) were given.
//             </p>

//             <h3 className="section-heading">
//               <strong>Refund Policy</strong>
//             </h3>
//             <ul className="terms-list">

//               <li>
//                 Any cancellation/exchange in accordance with the above terms
//                 qualifies for payment reversal or replacement of the Product
//                 depending on availability and User preference.
//               </li>
//               <li>
//                 Refunds for cancellations before delivery will be subject to a
//                 2% deduction plus applicable taxes of the Product Price
//                 (Transaction value) as banking and transaction charges. The
//                 balance amount will be processed for refund.
//               </li>
//               <li>
//                 Refunds will be initiated within Ten (10) working days of
//                 receipt of the Request for Cancellation or after the Company’s
//                 logistics partner picks up the Product from the User’s place.
//                 The refund will be credited to the User’s bank/credit card
//                 account based on banking channels’ processing time.
//                 If approved, you’ll be automatically refunded on your original
//                 payment method within 10 business days.

//               </li>
//               <li>
//                 Refunds will be credited to the account from which payment was
//                 made.
//               </li>
//               <li>
//                 Interest Fee Reversal: If an EMI facility was availed for the
//                 cancelled transaction, the interest fee debited to the User’s
//                 card will be reversed as per the bank’s terms. The User should
//                 contact the card-issuing bank for interest refund procedures.
//               </li>
//             </ul>

//             <p className="section-text">
//               The above terms and conditions in respect to refunds are referred
//               to as the "Refund Policy."
//             </p>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .breadcrumb__area {
//           background-color: #f5f5f5;
//           padding-top: 60px;
//           padding-bottom: 60px;
//           margin: 0 15px;
//         }

//         .breadcrumb__content h3 {
//           font-size: 24px;
//           font-weight: bold;
//         }

//         .breadcrumb__list {
//           font-size: 16px;
//         }

//         .breadcrumb-icon {
//           margin: 0 8px;
//         }

//         .section-heading {
//           background-color: #f2f2f2;
//           font-family: "PT Sans", sans-serif;
//           font-size: 21px;
//           font-weight: bold;
//           padding: 10px 0;
//           margin: 20px 0;
//         }

//         .terms-list {
//           list-style: none;
//           padding-left: 0;
//           margin-left: 15px;
//         }

//         .terms-list li {
//           font-family: "PT Sans", sans-serif;
//           font-size: 14px;
//           line-height: 1.6;
//           margin-bottom: 10px;
//         }

//         .section-text {
//           font-family: "PT Sans", sans-serif;
//           font-size: 14px;
//           line-height: 1.4;
//           margin-top: 0;
//           margin-bottom: 10px;
//           color: #777;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default Refund;




import React from "react";
import { ChevronRight, ShieldCheck, RotateCcw, Package, CreditCard, BadgeCheck } from "lucide-react";

const Refund = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">

      {/* Breadcrumb */}
      <div className="bg-white py-6 border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-gray-500">
            <a href="#" className="hover:text-indigo-600 transition-colors">Home</a>
            <ChevronRight className="mx-2" size={16} />
            <span className="text-indigo-600 font-medium">Refund Policy</span>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-gray-800">Our Refund Policy</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            We want you to be completely satisfied with your purchase. Please review our return and refund policy below.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Policy Sections</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#return-policy" className="flex items-center text-gray-600 hover:text-indigo-600 font-medium group">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-indigo-600 transition-colors"></div>
                    Return Policy
                  </a>
                </li>
                <li>
                  <a href="#refund-policy" className="flex items-center text-gray-600 hover:text-indigo-600 font-medium group">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-indigo-600 transition-colors"></div>
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#process" className="flex items-center text-gray-600 hover:text-indigo-600 font-medium group">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-indigo-600 transition-colors"></div>
                    Refund Process
                  </a>
                </li>
                <li>
                  <a href="#conditions" className="flex items-center text-gray-600 hover:text-indigo-600 font-medium group">
                    <div className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-indigo-600 transition-colors"></div>
                    Conditions
                  </a>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <h4 className="font-medium text-indigo-800 flex items-center">
                  <ShieldCheck className="mr-2" size={18} />
                  Need Help?
                </h4>
                <p className="mt-2 text-sm text-gray-600">
                  Contact our support team for assistance with returns or refunds.
                </p>
                <a href="#" className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800">
                  Contact Support →
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              {/* Return Policy Section */}
              <section id="return-policy" className="p-6 border-b border-gray-100">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <RotateCcw className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Return Policy</h2>
                    <p className="mt-2 text-gray-600">
                      We offer a 10-day return policy for all products purchased from our store.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
                      Eligibility
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Products must be returned within 10 days of delivery. Items must be in original condition with all packaging and accessories.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                    <h3 className="font-semibold text-gray-800 flex items-center">
                      <div className="w-3 h-3 rounded-full bg-indigo-600 mr-2"></div>
                      How to Return
                    </h3>
                    <p className="mt-2 text-gray-600 text-sm">
                      Contact our Customer Care at 9660339514 (Mon-Sat, 10AM-6PM) to initiate a return. We'll provide return instructions.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Points</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <BadgeCheck className="text-green-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-600">Products must be damaged, defective, or different from what was ordered</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="text-green-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-600">Do not accept delivery if packaging is damaged or tampered</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="text-green-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-600">Immediately contact customer care for damaged/defective items</span>
                    </li>
                    <li className="flex items-start">
                      <BadgeCheck className="text-green-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
                      <span className="text-gray-600">Return all original packaging, manuals, accessories, and freebies</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Refund Policy Section */}
              <section id="refund-policy" className="p-6 border-b border-gray-100">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-lg mr-4">
                    <CreditCard className="text-indigo-600" size={24} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">Refund Policy</h2>
                    <p className="mt-2 text-gray-600">
                      Once your return is received and inspected, we will process your refund.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Refund Type
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Processing Time
                          </th>
                          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Deductions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Pre-delivery cancellation
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            3-5 business days
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            2% + taxes
                          </td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            Post-delivery return
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            10 business days
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            None
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Important Information</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                        1
                      </div>
                      <span className="text-gray-600">Refunds are processed to the original payment method</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                        2
                      </div>
                      <span className="text-gray-600">For EMI transactions, interest fees will be reversed by your bank</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-100 text-indigo-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                        3
                      </div>
                      <span className="text-gray-600">Refunds include shipping charges if applicable</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Refund Process */}
              <section id="process" className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Refund Process</h2>

                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-100"></div>

                  <div className="relative pl-16 pb-10">
                    <div className="absolute left-8 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center -ml-3">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div className="bg-indigo-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-indigo-700">Initiate Return</h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        Contact our customer care within 10 days of delivery to request a return.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-16 pb-10">
                    <div className="absolute left-8 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center -ml-3">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div className="bg-indigo-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-indigo-700">Package & Ship</h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        Pack the item securely with all original packaging and accessories. We'll arrange pickup.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-16 pb-10">
                    <div className="absolute left-8 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center -ml-3">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div className="bg-indigo-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-indigo-700">Inspection</h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        Our team will inspect the returned item within 2 business days of receipt.
                      </p>
                    </div>
                  </div>

                  <div className="relative pl-16">
                    <div className="absolute left-8 top-0 w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center -ml-3">
                      <span className="text-white font-bold text-sm">4</span>
                    </div>
                    <div className="bg-indigo-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-indigo-700">Refund Issued</h3>
                      <p className="mt-2 text-gray-600 text-sm">
                        Once approved, your refund will be processed within 10 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Conditions */}
              <section id="conditions" className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Conditions & Exceptions</h2>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-5">
                  <div className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800">Non-returnable Items</h3>
                      <ul className="mt-2 text-amber-700 text-sm list-disc pl-5 space-y-1">
                        <li>Personalized or custom-made products</li>
                        <li>Downloadable software products</li>
                        <li>Gift cards</li>
                        <li>Perishable goods (food, flowers, etc.)</li>
                        <li>Intimate or sanitary products</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Additional Conditions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <Package className="text-gray-600" size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Original Packaging</h4>
                        <p className="mt-1 text-gray-600 text-sm">
                          Items must be returned in original packaging with all tags attached.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Time Limit</h4>
                        <p className="mt-1 text-gray-600 text-sm">
                          Returns must be initiated within 10 days of delivery.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Proof of Purchase</h4>
                        <p className="mt-1 text-gray-600 text-sm">
                          Please retain your order number for all return requests.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-4 border border-gray-200 rounded-lg">
                      <div className="bg-gray-100 p-2 rounded-full mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 13.047 14.01c-.04.3-.25.54-.546.66-.297.12-.624.08-.888-.08l-3.11-1.85-3.11 1.85a1 1 0 01-1.342-.42 1 1 0 01-.12-.582l1.1-6.81L3.033 3.74a1 1 0 01.566-1.243 1 1 0 011.244.566L6 7.2l1.156-5.13A1 1 0 018 2h4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Free Gifts</h4>
                        <p className="mt-1 text-gray-600 text-sm">
                          All free gifts must be returned unused with the product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Support Card */}
            <div className="mt-8 bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 text-white">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">Need help with a return?</h3>
                    <p className="mt-2 opacity-90 max-w-lg">
                      Our customer support team is ready to assist you with any questions about returns or refunds.
                    </p>
                    <div className="mt-4 flex items-center">
                      <div className="bg-white text-indigo-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm opacity-80">Call us at</div>
                        <div className="text-xl font-bold">9660339514</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0">
                    <button className="bg-white text-indigo-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center">
                      Contact Support
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Refund;