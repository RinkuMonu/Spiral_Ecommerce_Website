"use client"
import { Truck, Package, CreditCard, Headphones } from "lucide-react"

const DeliveryFeatures = () => {
  const features = [
    {
      icon: <Truck className="text-4xl" />,
      title: "Free Heritage Delivery",
      description: "On all Orders Over ₹999",
      highlight: "Free Shipping",
    },
    {
      icon: <Package className="text-4xl" />,
      title: "Express Delivery",
      description: "Delivery within 2-3 Days across India",
      highlight: "Quick Service",
    },
    {
      icon: <CreditCard className="text-4xl" />,
      title: "Secure Payments",
      description: "Multiple Safe Payment Options",
      highlight: "100% Secure",
    },
    {
      icon: <Headphones className="text-4xl" />,
      title: "Heritage Support",
      description: "Expert Guidance & Quick Solutions",
      highlight: "24/7 Support",
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1B2E4F" }}>
            Why Choose <span style={{ color: "rgb(157 48 137)" }}>Our Heritage</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience premium service with every traditional wear purchase
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2"
              style={{
                borderColor: "rgba(157, 48, 137, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgb(157 48 137)"
                e.currentTarget.style.backgroundColor = "rgba(157, 48, 137, 0.02)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(157, 48, 137, 0.1)"
                e.currentTarget.style.backgroundColor = "white"
              }}
            >
              {/* Feature Number */}
              <div className="absolute -top-4 left-8">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg"
                  style={{ background: "rgb(157 48 137)" }}
                >
                  {index + 1}
                </div>
              </div>

              {/* Icon Container */}
              <div className="flex justify-center mb-6">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center border-3 group-hover:scale-110 transition-all duration-300 shadow-lg"
                  style={{
                    background: "rgba(157, 48, 137, 0.1)",
                    borderColor: "rgba(157, 48, 137, 0.3)",
                    color: "rgb(157 48 137)",
                  }}
                >
                  {item.icon}
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="mb-4">
                <span
                  className="px-4 py-2 rounded-full text-xs font-bold text-white"
                  style={{ background: "rgb(157 48 137)" }}
                >
                  {item.highlight}
                </span>
              </div>

              {/* Title */}
              <h4
                className="text-xl font-bold mb-3 group-hover:text-purple-900 transition-colors"
                style={{ color: "#1B2E4F" }}
              >
                {item.title}
              </h4>

              {/* Divider */}
              <div
                className="w-12 h-0.5 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:w-20"
                style={{ background: "rgb(157 48 137)" }}
              />

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>

            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex items-center px-8 py-4 rounded-full border-2"
            style={{
              borderColor: "rgba(157, 48, 137, 0.3)",
              background: "rgba(157, 48, 137, 0.05)",
              color: "rgb(157 48 137)",
            }}
          >
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "rgb(157 48 137)" }} />
                <span className="text-sm font-semibold">Trusted by 10,000+ Customers</span>
              </div>
              <div className="w-px h-4" style={{ background: "rgba(157, 48, 137, 0.3)" }} />
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full" style={{ background: "rgb(157 48 137)" }} />
                <span className="text-sm font-semibold">Authentic Heritage Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryFeatures
