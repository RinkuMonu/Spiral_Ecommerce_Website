
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#e6f0ff] ">
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
              {/* <button className="text-sm text-gray-500 hover:text-indigo-600" onClick={() => navigate("/")}>← Back to home</button> */}
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
