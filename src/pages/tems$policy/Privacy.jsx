"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-extrabold text-[#9d3089] mb-4 text-center border-b-slate-200">
        Privacy Policy
      </h1>
      <p className="text-md text-gray-600 text-center">
        Please read our Privacy Policy carefully before using jajamblockprints services.
      </p>

      {privacySections.map((section, index) => (
        <div
          key={index}
          className="mt-10 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#9d3089]"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#9d3089]">{section.title}</h2>
          {section.content.map((para, idx) => (
            <p key={idx} className="mb-3 text-justify text-gray-700 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      ))}

      <div className="mt-12 text-sm text-gray-600 space-y-2 border-t border-gray-300 pt-6">
        <p>
          <strong>Shop by Craft:</strong>{" "}
          <span className="text-gray-700">
            Jajam Block Print | Dabu Print | Sanganeri Print | Discharge Print | Tie And Dye Print | Black And White Print
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

const privacySections = [
  {
    title: "Personal Information",
    content: [
      "https://jajamblockprints.com DOES NOT trade or sell your personal information in any manner, except as specified herein or if you express your consent towards the same.",
      "Personal Information provided by you is used only:",
      "(a) To facilitate your use of the website;",
      "(b) To respond to your concerns, inquiries or address your requests for information about the various services we offer;",
      "(c) To provide you with information about Company’s services/products and send you information, materials and offers from the Company;",
      "(d) To send you important information regarding the website, changes to Company’s Terms of Service and various policies and/or other miscellaneous information;",
      "(e) To send you surveys and marketing communications that the Company believes may be of interest to you;",
      "(f) To personalize your experience on our website;",
      "(g) If you purchase any content or avail of any service from the website, to complete and fulfill Your purchase, for example, to have your payments processed, communicate with you regarding Your purchase and provide you with related customer service;",
      "(h) To administer product downloads;",
      "(i) To conduct internal reviews and data analysis for the Website (e.g., to determine the number of visitors to specific pages within the website);",
      "(j) To improve the services, content and advertising on the website;",
      "(k) To protect the integrity of the website; and",
      "(l) To comply with legal requirements and disclosures provided under the laws of India."
    ]
  },
  {
    title: "Security",
    content: [
      "The security of your personal information is very important to the Company. We have aligned physical, administrative and technical safeguards designed to protect your personal information from unauthorized access.",
      "In addition, the Company uses standard security protocols and mechanisms to exchange the transmission of sensitive data such as credit card details.",
      "In the event of any breach of your personal information, the Company will notify you of it by email or fax and will restore the integrity of the data system."
    ]
  },
  {
    title: "Advertising",
    content: [
      "The Company uses some third parties to administer a limited set of advertisements on our website and portals.",
      "During this process, no personal information is leaked. However, aggregate profile information, such as user community, may be used in the selection of advertising to make sure that it has relevance to the user.",
      "On some banner ads, an embedded pixel may be present, and while it does not associate with a cookie or other personal profile information, it may return session connection information that allows advertisers to better determine how many individual users have clicked on the ad banner."
    ]
  },
  {
    title: "User Discretion",
    content: [
      "You can always choose not to provide information and in such cases, if the information required is mandatory, you will not be able to avail those services, features or contents.",
      "You can add or update your personal information on a regular basis. When you update information, the Company will keep a copy of the prior version for its records.",
      "The Company may, if you prefer, send direct advertisement mailers to you at the address given by you.",
      "You have the option to opt-out of this direct mailer by clicking at the unsubscribed link option attached to e-mail.",
      "The Company respects your privacy and if you do not want to receive any kind of communications from https://jajamblockprints.com or have any grievances to share, please report to: shreeshyamblockprints.1@gmail.com"
    ]
  },
  {
    title: "Important Disclaimer",
    content: [
      "Although the Company provides full security and secrecy to your personal information, we urge you to be careful with very sensitive information and do not share it with any third party claiming to be related to the Company on separate emails/phone calls etc.",
      "The Company disclaims any and all liabilities towards any such claims that have arisen due to your own negligence or willful misconduct and the Company takes no responsibility of the same."
    ]
  }
];
