"use client";
import React from "react";

// Section titles
const sectionTitles = [
  "ONLINE STORE TERMS",
  "GENERAL CONDITIONS",
  "ACCURACY, COMPLETENESS AND TIMELINESS OF INFORMATION",
  "MODIFICATIONS TO THE SERVICE AND PRICES",
  "PRODUCTS OR SERVICES (if applicable)",
  "ACCURACY OF BILLING AND ACCOUNT INFORMATION",
  "OPTIONAL TOOLS",
  "THIRD-PARTY LINKS",
  "USER COMMENTS, FEEDBACK AND OTHER SUBMISSIONS",
  "PERSONAL INFORMATION",
  "ERRORS, INACCURACIES AND OMISSIONS",
  "PROHIBITED USES",
  "DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY",
  "INDEMNIFICATION",
  "SEVERABILITY",
  "TERMINATION",
  "ENTIRE AGREEMENT",
  "GOVERNING LAW",
  "CHANGES TO TERMS OF SERVICE",
  "CONTACT INFORMATION",
];

// Section contents (each element is an array of paragraphs)
const sectionContents = [
  [
    "By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws). You must not transmit any worms or viruses or any code of a destructive nature. A breach or violation of any of the Terms will result in an immediate termination of your Services.",
  ],
  [
    "We reserve the right to refuse Service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.",
    "You agree not to reproduce, duplicate, copy, sell, resell or exploit any portion of the Service, use of the Service, or access to the Service or any contact on the website through which the Service is provided, without express written permission by us.",
    "The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.",
  ],
  [
    "We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.",
    "This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.",
  ],
  [
    "Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.",
  ],
  [
    "Certain products or Services may be available exclusively online through the website. These products or Services may have limited quantities and are subject to return or exchange only according to our Refund Policy.",
    "We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.",
    "We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction. We may exercise this right on a case-by-case basis. We reserve the right to limit the quantities of any products or Services that we offer. All descriptions of products or product pricing are subject to change at anytime without notice, at the sole discretion of us. We reserve the right to discontinue any product at any time. Any offer for any product or Service made on this site is void where prohibited.",
    "We do not warrant that the quality of any products, Services, information, or other material purchased or obtained by you will meet your expectations, or that any errors in the Service will be corrected.",
  ],
  [
    "We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household or per order. These restrictions may include orders placed by or under the same customer account, the same credit card, and/or orders that use the same billing and/or shipping address. In the event that we make a change to or cancel an order, we may attempt to notify you by contacting the e‑mail and/or billing address/phone number provided at the time the order was made.",
    "We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers or distributors.",
    "You agree to provide current, complete and accurate purchase and account information for all purchases made at our store. You agree to promptly update your account and other information, including your email address and credit card numbers and expiration dates, so that we can complete your transactions and contact you as needed.",
  ],
  [
    "We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.",
    "You acknowledge and agree that we provide access to such tools 'as is' and 'as available' without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.",
    "Any use by you of the optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).",
    "We may also, in the future, offer new Services and/or features through the website (including the release of new tools and resources). Such new features and/or Services shall also be subject to these Terms of Service.",
  ],
  [
    "Certain content, products and Services available via our Service may include materials from third-parties.",
    "Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or Services of third-parties.",
    "We are not liable for any harm or damages related to the purchase or use of goods, Services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.",
  ],
  [
    "If, at our request, you send certain specific submissions (for example contest entries) or without a request from us, you send creative ideas, suggestions, proposals, plans, or other materials, whether online, by email, by postal mail, or otherwise (collectively, 'comments'), you agree that we may, at any time, without restriction, edit, copy, publish, distribute, translate and otherwise use in any medium any comments that you forward to us.",
    "We are and shall be under no obligation (1) to maintain any comments in confidence; (2) to pay compensation for any comments; or (3) to respond to any comments.",
    "You agree that your comments will not violate any right of any third-party, including copyright, trademark, privacy, personality or other personal or proprietary right. You further agree that your comments will not contain libelous or otherwise unlawful, abusive or obscene material, or contain any computer virus or other malware that could in any way affect the operation of the Service or any related website.",
  ],
  [
    "Your submission of personal information through the store is governed by our Privacy Policy, which can be viewed on our Privacy Policy page.",
  ],
  [
    "Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to product descriptions, pricing, promotions, offers, product shipping charges, transit times and availability.",
    "We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).",
  ],
  [
    "In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content for any unlawful or abusive purposes, including but not limited to harassing, defaming, spamming, violating intellectual property rights, or attempting to hack or damage our systems.",
  ],
  [
    "We do not guarantee, represent or warrant that your use of our Service will be uninterrupted, timely, secure or error-free.",
    "You expressly agree that your use of, or inability to use, the Service is at your sole risk. All products and services delivered to you through the Service are provided 'as is' and 'as available', without any representation or warranties.",
    "In no case shall Bagru Hastkala Printers, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.",
  ],
  [
    "You agree to indemnify, defend and hold harmless Bagru Hastkala Printers and our affiliates from any claim or demand made by any third-party due to your breach of these Terms of Service or your violation of any law or the rights of a third-party.",
  ],
  [
    "If any provision of these Terms of Service is found to be unlawful, void or unenforceable, that provision shall still be enforceable to the fullest extent permitted, and the unenforceable portion shall be severed from these Terms.",
  ],
  [
    "These Terms are effective unless and until terminated by you or us. We may also terminate this agreement at any time without notice if you fail to comply with any term, and you will remain liable for all amounts due.",
  ],
  [
    "These Terms of Service constitute the entire agreement between you and us and govern your use of the Service, superseding any prior agreements.",
  ],
  [
    "These Terms shall be governed by and construed in accordance with the laws of India.",
  ],
  [
    "We reserve the right to update, change or replace any part of these Terms by posting updates to our website. Your continued use of the website constitutes acceptance of those changes.",
  ],
  [
    "Questions about the Terms of Service should be sent to us at ",
    "Email: shreeshyamblockprints.1@gmail.com",
    "Address: JANKI BLOCK PRINTS JANKI HOUSE, PLOT NO 21-A (2), RAMDWARA COLONY-2, SANGANER, JAIPUR-302029",
    "Phone: +91-9116131960",
  ],
];

// Component
export default function TermsOfService() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-14 text-gray-800 bg-white">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-[#9d3089] mb-4">Terms of Service</h1>
        <p className="text-md text-gray-600">
          Please read our terms carefully before using Jajam Block Print services.
        </p>
      </div>

      <div className="space-y-12">
        {sectionTitles.map((title, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 border-l-4 border-[#9d3089]"
          >
            <h2 className="text-2xl font-semibold text-[#9d3089] mb-4 uppercase tracking-wide">
              Section {index + 1}: {title}
            </h2>
            <div className="space-y-3">
              {sectionContents[index].map((paragraph, pIdx) => (
                <p key={pIdx} className="text-gray-700 leading-relaxed text-justify">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-sm text-gray-700 border-t pt-6 space-y-3">
        <p>
          <strong>Shop by Craft:</strong> Jajam Block Print | Dabu Print | Sanganeri Print | Discharge Print | Tie And Dye Print | Black And White Print
        </p>
        <p>
          <strong>Shop by Collection:</strong> Cotton Suit Sets | Cotton Suit With Chiffon Dupatta | Cotton Suit With Cotton Dupatta | Cotton Suit With Kota Doria Dupatta | Maheshwari Silk Suit | Chanderi Silk Suit Sets
        </p>
        <p className="text-xs text-gray-500">
          Copyright © {new Date().getFullYear()} Jajam Block Print. All rights reserved.
        </p>
      </div>
    </div>
  );
}
