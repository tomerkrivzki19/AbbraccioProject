import React, { useState } from "react";

//  a gallery for product page component
// TODO: Have to pass data there props
function ProductImageGallery({ images, productName }) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Thumbnail images */}
      <div className="flex lg:flex-col gap-2 order-2 lg:order-1">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 lg:w-20 lg:h-20 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === index
                ? "border-[#5c3a2c] shadow-md"
                : "border-gray-300 hover:border-[#b99e82]"
            }`}
          >
            <img
              src={image}
              alt={`${productName} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 order-1 lg:order-2 bg-[#fefbf7] rounded-lg overflow-hidden shadow">
        <div className="aspect-square p-8">
          <img
            src={images[selectedImage]}
            alt={productName}
            className="w-full h-full object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductImageGallery;
