// import React from 'react';
// import { ShoppingBag, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import img1 from "../../assest/4.png"

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-gray-300">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div>
//             <Link to="/" className="flex items-center space-x-4 text-white mb-2">
//               <img src={img1} alt="" style={{ width: "50%" }} />

//             </Link>
//             <p className="mb-4">Your one-stop shop for all things tech</p>
//             <div className="flex space-x-4">
//               <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
//               <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
//               <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
//               <a href="#" className="hover:text-white"><Youtube className="h-5 w-5" /></a>
//             </div>
//           </div>

//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {["Sarees",
//                 "Suits",
//                 "Fabrics",].map((item) => (
//                   <Link
//                     key={item}
//                     to={`/category/${item.toLowerCase()}`}
//                     className=" h-full flex items-center"
//                   >
//                     {item}
//                   </Link>
//                 ))}

//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
//             <ul className="space-y-2">
//               <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
//               <li><Link to="/refund" className="hover:text-white">Returns & Exchanges</Link></li>
//               <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
//               <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
//               <li><Link to="/cancellation_policy" className="hover:text-white">Cancellation Policy</Link></li>
//               <li><Link to="/cookies" className="hover:text-white">Cookies</Link></li>

//             </ul>
//           </div>

//           <div>
//             <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
//             <ul className="space-y-2">
//               <li>PLOT NO 97, DAKSHINPURI-I, SHRIKISHANPURA, SANGANER,</li>
//               <li>Jagatpura, Jaipur, Jaipur- 302017,Rajasthan</li>
//               <li>Phone: 01414511098</li>
//               <li>Email: info@JAJAM.com</li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8 text-center">
//           <p>&copy; {new Date().getFullYear()} JAJAM BLOCK PRINTS PRIVATE LIMITED. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// }



import React from 'react';
import { ShoppingBag, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
// import img1 from "../../assest/4.png";
import logo from "../../assest/logo.jpg";
import footerLogo from "../../assest/footerLogo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-indigo-950 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img 
                // src={img1}
                // src={logo} 
                src={footerLogo} 
                alt="Company Logo"
                className="w-52"
              />
            </Link>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Your premium destination for authentic traditional wear and modern fashion solutions.
            </p>
            <div className="flex space-x-5">
              {[
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Youtube className="h-5 w-5" />, label: "YouTube" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-700 transition-all duration-300 hover:-translate-y-1 group"
                  aria-label={social.label}
                >
                  <span className="group-hover:text-white transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Shop Categories
            </h3>
            <ul className="space-y-3">
              {["Sarees", "Suits", "Fabrics"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/category/${item.toLowerCase()}`}
                    className="flex items-center py-2 hover:text-white transition-all group"
                  >
                    <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Customer Support
            </h3>
            <ul className="space-y-3">
              {[
                { title: "Shipping Policy", path: "/shipping" },
                { title: "Returns & Exchanges", path: "/refund" },
                { title: "Terms & Conditions", path: "/terms" },
                { title: "Privacy Policy", path: "/privacy" },
                { title: "Cancellation Policy", path: "/cancellation_policy" },
                { title: "Cookies", path: "/cookies" }
              ].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.path} 
                    className="py-2 inline-block hover:text-white transition-colors hover:pl-2 duration-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6 pb-2 border-b border-gray-700 inline-block">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                <span className="ml-3">
                   JANKI BLOCK PRINTS   JANKI HOUSE,PLOT NO 21-A (2),RAMDWARA COLONY-2,SANGANER,JAIPUR-302029
                </span>
              </li>
                <li className="flex">
                <MapPin className="h-5 w-5 text-indigo-400 mt-1 flex-shrink-0" />
                <span className="ml-3">
                   LANDMARK :- BEHIND SPARSH HOSPITAL 
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                {/* <span className="ml-3">01414511098</span> */}
                <span className="ml-3"> 9116131960</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-indigo-400 flex-shrink-0" />
                {/* <span className="ml-3">info@jajam.com</span> */}
                <span className="ml-3">shreeshyamblockprints.1@gmail.com</span>
              </li>
            </ul>
            
            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="text-white text-lg font-medium mb-3">
                Stay Updated
              </h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 w-full bg-gray-800 border border-gray-700 rounded-l focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-r transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* {["Visa", "MasterCard", "PayPal", "Google Pay", "Apple Pay"].map((method, index) => (
            <div 
              key={index} 
              className="h-10 w-16 bg-gray-800 rounded-lg flex items-center justify-center text-xs font-medium"
            >
              {method}
            </div>
          ))} */}
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} JAJAM BLOCK PRINTS PRIVATE LIMITED. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6 text-sm">
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}