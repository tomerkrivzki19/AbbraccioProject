import React from "react";
const products = [
  {
    id: 1,
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: 2,
    name: "Machined Pencil and Pen Set",
    color: "Black",
    price: "$70",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-03.jpg",
    imageAlt: "12-sided, machined black pencil and pen.",
  },
  {
    id: 3,
    name: "Mini-Sketchbooks",
    color: "Light Brown",
    price: "$27",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-04.jpg",
    imageAlt: "Set of three light and dark brown mini sketch books.",
  },
  {
    id: 4,
    name: "Organizer Set",
    color: "Walnut",
    price: "$149",
    href: "#",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-01.jpg",
    imageAlt: "Beautiful walnut organizer set with multiple white compartments",
  },
];

function TrendingProduct() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Trending products
          </h2>
          <a
            href="/shop"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="mt-1 text-sm font-medium text-gray-900">
                {product.price}
              </p>
            </div>
          ))}
        </div> */}
        <div
          className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
          dir="rtl"
        >
          {products.map((product) => (
            //         <div
            //           key={product.id}
            //           className="
            //     group relative
            //     transition-all duration-300

            //     hover:-translate-y-1
            //     rounded-md
            //   "
            //         >
            //           <div
            //             className="
            //       h-56 w-full
            //       overflow-hidden
            //       rounded-md
            //       bg-gray-200
            //       lg:h-72 xl:h-80
            //     "
            //           >
            //             <img
            //               alt={product.imageAlt}
            //               src={product.imageSrc}
            //               className="
            //         size-full object-cover
            //         transition-transform duration-300
            //         group-hover:scale-105
            //       "
            //             />
            //           </div>
            //           <h3 className="mt-4 text-sm text-gray-700">
            //             <a href={product.href}>
            //               <span className="absolute inset-0" />
            //               {product.name}
            //             </a>
            //           </h3>
            //           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
            //           <p className="mt-1 text-sm font-medium text-gray-900">
            //             {product.price}
            //           </p>
            //         </div>
            <div
              key={product.id}
              className="group relative transition-all duration-300 ease-in-out hover:scale-105 active:scale-105 focus-visible:scale-105"
            >
              <div
                className="h-56 w-full overflow-hidden rounded-md bg-gray-200 
               group-hover:opacity-75 group-active:opacity-75 group-focus-visible:opacity-75 
               lg:h-72 xl:h-80 transition-all duration-300 ease-in-out"
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="size-full object-cover"
                />
              </div>

              <div
                className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 
               rounded shadow opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-visible:opacity-100 
               transition-opacity duration-300"
              >
                best seller
              </div>

              <h3 className="mt-4 text-sm text-gray-700">
                <a href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <div className="flex justify-start gap-6">
                <p className="mt-1 text-sm font-medium text-gray-900">
                  {product.price}
                </p>
                <p className="mt-1 text-sm font-medium text-gray-500 line-through">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-sm md:hidden">
          <a
            href="/shop"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
