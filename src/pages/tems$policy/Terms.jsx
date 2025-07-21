// import React from "react";
// import { ChevronRight } from "lucide-react"; // Importing the icon from Lucide

// const Terms = () => {
//   return (
//     <main>
//       <section className="breadcrumb__area include-bg pt-60 pb-60 mb-50 text-start" style={{ backgroundColor: '#f5f5f5' }}>
//         <div className="container">
//           <div className="breadcrumb__content p-relative z-index-1">
//             <h3 className="breadcrumb__title">Terms and Conditions</h3>
//             <div className="breadcrumb__list js_breadcrumb_reduce_length_on_mobile">
//               <span>
//                 <a href="index.html">Home</a>
//               </span>
//               <ChevronRight className="breadcrumb-icon" />
//               <span>Terms and Conditions</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="tp-page-area pb-80 pt-50">
//         <div className="container">
//           <div className="ck-content">
//             <h3 className="section-heading">
//               <strong>Exchange Offer</strong>
//             </h3>
//             <ul className="terms-list">
            
//               <li>
//                 <b><strong>Availability:</strong></b> The exchange offer is valid until stocks last or until the offer expires, whichever is earlier.
//               </li>
//               <li>
//                 <b><strong>Simultaneous Exchange:</strong></b> New product delivery and used product pickup will happen simultaneously.
//               </li>
//               <li>
//                 <b><strong>Cancellation and Retention:</strong></b> If you decide not to proceed with the exchange and retain the used product, you need to pay the value provided for the used product as part of the transaction and offer.
//               </li>
//               <li>
//                 <b><strong>Refund Policy:</strong></b> Refunds or returns for the exchanged or used product will not be provided.
//               </li>
             
//               <li>
//                 <b><strong>Store Limitation:</strong></b> Exchange offer is available only at selected stores.
//               </li>
//               <li>
//                 <b><strong>Model Limitation:</strong></b> Offer is applicable only on selected models.
//               </li>
//               <li>
//                 <b><strong>Quantity Limitation:</strong></b> Only one product can be exchanged for each product purchased at a discounted price.
//               </li>
//               <li>
//                 <b><strong>Discount without Exchange:</strong></b> You can avail brand new products at a discounted price, even without an old product to exchange. However, the discount percentage is higher on exchange products.
//               </li>
//               <li>
//                 <b><strong>Delivery Delay:</strong></b> Due to high demand, delivery might be slightly delayed.
//               </li>
//             </ul>

//             <h3 className="section-heading">
//               <strong>Eligibility</strong>
//             </h3>
//             <p>
//               The services of the site are available only to select geographies in India. Persons who are "incompetent to contract" within the meaning of the Indian Contract Act, 1872, including un-discharged insolvents, are not eligible to use the site.
//             </p>

//             <h3 className="section-heading">
//               <strong>License &amp; Site Access</strong>
//             </h3>
//             <p>
//               You are granted a limited sub-license to access and make personal use of this site and not to download (other than page caching) or modify it, except with express written consent.
//             </p>

//             <h3 className="section-heading">
//               <strong>Account &amp; Registration Obligations</strong>
//             </h3>
//             <p>
//               All shoppers must register and log in to place orders on the site. You must keep your account and registration details current and correct for communications related to your purchases.
//             </p>

//             <h3 className="section-heading">
//               <strong>Pricing</strong>
//             </h3>
//             <p>
//               All products listed on the site will be sold at MRP unless otherwise specified. Prices at the time of ordering will be the prices charged on the date of delivery.
//             </p>

//             <h3 className="section-heading">
//               <strong>User Agreement</strong>
//             </h3>
//             <ul className="terms-list">
//               <li>
//                 <b><strong>Non-Delivery:</strong></b> In the event of a non-delivery due to a mistake by you (e.g., wrong name or address), any extra cost incurred for redelivery will be claimed from you.
//               </li>
//               <li>
//                 <b><strong>Lawful Use:</strong></b> You agree to use the services provided by the site for lawful purposes only.
//               </li>
//               <li>
//                 <b><strong>Authentic Information:</strong></b> You will provide authentic and true information when requested.
//               </li>
//               <li>
//                 <b><strong>Sole Risk:</strong></b> You access the services available on this site and transact at your sole risk.
//               </li>
//             </ul>

//             <h3 className="section-heading">
//               <strong>Prohibited Uses</strong>
//             </h3>
//             <p>
//               You may not use the site for the following purposes:
//             </p>
//             <ul className="terms-list">
//               <li>Disseminating unlawful, harassing, libelous, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material.</li>
//               <li>Encouraging conduct that constitutes a criminal offense or results in civil liability.</li>
//               <li>Gaining unauthorized access to other computer systems.</li>
//               <li>Interfering with another person's use or enjoyment of the site.</li>
//               <li>Making, transmitting, or storing electronic copies of materials protected by copyright without the permission of the owner.</li>
//             </ul>

//             <h3 className="section-heading">
//               <strong>Colours</strong>
//             </h3>
//             <p>
//               We have made every effort to display the colours of our products accurately. However, as the actual colours you see depend on your monitor, we cannot guarantee that your monitor's display will be accurate.
//             </p>

//             <h3 className="section-heading">
//               <strong>Modification of Terms &amp; Conditions</strong>
//             </h3>
//             <p>
//               The site may modify the Terms &amp; Conditions of Use without prior notification. You should regularly review the Terms &amp; Conditions on the site.
//             </p>

//             <h3 className="section-heading">
//               <strong>Governing Law and Jurisdiction</strong>
//             </h3>
//             <p>
//               This User Agreement shall be construed in accordance with the laws of India. The courts at Kolkata shall have exclusive jurisdiction.
//             </p>

//             <h3 className="section-heading">
//               <strong>Reviews, Feedback, Submissions</strong>
//             </h3>
//             <p>
//               All reviews, comments, feedback, suggestions, and other submissions disclosed, submitted, or offered to the site shall remain the property of the site.
//             </p>

//             <h3 className="section-heading">
//               <strong>Copyright &amp; Trademark</strong>
//             </h3>
//             <p>
//               The site and its suppliers and licensors expressly reserve all intellectual property rights in all text, programs, products, processes, technology, content, and other materials that appear on this site.
//             </p>

//             <h3 className="section-heading">
//               <strong>Objectionable Material</strong>
//             </h3>
//             <p>
//               By using the site or any services provided on the site, you may encounter content that may be deemed offensive, indecent, or objectionable.
//             </p>

//             <h3 className="section-heading">
//               <strong>Indemnity</strong>
//             </h3>
//             <p>
//               You agree to defend, indemnify, and hold harmless the site, its employees, directors, officers, agents, and their successors and assigns from any claims, liabilities, damages, losses, costs, and expenses, including attorney's fees, arising out of your actions or inactions.
//             </p>

//             <h3 className="section-heading">
//               <strong>Termination</strong>
//             </h3>
//             <p>
//               This User Agreement is effective until terminated by either you or the site. You may terminate this User Agreement at any time by discontinuing further use of the site.
//             </p>

//             <h3 className="section-heading">
//               <strong>Terms and Conditions of Credit Card No Cost EMI</strong>
//             </h3>
//             <ul className="terms-list">
//               <li>The No Cost EMI facility is offered to customers making purchases on the site using eligible credit cards from selected banks.</li>
//               <li>The No Cost EMI facility is funded by the site and is available on select products.</li>
//               <li>The facility is not available for purchases made using net banking or Cash on Delivery payment methods.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         .breadcrumb__area {
//           background-color: #f5f5f5;
//           padding-top: 60px;
//           padding-bottom: 60px;
//           margin: 0 15px; /* Adding margin on both left and right */
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
//           font-family: 'PT Sans', sans-serif;
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
//           font-family: 'PT Sans', sans-serif;
//           font-size: 14px;
//           line-height: 1.6;
//           margin-bottom: 10px;
//         }

//         .container {
//           max-width: 1200px; /* Setting maximum width to ensure the content does not stretch too much on large screens */
//           margin: 0 auto;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default Terms;


//=========================================================================================================




import React, { useState } from "react";
import { ChevronRight, Check, X, Info, ArrowUpRight } from "lucide-react";

const Terms = () => {
  const [expandedSections, setExpandedSections] = useState({
    exchange: true,
    eligibility: false,
    license: false,
    account: false,
    pricing: false,
    userAgreement: false,
    prohibited: false,
    colors: false,
    modification: false,
    governing: false,
    reviews: false,
    copyright: false,
    objectionable: false,
    indemnity: false,
    termination: false,
    emi: false,
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-950 to-purple-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">Understand our policies and your rights when using our services</p>
            
            <div className="flex justify-center items-center text-sm md:text-base">
              <nav className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-lg py-2 px-4">
                <a href="/" className="hover:text-indigo-200 transition-colors">Home</a>
                <ChevronRight className="h-4 w-4 mx-1" />
                <span className="font-medium">Terms and Conditions</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                <ul className="space-y-2">
                  <li>
                    <button 
                      onClick={() => toggleSection('exchange')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.exchange ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">1</span>
                      Exchange Offer
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('eligibility')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.eligibility ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">2</span>
                      Eligibility
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('license')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.license ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">3</span>
                      License & Site Access
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('account')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.account ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">4</span>
                      Account & Registration
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('pricing')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.pricing ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">5</span>
                      Pricing
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('userAgreement')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.userAgreement ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">6</span>
                      User Agreement
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('prohibited')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.prohibited ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">7</span>
                      Prohibited Uses
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('colors')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.colors ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">8</span>
                      Colors
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('modification')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.modification ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">9</span>
                      Modification of Terms
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('governing')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.governing ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">10</span>
                      Governing Law
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('reviews')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.reviews ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">11</span>
                      Reviews & Feedback
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('copyright')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.copyright ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">12</span>
                      Copyright & Trademark
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('objectionable')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.objectionable ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">13</span>
                      Objectionable Material
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('indemnity')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.indemnity ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">14</span>
                      Indemnity
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('termination')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.termination ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">15</span>
                      Termination
                    </button>
                  </li>
                  <li>
                    <button 
                      onClick={() => toggleSection('emi')}
                      className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${expandedSections.emi ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      <span className="mr-2">16</span>
                      Credit Card EMI Terms
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            {/* Terms Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                {/* Exchange Offer Section */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                      Exchange Offer
                    </h2>
                    <button 
                      onClick={() => toggleSection('exchange')}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {expandedSections.exchange ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                  
                  {expandedSections.exchange && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                            <p><strong>Availability:</strong> The exchange offer is valid until stocks last or until the offer expires, whichever is earlier.</p>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                          <div className="flex items-start">
                            <Check className="h-5 w-5 text-blue-500 mt-0.5 mr-3 flex-shrink-0" />
                            <p><strong>Simultaneous Exchange:</strong> New product delivery and used product pickup will happen simultaneously.</p>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                          <div className="flex items-start">
                            <Info className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                            <p><strong>Cancellation and Retention:</strong> If you decide to retain the used product, you'll need to pay the value provided for it.</p>
                          </div>
                        </div>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                          <div className="flex items-start">
                            <X className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                            <p><strong>Refund Policy:</strong> Refunds or returns for exchanged products will not be provided.</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-3">Important Limitations</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="bg-indigo-100 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            </div>
                            <span><strong>Store Limitation:</strong> Available only at selected stores.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            </div>
                            <span><strong>Model Limitation:</strong> Applicable only on selected models.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            </div>
                            <span><strong>Quantity Limitation:</strong> Only one product exchange per purchase.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            </div>
                            <span><strong>Discount without Exchange:</strong> Higher discounts available with exchange.</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-indigo-100 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></div>
                            </div>
                            <span><strong>Delivery Delay:</strong> Possible delays due to high demand.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Eligibility Section */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                      Eligibility
                    </h2>
                    <button 
                      onClick={() => toggleSection('eligibility')}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {expandedSections.eligibility ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                  
                  {expandedSections.eligibility && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        The services of the site are available only to select geographies in India. 
                        Persons who are "incompetent to contract" within the meaning of the Indian 
                        Contract Act, 1872, including un-discharged insolvents, are not eligible to 
                        use the site.
                      </p>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <p className="text-indigo-800 flex items-start">
                          <Info className="h-5 w-5 text-indigo-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span>You must be 18 years or older and legally capable of entering into binding contracts to use our services.</span>
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* License & Site Access Section */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                      License & Site Access
                    </h2>
                    <button 
                      onClick={() => toggleSection('license')}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {expandedSections.license ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                  
                  {expandedSections.license && (
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        You are granted a limited sub-license to access and make personal use of this site 
                        and not to download (other than page caching) or modify it, except with express 
                        written consent.
                      </p>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h3 className="font-bold text-gray-900 mb-2">License Restrictions</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <X className="w-3 h-3 text-gray-700" />
                            </div>
                            <span>No resale or commercial use of the site or its contents</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <X className="w-3 h-3 text-gray-700" />
                            </div>
                            <span>No collection or use of any product listings or descriptions</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <X className="w-3 h-3 text-gray-700" />
                            </div>
                            <span>No derivative use of the site or its contents</span>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                              <X className="w-3 h-3 text-gray-700" />
                            </div>
                            <span>No downloading or copying of account information</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                {/* Other sections would follow the same pattern */}
                <div className="mb-12">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                      <span className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-3">16</span>
                      Credit Card EMI Terms
                    </h2>
                    <button 
                      onClick={() => toggleSection('emi')}
                      className="text-indigo-600 hover:text-indigo-800 transition-colors"
                    >
                      {expandedSections.emi ? 'Collapse' : 'Expand'}
                    </button>
                  </div>
                  
                  {expandedSections.emi && (
                    <div className="space-y-6">
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <p>The No Cost EMI facility is offered to customers making purchases using eligible credit cards from selected banks.</p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          <p>The No Cost EMI facility is funded by the site and is available on select products.</p>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-yellow-500 mt-0.5 mr-3 flex-shrink-0" />
                          <p>The facility is not available for purchases made using net banking or Cash on Delivery payment methods.</p>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-4">EMI Card Partners</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-10" />
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-10" />
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-10" />
                          </div>
                          <div className="bg-white p-4 rounded-lg border border-gray-200 flex items-center justify-center">
                            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Acceptance Section */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="bg-indigo-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-indigo-900 mb-4">Acceptance of Terms</h3>
                    <p className="text-indigo-800 mb-6">
                      By using our website and services, you acknowledge that you have read, 
                      understood, and agree to be bound by these Terms and Conditions.
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md">
                        I Accept the Terms
                      </button>
                      <button className="border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition-colors">
                        Download PDF Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;