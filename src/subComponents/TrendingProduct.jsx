import React from "react";
// import { Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

import { StarIcon, HeartIcon } from "@heroicons/react/24/solid";

// const products = [
//   {
//     id: 1,
//     name: "Leather Long Wallet",
//     color: "Natural",
//     price: "$75",
//     href: "#",
//     imageSrc:
//       "https://sc04.alicdn.com/kf/H3a2439283fb443ceb3d9a999619cacf59.jpg",
//     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-02.jpg",
//     imageAlt: "Hand stitched, orange leather long wallet.",
//   },
//   {
//     id: 2,
//     name: "Machined Pencil and Pen Set",
//     color: "Black",
//     price: "$70",
//     href: "#",
//     imageSrc:
//       "https://sc04.alicdn.com/kf/H51d91ecd71f444d8944606dc96bb20f0x.jpg",
//     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-03.jpg",
//     imageAlt: "12-sided, machined black pencil and pen.",
//   },
//   {
//     id: 3,
//     name: "Mini-Sketchbooks",
//     color: "Light Brown",
//     price: "$27",
//     href: "#",
//     imageSrc:
//       "https://sc04.alicdn.com/kf/Hba8c029c26314cc0ae8cf63173f415b93.jpg",
//     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-04.jpg",
//     imageAlt: "Set of three light and dark brown mini sketch books.",
//   },
//   {
//     id: 4,
//     name: "Organizer Set",
//     color: "Walnut",
//     price: "$149",
//     href: "#",
//     imageSrc:
//       "https://sc04.alicdn.com/kf/H0adf49dbe6024a4ca7cecde3af3103acu.jpg",
//     // "https://tailwindcss.com/plus-assets/img/ecommerce-images/home-page-04-trending-product-01.jpg",
//     imageAlt: "Beautiful walnut organizer set with multiple white compartments",
//   },
// ];

function TrendingProduct() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "ספל קרמיקה בעבודת יד - קלאסי",
  //     price: "₪120",
  //     originalPrice: "₪150",
  //     rating: 4.8,
  //     reviews: 24,
  //     image:
  //       "https://sc04.alicdn.com/kf/H3a2439283fb443ceb3d9a999619cacf59.jpg",
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
  //     image:
  //       "https://sc04.alicdn.com/kf/H51d91ecd71f444d8944606dc96bb20f0x.jpg",
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
  //     image:
  //       "https://sc04.alicdn.com/kf/Hba8c029c26314cc0ae8cf63173f415b93.jpg",
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
  //     image:
  //       "https://sc04.alicdn.com/kf/H0adf49dbe6024a4ca7cecde3af3103acu.jpg",
  //     isSale: true,
  //     description: "מארז שלם הכולל כוסות, ספלים ואביזרים נלווים",
  //   },
  // ];
  // TODO: new version of products
  const imageURL =
    "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/E07051.jpg?im=Resize,width=450";

  const products = [
    {
      id: 1,
      name: "ספל קרמיקה בעבודת יד - קלאסי",
      price: "₪120",
      originalPrice: "₪150",
      rating: 4.8,
      reviews: 24,
      image: imageURL,
      isNew: true,
      description: "ספל קרמיקה יפהפה בעבודת יד עם גימור מט",
    },
    {
      id: 2,
      name: "סט כוסות אספרסו זוגי",
      price: "₪200",
      originalPrice: "₪240",
      rating: 4.9,
      reviews: 18,
      image: imageURL,
      isSale: true,
      description: "זוג כוסות אספרסו אלגנטיות עם תחתיות תואמות",
    },
    {
      id: 3,
      name: "כוס קפה עם ידית עץ",
      price: "₪95",
      originalPrice: null,
      rating: 4.7,
      reviews: 31,
      image: imageURL,
      isNew: false,
      description: "שילוב ייחודי של קרמיקה ועץ טבעי",
    },
    {
      id: 4,
      name: "מארז אביזרי קפה מלא",
      price: "₪350",
      originalPrice: "₪420",
      rating: 5.0,
      reviews: 12,
      image: imageURL,
      isSale: true,
      description: "מארז שלם הכולל כוסות, ספלים ואביזרים נלווים",
    },
  ];

  // return (
  //   <div className="bg-white">
  //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
  //       <div className="md:flex md:items-center md:justify-between">
  //         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
  //           Trending products
  //         </h2>
  //         <a
  //           href="/shop"
  //           className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
  //         >
  //           Shop the collection
  //           <span aria-hidden="true"> &rarr;</span>
  //         </a>
  //       </div>

  //       {/* <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8 ">
  //         {products.map((product) => (
  //           <div key={product.id} className="group relative">
  //             <div className="h-56 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-72 xl:h-80">
  //               <img
  //                 alt={product.imageAlt}
  //                 src={product.imageSrc}
  //                 className="size-full object-cover"
  //               />
  //             </div>
  //             <h3 className="mt-4 text-sm text-gray-700">
  //               <a href={product.href}>
  //                 <span className="absolute inset-0" />
  //                 {product.name}
  //               </a>
  //             </h3>
  //             <p className="mt-1 text-sm text-gray-500">{product.color}</p>
  //             <p className="mt-1 text-sm font-medium text-gray-900">
  //               {product.price}
  //             </p>
  //           </div>
  //         ))}
  //       </div> */}
  //       <div
  //         className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8"
  //         dir="rtl"
  //       >
  //         {products.map((product) => (
  //           //         <div
  //           //           key={product.id}
  //           //           className="
  //           //     group relative
  //           //     transition-all duration-300

  //           //     hover:-translate-y-1
  //           //     rounded-md
  //           //   "
  //           //         >
  //           //           <div
  //           //             className="
  //           //       h-56 w-full
  //           //       overflow-hidden
  //           //       rounded-md
  //           //       bg-gray-200
  //           //       lg:h-72 xl:h-80
  //           //     "
  //           //           >
  //           //             <img
  //           //               alt={product.imageAlt}
  //           //               src={product.imageSrc}
  //           //               className="
  //           //         size-full object-cover
  //           //         transition-transform duration-300
  //           //         group-hover:scale-105
  //           //       "
  //           //             />
  //           //           </div>
  //           //           <h3 className="mt-4 text-sm text-gray-700">
  //           //             <a href={product.href}>
  //           //               <span className="absolute inset-0" />
  //           //               {product.name}
  //           //             </a>
  //           //           </h3>
  //           //           <p className="mt-1 text-sm text-gray-500">{product.color}</p>
  //           //           <p className="mt-1 text-sm font-medium text-gray-900">
  //           //             {product.price}
  //           //           </p>
  //           //         </div>
  //           <div
  //             key={product.id}
  //             className="group relative transition-all duration-300 ease-in-out hover:scale-105 active:scale-105 focus-visible:scale-105"
  //           >
  //             <div
  //               className="h-56 w-full overflow-hidden rounded-md bg-gray-200
  //              group-hover:opacity-75 group-active:opacity-75 group-focus-visible:opacity-75
  //              lg:h-72 xl:h-80 transition-all duration-300 ease-in-out"
  //             >
  //               <img
  //                 alt={product.imageAlt}
  //                 src={product.imageSrc}
  //                 className="size-full object-cover"
  //               />
  //             </div>

  //             <div
  //               className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1
  //              rounded shadow opacity-0 group-hover:opacity-100 group-active:opacity-100 group-focus-visible:opacity-100
  //              transition-opacity duration-300"
  //             >
  //               best seller
  //             </div>

  //             <h3 className="mt-4 text-sm text-gray-700">
  //               <a href={product.href}>
  //                 <span className="absolute inset-0" />
  //                 {product.name}
  //               </a>
  //             </h3>
  //             <p className="mt-1 text-sm text-gray-500">{product.color}</p>
  //             <div className="flex justify-start gap-6">
  //               <p className="mt-1 text-sm font-medium text-gray-900">
  //                 {product.price}
  //               </p>
  //               <p className="mt-1 text-sm font-medium text-gray-500 line-through">
  //                 {product.price}
  //               </p>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //       <div className="mt-8 text-sm md:hidden">
  //         <a
  //           href="/shop"
  //           className="font-medium text-indigo-600 hover:text-indigo-500"
  //         >
  //           Shop the collection
  //           <span aria-hidden="true"> &rarr;</span>
  //         </a>
  //       </div>
  //     </div>
  //   </div>
  // );
  // FIXME: new function -- V3
  // return (
  //   <section id="products" className="py-16 coffee-gradient bg-stone-100">
  //     <div className="container px-4">
  //       <div className="text-center mb-12">
  //         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-coffee-primary">
  //           המוצרים המובילים שלנו
  //         </h2>
  //         <p className="text-lg text-coffee-primary/80 max-w-2xl mx-auto">
  //           מוצרים נבחרים שזוכים לאהדה מיוחדת מלקוחותינו
  //         </p>
  //       </div>

  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
  //         {products.map((product) => (
  //           <div
  //             key={product.id}
  //             className="rounded-2xl border coffee-shadow hover:coffee-shadow-elegant transition-all duration-300 group bg-card border-coffee-warm/20 bg-white"
  //           >
  //             <div className="p-6">
  //               <div className="flex justify-between items-start mb-4">
  //                 <div className="flex flex-col gap-2">
  //                   {product.isNew && (
  //                     <span className="text-xs font-semibold px-2 py-1 bg-coffee-rich text-coffee-cream rounded">
  //                       חדש
  //                     </span>
  //                   )}
  //                 </div>
  //                 {/* <Heart className="h-4 w-4" /> */}
  //                 <button className="p-2 text-coffee-primary hover:text-coffee-rich">
  //                   {/* <HeartIcon className="h-4 w-4" /> */}
  //                   {product.isSale && (
  //                     <span className="text-xs font-semibold px-2 py-1 bg-destructive text-white rounded">
  //                       מבצע
  //                     </span>
  //                   )}
  //                 </button>
  //               </div>

  //               <div className="mb-4 overflow-hidden rounded-lg">
  //                 <img
  //                   src={product.image}
  //                   alt={product.name}
  //                   className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
  //                 />
  //               </div>

  //               <h3 className="font-semibold text-lg mb-2 text-coffee-primary line-clamp-2">
  //                 {product.name}
  //               </h3>
  //               <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
  //                 {product.description}
  //               </p>

  //               <div className="flex items-center gap-2 mb-3">
  //                 <div className="flex items-center">
  //                   {/* <Star className="h-4 w-4 fill-current text-yellow-500" /> */}
  //                   <StarIcon className="h-4 w-4 fill-current text-yellow-500" />
  //                   <span className="text-sm font-medium mr-1">
  //                     {product.rating}
  //                   </span>
  //                 </div>
  //                 <span className="text-sm text-muted-foreground">
  //                   ({product.reviews} ביקורות)
  //                 </span>
  //               </div>

  //               <div className="flex items-center gap-2 mb-4">
  //                 <span className="text-xl font-bold text-coffee-primary">
  //                   {product.price}
  //                 </span>
  //                 {product.originalPrice && (
  //                   <span className="text-sm line-through text-muted-foreground">
  //                     {product.originalPrice}
  //                   </span>
  //                 )}
  //               </div>

  //               <div className="pt-0">
  //                 <button
  //                   // className="w-full py-2 px-4 bg-coffee-primary hover:bg-coffee-rich text-coffee-cream rounded-lg font-semibold"
  //                   className=" w-full py-2 px-4  rounded-lg font-semibold  text-black border border-black px-5 py-2 text-sm hover:bg-black hover:text-white transition"
  //                 >
  //                   הוסף לעגלה
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>

  //       <div className="text-center mt-8">
  //         <button
  //           // className="border text-coffee-primary border-coffee-primary hover:bg-coffee-primary hover:text-coffee-cream px-6 py-2 rounded-lg font-medium text-lg"
  //           className="text-black border border-black px-5 py-2 text-sm hover:bg-black hover:text-white transition"
  //         >
  //           צפו בכל המוצרים
  //         </button>
  //       </div>
  //     </div>
  //   </section>
  // );
  return (
    <section id="products" className="py-16 bg-[#fefbf7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#4B2E23]">
            המוצרים המובילים שלנו
          </h2>
          <p className="text-lg text-[#4B2E23]/80 max-w-2xl mx-auto">
            מוצרים נבחרים שזוכים לאהדה מיוחדת מלקוחותינו
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 group border border-[#e5d5c6] cursor-pointer">
                <div className="p-6">
                  {/* Badges & Heart */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-col gap-2">
                      {product.isNew && (
                        <span className="inline-block text-sm px-3 py-1 rounded-full bg-[#4B2E23] text-[#fefbf7]">
                          חדש
                        </span>
                      )}
                      {product.isSale && (
                        <span className="inline-block text-sm px-3 py-1 rounded-full bg-red-100 text-red-600">
                          מבצע
                        </span>
                      )}
                    </div>
                    <button className="p-2 text-gray-600 hover:text-red-400 transition">
                      {/* Heart Icon */}
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
                          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 
                          4.5 0 116.364 6.364L12 20.682l-7.682-7.682a4.5 4.5 0 010-6.364z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Product Image */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <h3 className="font-semibold text-lg mb-2 text-[#4B2E23] line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center text-yellow-500">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.87 1.4-8.168-5.934-5.787 8.2-1.193z" />
                      </svg>
                      <span className="text-sm font-medium ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({product.reviews} ביקורות)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-[#4B2E23]">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm line-through text-gray-400">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full bg-[#4B2E23] hover:bg-[#3a2419] text-[#fefbf7] py-2 px-4 rounded-md text-sm font-medium transition">
                    הוסף לעגלה
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
            צפו בכל המוצרים
          </button>
          <a href="/productPage">
            <button className="border border-[#4B2E23] text-[#4B2E23] hover:bg-[#4B2E23] hover:text-[#fefbf7] py-3 px-6 rounded-md text-base font-medium transition">
              שרית - ניתוב לדף מוצר{" "}
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TrendingProduct;
