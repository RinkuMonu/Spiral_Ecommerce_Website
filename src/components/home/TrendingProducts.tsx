"use client"

import { useEffect, useState } from "react"
import { Eye, Heart, ShoppingCart, Star, X, Clock } from "lucide-react"
import { useDispatch } from "react-redux"
import { addItemToWishlist } from "../../reduxslice/WishlistSlice"
import { addItemToCart } from "../../reduxslice/CartSlice"

const TrendingProducts = ({ addToCart }: { addToCart: (product: any) => void }) => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [quantity, setQuantity] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [products, setProducts] = useState<any[]>([])
  const [wishlistedItems, setWishlistedItems] = useState<Set<string>>(new Set())
  const dispatch = useDispatch()

  const baseUrl = import.meta.env.VITE_API_BASE_URL
  const referenceWebsite = import.meta.env.VITE_REFERENCE_WEBSITE

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isModalOpen])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/product/getproducts?referenceWebsite=${referenceWebsite}`)
        const data = await res.json()
        if (Array.isArray(data.products)) {
          setProducts(data.products)
        } else {
          console.error("Unexpected products format:", data)
        }
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }
    fetchProducts()
  }, [])

  const openProductModal = (product: any) => {
    setSelectedProduct(product)
    setQuantity(1)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProduct(null), 300)
  }

  const handleAddToCart = (product: any) => {
    dispatch(
      addItemToCart({
        id: product._id,
        name: product.productName,
        image: product.images?.[0] || "",
        category: product.category?.name || "Uncategorized",
        price: product.actualPrice || product.price,
        quantity,
      }),
    )
    closeModal()
  }

  const handleAddToWishlist = (product: any) => {
    const productId = product._id
    const newWishlistedItems = new Set(wishlistedItems)

    if (wishlistedItems.has(productId)) {
      newWishlistedItems.delete(productId)
    } else {
      newWishlistedItems.add(productId)
    }

    setWishlistedItems(newWishlistedItems)
    dispatch(addItemToWishlist(productId))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={14}
        className={`${i < Math.floor(rating) ? "fill-yellow-400 stroke-yellow-400" : "stroke-gray-300"}`}
      />
    ))
  }

  const calculateDiscount = (originalPrice: number, salePrice: number) => {
    return Math.round(((originalPrice - salePrice) / originalPrice) * 100)
  }

  return (
    <section className="py-16 bg-gray-50 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {/* <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight" style={{ color: "#A13C78" }}>
            SALE
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed" style={{ color: "#384D89" }}>
            Discover our wide range of women's ethnic wear and western wear fashion
          </p>
        </div> */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 mr-4" style={{ backgroundColor: "#A13C78" }}></div>
            <h2 className="text-lg font-semibold tracking-wider" style={{ color: "#A13C78" }}>
              TRENDING COLLECTION
            </h2>
            <div className="w-12 h-0.5 ml-4" style={{ backgroundColor: "#A13C78" }}></div>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-gray-900" >Popular</span>{" "}
            <span className=""  style={{ color: "#A13C78" }}>Products</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular items loved by customers worldwide
          </p>
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {products.slice(0, 8).map((product, index) => {
            const originalPrice = product.price || 0
            const salePrice = product.actualPrice || originalPrice
            const discountPercentage = originalPrice > salePrice ? calculateDiscount(originalPrice, salePrice) : 0
            const rating = product.rating || 4.2 + index * 0.2
            const isWishlisted = wishlistedItems.has(product._id)

            return (
              <div
                key={product._id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Product Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                  {/* Wishlist Button */}
                  <button
                    onClick={() => handleAddToWishlist(product)}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:shadow-md transition-all duration-200 hover:scale-110"
                    style={{
                      backgroundColor: isWishlisted ? "#A13C78" : "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <Heart
                      size={16}
                      className={`transition-colors duration-200 ${
                        isWishlisted ? "text-white fill-current" : "text-gray-600"
                      }`}
                    />
                  </button>

                  {/* Discount Badge */}
                  {discountPercentage > 0 && (
                    <div
                      className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold text-white z-10"
                      style={{ backgroundColor: "#A13C78" }}
                    >
                      {discountPercentage}% OFF
                    </div>
                  )}

                  {/* Product Images with Hover Effect */}
                  <div className="relative w-full h-full">
                    {/* First Image (Default) */}
                    <img
                      src={product.images?.[0] || "/placeholder.svg?height=400&width=300&query=ethnic wear"}
                      alt={product.productName}
                      className="absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Second Image (Hover) */}
                    {product.images?.[1] && (
                      <img
                        src={product.images[1] || "/placeholder.svg"}
                        alt={`${product.productName} - Alternative view`}
                        className="absolute inset-0 w-full h-full object-cover transition-all duration-500 opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                        loading="lazy"
                      />
                    )}

                    {/* Fallback for products with only one image */}
                    {!product.images?.[1] && (
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    )}
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />

                  {/* Quick Action Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                        style={{ color: "#384D89" }}
                      >
                        <ShoppingCart size={18} />
                      </button>
                      <button
                        onClick={() => openProductModal(product)}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
                        style={{ color: "#384D89" }}
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4 space-y-3">
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    <div className="flex">{renderStars(rating)}</div>
                    <span className="text-sm font-medium text-gray-600 ml-1">{rating.toFixed(1)}</span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-base leading-tight line-clamp-2" style={{ color: "#384D89" }}>
                    {product.productName}
                  </h3>

                  {/* Price Section */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-lg font-bold" style={{ color: "#A13C78" }}>
                      ₹{salePrice?.toLocaleString()}
                    </span>
                    {discountPercentage > 0 && (
                      <>
                        <span className="text-sm text-gray-500 line-through">₹{originalPrice?.toLocaleString()}</span>
                        <span className="text-sm font-semibold" style={{ color: "#A13C78" }}>
                          {discountPercentage}% OFF
                        </span>
                      </>
                    )}
                  </div>

                  {/* Shipping Info */}
                  <div className="flex items-center gap-1 text-xs" style={{ color: "#384D89" }}>
                    <Clock size={12} />
                    <span className="font-bold">24-HOUR</span>
                    <span className="text-gray-600">Ships within 24 hours</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* View All Button */}
        {products.length > 8 && (
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 border-2 hover:shadow-lg"
              style={{
                color: "rgb(157 48 137)",
                borderColor: "rgb(157 48 137)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgb(157 48 137)"
                e.currentTarget.style.color = "white"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent"
                e.currentTarget.style.color = "rgb(157 48 137)"
              }}
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      {/* Product Quick View Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className={`relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-white p-4 border-b flex justify-between items-center shadow-sm">
              <h3 className="text-xl font-bold" style={{ color: "#384D89" }}>
                {selectedProduct.productName}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
                <img
                  className="rounded-xl object-contain max-h-[400px]"
                  src={selectedProduct.images?.[0] || "/placeholder.svg"}
                  alt={selectedProduct.productName}
                />
              </div>

              {/* Product Details */}
              <div>
                <div className="mb-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    <div className="flex mr-2">{renderStars(selectedProduct.rating || 4.5)}</div>
                    <span className="text-sm text-gray-500">({selectedProduct.reviews || "150"} reviews)</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center mb-6">
                    <span className="text-3xl font-bold mr-3" style={{ color: "#A13C78" }}>
                      ₹{selectedProduct.actualPrice || selectedProduct.price}
                    </span>
                    {selectedProduct.price && selectedProduct.actualPrice !== selectedProduct.price && (
                      <span className="text-lg text-gray-400 line-through">₹{selectedProduct.price}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {selectedProduct.description ||
                      "Premium quality ethnic wear with modern design and excellent craftsmanship. Perfect for all occasions."}
                  </p>
                </div>

                {/* Product Details */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 border-b pb-2" style={{ color: "#384D89" }}>
                    Product Details
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Category</span>
                      <span className="font-medium">{selectedProduct.category?.name || "Ethnic Wear"}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Material</span>
                      <span className="font-medium">Premium Silk</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Occasion</span>
                      <span className="font-medium">Festive & Party</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-600 text-sm">Availability</span>
                      <span className="font-medium text-green-600">In Stock</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="flex-1 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#2A4172" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1B2E4F"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#2A4172"
                    }}
                  >
                    <ShoppingCart size={18} />
                    <span>Add to Cart</span>
                  </button>
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="flex-1 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#A13C78" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#872D67"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#A13C78"
                    }}
                  >
                    <span>Buy Now</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default TrendingProducts
