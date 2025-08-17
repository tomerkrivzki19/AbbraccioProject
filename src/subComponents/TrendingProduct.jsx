import React from "react";
import { useTrendingProducts } from "../hooks/useTrendingProducts";
import { Link } from "react-router-dom";
import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";
import { PlusIcon } from "@heroicons/react/20/solid";

// function TrendingProduct({ data }) {
function TrendingProduct() {
  const { products, loading, error } = useTrendingProducts();

  if (loading)
    return (
      <div className="py-24  flex flex-col items-center justify-center text-center">
        <img
          src="https://ik.imagekit.io/etcjxhfhp/abbraCCio%20logos/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1755028271813"
          alt="לוגו חברה טעינה"
          className=" animate-[spin_2s_linear_infinite] w-24 h-24"
        />
      </div>
    );

  if (error)
    return (
      <div className="py-62 flex flex-col justify-cnenter text-center">
        <p className="w-full text-red-500">{error} please return later</p>
        <h1 className="w-full text-md font-bold" dir="ltr">
          500 err
        </h1>
      </div>
    );
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900"></h2>

        {/* <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id} className="group">
              <a
                className="cursor-pointer"
                href={`/products/${product.handle}`}
              >
                <div className="relative group">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      alt={
                        product.images.edges[0]?.node.altText || product.title
                      }
                      src={product.images.edges[0]?.node.url}
                      className="size-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="relative mt-4 text-center">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.description}
                    </p>
                  </div>

                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.variants.edges[0]?.node.price.amount}{" "}
                      {product.variants.edges[0]?.node.price.currencyCode}
                    </p>
                  </div>
                </div>
              </a>
              <div className="mt-6 flex justify-center">
                <button className="relative cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-[#4B2E23] px-8 py-2 text-sm font-medium text-white hover:bg-[#A06E4B]">
                  הוסף לסל<span className="sr-only">, {product.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div> */}

        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 ">
          {products.map((product) => (
            <div key={product.id}>
              <a
                className="group cursor-pointer block focus:outline-none"
                href={`/products/${product.handle}`}
              >
                {/* Image + overlay in one container */}
                <div className="relative h-72 w-full overflow-hidden rounded-lg">
                  <img
                    alt={product.images.edges[0]?.node.altText || product.title}
                    src={product.images.edges[0]?.node.url}
                    className="size-full object-cover transform transition-transform duration-500 
                       group-hover:scale-110 group-focus:scale-110 group-active:scale-110"
                  />

                  {/* Overlay with gradient + price */}
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-end p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.variants.edges[0]?.node.price.amount}{" "}
                      {product.variants.edges[0]?.node.price.currencyCode}
                    </p>
                  </div>
                </div>

                {/* Title + description */}
                <div className="relative mt-4 text-center">
                  <h3 className="text-sm font-medium text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
              </a>

              {/* Add to cart button */}
              {/* <div className="mt-6 flex justify-center">
                <button className="relative cursor-pointer flex items-center justify-center rounded-md border border-transparent bg-[#4B2E23] px-8 py-2 text-sm font-medium text-white hover:bg-[#A06E4B]">
                  הוסף לסל<span className="sr-only">, {product.title}</span>
                </button>
              </div> */}
              <div className="mt-6 flex justify-center">
                <button
                  type="button"
                  className="relative cursor-pointer flex items-center justify-center rounded-md border border-transparent 
               bg-[#4B2E23] px-8 py-2 text-sm font-medium text-white 
               
               hover:bg-[#A06E4B] 
               focus:outline-2 focus:outline-offset-2 focus:outline-[#A06E4B] 
               active:bg-[#7A5435]"
                >
                  הוסף לסל<span className="sr-only">, {product.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 
        <div className="text-center mt-8">
          <a href="/shop">
            <div className="flex items-center">
              <div
                aria-hidden="true"
                className="w-full border-t border-gray-300 dark:border-white/15"
              />
              <div className="relative flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  hover:bg-[#A06E4B]  hover:text-white cursor-pointer dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 dark:hover:bg-white/20"
                >
                  לעוד מוצרים
                  <PlusIcon
                    aria-hidden="true"
                    className="-ml-1 -mr-0.5 size-5  text-[#4B2E23]"
                  />
                </button>
              </div>
              <div
                aria-hidden="true"
                className="w-full border-t border-gray-300 dark:border-white/10"
              />
            </div>
          </a>
        </div> */}

        <div className="text-center mt-8">
          <a href="/shop" className="block focus:outline-none group">
            <div className="flex items-center">
              <div
                aria-hidden="true"
                className="w-full border-t border-gray-300 dark:border-white/15"
              />
              <div className="relative flex justify-center">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  
                     hover:bg-[#A06E4B] hover:text-white 
                     focus:bg-[#A06E4B] focus:text-white 
                     active:bg-[#A06E4B] active:text-white
                     cursor-pointer 
                     dark:bg-white/10 dark:text-white dark:shadow-none dark:ring-white/5 
                     dark:hover:bg-white/20 dark:focus:bg-white/20 dark:active:bg-white/20"
                >
                  לעוד מוצרים
                  <PlusIcon
                    aria-hidden="true"
                    className="-ml-1 -mr-0.5 size-5 text-[#4B2E23]"
                  />
                </button>
              </div>
              <div
                aria-hidden="true"
                className="w-full border-t border-gray-300 dark:border-white/10"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
