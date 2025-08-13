import React from "react";
// import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

function TrendingProduct() {
  // TODO: new version of products
  const imageURL =
    "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/E07051.jpg?im=Resize,width=450";

  // const products = [
  //   {
  //     id: 1,
  //     name: "ספל קרמיקה בעבודת יד - קלאסי",
  //     price: "₪120",
  //     originalPrice: "₪150",
  //     rating: 4.8,
  //     reviews: 24,
  //     image: imageURL,
  //     isNew: true,
  //     description: "ספל קרמיקה יפהפה בעבודת יד עם גימור מט",
  //   },
  //   {
  //     id: 2,
  //     name: "סט כוסות אספרסו זוגי",
  //     price: "₪200",
  //     originalPrice: "₪240",
  //     rating: 4.9,
  //     reviews: 18,
  //     image: imageURL,
  //     isSale: true,
  //     description: "זוג כוסות אספרסו אלגנטיות עם תחתיות תואמות",
  //   },
  //   {
  //     id: 3,
  //     name: "כוס קפה עם ידית עץ",
  //     price: "₪95",
  //     originalPrice: null,
  //     rating: 4.7,
  //     reviews: 31,
  //     image: imageURL,
  //     isNew: false,
  //     description: "שילוב ייחודי של קרמיקה ועץ טבעי",
  //   },
  //   {
  //     id: 4,
  //     name: "מארז אביזרי קפה מלא",
  //     price: "₪350",
  //     originalPrice: "₪420",
  //     rating: 5.0,
  //     reviews: 12,
  //     image: imageURL,
  //     isSale: true,
  //     description: "מארז שלם הכולל כוסות, ספלים ואביזרים נלווים",
  //   },
  // ];
  const products = [
    {
      id: 1,
      name: "Zip Tote Basket",
      color: "White and black",
      href: "#",
      imageSrc: imageURL,
      // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-01.jpg",
      imageAlt:
        "Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.",
      price: "$140",
    },
    {
      id: 2,
      name: "Zip High Wall Tote",
      color: "White and blue",
      href: "#",
      imageSrc: imageURL,
      // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-02.jpg",
      imageAlt:
        "Front of zip tote bag with white canvas, blue canvas straps and handle, and front zipper pocket.",
      price: "$150",
    },
    {
      id: 3,
      name: "Halfsize Tote",
      color: "Clay",
      href: "#",
      imageSrc: imageURL,
      // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-03.jpg",
      imageAlt:
        "Front of tote with monochrome natural canvas body, straps, roll top, and handles.",
      price: "$210",
    },
    {
      id: 4,
      name: "High Wall Tote",
      color: "Black and orange",
      href: "#",
      imageSrc: imageURL,
      // "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-03-related-product-04.jpg",
      imageAlt:
        "Front of zip tote bag with black canvas, black handles, and orange drawstring top.",
      price: "$210",
    },
  ];
  return (
    // FIXME: older version
    // <section id="products" className="py-16 bg-[#fefbf7]">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B2E23]">
    //         המוצרים המובילים שלנו
    //       </h2>
    //       <p className="text-lg text-[#4B2E23]/80 max-w-2xl mx-auto">
    //         מוצרים נבחרים שזוכים לאהדה מיוחדת מלקוחותינו
    //       </p>
    //     </div>

    //     {/* Equal-height grid */}
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
    //       {products.map((product) => (
    //         <Link key={product.id} to={`/product/${product.id}`}>
    //           {/* Make each card fill the available height */}
    //           <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-[#e5d5c6] cursor-pointer h-full flex flex-col">
    //             <div className="p-6 flex flex-col flex-grow">
    //               {/* Badges & Heart */}
    //               <div className="flex justify-between items-start mb-4">
    //                 <div className="flex flex-col gap-2">
    //                   {product.isNew && (
    //                     <span className="inline-block text-sm px-3 py-1 rounded-full bg-[#4B2E23] text-[#fefbf7]">
    //                       חדש
    //                     </span>
    //                   )}
    //                   {product.isSale && (
    //                     // <span className="inline-block text-sm px-3 py-1 rounded-full bg-red-100 text-red-600">
    //                     <span className="inline-block text-sm px-3 py-1 rounded-full bg-[#899682] text-black">
    //                       מבצע
    //                     </span>
    //                   )}
    //                 </div>
    //                 {/* TODO: REMOVE THE HEART ICON WITHOUT MAKING THE IMAGE GLITCH  */}
    //                 <button className="p-2 text-gray-600 hover:text-red-400 transition ">
    //                   <svg
    //                     className="h-4 w-4 "
    //                     fill="none"
    //                     stroke="currentColor"
    //                     strokeWidth="2"
    //                     viewBox="0 0 24 24"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5
    //                     4.5 0 116.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
    //                     />
    //                   </svg>
    //                 </button>
    //               </div>

    //               {/* Product Image */}
    //               <div className="mb-4 overflow-hidden rounded-lg">
    //                 <img
    //                   src={product.image}
    //                   alt={product.name}
    //                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
    //                 />
    //               </div>

    //               {/* Product Info */}
    //               <h3 className="font-semibold text-lg mb-2 text-[#4B2E23] line-clamp-2">
    //                 {product.name}
    //               </h3>
    //               <p className="text-sm text-gray-500 mb-3 line-clamp-2">
    //                 {product.description}
    //               </p>

    //               {/* Rating */}
    //               <div className="flex items-center gap-2 mb-3">
    //                 <div className="flex items-center text-yellow-500">
    //                   <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
    //                     <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.87 1.4-8.168-5.934-5.787 8.2-1.193z" />
    //                   </svg>
    //                   <span className="text-sm font-medium ml-1">
    //                     {product.rating}
    //                   </span>
    //                 </div>
    //                 <span className="text-sm text-gray-500">
    //                   ({product.reviews} ביקורות)
    //                 </span>
    //               </div>

    //               {/* Price */}
    //               <div className="flex items-center gap-2 mb-4">
    //                 <span className="text-xl font-bold text-[#4B2E23]">
    //                   {product.price}
    //                 </span>
    //                 {product.originalPrice && (
    //                   <span className="text-sm line-through text-gray-400">
    //                     {product.originalPrice}
    //                   </span>
    //                 )}
    //               </div>

    //               {/* Push button to bottom */}
    //               <div className="mt-auto">
    //                 <button className="w-full bg-[#4B2E23] hover:bg-[#3a2419] text-[#fefbf7] py-2 px-4 rounded-md text-sm font-medium transition">
    //                   הוסף לעגלה
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </Link>
    //       ))}
    //     </div>

    //     <div className="text-center mt-8">
    //       <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
    //         צפו בכל המוצרים
    //       </button>
    //       <a href="/productPage">
    //         <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
    //           שרית - ניתוב לדף מוצר{" "}
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    // </section>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">
          {/* Customers also bought */}
          הבחירות הפופולריות של הלקוחות
        </h2>
        <a href="/productPage">
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {product.price}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-[#4B2E23] px-8 py-2 text-sm font-medium text-white hover:bg-[#A06E4B]"
                  >
                    הוסף לסל<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </a>

        {/* FIXME: ask sarit if she want the this current container inside the site */}
        <div className="text-center mt-8">
          <a href="/shop">
            <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
              צפו בכל המוצרים
            </button>
            {/* <a href="/productPage">
            <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
              שרית - ניתוב לדף מוצר{" "}
            </button>
          </a> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default TrendingProduct;
