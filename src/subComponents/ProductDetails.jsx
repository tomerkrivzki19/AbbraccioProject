import React, { useState } from "react";

// product details compoenent - for product page

function ProductDetails({ name, price, colors, description, features = [] }) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="space-y-6">
      {/* Title & price */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-light text-[#4B2E23] mb-2">
          {name}
        </h1>
        <p className="text-2xl font-medium text-[#5c3a2c]">
          ${price.toFixed(2)}
        </p>
      </div>

      {/* Color Picker */}
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Color</h3>
        <div className="flex gap-2">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => setSelectedColor(index)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === index
                  ? "border-[#5c3a2c] shadow-md scale-110"
                  : "border-gray-300 hover:border-[#b99e82]"
              }`}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-2">
          {colors[selectedColor].name}
        </p>
      </div>

      {/* Quantity + Buttons */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              className="px-3 py-2 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 12H4"
                />
              </svg>
            </button>
            <span className="px-4 py-2 min-w-[3rem] text-center">
              {quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(1)}
              className="px-3 py-2 text-gray-700 hover:bg-gray-100"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex gap-3">
          {/* Add to Cart */}
          <button className="flex-1 bg-[#5c3a2c] hover:bg-[#4B2E23] text-white h-12 text-base font-medium rounded-lg flex items-center justify-center transition">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8h14"
              />
            </svg>
            Add to Cart
          </button>

          {/* Favorite */}
          {/* <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`h-12 px-4 rounded-lg border transition ${
              isFavorite ? "text-red-500 border-red-300" : "border-gray-300"
            }`}
          >
            <svg
              className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 
              4.5 0 116.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
              />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Description */}
      {description && (
        <div className="p-6 rounded-lg bg-[#fefbf7] shadow">
          <h3 className="font-medium text-[#4B2E23] mb-3">Description</h3>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
      )}

      {/* Features */}
      {features.length > 0 && (
        <div className="p-6 rounded-lg shadow border">
          <h3 className="font-medium text-[#4B2E23] mb-3">Features</h3>
          <div className="flex flex-wrap gap-2">
            {features.map((feature, index) => (
              <span
                key={index}
                className="inline-block bg-[#f3e9dd] text-[#5c3a2c] text-sm px-3 py-1 rounded-full"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
