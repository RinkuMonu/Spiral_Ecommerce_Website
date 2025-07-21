// import React, { useState } from "react";
// import { Lock, User, Phone } from "lucide-react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// export default function Login() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "https://sevenunique-backend.onrender.com/api/v1/user/login",
//         { phone, password }
//       );

//       const data = response.data;

//       if (data && data.success) {
//         localStorage.setItem("userData", JSON.stringify(data.user || {}));
//         window.dispatchEvent(new Event("storage"))
//         Swal.fire({
//           title: "Successful Login",
//           icon: "success",
//           draggable: true,
//         });
//         navigate("/");
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: "Invalid credentials!",
//           icon: "error",
//         });
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//       });
//     }
//     setIsLoading(false);
//   };

//   // Handle Register
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "https://sevenunique-backend.onrender.com/api/v1/user/register",
//         { name, gender, phone, password }
//       );

//       const data = response.data;
//       console.log("Registration Successful:", data);
//       Swal.fire({
//         title: "Successful Registration",
//         icon: "success",
//         draggable: true,
//       });
//       setIsLogin(true);
//     } catch (error) {
//       console.error("Registration Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Invalid credentials!",
//       });
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-[calc(100vh-4rem)] bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-lg w-full space-y-8 bg-white p-8 rounded-xl shadow-lg">
//         <div className="flex gap-4">
//           <div className="pt-4">
//             {isLogin ? (
//               <Lock className="pl-3 h-10 w-8 text-purple-400 pointer-events-none" />
//             ) : (
//               <User className="pl-3 h-10 w-10 text-purple-400 pointer-events-none" />
//             )}
//           </div>
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900">
//               {isLogin ? "Sign in to your account" : "Create new account"}
//             </h2>
//             <p className="text-gray-600 text-base mt-2">
//               Your personal data will be used to support your experience
//               throughout this website, to manage access to your account.
//             </p>
//           </div>
//         </div>

//         {/* Form Start */}
//         <form
//           className="mt-8 space-y-6"
//           onSubmit={isLogin ? handleLogin : handleRegister}
//         >
//           {!isLogin && (
//             <>

//           <div>
//             <label htmlFor="name">Full Name</label>
//             <div className="relative mt-1">
//               <User className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8 pointer-events-none" />
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Full Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//           </div>

//               <div>
//                 <label htmlFor="gender">Gender</label>
//                 <div className="relative mt-1">
//                   <User className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8 pointer-events-none" />
//                   <input
//                     id="gender"
//                     name="gender"
//                     type="text"
//                     required
//                     className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                     placeholder="Gender"
//                     value={gender}
//                     onChange={(e) => setGender(e.target.value)}
//                   />
//                 </div>
//               </div>
//             </>
//           )}

//           <div>
//             <label htmlFor="phone">Phone No</label>
//             <div className="relative mt-1">
//               <Phone className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8 pointer-events-none" />
//               <input
//                 id="phone"
//                 name="phone"
//                 type="number"
//                 required
//                 className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Phone No."
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//           </div>

//           <div>
//             <label htmlFor="password">Password</label>
//             <div className="relative mt-1">
//               <Lock className="absolute inset-y-0 left-0 top-3 pl-3 h-8 w-8 pointer-events-none" />
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 required
//                 className="appearance-none rounded-lg block w-full pl-10 px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Submit Button with Loader */}
//           <button
//             type="submit"
//             className="group relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             disabled={isLoading}
//           >
//             {isLoading ? (
//               <DotLottieReact
//                 src="https://lottie.host/faaf7fb5-6078-4f3e-9f15-05b0964cdb4f/XCcsBA5RNq.lottie"
//                 loop
//                 autoplay
//                 style={{ width: 30, height: 30 }}
//               />
//             ) : isLogin ? (
//               "Sign In"
//             ) : (
//               "Sign Up"
//             )}
//           </button>
//         </form>

//         {/* Toggle Button */}
//         <div className="text-base text-center">
//           <button onClick={() => setIsLogin(!isLogin)} className="font-medium">
//             {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


//=========================================================================================================


// import React, { useState, useEffect } from "react";
// import { Lock, User, Phone, Mail, Eye, EyeOff, ChevronRight } from "lucide-react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Login() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState("");
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
//   const navigate = useNavigate();

//   // Handle Login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "https://sevenunique-backend.onrender.com/api/v1/user/login",
//         { phone, password }
//       );

//       const data = response.data;

//       if (data && data.success) {
//         localStorage.setItem("userData", JSON.stringify(data.user || {}));
//         window.dispatchEvent(new Event("storage"));
//         Swal.fire({
//           title: "Successful Login",
//           icon: "success",
//           draggable: true,
//         });
//         navigate("/");
//       } else {
//         Swal.fire({
//           title: "Error",
//           text: "Invalid credentials!",
//           icon: "error",
//         });
//       }
//     } catch (error) {
//       console.error("Login Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//       });
//     }
//     setIsLoading(false);
//   };

//   // Handle Register
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await axios.post(
//         "https://sevenunique-backend.onrender.com/api/v1/user/register",
//         { name, gender, phone, password }
//       );

//       const data = response.data;
//       console.log("Registration Successful:", data);
//       Swal.fire({
//         title: "Successful Registration",
//         icon: "success",
//         draggable: true,
//       });
//       setIsLogin(true);
//     } catch (error) {
//       console.error("Registration Error:", error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Invalid credentials!",
//       });
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] p-4">
//       <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white">
//         {/* Left Side - Visual Panel */}
//         <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-950 to-purple-400 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
//           <div className="absolute inset-0 opacity-5">
//             <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-soft-light"></div>
//             <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-300 rounded-full mix-blend-soft-light"></div>
//           </div>

//           <div>
//             {/* <div className="flex items-center gap-2 mb-16">
//               <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
//                 <Lock className="h-6 w-6 text-white" />
//               </div>
//               <h1 className="text-2xl font-bold text-white">SevenUnique</h1>
//             </div> */}

//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="max-w-md"
//             >
//               <h2 className="text-4xl font-bold text-white mb-4">
//                 {isLogin ? "Welcome back!" : "Create your account"}
//               </h2>
//               <p className="text-indigo-100 text-lg">
//                 {isLogin 
//                   ? "Sign in to access your personalized dashboard and continue your journey with us." 
//                   : "Join our community to unlock exclusive features and personalized experiences."}
//               </p>
//             </motion.div>
//           </div>

//           <div className="mt-10 hidden md:block">
//             <div className="flex justify-center">
//               <img 
//                 src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4585.jpg" 
//                 alt="Security Illustration"
//                 className="w-full max-w-md object-contain"
//               />
//             </div>
//           </div>

//           {/* <div className="absolute bottom-6 left-6 text-indigo-200 text-sm">
//             © 2025 SevenUnique. All rights reserved.
//           </div> */}
//         </div>

//         {/* Right Side - Form */}
//         <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-14 bg-white">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="h-full flex flex-col"
//           >
//             <div className="flex justify-end mb-4">
//               <button 
//                 className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
//                 onClick={() => navigate("/")}
//               >
//                 ← Back to home
//               </button>
//             </div>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={isLogin ? "login" : "register"}
//                 initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
//                 transition={{ duration: 0.3 }}
//                 className="flex-1 flex flex-col"
//               >
//                 <div className="mb-8">
//                   <h3 className="text-3xl font-bold text-gray-800">
//                     {isLogin ? "Sign in to your account" : "Create new account"}
//                   </h3>
//                   <p className="text-gray-500 mt-2">
//                     {isLogin 
//                       ? "Enter your credentials to access your account" 
//                       : "Fill in the details to get started"}
//                   </p>
//                 </div>

//                 <form 
//                   onSubmit={isLogin ? handleLogin : handleRegister} 
//                   className="space-y-6 flex-1 flex flex-col"
//                 >
//                   <div className="space-y-5 flex-1">
//                     {!isLogin && (
//                       <>
//                         <div className="space-y-2">
//                           <label className="text-sm font-medium text-gray-700">Full Name</label>
//                           <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                               <User className="h-5 w-5 text-gray-400" />
//                             </div>
//                             <input
//                               id="name"
//                               name="name"
//                               type="text"
//                               required
//                               className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all"
//                               placeholder="John Doe"
//                               value={name}
//                               onChange={(e) => setName(e.target.value)}
//                             />
//                           </div>
//                         </div>

//                         <div className="space-y-2">
//                           <label className="text-sm font-medium text-gray-700">Gender</label>
//                           <div className="grid grid-cols-3 gap-3">
//                             {['male', 'female', 'other'].map((option) => (
//                               <button
//                                 key={option}
//                                 type="button"
//                                 className={`py-3 px-4 rounded-xl border transition-all ${
//                                   gender === option
//                                     ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
//                                     : 'border-gray-200 hover:border-gray-300 text-gray-700'
//                                 }`}
//                                 onClick={() => setGender(option)}
//                               >
//                                 {option.charAt(0).toUpperCase() + option.slice(1)}
//                               </button>
//                             ))}
//                           </div>
//                         </div>
//                       </>
//                     )}

//                     <div className="space-y-2">
//                       <label className="text-sm font-medium text-gray-700">Phone Number</label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Phone className="h-5 w-5 text-gray-400" />
//                         </div>
//                         <input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           required
//                           className="w-full pl-10 pr-3 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all"
//                           placeholder="+1 (555) 123-4567"
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <label className="text-sm font-medium text-gray-700">Password</label>
//                         {isLogin && (
//                           <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
//                             Forgot password?
//                           </a>
//                         )}
//                       </div>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <Lock className="h-5 w-5 text-gray-400" />
//                         </div>
//                         <input
//                           id="password"
//                           name="password"
//                           type={showPassword ? "text" : "password"}
//                           required
//                           className="w-full pl-10 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-50 transition-all"
//                           placeholder="••••••••"
//                           value={password}
//                           onChange={(e) => setPassword(e.target.value)}
//                         />
//                         <button
//                           type="button"
//                           className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
//                           onClick={() => setShowPassword(!showPassword)}
//                         >
//                           {showPassword ? (
//                             <EyeOff className="h-5 w-5" />
//                           ) : (
//                             <Eye className="h-5 w-5" />
//                           )}
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="pt-4">
//                     <button
//                       type="submit"
//                       disabled={isLoading}
//                       onMouseEnter={() => setIsHovered(true)}
//                       onMouseLeave={() => setIsHovered(false)}
//                       className={`w-full py-4 px-4 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center overflow-hidden relative ${
//                         isLoading 
//                           ? "bg-indigo-400 cursor-not-allowed" 
//                           : "bg-gradient-to-r from-purple-900 to-purple-400 hover:shadow-xl"
//                       }`}
//                     >
//                       <span className="relative z-10">
//                         {isLoading ? (
//                           <>
//                             <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                               <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                               <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                             </svg>
//                             Processing...
//                           </>
//                         ) : isLogin ? (
//                           "Sign In"
//                         ) : (
//                           "Create Account"
//                         )}
//                       </span>
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 hover:opacity-100 transition-opacity"
//                         animate={{ 
//                           x: isHovered ? 0 : -100,
//                           opacity: isHovered ? 1 : 0
//                         }}
//                         transition={{ duration: 0.4 }}
//                       />
//                     </button>
//                   </div>
//                 </form>

//                 <div className="mt-8">
//                   <div className="relative flex items-center justify-center mb-6">
//                     <div className="flex-grow border-t border-gray-200"></div>
//                     <span className="flex-shrink mx-4 text-gray-400 text-sm">or continue with</span>
//                     <div className="flex-grow border-t border-gray-200"></div>
//                   </div>

//                   <div className="flex justify-center gap-4">
//                     {['google', 'facebook', 'twitter'].map((provider) => (
//                       <button
//                         key={provider}
//                         className="p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center justify-center w-14 h-14"
//                         aria-label={`Sign in with ${provider}`}
//                       >
//                         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-6 h-6" />
//                       </button>
//                     ))}
//                   </div>

//                   <div className="mt-6 text-center">
//                     <button
//                       onClick={() => setIsLogin(!isLogin)}
//                       className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center transition-colors"
//                     >
//                       {isLogin
//                         ? "Don't have an account? Sign up"
//                         : "Already have an account? Sign in"}
//                       <ChevronRight className="h-4 w-4 ml-1" />
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }




// File: Login.tsx or Login.jsx

import React, { useState } from "react";
import { Lock, User, Phone, Mail, Eye, EyeOff, ChevronRight } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // const referenceWebsite = "686dfb954c94536bd845047f"; // You can get this dynamically too

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE;


  // LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/auth/login`, {
        email,
        password,
        referenceWebsite,
      }, { withCredentials: true });

      const data = res.data;
      console.log("dataaa : ", data);
      if (data && data.accessToken) {
        localStorage.setItem("userData", JSON.stringify(data.userData));
        localStorage.setItem("token", data.accessToken);  
        Swal.fire("Login Successful", "", "success");
        navigate("/");
        window.location.reload(); // Then force reload
      } else {
        Swal.fire("Login failed", data?.msg || "Invalid credentials", "error");
      }
    } catch (err) {
      Swal.fire("Login failed", err.response?.data?.msg || "Something went wrong", "error");
    }

    setIsLoading(false);
  };

  // REGISTER
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${baseUrl}/auth/signUp`, {
        firstName,
        lastName,
        email,
        password,
        referenceWebsite,
        mobile,
        address: "",
        role: "user"
      }, { withCredentials: true });

      const data = res.data;
      if (data && data.accessToken) {
        Swal.fire("Registration Successful", "", "success");
        setIsLogin(true);
      } else {
        Swal.fire("Failed", data?.msg || "Something went wrong", "error");
      }
    } catch (err) {
      Swal.fire("Registration failed", err.response?.data?.msg || "Something went wrong", "error");
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-2xl bg-white">
        {/* Left Side - Visual Panel */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-purple-950 to-purple-400 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
          <motion.div className="max-w-md">
            <h2 className="text-4xl font-bold text-white mb-4">
              {isLogin ? "Welcome back!" : "Create your account"}
            </h2>
            <p className="text-indigo-100 text-lg">
              {isLogin
                ? "Sign in to access your personalized dashboard."
                : "Join our community to unlock exclusive features."}
            </p>
          </motion.div>
          <img
            src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4585.jpg"
            alt="Security"
            className="w-full max-w-md object-contain mt-10 hidden md:block"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-14 bg-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex justify-end mb-4">
              <button className="text-sm text-gray-500 hover:text-indigo-600" onClick={() => navigate("/")}>← Back to home</button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={isLogin ? "login" : "register"} initial={{ opacity: 0, x: isLogin ? -20 : 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isLogin ? 20 : -20 }}>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">{isLogin ? "Sign in to your account" : "Create new account"}</h3>

                <form onSubmit={isLogin ? handleLogin : handleRegister} className="space-y-6">
                  {!isLogin && (
                    <>
                      <div>
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <input className="w-full p-3 rounded-xl border" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <input className="w-full p-3 rounded-xl border" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input className="w-full p-3 rounded-xl border" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="text-sm font-medium text-gray-700">Mobile</label>
                      <input className="w-full p-3 rounded-xl border" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <input
                        className="w-full p-3 pr-10 rounded-xl border"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button type="button" className="absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={`w-full py-4 px-4 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center relative ${isLoading ? "bg-indigo-400 cursor-not-allowed" : "bg-gradient-to-r from-purple-900 to-purple-400 hover:shadow-xl"
                      }`}
                  >
                    {isLoading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <button onClick={() => setIsLogin(!isLogin)} className="text-indigo-600 font-medium hover:text-indigo-800 inline-flex items-center">
                    {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
