// import React from "react";
// // FIXME:: need adjustments after the buildup of the data from Shopify
// const items = [
//   {
//     id: 1,
//     imgSrc:
//       "https://s.alicdn.com/@sc04/kf/H4f1d345a4a2d462fb8306fff8c708398o.jpg_720x720q50.jpg",
//     alt: "Drawstring top with elastic loop closure and textured interior padding.",
//     text: `קוללקצית מוצרים מעוצבים - הדגם הראשון`,
//     href: "/Shop",
//   },
//   {
//     id: 2,
//     imgSrc:
//       "https://s.alicdn.com/@sc04/kf/H03e84a7397544a2c9378a9d854c01578q.jpg_720x720q50.jpg",
//     alt: "Front zipper pouch with included key ring.",
//     text: `קוללקצית מוצרים מעוצבים - הדגם השני`,
//     href: "/Shop",
//   },
//   {
//     id: 3,
//     imgSrc:
//       "https://s.alicdn.com/@sc04/kf/H4966363c18cd4fb895ad5b719a9a67e8Y.jpg_720x720q50.jpg",
//     alt: "Front zipper pouch with included key ring.",
//     text: `קוללקצית מוצרים מעוצבים - הדגם השלישי`,
//     href: "/Shop",
//   },
// ];

// function ProductFeatures() {
//   return (
//     <div className="bg-gray-50">
//       <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
//         {/* Details section */}
//         <section aria-labelledby="details-heading">
//           {/* <div className="flex flex-col items-center text-center">
//             <h2
//               id="details-heading"
//               className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
//             >
//               The Fine Details
//             </h2>
//             <p className="mt-3 max-w-3xl text-lg text-gray-600">
//               Our patented padded snack sleeve construction protects your
//               favorite treats from getting smooshed during all-day adventures,
//               long shifts at work, and tough travel schedules.
//             </p>
//           </div> */}
//           <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
//             {items.map(({ id, imgSrc, alt, text, href }) => (
//               <a
//                 key={id}
//                 href={href}
//                 className="relative rounded-lg h-[600px] overflow-hidden flex flex-col justify-center items-center p-6 text-center text-white
//                   bg-cover bg-center
//                   transform transition-transform duration-300 ease-in-out
//                   hover:scale-105
//                 "
//                 style={{ backgroundImage: `url(${imgSrc})` }}
//                 aria-label={alt}
//               >
//                 {/* Overlay */}
//                 <div className="absolute inset-0 bg-black opacity-40 transition-opacity duration-300 hover:opacity-30"></div>

//                 {/* Content */}
//                 <div className="relative z-10 max-w-xs">
//                   <p className="mb-6 text-lg font-semibold">{text}</p>
//                   <button
//                     className="relative  overflow-hidden text-blue-700 font-semibold py-2 px-6 border border-blue-500 rounded
//                       before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-300
//                       hover:before:w-full cursor-pointer
//                       z-[0]"
//                     style={{ color: "inherit" }}
//                     type="button"
//                   >
//                     <span className="relative z-10 transition-colors duration-300 hover:text-white">
//                       Shop
//                     </span>
//                   </button>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default ProductFeatures;
// import React from "react";

// const CollectionGrid = () => {
//   const collections = [
//     {
//       id: 1,
//       title: "🏺 משפחת ספלים קרמיים",
//       image:
//         "https://s.alicdn.com/@sc04/kf/H4f1d345a4a2d462fb8306fff8c708398o.jpg_720x720q50.jpg",
//       link: "/shop",
//     },
//     {
//       id: 2,
//       title: "☕ משפחת כוסות אספרסו",
//       image:
//         "https://s.alicdn.com/@sc04/kf/H03e84a7397544a2c9378a9d854c01578q.jpg_720x720q50.jpg",
//       link: "/shop",
//     },
//     {
//       id: 3,
//       title: "🍵 משפחת כוסות תה / סיניות",
//       image:
//         "https://s.alicdn.com/@sc04/kf/H4966363c18cd4fb895ad5b719a9a67e8Y.jpg_720x720q50.jpg",
//       link: "/shop",
//     },
//     {
//       id: 4,
//       title: "🧺 משפחת מארזים / סטים",
//       image:
//         "https://s.alicdn.com/@sc04/kf/H4966363c18cd4fb895ad5b719a9a67e8Y.jpg_720x720q50.jpg",
//       link: "/shop",
//     },
//   ];

//   return (
//     <div className=" py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {collections.map((collection) => (
//         <a
//           key={collection.id}
//           href={collection.link}
//           className="group block h-[600px] relative overflow-hidden rounded-lg shadow-md"
//         >
//           <img
//             src={collection.image}
//             alt={collection.title}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
//           />

//           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex flex-col justify-center items-center text-white text-center p-4">
//             <h2 className="text-2xl font-bold mb-4">{collection.title}</h2>
//             <button
//               className="relative overflow-hidden text-blue-700 font-semibold py-2 px-6 border border-blue-500 rounded cursor-pointer
//                     before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-300
//                     hover:before:w-full hover:text-white hover:border-transparent z-10"
//               style={{ color: "inherit" }}
//               type="button"
//             >
//               <span className="relative z-10">Shop</span>
//             </button>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// };

// export default CollectionGrid;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const CollectionGrid = () => {
  // FIXME: rejects - the images insdie the coursella need to be fitted inside the bg of the site
  const collections = [
    {
      id: 1,
      title: "ספלים קרמיים",
      image:
        "https://ik.imagekit.io/etcjxhfhp/dd88e685-aae8-4b83-8cd5-20cdaf8d4e42.jpg?updatedAt=1755251794050",
      link: "/shop",
    },
    {
      id: 2,
      title: "כוסות אספרסו",
      image:
        // "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/9659852/2.jpg?0957",
        "https://ik.imagekit.io/etcjxhfhp/aa8009bc-f343-4f34-b927-1fa4fbf391b0.jpg?updatedAt=1755460882292",

      link: "/shop",
    },
    {
      id: 3,
      title: "כוסות קפוצ'ינו",
      image:
        // "https://s.alicdn.com/@sc04/kf/H4966363c18cd4fb895ad5b719a9a67e8Y.jpg_720x720q50.jpg",
        "https://ik.imagekit.io/etcjxhfhp/20af6a8d-04b6-43db-9aaf-83db53ea2ed7.jpg?updatedAt=1755373885887",
      link: "/shop",
    },
    {
      id: 4,
      title: "סטים מושלמים לקפה",
      image:
        // "https://ik.imagekit.io/etcjxhfhp/abbraCCio%20logos/628a8987-d318-4e4e-87a6-b7a944fde01b.jpg?updatedAt=1755028283762",
        "https://ik.imagekit.io/etcjxhfhp/1faa7247-93c6-4a92-b72e-277af7d970de.jpg?updatedAt=1755461146363",
      link: "/shop",
    },
  ];

  return (
    // <section
    //   className="shopify-section section-editorial-cards py-10 px-1 sm:px-4"
    //   dir="ltr"
    // >
    //   <div className="section section-blends section-full">
    //     <div className="section-stack">
    //       <Swiper
    //         spaceBetween={20}
    //         slidesPerView={1.2}
    //         breakpoints={{
    //           640: { slidesPerView: 2.2 },
    //           1000: { slidesPerView: 4 },
    //         }}
    //         className="scroll-cards"
    //       >
    //         {collections.map((collection) => (
    //           <SwiperSlide key={collection.id}>
    //             <a
    //               href={collection.link}
    //               className="scroll-card under-image"
    //               style={{
    //                 "--card-title-font": "Helvetica, sans-serif",
    //                 "--card-subtitle-font": "sans-serif",
    //                 "--card-title-size": "18px",
    //                 "--card-subtitle-size": "16px",
    //                 "--card-title-color": "26 26 26",
    //                 "--card-subtitle-color": "0 0 0",
    //                 "--card-text-align": "center",
    //                 "--card-overlay-color": "rgba(0, 0, 0, 0.1)",
    //                 "--overlay-text-vertical": "flex-end",
    //               }}
    //             >
    //               <img
    //                 src={collection.image}
    //                 alt={collection.title}
    //                 className="card-image"
    //                 style={{
    //                   aspectRatio: "3 / 4",
    //                   height: "auto",
    //                   maxHeight: "500px",
    //                 }}
    //               />
    //               <div className="scroll-card-content">
    //                 <p className="card-title text-center">{collection.title}</p>
    //                 <p className="card-subtitle"></p>
    //               </div>
    //             </a>
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </section>

    <section className="py-5 px-1 sm:px-4" dir="ltr">
      <div className="max-w-screen-2xl mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1000: { slidesPerView: 4 },
          }}
        >
          {collections.map((c) => (
            <SwiperSlide key={c.id} className="h-auto">
              {/* Clean square card container */}
              <a
                href={c.link}
                className="group block bg-white  overflow-hidden"
              >
                {/* Square image wrapper */}
                <div className="relative w-full aspect-square bg-neutral-50">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Info text */}
                <div className="p-3 sm:p-4">
                  {/* <p className="text-center text-neutral-900 text-base sm:text-lg font-medium"> */}
                  <p className="text-center">{c.title}</p>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionGrid;
