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
import React from "react";

const CollectionGrid = () => {
  const collections = [
    {
      id: 1,
      title: "הדגם הראשון",
      image:
        "https://s.alicdn.com/@sc04/kf/H4f1d345a4a2d462fb8306fff8c708398o.jpg_720x720q50.jpg",
      link: "/shop",
    },
    {
      id: 2,
      title: "הדגם השני",
      image:
        "https://s.alicdn.com/@sc04/kf/H03e84a7397544a2c9378a9d854c01578q.jpg_720x720q50.jpg",
      link: "/shop",
    },
    {
      id: 3,
      title: "הדגם השלישי",
      image:
        "https://s.alicdn.com/@sc04/kf/H4966363c18cd4fb895ad5b719a9a67e8Y.jpg_720x720q50.jpg",
      link: "/shop",
    },
  ];

  return (
    <div className=" py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {collections.map((collection) => (
        <a
          key={collection.id}
          href={collection.link}
          className="group block h-[600px] relative overflow-hidden rounded-lg shadow-md"
        >
          <img
            src={collection.image}
            alt={collection.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition duration-300 flex flex-col justify-center items-center text-white text-center p-4">
            <h2 className="text-2xl font-bold mb-4">{collection.title}</h2>
            <button
              className="relative overflow-hidden text-blue-700 font-semibold py-2 px-6 border border-blue-500 rounded cursor-pointer
                    before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-300
                    hover:before:w-full hover:text-white hover:border-transparent z-10"
              style={{ color: "inherit" }}
              type="button"
            >
              <span className="relative z-10">Shop</span>
            </button>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CollectionGrid;
