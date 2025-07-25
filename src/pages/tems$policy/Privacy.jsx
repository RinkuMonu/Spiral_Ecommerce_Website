// Full code with complete Privacy Policy content injected and styled like Terms of Service
"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-extrabold text-[#9d3089] mb-4 text-center border-b-slate-200">Privacy Policy</h1>
      <p className="text-md text-gray-600 text-center" >Please read our Privacy Policy carefully before using Jajam Block Print services.</p>


      {privacySections.map((section, index) => (
        <div
          key={index}
          className="mt-10 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-[#9d3089]"
        >
          <h2 className="text-2xl font-semibold mb-4 text-[#9d3089]">{section.title}</h2>
          {section.content.map((para, idx) => (
            <p key={idx} className="mb-3 text-justify text-gray-700 leading-relaxed">{para}</p>
          ))}
        </div>
      ))}

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

const privacySections = [
  {
    title: "INTRODUCTION",
    content: [
      "We are jajamblockprint.com., a service provided by From, Jaipur Rajasthan, India.",
      "We Jajam Block Print are registered business category and not for any other services, we are from jaipur rajasthan our official address is jogiyon ka mohalla, Jajam Block Print jaipur rajasthan and pin code is 303007 and the registered gst no. is 08BHIPC7034G1ZI."
    ]
  },
  {
    title: "YOUR INFORMATION",
    content: [
      "In this Privacy Policy, references to “you” mean any person submitting any data to us or our agent or the Site.",
      "If you have any comments or suggestions, we would be pleased to receive them at our Jaipur address or by emailing us at jajamblockprint3@gmail.com.",
      "Data protection is a matter of trust and your privacy is important to us. We shall therefore only use your name and other information which relates to you in the manner set out in this Privacy Policy."
    ]
  },
  {
    title: "COLLECTION OF INFORMATION",
    content: [
      "If you browse through this site without providing us with any personal information, we will gather and store some information about your visit, such as IP address, type of browser and operating system used, date and time you access our site, pages you visit, and if you linked to our website from another website, the address of that website. This information will not identify you personally and will not be linked back to you.",
      "There will be times, such as when you submit an auto lead request to a dealer or fill out our contact form, when we will need to obtain personally identifiable information from you or about you. Such personally identifiable information may include your name, address, e-mail address, telephone number and identification number.",
      "We may automatically track certain information about you based upon your behaviour on our Website. We use this information to do internal research on our users' demographics, interests, and behaviour to better understand, protect and serve our users."
    ]
  },
  {
    title: "SHARING OF INFORMATION",
    content: [
      "Under no circumstances do we rent, trade or share the personally identifiable information that we have collected from you, with any other company for their marketing purposes, without your consent.",
      "We reserve the right to communicate Your Information to any third party that makes a legally-compliant request for its disclosure.",
      "We use third-party service providers to serve advertisements on our behalf across the internet and sometimes on this website."
    ]
  },
  {
    title: "COOKIES",
    content: [
      "From time to time, we may place 'cookies' on your personal computer. 'Cookies' are small identifiers sent from a web server and stored on your computer's hard drive, that help us to recognize you if you visit our website again.",
      "You have the ability to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer."
    ]
  },
  {
    title: "LINKS TO OTHER SITES",
    content: [
      "Our Website links to other websites that may collect personally identifiable information about you. We are not responsible for the privacy practices or the content of those linked websites."
    ]
  },
  {
    title: "SECURITY",
    content: [
      "We safeguard your privacy using known security standards and procedures and comply with applicable privacy laws."
    ]
  },
  {
    title: "CREDIT CHECK AND FRAUD PREVENTION",
    content: [
      "We use standard and authorized payment services and our Credit Check and Fraud Prevention policies are aligned to these companies. All disputes would be handled by Jaipur Courts."
    ]
  },
  {
    title: "OPT OUT POLICY",
    content: [
      "We provide all users with the opportunity to opt-out of receiving non-essential (promotional, marketing-related) communications from us on behalf of our partners, and from us in general, after setting up an account.",
      "If you no longer wish to receive any information from us please drop us an email at jajamblockprint3@gmail.com."
    ]
  },
  {
    title: "CHANGES TO PRIVACY POLICY",
    content: [
      "If we decide to change our privacy policy, we will post those changes on this page so that you are always aware of what information we collect, how we use it, and under what circumstances we disclose it.",
      "If you still have any query about our privacy policy kindly drop us an email at jajamblockprint3@gmail.com, we will reply you within 1-2 working days."
    ]
  }
];