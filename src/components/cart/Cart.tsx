"use client"
import type React from "react"
import { X, ShoppingCart, Trash2, Plus, Minus, ArrowRight } from "lucide-react"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removeItemFromCart, updateQuantity } from "../../reduxslice/CartSlice"

interface Product {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  category?: string
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
  cartItems: Product[]
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cartItems }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // Total Price Calculation
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Increment Quantity
  const handleIncrement = (id: string) => {
    const item = cartItems.find((i) => i.id === id)
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }))
    }
  }

  // Decrement Quantity
  const handleDecrement = (id: string) => {
    const item = cartItems.find((i) => i.id === id)
    if (item && item.quantity > 1) {
      dispatch(updateQuantity({ id, quantity: item.quantity - 1 }))
    }
  }

  // Remove Item from Cart
  const handleDelete = (id: string) => {
    dispatch(removeItemFromCart(id))
  }

  // Checkout Logic with Login Check
  const handleCheckout = () => {
    const token = localStorage.getItem("userData")
    if (!token) {
      Swal.fire({
        title: "Login Required",
        text: "You need to login before proceeding to checkout.",
        icon: "warning",
        confirmButtonText: "Go to Login",
        confirmButtonColor: "rgb(157 48 137)",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login")
          onClose()
        }
      })
      return
    }
    navigate("/address")
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(157, 48, 137, 0.1)" }}
              >
                <ShoppingCart className="w-5 h-5" style={{ color: "rgb(157 48 137)" }} />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Shopping Cart</h2>
                <p className="text-sm text-gray-500">{cartItems.length} items</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "rgba(157, 48, 137, 0.1)" }}
                >
                  <ShoppingCart className="w-10 h-10" style={{ color: "rgb(157 48 137)" }} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Add some items to get started!</p>
                <button
                  onClick={onClose}
                  className="flex items-center gap-2 text-white px-6 py-2.5 rounded-lg font-medium transition-colors"
                  style={{ background: "rgb(157 48 137)" }}
                >
                  Continue Shopping
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-sm transition-shadow"
                  >
                    {/* Product Image */}
                    <div className="flex-shrink-0">
                      <img
                        // src={item.image || "/placeholder.svg?height=80&width=80"}
                        src={`http://api.jajamblockprints.com${item.image}`}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">{item.name}</h3>
                      {item.category && <p className="text-xs text-gray-500 mb-2">{item.category}</p>}
                      <div className="flex items-center justify-between">
                        <span className="font-bold" style={{ color: "rgb(157 48 137)" }}>
                          ₹{item.price.toLocaleString()}
                        </span>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => handleDecrement(item.id)}
                            className="p-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-2 text-sm font-medium min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleIncrement(item.id)}
                            className="p-2 hover:bg-gray-100 transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="text-sm text-gray-600">
                          Total: ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              {/* Price Summary */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal ({cartItems.length} items)</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 pt-3 border-t border-gray-200">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center gap-2 text-white py-3 px-4 rounded-lg font-semibold transition-colors hover:shadow-lg"
                  style={{ background: "rgb(157 48 137)" }}
                >
                  Proceed to Checkout
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Continue Shopping
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">Shipping and taxes calculated at checkout</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Cart
