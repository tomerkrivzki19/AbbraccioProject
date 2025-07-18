import React, { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Nomad Pouch",
    href: "#",
    price: "$50",
    availability: "White and Black",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-01.jpg",
    imageAlt:
      "White fabric pouch with white zipper, black zipper pull, and black elastic loop.",
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    href: "#",
    price: "$140",
    availability: "Washed Black",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-02.jpg",
    imageAlt:
      "Front of tote bag with washed black canvas body, black straps, and tan leather handles and accents.",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    href: "#",
    price: "$220",
    availability: "Blue",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-03.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  {
    id: 4,
    name: "High Wall Tote",
    href: "#",
    price: "$210",
    availability: "Black and Orange",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-04.jpg",
    imageAlt:
      "Front of zip tote bag with black canvas, black handles, and orange drawstring top.",
  },
  {
    id: 5,
    name: "Zip Tote Basket",
    href: "#",
    price: "$140",
    availability: "White and black",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-05.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
  },
  {
    id: 6,
    name: "Zip High Wall Tote",
    href: "#",
    price: "$150",
    availability: "White and blue",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-07-product-06.jpg",
    imageAlt:
      "Front of zip tote bag with white canvas, blue canvas straps and handle, and front zipper pocket.",
  },
];
function StoreProducts() {
  const containersRef = useRef([]);

  // Toggle active class on tap for mobile
  function toggleActive(index, e) {
    // Prevent link navigation on first tap
    e.preventDefault();
    const el = containersRef.current[index];
    if (!el) return;
    el.classList.toggle("active");
  }

  return (
    <div className="bg-white">
      {/* py-16 sm:px-6 sm:py-24 lg:px-8 */}
      {/* <div className="mx-auto max-w-7xl overflow-hidden px-4 " dir="rtl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group text-sm">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
              />
              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </a>
          ))}
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl overflow-hidden px-4" dir="rtl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative text-sm"
              tabIndex={0}
            >
              <div className="relative h-[380px] w-full rounded-lg overflow-hidden">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover transition duration-300
              group-hover:opacity-80
              group-focus-within:opacity-80
              group-active:opacity-80"
                />

                {/* <div
                  className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 transition-all duration-300 ease-in-out bg-white/90
            group-hover:translate-y-0 group-hover:opacity-100
            group-focus-within:translate-y-0 group-focus-within:opacity-100
            group-active:translate-y-0 group-active:opacity-100"
                >
                  <button className="w-full py-2 text-center text-sm font-semibold border-t border-gray-200 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                    הוסף לסל
                  </button>
                </div> */}
                <div
                  className="absolute bottom-0 left-0 w-full
    translate-y-0 opacity-100
    sm:translate-y-full sm:opacity-0
    transition-all duration-300 ease-in-out bg-white/90
    sm:group-hover:translate-y-0 sm:group-hover:opacity-100
    sm:group-focus-within:translate-y-0 sm:group-focus-within:opacity-100
    sm:group-active:translate-y-0 sm:group-active:opacity-100"
                >
                  <button className="w-full py-2 text-center text-sm font-semibold border-t border-gray-200 hover:bg-black hover:text-white transition duration-300 cursor-pointer">
                    הוסף לסל
                  </button>
                </div>
              </div>

              <h3 className="mt-4 font-medium text-gray-900">{product.name}</h3>
              <p className="italic text-gray-500">{product.availability}</p>
              <p className="mt-2 font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StoreProducts;
