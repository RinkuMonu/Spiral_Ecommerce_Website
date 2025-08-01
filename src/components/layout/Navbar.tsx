"use client"
import type React from "react"
import { useEffect, useState, useRef } from "react"
import { Search, User, Heart, ShoppingCart, Menu, X } from "lucide-react"
import { Link } from "react-router-dom"
import logo from "../../assest/logo.png"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { fetchWishlist, clearWishlist } from "../../reduxslice/WishlistSlice"

interface NavbarProps {
  onCartClick: () => void
  cartItemCount: number
}

interface UserData {
  firstName: string
  lastName?: string
  email: string
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartItemCount }) => {
  const dispatch = useDispatch()
  const wishlistCount = useSelector((state: any) => state.wishlist.items.length)
  const navigate = useNavigate()
  const [showCategories, setShowCategories] = useState(false)
  const [user, setUser] = useState<UserData | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [categories, setCategories] = useState<string[]>([])
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [moreMenuOpen, setMoreMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const userMenuRef = useRef<HTMLDivElement>(null)
  const moreMenuRef = useRef<HTMLDivElement>(null)
  const [isSticky, setIsSticky] = useState(false)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchQuery("")
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    dispatch(fetchWishlist())
  }, [dispatch])

  useEffect(() => {
    const loadUser = () => {
      try {
        const storedUser = localStorage.getItem("userData")
        setUser(storedUser ? JSON.parse(storedUser) : null)
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error)
        setUser(null)
      }
    }

    loadUser()
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsSticky(scrollTop > 100) // Make categories sticky after scrolling 100px
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("storage", loadUser)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("storage", loadUser)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("userData")
    localStorage.removeItem("token")
    setUser(null)
    window.dispatchEvent(new Event("storage"))
    dispatch(clearWishlist())
    navigate("/login")
    window.location.reload()
    setUserMenuOpen(false)
  }

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${baseUrl}/website/${referenceWebsite}`)
        const data = await res.json()
        if (Array.isArray(data.website?.categories)) {
          const categoryNames = data.website.categories.map((cat: any) => cat.name)
          setCategories(categoryNames)
        } else {
          console.warn("Categories not found in response:", data)
        }
      } catch (error) {
        console.error("Failed to fetch categories:", error)
      }
    }
    fetchCategories()
  }, [baseUrl, referenceWebsite])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setSearchOpen(false) // Close mobile search after submit
    }
  }

  const handleCategorySelect = (category: string) => {
    navigate(`/category/${category.toLowerCase()}`)
    setSearchQuery("")
    setMoreMenuOpen(false)
    setMenuOpen(false) // Close mobile menu when category is selected
  }

  return (
    <>
      {/* Top announcement bar with traditional pattern */}
      <div
        className="relative overflow-hidden text-white text-xs sm:text-sm text-center py-2 sm:py-3 px-4"
        style={{
          background: "linear-gradient(135deg, #6aa1c1 0%, #6aa1c1 50%, #6aa1c1 100%)",
        }}
      >
        <div className="relative z-10 font-semibold tracking-wide">
          <span className="hidden sm:inline">
            ✨ Authentic Heritage Collection | Free Shipping Above ₹999 | Handcrafted Excellence ✨
          </span>
          <span className="sm:hidden">✨ Free Shipping Above ₹999 ✨</span>
        </div>
      </div>

      {/* Main Navbar with authentic traditional styling - NOT STICKY */}
      <nav className="relative transition-all duration-300 bg-white py-3 sm:py-4">
        {/* Decorative traditional border */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #6aa1c1 0%, #6aa1c1 25%, #6aa1c1 50%, #6aa1c175%, #6aa1c1 100%)",
          }}
        ></div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo with traditional frame */}
            <Link to="/" className="flex items-center relative group">
              <div className="relative" style={{ borderColor: "#6aa1c1" }}>
                <img
                  src={logo || "/placeholder.svg"}
                  alt="Logo"
                  className="transition-all duration-300 w-24 sm:w-32 md:w-36 rounded-lg"
                />
              </div>
            </Link>

            {/* Desktop Search with traditional styling */}
            <div className="hidden lg:flex flex-1 max-w-xl xl:max-w-2xl mx-6 xl:mx-10">
              <div className="relative w-full" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="w-full">
                  <div className="relative">
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full pl-4 xl:pl-6 pr-12 xl:pr-14 py-3 xl:py-4 text-sm rounded-full border-3 bg-gradient-to-r from-slate-50 to-blue-50 focus:outline-none focus:ring-3 transition-all shadow-inner font-medium"
                      style={{
                        borderColor: "#6aa1c1",
                        color: "#6aa1c1",
                      }}
                      placeholder="Search for traditional treasures..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2 xl:p-3 transition-all shadow-lg border-2 border-white"
                      style={{ background: "linear-gradient(135deg, #6aa1c1, #6aa1c1)" }}
                    >
                      <Search size={16} className="xl:w-[18px] xl:h-[18px]" />
                    </button>
                  </div>
                  {searchQuery && (
                    <div
                      className="absolute z-20 mt-3 w-full bg-gradient-to-b from-slate-50 to-blue-50 shadow-2xl rounded-2xl overflow-hidden border-3 max-h-60 overflow-y-auto"
                      style={{ borderColor: "#6aa1c1" }}
                    >
                      {categories
                        .filter((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((cat, index) => (
                          <div
                            key={index}
                            className="px-4 xl:px-6 py-3 xl:py-4 cursor-pointer transition-all duration-200 flex items-center justify-between border-b last:border-b-0 hover:shadow-md"
                            style={{
                              borderColor: "#6aa1c1",
                              background: index % 2 === 0 ? "transparent" : "#6aa1c1",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "linear-gradient(90deg, #6aa1c1 , #6aa1c1 )"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background =
                                index % 2 === 0 ? "transparent" : "#6aa1c1"
                            }}
                            onClick={() => handleCategorySelect(cat)}
                          >
                            <span className="font-bold text-sm xl:text-base" style={{ color: "#6aa1c1" }}>
                              {cat}
                            </span>
                            <div className="flex items-center">
                              <span
                                className="text-xs text-white px-2 xl:px-3 py-1 rounded-full font-semibold"
                                style={{ background: "linear-gradient(135deg, #6aa1c1, #6aa1c1)" }}
                              >
                                Category
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 xl:h-5 xl:w-5 ml-2 xl:ml-3"
                                style={{ color: "#6aa1c1" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </form>
              </div>
            </div>

          

            {/* Desktop Actions with traditional styling */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-6">
                <Link
           to="/vendorverification"
                className=" px-4 py-2 text-sm bg-[#6aa1c1] text-white font-bold transition-all duration-300 rounded-full flex items-center space-x-2 group"
              >
                Vendor Verification
              </Link>
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center space-x-2 xl:space-x-3 transition-all group"
                  style={{ color: "#6aa1c1" }}
                >
                  <div
                    className="w-9 h-9 xl:w-11 xl:h-11 flex items-center justify-center rounded-full border-3 group-hover:shadow-lg transition-all"
                    style={{
                      background: "linear-gradient(135deg, white, white)",
                      borderColor: "#6aa1c1",
                    }}
                  >
                    <User size={18} className="xl:w-5 xl:h-5" style={{ color: "#6aa1c1" }} />
                  </div>
                  {user ? (
                    <span className="text-xs xl:text-sm font-bold hidden xl:block">{user.firstName}</span>
                  ) : (
                    <span className="text-xs xl:text-sm font-bold hidden xl:block">Account</span>
                  )}
                </button>
                {userMenuOpen && (
                  <div
                    className="absolute right-0 mt-3 w-56 xl:w-64 bg-gradient-to-b from-slate-50 to-blue-50 shadow-2xl rounded-2xl overflow-hidden z-30 border-3"
                    style={{ borderColor: "#6aa1c1" }}
                  >
                    {user ? (
                      <>
                        <div
                          className="px-4 xl:px-6 py-3 xl:py-4 border-b-2"
                          style={{
                            background: "linear-gradient(135deg,#6aa1c1 ,#6aa1c1)",
                            borderColor: "#6aa1c1",
                          }}
                        >
                          <p className="text-sm font-bold" style={{ color: "#6aa1c1" }}>
                            {user.firstName} {user.lastName || ""}
                          </p>
                          <p className="text-xs truncate" style={{ color: "#6aa1c1" }}>
                            {user.email}
                          </p>
                        </div>
                        <div className="py-2">
                          <Link
                            to="/wishlist"
                            className="block px-4 xl:px-6 py-3 text-sm font-semibold transition-all hover:shadow-md"
                            style={{ color: "#1B2E4F" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "linear-gradient(90deg, #6aa1c1, #6aa1c1)"
                              e.currentTarget.style.color = "#6aa1c1"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent"
                              e.currentTarget.style.color = "#6aa1c1"
                            }}
                            onClick={() => setUserMenuOpen(false)}
                          >
                            Your Wishlist
                          </Link>
                        </div>
                        <div className="py-2 border-t-2" style={{ borderColor: "#6aa1c1" }}>
                          <button
                            onClick={handleLogout}
                            className="block w-full text-left px-4 xl:px-6 py-3 text-sm font-semibold transition-all hover:shadow-md"
                            style={{ color: "#6aa1c1" }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "linear-gradient(90deg, #6aa1c1, #6aa1c1)"
                              e.currentTarget.style.color = "#872D67"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent"
                              e.currentTarget.style.color = "#6aa1c1"
                            }}
                          >
                            Sign out
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="py-2">
                        <Link
                          to="/login"
                          className="block px-4 xl:px-6 py-3 xl:py-4 text-center text-white font-bold transition-all hover:shadow-lg"
                          style={{ background: "linear-gradient(135deg, #6aa1c1, #6aa1c122)" }}
                          onClick={() => setUserMenuOpen(false)}
                        >
                          Login / Register
                        </Link>
                        <div className="p-4 xl:p-6">
                          <p className="text-xs text-center font-medium" style={{ color: "#6aa1c1" }}>
                            Join our heritage family for exclusive collections and faster checkout
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                onClick={() => navigate("/wishlist")}
                className="relative p-2 xl:p-3 transition-all group rounded-full"
                style={{ color: "#6aa1c1" }}
              >
                <div
                  className="absolute inset-0 rounded-full border-2 group-hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(56, 77, 137, 0.1), rgba(161, 60, 120, 0.1))",
                    borderColor: "#6aa1c1",
                  }}
                ></div>
                <Heart size={20} className="relative z-10 xl:w-6 xl:h-6" />
                {wishlistCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center border-2 border-white shadow-lg"
                    style={{ background: "linear-gradient(135deg, #A13C78, #872D67)" }}
                  >
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={onCartClick}
                className="relative p-2 xl:p-3 transition-all group rounded-full"
                style={{ color: "#1B2E4F" }}
              >
                <div
                  className="absolute inset-0 rounded-full border-2 group-hover:shadow-lg transition-all"
                  style={{
                    background: "linear-gradient(135deg, rgba(56, 77, 137, 0.1), rgba(161, 60, 120, 0.1))",
                    borderColor: "#6aa1c1",
                  }}
                ></div>
                <ShoppingCart size={20} className="relative z-10 xl:w-6 xl:h-6" />
                {cartItemCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full w-5 h-5 xl:w-6 xl:h-6 flex items-center justify-center border-2 border-white shadow-lg"
                    style={{ background: "linear-gradient(135deg, #A13C78, #872D67)" }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center space-x-2 sm:space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 transition-colors"
                style={{ color: "#1B2E4F" }}
              >
                <Search size={20} className="sm:w-6 sm:h-6" />
              </button>
              <button onClick={onCartClick} className="relative p-2 transition-colors" style={{ color: "#1B2E4F" }}>
                <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
                {cartItemCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #A13C78, #872D67)" }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 transition-colors"
                style={{ color: "#1B2E4F" }}
              >
                {menuOpen ? <X size={22} className="sm:w-7 sm:h-7" /> : <Menu size={22} className="sm:w-7 sm:h-7" />}
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
                      className="block w-full pl-4 pr-12 py-3 text-sm rounded-full border-3 bg-gradient-to-r from-slate-50 to-blue-50 focus:outline-none focus:ring-3 font-medium"
                      style={{
                        borderColor: "#6aa1c1",
                        color: "#1B2E4F",
                      }}
                      placeholder="Search traditional items..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      required
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white rounded-full p-2 transition-all"
                      style={{ background: "linear-gradient(135deg, #6aa1c1, #2A4172)" }}
                    >
                      <Search size={16} />
                    </button>
                  </div>
                   {searchQuery && (
                    <div
                      className="absolute z-20 mt-3 w-full bg-gradient-to-b from-slate-50 to-blue-50 shadow-2xl rounded-2xl overflow-hidden border-3 max-h-60 overflow-y-auto"
                      style={{ borderColor: "#6aa1c1" }}
                    >
                      {categories
                        .filter((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))
                        .map((cat, index) => (
                          <div
                            key={index}
                            className="px-4 xl:px-6 py-3 xl:py-4 cursor-pointer transition-all duration-200 flex items-center justify-between border-b last:border-b-0 hover:shadow-md"
                            style={{
                              borderColor: "#6aa1c1",
                              background: index % 2 === 0 ? "transparent" : "rgba(56, 77, 137, 0.05)",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background =
                                "linear-gradient(90deg, rgba(56, 77, 137, 0.1), rgba(161, 60, 120, 0.1))"
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background =
                                index % 2 === 0 ? "transparent" : "rgba(56, 77, 137, 0.05)"
                            }}
                            onClick={() => handleCategorySelect(cat)}
                          >
                            <span className="font-bold text-sm xl:text-base" style={{ color: "#1B2E4F" }}>
                              {cat}
                            </span>
                            <div className="flex items-center">
                              <span
                                className="text-xs text-white px-2 xl:px-3 py-1 rounded-full font-semibold"
                                style={{ background: "linear-gradient(135deg, #A13C78, #872D67)" }}
                              >
                                Category
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4 xl:h-5 xl:w-5 ml-2 xl:ml-3"
                                style={{ color: "#6aa1c1" }}
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}
        </div>

        {/* Bottom decorative border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, #681853 0%, #872D67 25%, #A13C78 50%, #C1467F 75%, #681853 100%)",
          }}
        ></div>
      </nav>

      {/* Category Navigation - Always visible, becomes sticky when scrolled */}
      <div
        className={`hidden xl:block border-t-2 transition-all duration-300 ${
          isSticky ? "sticky top-0 z-50 shadow-lg" : "relative"
        }`}
        style={{
          background: "linear-gradient(135deg, rgb(255 246 254), rgb(255 210 237 / 97%))",
          borderColor: "#6aa1c1",
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between py-3">
            {/* Traditional ornamental left divider */}
            <div className="flex items-center space-x-2">
              <div
                className="w-12 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #6aa1c1, transparent)" }}
              ></div>
              <div
                className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "#6aa1c1", background: "rgba(157, 48, 137, 0.1)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#6aa1c1" }}></div>
              </div>
            </div>

            {/* Main Categories (First 6) */}
            <div className="flex items-center space-x-1">
              {categories.slice(0, 6).map((item) => (
                <Link
                  key={item}
                  to={`/category/${item.toLowerCase()}`}
                  className="relative group px-3 py-2 text-sm font-bold transition-all duration-300"
                  style={{
                    color: "#1B2E4F",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#1B2E4F"
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(157, 48, 137, 0.4)"
                    e.currentTarget.style.borderColor = "#6aa1c1"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#1B2E4F"
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, rgb(255 255 255 / 5%), rgb(255 201 233 / 5%))"
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <span className="relative z-10 text-[14px]">{item}</span>
                  {/* Traditional corner decorations */}
                  <div
                    className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: "linear-gradient(135deg, #C1467F, #A13C78)" }}
                  ></div>
                </Link>
              ))}

              {/* More Categories Dropdown */}
              {categories.length > 6 && (
                <div className="relative" ref={moreMenuRef}>
                  <button
                    onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                    className="relative px-4 py-2 text-sm bg-[#6aa1c1] font-bold transition-all duration-300 rounded-full flex items-center space-x-2 group"
                    style={{
                      color: "#fff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff"
                      e.currentTarget.style.transform = "translateY(-2px)"
                      e.currentTarget.style.borderColor = "#6aa1c1"
                    }}
                    onMouseLeave={(e) => {
                      if (!moreMenuOpen) {
                        e.currentTarget.style.color = "#fff"
                        e.currentTarget.style.transform = "translateY(0)"
                      }
                    }}
                  >
                    <span>More Categories</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${moreMenuOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu with Traditional Styling */}
                  {moreMenuOpen && (
                    <div
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 z-50"
                      style={{
                        background: "linear-gradient(135deg, #f8fafc, #f1f5f9)",
                        border: "1px solid #6aa1c1",
                        borderRadius: "10px",
                        boxShadow: "0 20px 40px rgba(157, 48, 137, 0.2)",
                      }}
                    >
                      {/* Traditional decorative header */}
                      <div className="px-6 py-4 border-b-2">
                        <h3 className="text-sm font-bold text-center relative z-10">✦ Explore More Collections ✦</h3>
                      </div>

                      {/* Categories Grid */}
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-2">
                          {categories.slice(6).map((item) => (
                            <Link
                              key={item}
                              to={`/category/${item.toLowerCase()}`}
                              className="relative group px-4 py-3 text-sm font-semibold transition-all duration-300 rounded-lg border"
                              style={{
                                color: "#1B2E4F",
                                background: "rgba(157, 48, 137, 0.05)",
                                borderColor: "rgba(157, 48, 137, 0.1)",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "white"
                                e.currentTarget.style.background =
                                  "linear-gradient(135deg, #6aa1c1, rgb(135, 45, 103))"
                                e.currentTarget.style.transform = "translateX(4px)"
                                e.currentTarget.style.boxShadow = "0 4px 15px rgba(157, 48, 137, 0.3)"
                                e.currentTarget.style.borderColor = "#6aa1c1"
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color = "#1B2E4F"
                                e.currentTarget.style.background = "rgba(157, 48, 137, 0.05)"
                                e.currentTarget.style.transform = "translateX(0)"
                                e.currentTarget.style.boxShadow = "none"
                                e.currentTarget.style.borderColor = "rgba(157, 48, 137, 0.1)"
                              }}
                              onClick={() => handleCategorySelect(item)}
                            >
                              <div className="flex items-center justify-between">
                                <span>{item}</span>
                                <svg
                                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Traditional decorative footer */}
                      <div className="px-6 py-3 border-t" style={{ borderColor: "rgba(157, 48, 137, 0.2)" }}>
                        <div className="flex justify-center">
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className="w-1 h-1 rounded-full"
                                style={{
                                  background: i === 2 ? "#6aa1c1" : "rgba(157, 48, 137, 0.3)",
                                }}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Traditional ornamental right divider */}
            <div className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded-full border-2 flex items-center justify-center"
                style={{ borderColor: "#6aa1c1", background: "rgba(157, 48, 137, 0.1)" }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#6aa1c1" }}></div>
              </div>
              <div
                className="w-12 h-0.5 rounded-full"
                style={{ background: "linear-gradient(90deg, transparent, #6aa1c1, transparent)" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu with traditional styling */} 
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black bg-opacity-60 transition-opacity">
          <div
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-gradient-to-b from-slate-50 to-blue-50 shadow-2xl z-50 transform transition-transform duration-300 border-l-4"
            style={{ borderColor: "#6aa1c1" }}
          >
            <div className="flex flex-col h-full relative">
              {/* Decorative header */}
              <div
                className="p-4 sm:p-6 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #6aa1c1, #2A4172)" }}
              >
                {/* <div className="absolute inset-0 opacity-20">
                  <div
                    className="h-full w-full"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm20-20c11.046 0 20 8.954 20 20s-8.954 20-20 20-20-8.954-20-20 8.954-20 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                  />
                </div> */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white hover:text-blue-200 focus:outline-none z-10"
                >
                  <X size={24} className="sm:w-7 sm:h-7" />
                </button>
                {user ? (
                  <div className="flex items-center space-x-3 sm:space-x-4 relative z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-white bg-opacity-20 text-white rounded-full border-2 border-white border-opacity-30">
                      <User size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-white text-base sm:text-lg">{user.firstName}</p>
                      <p className="text-xs text-blue-100 ">Welcome back!</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 sm:space-y-4 relative z-10"  style={{"width" : "fit-content"}}>
                    <p className="text-white font-bold text-base sm:text-lg"  style={{"width" : "fit-content"}}>Welcome to Heritage Store!</p>
                    <div className="flex space-x-2 sm:space-x-3">
                      <Link
                        to="/login"
                        className="flex-1 bg-white bg-opacity-20 text-white text-center py-2 sm:py-3 rounded-lg font-bold border-2 border-white border-opacity-30 hover:bg-opacity-30 transition-all text-sm sm:text-base"
                        onClick={() => setMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex-1 bg-white text-center py-2 sm:py-3 rounded-lg font-bold hover:bg-blue-50 transition-all text-sm sm:text-base"
                        style={{ color: "#6aa1c1" }}
                        onClick={() => setMenuOpen(false)}
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="py-4">
                  <h3
                    className="px-4 sm:px-6 py-3 text-xs font-bold uppercase tracking-wider border-b-2"
                    style={{
                      color: "#1B2E4F",
                      borderColor: "#6aa1c1",
                    }}
                  >
                    Heritage Categories
                  </h3>
                  <div className="space-y-1 mt-2">
                    {categories.map((item) => (
                      <Link
                        key={item}
                        to={`/category/${item.toLowerCase()}`}
                        className="block px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all border-l-4 border-transparent text-sm sm:text-base"
                        style={{ color: "#1B2E4F" }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "linear-gradient(90deg, rgba(56, 77, 137, 0.1), rgba(161, 60, 120, 0.1))"
                          e.currentTarget.style.color = "#6aa1c1"
                          e.currentTarget.style.borderColor = "#6aa1c1"
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "transparent"
                          e.currentTarget.style.color = "#1B2E4F"
                          e.currentTarget.style.borderColor = "transparent"
                        }}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-4 border-t-2" style={{ borderColor: "#6aa1c1" }}>
                  <h3
                    className="px-4 sm:px-6 py-3 text-xs font-bold uppercase tracking-wider"
                    style={{ color: "#1B2E4F" }}
                  >
                    Your Account
                  </h3>
                  <div className="space-y-1 mt-2">
                    <Link
                      to="/wishlist"
                      className="block px-4 sm:px-6 py-3 sm:py-4 font-semibold transition-all border-l-4 border-transparent text-sm sm:text-base"
                      style={{ color: "#1B2E4F" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "linear-gradient(90deg, rgba(56, 77, 137, 0.1), rgba(161, 60, 120, 0.1))"
                        e.currentTarget.style.color = "#6aa1c1"
                        e.currentTarget.style.borderColor = "#6aa1c1"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent"
                        e.currentTarget.style.color = "#1B2E4F"
                        e.currentTarget.style.borderColor = "transparent"
                      }}
                      onClick={() => setMenuOpen(false)}
                    >
                      Your Wishlist
                      {wishlistCount > 0 && (
                        <span
                          className="ml-2 sm:ml-3 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-bold"
                          style={{ background: "linear-gradient(135deg, #A13C78, #872D67)" }}
                        >
                          {wishlistCount}
                        </span>
                      )}
                    </Link>
                  </div>
                </div>
                {user && (
                  <div className="p-4 sm:p-6 border-t-2" style={{ borderColor: "#6aa1c1" }}>
                    <button
                      onClick={handleLogout}
                      className="w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-bold transition-all border-2 text-sm sm:text-base"
                      style={{
                        background: "linear-gradient(135deg, rgba(56, 77, 137, 0.1), rgba(161, 60, 120, 0.1))",
                        color: "#1B2E4F",
                        borderColor: "#6aa1c1",
                      }}
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
    </>
  )
}

export default Navbar
