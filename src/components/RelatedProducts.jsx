import React from "react";
// TODO: Related producs - need to make a function that will fetch products
// exmpale for checking
const products = [
  { id: 1, name: "Espresso Cup", price: 19.99, image: "/cups/1.jpg" },
  { id: 2, name: "Latte Mug", price: 24.99, image: "/cups/2.jpg" },
  { id: 3, name: "Coffee Bag", price: 14.99, image: "/bags/3.jpg" },
  { id: 4, name: "French Press", price: 49.99, image: "/gear/4.jpg" },
];
function RelatedProducts({ products }) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-light text-[#4B2E23] mb-8 text-center">
          You may also like
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm group cursor-pointer hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square bg-[#fefbf7] p-6 relative overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition"
                >
                  {/* Heart icon (Lucide/Feather-style inline SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 
                      4.5 0 116.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-[#4B2E23] mb-2 group-hover:text-[#5c3a2c] transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#5c3a2c] font-medium">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RelatedProducts;
