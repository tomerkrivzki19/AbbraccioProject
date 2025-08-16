import React from "react";
// import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

function TrendingProduct({ data }) {
  // TODO: new version of products
  // const imageURL =
  //   "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/E07051.jpg?im=Resize,width=450";

  // const products = [
  //   {
  //     id: 1,
  //     name: "Zip Tote Basket",
  //     color: "White and black",
  //     href: "#",
  //     imageSrc: imageURL,
  //     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg",
  //     imageAlt:
  //       "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
  //     price: "$140",
  //   },
  //   {
  //     id: 2,
  //     name: "Zip High Wall Tote",
  //     color: "White and blue",
  //     href: "#",
  //     imageSrc: imageURL,
  //     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-02.jpg",
  //     imageAlt:
  //       "Front of zip tote bag with white canvas, blue canvas straps and handle, and front zipper pocket.",
  //     price: "$150",
  //   },
  //   {
  //     id: 3,
  //     name: "Halfsize Tote",
  //     color: "Clay",
  //     href: "#",
  //     imageSrc: imageURL,
  //     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-03.jpg",
  //     imageAlt:
  //       "Front of tote with monochrome natural canvas body, straps, roll top, and handles.",
  //     price: "$210",
  //   },
  //   {
  //     id: 4,
  //     name: "High Wall Tote",
  //     color: "Black and orange",
  //     href: "#",
  //     imageSrc: imageURL,
  //     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-04.jpg",
  //     imageAlt:
  //       "Front of zip tote bag with black canvas, black handles, and orange drawstring top.",
  //     price: "$210",
  //   },
  // ];
  const products = data;
  console.log("data from trending page component", data);

  return (
    // with currecnt data :
    // <div className="bg-white">
    //   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    //     <h2 className="text-xl font-bold text-gray-900">
    //       {/* Customers also bought */}
    //       הבחירות הפופולריות של הלקוחות
    //     </h2>
    //     <a href="/productPage">
    //       <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
    //         {products.map((product) => (
    //           <div key={product.id}>
    //             <div className="relative">
    //               <div className="relative h-72 w-full overflow-hidden rounded-lg">
    //                 <img
    //                   alt={product.imageAlt}
    //                   src={product.imageSrc}
    //                   className="size-full object-cover"
    //                 />
    //               </div>
    //               <div className="relative mt-4 text-center">
    //                 <h3 className="text-sm font-medium text-gray-900">
    //                   {product.name}
    //                 </h3>
    //                 <p className="mt-1 text-sm text-gray-500">
    //                   {product.color}
    //                 </p>
    //               </div>
    //               <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
    //                 <div
    //                   aria-hidden="true"
    //                   className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
    //                 />
    //                 <p className="relative text-lg font-semibold text-white">
    //                   {product.price}
    //                 </p>
    //               </div>
    //             </div>
    //             <div className="mt-6  flex justify-center">
    //               <button
    //                 // href={product.href}//FIXME: older -remove from the array or ajdust the a herf link to other part insdie the project
    //                 // onClick={}
    //                 className="relative flex items-center justify-center rounded-md border border-transparent bg-[#4B2E23] px-8 py-2 text-sm font-medium text-white hover:bg-[#A06E4B]"
    //               >
    //                 הוסף לסל<span className="sr-only">, {product.name}</span>
    //               </button>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </a>

    //     {/* FIXME: ask sarit if she want the this current container inside the site */}
    //     <div className="text-center mt-8">
    //       <a href="/shop">
    //         <button className="bg-[#4B2E23] text-[white] hover:bg-[#A06E4B] py-3 px-6 rounded-md text-base font-medium transition">
    //           צפו בכל המוצרים
    //         </button>
    //         {/* <a href="/productPage">
    //         <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
    //           שרית - ניתוב לדף מוצר{" "}
    //         </button>
    //       </a> */}
    //       </a>
    //     </div>
    //   </div>
    // </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          הבחירות הפופולריות של הלקוחות
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <div className="relative">
                <a href={`/products/${product.handle}`}>
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      alt={
                        product.images.edges[0]?.node.altText || product.title
                      }
                      src={product.images.edges[0]?.node.url}
                      className="size-full object-cover"
                    />
                  </div>
                </a>

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

              <div className="mt-6 flex justify-center">
                <button className="relative flex items-center justify-center rounded-md border border-transparent bg-[#4B2E23] px-8 py-2 text-sm font-medium text-white hover:bg-[#A06E4B]">
                  הוסף לסל<span className="sr-only">, {product.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/shop">
            <button className="bg-[#4B2E23] text-[white] hover:bg-[#A06E4B] py-3 px-6 rounded-md text-base font-medium transition">
              צפו בכל המוצרים
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
