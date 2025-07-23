"use client"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Sliders, X, ChevronDown, ChevronUp } from "lucide-react"
import ProductCard from "../components/products/ProductCard"

// Define Product type
interface Product {
  _id: string
  productName: string
  description: string
  images: string[]
  actualPrice: number
  price?: number
  discount?: number
  size?: string
  brand?: string
  category: {
    _id: string
    name: string
  }
  rating?: number
  createdAt: string
}

// Static dummy data for products
const dummyProducts: Product[] = [
  {
    _id: "1",
    productName: "Royal Brocade Saree with Golden Border",
    description: "A magnificent handwoven brocade saree, perfect for grand celebrations.",
  images: ["/saree4.webp" , "/saree2.webp"],
    actualPrice: 25000,
    price: 30000,
    discount: 17,
    brand: "Maharaja Textiles",
    category: { _id: "cat1", name: "Sarees" },
    rating: 4.9,
    createdAt: "2024-07-22T10:00:00Z",
  },
  {
    _id: "2",
    productName: "Emerald Green Anarkali Suit",
    description: "Elegant Anarkali suit in rich emerald green with intricate gold embroidery.",
  images: ["/saree3.webp" , "/saree6.webp"],
    actualPrice: 15000,
    price: 18000,
    discount: 16,
    brand: "Nawab Couture",
    category: { _id: "cat2", name: "Suits" },
    rating: 4.7,
    createdAt: "2024-07-21T11:00:00Z",
  },
  {
    _id: "3",
    productName: "Artisan Block Print Cotton Fabric",
    description: "Premium cotton fabric featuring traditional artisan block prints.",
  images: ["/saree12.webp" , "/saree5.webp"],
    actualPrice: 3500,
    brand: "Dastkar Fabrics",
    category: { _id: "cat3", name: "Fabrics" },
    rating: 4.8,
    createdAt: "2024-07-20T12:00:00Z",
  },
  {
    _id: "4",
    productName: "Crimson Velvet Bridal Lehenga",
    description: "Luxurious crimson velvet lehenga with heavy zardozi work.",
  images: ["/saree8.webp" , "/saree9.webp"],
    actualPrice: 45000,
    price: 55000,
    discount: 18,
    brand: "Royal Attire",
    category: { _id: "cat4", name: "Lehengas" },
    rating: 4.9,
    createdAt: "2024-07-19T13:00:00Z",
  },
  {
    _id: "5",
    productName: "Indigo Dabu Print Kurta",
    description: "Comfortable and stylish indigo kurta with authentic Dabu print.",
  images: ["/saree10.webp" , "/saree12.webp"],
    actualPrice: 6800,
    brand: "Rural Roots",
    category: { _id: "cat5", name: "Kurtas" },
    rating: 4.6,
    createdAt: "2024-07-18T14:00:00Z",
  },
  {
    _id: "6",
    productName: "Kashmiri Pashmina Shawl",
    description: "Soft and warm Pashmina shawl with delicate hand embroidery.",
images: ["/saree11.webp" , "/saree2.webp"],
    actualPrice: 11000,
    brand: "Kashmir Crafts",
    category: { _id: "cat6", name: "Accessories" },
    rating: 4.8,
    createdAt: "2024-07-17T15:00:00Z",
  },
  {
    _id: "7",
    productName: "Silk Chanderi Dupatta",
    description: "Elegant silk Chanderi dupatta with traditional motifs.",
images: ["/saree7.webp" , "/saree6.webp"],
    actualPrice: 4500,
    price: 5500,
    discount: 18,
    brand: "Chanderi Weavers",
    category: { _id: "cat7", name: "Accessories" },
    rating: 4.5,
    createdAt: "2024-07-16T16:00:00Z",
  },
  {
    _id: "8",
    productName: "Banarasi Silk Saree",
    description: "Traditional Banarasi silk saree with intricate zari work.",
images: ["/saree5.webp" , "/saree1.webp"],
    actualPrice: 35000,
    price: 42000,
    discount: 17,
    brand: "Banaras Heritage",
    category: { _id: "cat1", name: "Sarees" },
    rating: 4.9,
    createdAt: "2024-07-15T17:00:00Z",
  },
]

// Calculate initial price range from static data
const initialPrices = dummyProducts.map((p) => p.actualPrice)
const initialMinPrice = Math.min(...initialPrices)
const initialMaxPrice = Math.max(...initialPrices, 1) // Ensure maxPrice is not 0

export default function Products() {
  const { category } = useParams()
  const products = dummyProducts // Use static data directly
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [priceRange, setPriceRange] = useState([initialMinPrice, initialMaxPrice])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)
  const [openSections, setOpenSections] = useState({
    price: true,
    brands: true,
  })

  // Filter and sort products when dependencies change
  useEffect(() => {
    let filtered = products.filter((product) => {
      const productCategory = product.category?.name?.toLowerCase()
      const matchesCategory = !category || category === "all-categories" || productCategory === category
      const matchesPrice = product.actualPrice >= priceRange[0] && product.actualPrice <= priceRange[1]
      const matchesBrand = selectedBrands.length === 0 || (product.brand && selectedBrands.includes(product.brand))
      return matchesCategory && matchesPrice && matchesBrand
    })

    // Sort products
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.actualPrice - b.actualPrice
        case "price-high":
          return b.actualPrice - a.actualPrice
        case "oldest":
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        default: // "newest"
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      }
    })

    setFilteredProducts(filtered)
  }, [products, category, priceRange, selectedBrands, sortBy])

  const allBrands = Array.from(new Set(products.map((p) => p.brand).filter(Boolean))) as string[]

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))
  }

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const resetFilters = () => {
    setPriceRange([initialMinPrice, initialMaxPrice])
    setSelectedBrands([])
    setSortBy("newest")
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold capitalize mb-4" style={{ color: "#1B2E4F" }}>
            {category?.replace(/-/g, " ") || "All Products"}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated collection of{" "}
            <span className="font-semibold" style={{ color: "rgb(157 48 137)" }}>
              {filteredProducts.length}
            </span>{" "}
            authentic traditional pieces
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={resetFilters}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors font-medium px-4 py-2 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-white"
            >
              <X className="h-4 w-4" />
              <span>Reset</span>
            </button>
            <button
              onClick={() => {}}
              className="flex items-center space-x-2 text-white px-6 py-2.5 rounded-lg transition-colors font-medium"
              style={{ background: "rgb(157 48 137)" }}
            >
              <Sliders className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div
            className={`lg:w-80 space-y-6 ${
              showFilters
                ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto"
                : "hidden lg:block bg-white rounded-xl shadow-sm p-6 border border-gray-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold" style={{ color: "#1B2E4F" }}>
                Filters
              </h2>
              <button onClick={() => setShowFilters(false)} className="lg:hidden text-gray-500 hover:text-gray-700 p-1">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Price Range */}
            <div className="border-b border-gray-200 pb-6">
              <div
                className="flex justify-between items-center cursor-pointer mb-4"
                onClick={() => toggleSection("price")}
              >
                <h3 className="font-semibold text-gray-800">Price Range</h3>
                {openSections.price ? (
                  <ChevronUp className="h-4 w-4 text-gray-500" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                )}
              </div>
              {openSections.price && (
                <div className="space-y-4">
                  {/* Price Display */}
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-700">₹{priceRange[0].toLocaleString()}</span>
                    <span className="text-xs text-gray-500">to</span>
                    <span className="text-sm font-medium text-gray-700">₹{priceRange[1].toLocaleString()}</span>
                  </div>

                  {/* Dual Range Slider */}
                  <div className="relative pt-2">
                    <div className="relative h-1 bg-gray-200 rounded-full">
                      <div
                        className="absolute h-1 rounded-full"
                        style={{
                          background: "rgb(157 48 137)",
                          left: `${(priceRange[0] / initialMaxPrice) * 100}%`,
                          width: `${((priceRange[1] - priceRange[0]) / initialMaxPrice) * 100}%`,
                        }}
                      />
                    </div>
                    <input
                      type="range"
                      min={initialMinPrice}
                      max={initialMaxPrice}
                      value={priceRange[0]}
                      onChange={(e) => {
                        const value = Math.min(Number(e.target.value), priceRange[1] - 1)
                        setPriceRange([value, priceRange[1]])
                      }}
                      className="absolute top-2 w-full h-1 bg-transparent appearance-none cursor-pointer range-slider"
                    />
                    <input
                      type="range"
                      min={initialMinPrice}
                      max={initialMaxPrice}
                      value={priceRange[1]}
                      onChange={(e) => {
                        const value = Math.max(Number(e.target.value), priceRange[0] + 1)
                        setPriceRange([priceRange[0], value])
                      }}
                      className="absolute top-2 w-full h-1 bg-transparent appearance-none cursor-pointer range-slider"
                    />
                  </div>

                  {/* Manual Input */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">Min Price</label>
                      <input
                        type="number"
                        min={initialMinPrice}
                        max={initialMaxPrice}
                        value={priceRange[0]}
                        onChange={(e) => {
                          const value = Number(e.target.value) || 0
                          if (value <= priceRange[1]) setPriceRange([value, priceRange[1]])
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                        placeholder="Min"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-gray-600 block mb-1">Max Price</label>
                      <input
                        type="number"
                        min={initialMinPrice}
                        max={initialMaxPrice}
                        value={priceRange[1]}
                        onChange={(e) => {
                          const value = Number(e.target.value) || initialMaxPrice
                          if (value >= priceRange[0]) setPriceRange([priceRange[0], value])
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Brands */}
            {allBrands.length > 0 && (
              <div className="border-b border-gray-200 pb-6">
                <div
                  className="flex justify-between items-center cursor-pointer mb-4"
                  onClick={() => toggleSection("brands")}
                >
                  <h3 className="font-semibold text-gray-800">Brands</h3>
                  {openSections.brands ? (
                    <ChevronUp className="h-4 w-4 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  )}
                </div>
                {openSections.brands && (
                  <div className="space-y-3 max-h-48 overflow-y-auto">
                    {allBrands.map((brand) => (
                      <label key={brand} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="relative">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandChange(brand)}
                            className="sr-only"
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                              selectedBrands.includes(brand)
                                ? "border-purple-600"
                                : "border-gray-300 group-hover:border-purple-400"
                            }`}
                            style={{
                              background: selectedBrands.includes(brand) ? "rgb(157 48 137)" : "transparent",
                            }}
                          >
                            {selectedBrands.includes(brand) && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                        </div>
                        <span className="text-sm text-gray-700 group-hover:text-gray-900">{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            )}

            <button
              onClick={resetFilters}
              className="w-full py-3 text-center bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Reset All Filters
            </button>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="bg-gray-50 rounded-xl p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center rounded-full bg-gray-200">
                  <Sliders className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  Try adjusting your filters or explore other categories to find your perfect piece.
                </p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-3 text-white rounded-lg font-medium transition-colors hover:shadow-lg"
                  style={{ background: "rgb(157 48 137)" }}
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Custom CSS for range sliders */}
      <style jsx>{`
        .range-slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgb(157 48 137);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 2;
        }

        .range-slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: rgb(157 48 137);
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .range-slider::-webkit-slider-track {
          background: transparent;
        }

        .range-slider::-moz-range-track {
          background: transparent;
        }
      `}</style>
    </div>
  )
}