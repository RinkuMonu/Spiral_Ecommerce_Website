// import React, { useEffect, useState } from "react";
// import { Search, User } from "lucide-react";
// import { Link } from "react-router-dom";
// import img1 from "../../assest/4.png";
// import logo from "../../assest/logo.jpg";
// import Dropdown from "../../pages/Dropdown";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { fetchWishlist } from '../reduxslice/WishlistSlice';
// import { fetchWishlist } from '../../reduxslice/WishlistSlice'
// import { clearWishlist } from '../../reduxslice/WishlistSlice';


// interface NavbarProps {
//   onCartClick: () => void;
//   cartItemCount: number;
// }

// interface User {
//   name: string;
// }

// const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartItemCount }) => {
//  const dispatch = useDispatch();
//   const wishlistCount = useSelector((state: any) => state.wishlist.items.length);

//   useEffect(() => {
//     dispatch(fetchWishlist());
//   }, [dispatch]);

//   const navigate = useNavigate();

//   const [isSticky, setIsSticky] = useState(false);
//   const [user, setUser] = useState<User | null>(null);
//   const [menuOpen, setMenuOpen] = useState(false); // For responsive menu toggle
//   const [searchOpen, setSearchOpen] = useState(false); // For mobile search toggle
//   // const [searchQuery, setSearchQuery] = useState()
//   const [searchQuery, setSearchQuery] = useState<string>(""); // ✅ Fix: initialize with empty string

//   const [categories, setCategories] = useState<string[]>([]); // ✅ Dynamic categories state


//   useEffect(() => {
//     // Load user data from localStorage
//     const loadUser = () => {
//       try {
//         const storedUser = localStorage.getItem("userData");
//         // console.log("storedUserss : " , storedUser);
//         setUser(storedUser ? JSON.parse(storedUser) : null);
//       } catch (error) {
//         console.error("Failed to parse user from localStorage:", error);
//         setUser(null);
//       }
//     };

//     loadUser(); // Initial load

//     // Handle scroll to make navbar sticky
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       setIsSticky(scrollTop > 100); // Adjust 100 based on your navbar height
//     };

//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("storage", loadUser); // Listen for storage changes

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("storage", loadUser);
//     };
//   }, [localStorage]);

//   const handleLogout = () => {
//     localStorage.removeItem("userData");
//     localStorage.removeItem("token");
//     setUser(null);
//     window.dispatchEvent(new Event("storage"));
//     dispatch(clearWishlist());
//     navigate('/login');
//   };



//   // const categories = [
//   //   "Sarees",
//   //   "Suits",
//   //   "Fabrics",
//   //   // "What's New",
//   // ];


//   const baseUrl = import.meta.env.VITE_API_BASE_URL;

//   // ✅ Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch(`${baseUrl}/categories`);
//         const data = await res.json();
//         if (Array.isArray(data)) {
//           const categoryNames = data.map((cat: any) => cat.name); // 👈 Transform objects to name strings
//           setCategories(categoryNames);
//         } else {
//           console.error("Unexpected API response:", data);
//         }
//       } catch (error) {
//         console.error("Failed to fetch categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);



//   return (
//     <div>
//       <div className="sticky top-0 z-10 bg-white shadow-lg md:px-8">
//         {/* Navbar Top */}
//         <div className="border-b">
//           <div className="container mx-auto px-4">
//             <div className="flex items-center justify-between h-24">
//               {/* Logo */}
//               <Link to="/" className="flex items-center">
//                 {/* <img src={img1} alt="Logo" className="w-12 sm:w-16" /> */}
//                 <img src={logo} alt="Logo" className="w-40" />
//               </Link>

//               {/* Mobile Search Toggle */}
//               <button
//                 onClick={() => setSearchOpen(!searchOpen)}
//                 className="md:hidden focus:outline-none text-gray-600"
//               >
//                 <Search className="w-6 h-6" />
//               </button>

//               {/* Desktop Search Bar */}
//               <div className="hidden md:flex flex-1 max-w-lg mx-8">
//                 <form className="w-full">
//                   <div className="relative">
//                     <input
//                       type="search"
//                       id="default-search"
//                       className="block w-full p-4 ps-10 text-sm  rounded-lg"
//                       placeholder="Search Category"
//                       value={searchQuery}
//                       onChange={(e) => setSearchQuery(e.target.value)}
//                       required
//                       style={{ border: "2px solid rgb(82, 82, 162)" }}
//                     />
//                     <button
//                       type="submit"
//                       className="absolute top-0 right-0   text-white"
//                       style={{
//                         backgroundColor: "rgb(82, 82, 162)",
//                         height: "100%",
//                         width: "12%",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                       }}
//                     >
//                       <Search />
//                     </button>
//                   </div>
//                   {searchQuery && (
//                     <ul className="absolute z-20 mt-2 w-[515px] bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 max-h-60 overflow-y-auto">
//                       {categories
//                         .filter((cat) =>
//                           cat.toLowerCase().includes(searchQuery.toLowerCase())
//                         )
//                         .map((cat, index) => (
//                           <li
//                             key={index}
//                             className="px-6 py-3 hover:bg-indigo-50 cursor-pointer transition-colors duration-150 group flex items-center"
//                             onClick={() => {
//                               window.location.href = `/category/${cat.toLowerCase()}`;
//                             }}
//                           >
//                             <span className="flex-grow font-medium">{cat}</span>
//                             <svg
//                               xmlns="http://www.w3.org/2000/svg"
//                               className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors"
//                               fill="none"
//                               viewBox="0 0 24 24"
//                               stroke="currentColor"
//                             >
//                               <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth={2}
//                                 d="M9 5l7 7-7 7"
//                               />
//                             </svg>
//                           </li>
//                         ))}
//                     </ul>
//                   )}

//                 </form>
//               </div>

//               {/* Actions */}
//               <div className="flex items-center">
//                 <div className="hidden md:flex items-center justify-between p-4  border-gray-300 gap-1 sm:gap-4 md:gap-20">
//                   <div className="relative group">
//                     {/* User Info */}
//                     <Link
//                       // to={user ? "/profile" : "/login"}
//                       to={user ? "/" : "/login"}
//                       className="flex items-center space-x-1 hover:text-indigo-600"
//                     >
//                       <div className="w-8 h-8 flex items-center justify-center border-2 border-gray-400 rounded-full">
//                         <User className="h-5 w-5" />
//                       </div>
//                       <span className="hidden sm:inline">
//                         {user ? (
//                           // `Welcome, ${user.name}`
//                           `Welcome, ${user.firstName}`
//                         ) : (
//                           <div>
//                             <p className="text-sm text-gray-600">
//                               Hello, Guest
//                             </p>
//                             <a href="/login" className="text-blue-500 text-sm">
//                               Login / Register
//                             </a>
//                           </div>
//                         )}
//                       </span>
//                     </Link>
//                     {user && (
//                       <div className="absolute hidden group-hover:block bg-white shadow-md rounded-lg  p-2 z-10">
//                         <ul className="text-gray-700">
//                           {/* <li className="py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
//                             Your Orders
//                           </li>
//                           <li className="py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
//                             Profile
//                           </li> */}
//                           <li className="py-1 px-3 hover:bg-gray-100 rounded-md cursor-pointer">
//                             <button
//                               onClick={handleLogout}
//                               className="hover:text-red-600 text-left w-full"
//                             >
//                               Logout
//                             </button>
//                           </li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>

//                   {/* Wishlist and Cart */}
//                   <div className="flex items-center sm:gap-6">
//                     {/* Wishlist */}
//                     <div className="relative flex items-center" onClick={() => navigate('/wishlist')}>
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6 text-gray-800"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M21.435 4.318a5.5 5.5 0 00-7.77 0L12 5.983l-1.665-1.665a5.5 5.5 0 10-7.77 7.77l1.665 1.665L12 20.017l7.77-7.77 1.665-1.665a5.5 5.5 0 000-7.77z"
//                         />
//                       </svg>
//                       <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                         {wishlistCount}
//                       </span>
//                     </div>


//                     {/* Cart */}
//                     <div
//                       className="relative flex items-center"
//                       onClick={onCartClick}
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="w-6 h-6 text-gray-800"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M3.75 5.25h16.5m-16.5 0L5.25 16.5h13.5l1.5-11.25M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
//                         />
//                       </svg>
//                       <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                         {cartItemCount}
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Hamburger Menu for Mobile */}
//                 <button
//                   onClick={() => setMenuOpen(!menuOpen)}
//                   className="md:hidden focus:outline-none"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Search Bar */}
//         {searchOpen && (
//           <div className="md:hidden bg-gray-50 px-4 py-2">
//             <form className="w-full">
//               <div className="relative">
//                 <input
//                   type="search"
//                   id="mobile-search"
//                   className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Search Category"
//                   required
//                   style={{ border: "2px solid rgb(82, 82, 162)" }}
//                 />
//                 <button
//                   type="submit"
//                   className="absolute  top-0 right-0   text-white "
//                   style={{
//                     backgroundColor: "rgb(82, 82, 162)",
//                     height: "100%",
//                     width: "17%",
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Search />
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Mobile Navigation */}
//         {menuOpen && (
//           <div className="md:hidden bg-gray-50 border-b">
//             <nav className="flex flex-col space-y-2 p-4">
//               <Dropdown categories={categories} />
//               {categories.map((item) => (
//                 <Link
//                   key={item}
//                   to={`/category/${item.toLowerCase()}`}
//                   className="block px-4 py-2 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         )}

//         {/* Desktop Navigation - Premium Modern UI */}
//         <div className="hidden md:block bg-white">
//           <div className="container mx-auto px-6">
//             <nav className="flex items-center justify-between h-16">
//               {/* Dropdown (Main Menu) */}
//               <div className="relative">
//                 <Dropdown categories={categories} />
//               </div>

//               {/* Category Navigation Links */}
//               <div className="flex gap-2 bg-gray-100 px-3 py-2 rounded-full shadow-inner">
//                 {categories.map((item) => (
//                   <Link
//                     key={item}
//                     to={`/category/${item.toLowerCase()}`}
//                     className="relative group px-4 py-2 text-[15px] font-medium text-gray-700 rounded-full transition-all duration-300 hover:text-white hover:bg-purple-950"
//                   >
//                     <span className="z-10 relative">{item}</span>
//                     <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 rounded-full"></span>
//                   </Link>
//                 ))}
//               </div>
//             </nav>
//           </div>
//         </div>


//       </div>
//       <div className="bg-slate-50 container">
//         {isSticky && (
//           <nav className="bg-white border-gray-200 fixed top-0 shadow-lg z-30 md:px-8 w-full">
//             {/* Navbar Top */}
//             <div className="border-b">
//               <div className="container mx-auto px-4">
//                 <div className="flex items-center justify-between h-20">
//                   {/* Logo */}
//                   <Link to="/" className="flex items-center">
//                     {/* <img src={img1} alt="Logo" className="w-6 sm:w-16" /> */}
//                     <img src={logo} alt="Logo" className="w-40" />
//                   </Link>

//                   {/* Desktop Navigation */}
//                   <div className="hidden md:block bg-gray-50">
//                     <div className="container mx-auto px-4">
//                       <nav className="flex space-x-8 h-13 text-base items-center">
//                         {categories.map((item) => (
//                           <Link
//                             key={item}
//                             to={`/category/${item.toLowerCase()}`}
//                             className="hover:text-indigo-600 hover:border-b-2 hover:border-indigo-600 h-full flex items-center"
//                           >
//                             {item}
//                           </Link>
//                         ))}
//                       </nav>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex items-center">
//                     <div className="flex items-center justify-between p-4  border-gray-300 gap-4 md:gap-20">
//                       {/* Wishlist and Cart */}
//                       <div className="flex items-center gap-6">
//                         {/* Wishlist */}
//                         <div className="relative flex items-center" onClick={() => navigate('/wishlist')}>
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-6 h-6 text-gray-800"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M21.435 4.318a5.5 5.5 0 00-7.77 0L12 5.983l-1.665-1.665a5.5 5.5 0 10-7.77 7.77l1.665 1.665L12 20.017l7.77-7.77 1.665-1.665a5.5 5.5 0 000-7.77z"
//                             />
//                           </svg>
//                           <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                             {wishlistCount}
//                           </span>
//                         </div>

//                         {/* Cart */}
//                         <div
//                           className="relative flex items-center"
//                           onClick={onCartClick}
//                         >
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-6 h-6 text-gray-800"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M3.75 5.25h16.5m-16.5 0L5.25 16.5h13.5l1.5-11.25M7.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm9 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
//                             />
//                           </svg>
//                           <span className="absolute -top-2 -right-2 bg-[#5252a2] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
//                             {cartItemCount}
//                           </span>
//                         </div>
//                       </div>
//                     </div>

//                     {/* Hamburger Menu for Mobile */}
//                     <button
//                       onClick={() => setMenuOpen(!menuOpen)}
//                       className="md:hidden focus:outline-none"
//                     >
//                       <svg
//                         className="w-6 h-6"
//                         fill="none"
//                         stroke="currentColor"
//                         viewBox="0 0 24 24"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M4 6h16M4 12h16M4 18h16"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Mobile Navigation */}
//             {menuOpen && (
//               <div className="md:hidden bg-gray-50 border-b">
//                 <nav className="flex flex-col space-y-2 p-4">
//                   {categories.map((item) => (
//                     <Link
//                       key={item}
//                       to={`/category/${item.toLowerCase()}`}
//                       className="block px-4 py-2 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
//                     >
//                       {item}
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//             )}
//           </nav>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;




import React, { useEffect, useState, useRef } from "react";
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assest/logo.jpg";
import Dropdown from "../../pages/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchWishlist } from '../../reduxslice/WishlistSlice';
import { clearWishlist } from '../../reduxslice/WishlistSlice';

interface NavbarProps {
  onCartClick: () => void;
  cartItemCount: number;
}

interface UserData {
  firstName: string;
  lastName?: string;
  email: string;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartItemCount }) => {
  const dispatch = useDispatch();
  const wishlistCount = useSelector((state: any) => state.wishlist.items.length);
  const navigate = useNavigate();

  const [isSticky, setIsSticky] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchQuery("");
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    dispatch(fetchWishlist());
  }, [dispatch]);

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("userData");
        setUser(storedUser ? JSON.parse(storedUser) : null);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        setUser(null);
      }
    };

    loadUser();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("storage", loadUser);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("storage", loadUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    setUser(null);
    window.dispatchEvent(new Event("storage"));
    dispatch(clearWishlist());
    navigate('/login');
     window.location.reload();
    setUserMenuOpen(false);
  };

  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/website/${referenceWebsite}`);
        const data = await res.json();

        if (Array.isArray(data.website?.categories)) {
          const categoryNames = data.website.categories.map((cat: any) => cat.name);
          setCategories(categoryNames);
        } else {
          console.warn("Categories not found in response:", data);
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const handleCategorySelect = (category: string) => {
    navigate(`/category/${category.toLowerCase()}`);
    setSearchQuery("");
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Top announcement bar */}
      <div className="bg-gradient-to-r from-purple-900 to-indigo-800 text-white text-sm text-center py-2 px-4">
        Free shipping on orders over $50 | New arrivals every week
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white shadow-sm transition-all duration-300 ${isSticky ? "py-2 shadow-lg" : "py-4"}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className={`transition-all duration-300 ${isSticky ? "w-32" : "w-40"}`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-10">
              <div className="relative w-full" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full pl-4 pr-12 py-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Search for products, categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700 transition-colors"
                    >
                      <Search size={16} />
                    </button>
                  </div>

                  {searchQuery && (
                    <div className="absolute z-20 mt-2 w-full bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100 max-h-60 overflow-y-auto">
                      {categories
                        .filter(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((cat, index) => (
                          <div
                            key={index}
                            className="px-6 py-3 hover:bg-indigo-50 cursor-pointer transition-colors duration-150 flex items-center justify-between"
                            onClick={() => handleCategorySelect(cat)}
                          >
                            <span className="font-medium text-gray-800">{cat}</span>
                            <div className="flex items-center">
                              <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full">Category</span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400 ml-2"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  <div className="w-9 h-9 flex items-center justify-center bg-gray-100 border-2 border-gray-200 rounded-full">
                    <User size={18} />
                  </div>
                  {user ? (
                    <span className="text-sm font-medium">{user.firstName}</span>
                  ) : (
                    <span className="text-sm font-medium">Account</span>
                  )}
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg overflow-hidden z-30 border border-gray-100">
                    {user ? (
                      <>
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{user.firstName} {user.lastName || ''}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                        <div className="py-1">
                          {/* <Link 
                            to="/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Your Profile
                          </Link> */}
                          {/* <Link 
                            to="/orders"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Your Orders
                          </Link> */}
                          <Link
                            to="/wishlist"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Your Wishlist
                          </Link>
                        </div>
                        <div className="py-1 border-t border-gray-100">
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                          >
                            Sign out
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="py-1">
                        <Link
                          to="/login"
                          className="block px-4 py-3 text-center bg-indigo-600 text-white font-medium hover:bg-indigo-700"
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Login / Register
                        </Link>
                        <div className="p-4">
                          <p className="text-xs text-gray-500 text-center">
                            Create an account for faster checkout and order tracking
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate('/wishlist')}
                className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Heart size={22} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <ShoppingCart size={22} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <Search size={22} />
              </button>

              <button
                onClick={onCartClick}
                className="relative p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                <ShoppingCart size={22} />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 text-gray-700 hover:text-indigo-600 transition-colors"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Search */}
          {searchOpen && (
            <div className="lg:hidden mt-4 transition-all duration-300">
              <div className="relative" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="relative">
                    <input
                      type="search"
                      id="mobile-search"
                      className="block w-full pl-4 pr-12 py-3 text-sm rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white rounded-full p-2 hover:bg-indigo-700"
                    >
                      <Search size={16} />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Category Navigation */}
        {/* Category Scroll Bar */}
        <div className="scroll-wrapper border-t border-b bg-white shadow-sm">
          <div className="scroll-content">
            {/* Render categories twice for seamless effect */}
            {[...categories, ...categories].map((item, index) => (
              <Link
                key={`${item}-${index}`}
                to={`/category/${item.toLowerCase()}`}
                className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors px-6 py-5"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-50 transition-opacity">
          <div className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white shadow-xl z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full relative">
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <span className="text-2xl font-bold">&times;</span>
              </button>

              <div className="p-5 pt-14 border-b">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-full">
                      <User size={20} />
                    </div>
                    <div>
                      <p className="font-medium">{user.firstName}</p>
                      <p className="text-xs text-gray-500">View account</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-gray-600">Welcome to our store!</p>
                    <div className="flex space-x-3">
                      <Link
                        to="/login"
                        className="flex-1 bg-indigo-600 text-white text-center py-2 rounded-lg font-medium"
                        onClick={() => setMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex-1 border border-indigo-600 text-indigo-600 text-center py-2 rounded-lg font-medium"
                        onClick={() => setMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="py-2">
                  <h3 className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Categories
                  </h3>
                  <div className="space-y-1">
                    {categories.map((item) => (
                      <Link
                        key={item}
                        to={`/category/${item.toLowerCase()}`}
                        className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="py-2 border-t">
                  <h3 className="px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Account
                  </h3>
                  <div className="space-y-1">
                    {/* <Link 
                to="/profile" 
                className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                onClick={() => setMenuOpen(false)}
              >
                Your Profile
                  </Link> */}
                    {/* <Link 
                      to="/orders" 
                      className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      Your Orders
                    </Link> */}
                    <Link
                      to="/wishlist"
                      className="block px-5 py-3 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      Your Wishlist
                      {wishlistCount > 0 && (
                        <span className="ml-2 bg-indigo-100 text-indigo-800 text-xs px-2 py-0.5 rounded-full">
                          {wishlistCount}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>

                {user && (
                  <div className="p-5 border-t">
                    <button
                      onClick={handleLogout}
                      className="w-full py-3 px-4 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;