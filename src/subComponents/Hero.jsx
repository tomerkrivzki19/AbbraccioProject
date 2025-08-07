import React from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  // return (
  //   <div className="relative w-full h-[100svh] isolate overflow-hidden pt-14 flex flex-col justify-end">
  //     <img
  //       alt=""
  //       src="https://images.pexels.com/photos/8063827/pexels-photo-8063827.jpeg"
  //       className="absolute inset-0 -z-10 size-full object-cover"
  //     />

  //     <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
  //       <div className="mx-auto max-w-2xl text-center pb-5" dir="rtl">
  //         <p className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-1xl">
  //           {" "}
  //           Abbraccio
  //           {/* – מחבקים את הקפה שלך כוסות קרמיקה בעיצוב ייחודי שמוסיפות */}
  //         </p>
  //         <p className="mt-8 text-white text-lg font-medium text-gray-400 sm:text-xl/8">
  //           Abbraccio — A Hug in Every Sip
  //         </p>
  //         <div className="mt-10 flex items-center justify-center gap-x-6">
  //           <a
  //             href="/shop"
  //             className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
  //           >
  //             הנמכרים ביותר
  //           </a>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Keep decorative SVG blur blobs as-is */}
  //     <div
  //       aria-hidden="true"
  //       className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
  //     >
  //       <div
  //         style={{
  //           clipPath:
  //             "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
  //         }}
  //         className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
  //       />
  //     </div>
  //   </div>
  // );

  return (
    // bg-[#fce8cd] - color of the logo
    // <section className="relative coffee-gradient min-h-[100vh] flex items-center justify-center ">
    //   <div className="container px-4 text-center">
    //     <div className="max-w-4xl mx-auto">
    //       {/* Logo */}
    //       <div className="flex justify-center mb-8">
    //         <img
    //           // src="/lovable-uploads/83d4ad28-2130-4034-9280-b4d7502cf6f3.png"
    //           // src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b.jpg?updatedAt=1754146902110"
    //           src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1754147437854"
    //           alt="AbbraCCio"
    //           className="h-20 md:h-24 w-auto"
    //         />
    //       </div>

    //       <h1 className="text-4xl md:text-6xl font-bold mb-6 text-coffee-primary">
    //         אביזרי קפה קרמיים
    //         <br />
    //         <span className="text-coffee-rich">בעבודת יד</span>
    //       </h1>
    //       <p className="text-lg md:text-xl mb-8 text-coffee-primary/80 max-w-2xl mx-auto leading-relaxed">
    //         גלו את קולקציית אביזרי הקפה הקרמיים המיוחדת שלנו. כל פריט נוצר
    //         בקפידה ובאהבה כדי להעניק לכם חוויית קפה מושלמת
    //       </p>
    //       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    //         <button
    //           size="lg"
    //           className="bg-coffee-primary hover:bg-coffee-rich text-coffee-cream shadow-lg hover:shadow-xl transition-all duration-300"
    //         >
    //           צפו במוצרים
    //           {/* <ArrowLeft className="mr-2 h-5 w-5" /> */}
    //         </button>
    //         <button
    //           variant="outline"
    //           size="lg"
    //           className="border-coffee-primary text-coffee-primary hover:bg-coffee-primary hover:text-coffee-cream"
    //         >
    //           למדו עלינו יותר
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Decorative elements */}
    //   <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    // </section>

    <section className="relative min-h-[100vh] overflow-hidden">
      {/* Swiper Background Layer */}
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          loop
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <a href="/shop">
              <img
                // src="https://media.istockphoto.com/id/974601902/vector/empty-gray-studio-room-used-as-background-for-display-your-products.jpg?s=612x612&w=0&k=20&c=Kdj2e3LCSHXzCpybu0DYSfZk60FusfmkhoIt7I4iDtI="
                src="https://ik.imagekit.io/etcjxhfhp/56d86d16-1701-4495-8a92-e54a60c3afc1.jpg?updatedAt=1754512513542"
                // src="https://costanova.com/cdn/shop/files/banner_b29eafbf-75e2-4814-b358-5a06b7ee23a7.jpg?v=1753950553&width=2000"
                className="w-full h-full object-cover"
                alt="bg1"
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <img
              // src="https://media.istockphoto.com/id/974601902/vector/empty-gray-studio-room-used-as-background-for-display-your-products.jpg?s=612x612&w=0&k=20&c=Kdj2e3LCSHXzCpybu0DYSfZk60FusfmkhoIt7I4iDtI="
              src="https://costanova.com/cdn/shop/files/banner_b29eafbf-75e2-4814-b358-5a06b7ee23a7.jpg?v=1753950553&width=2000"
              className="w-full h-full object-cover"
              alt="bg2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              // src="https://ik.imagekit.io/etcjxhfhp/example3.jpg"
              src="https://media.istockphoto.com/id/974601902/vector/empty-gray-studio-room-used-as-background-for-display-your-products.jpg?s=612x612&w=0&k=20&c=Kdj2e3LCSHXzCpybu0DYSfZk60FusfmkhoIt7I4iDtI="
              className="w-full h-full object-cover"
              alt="bg3"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Content Layer */}
      {/* <div className="relative z-10 flex items-center justify-center min-h-[100vh]">
        <div className="container px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img
                src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1754147437854"
                alt="AbbraCCio"
                className="h-20 md:h-24 w-auto"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              אביזרי קפה קרמיים
              <br />
              <span className="text-coffee-rich">בעבודת יד</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              גלו את קולקציית אביזרי הקפה הקרמיים המיוחדת שלנו. כל פריט נוצר
              בקפידה ובאהבה כדי להעניק לכם חוויית קפה מושלמת
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
                // className="bg-coffee-primary hover:bg-coffee-rich text-coffee-cream shadow-lg hover:shadow-xl transition-all duration-300">
              >
                צפו במוצרים
              </button>
              <button
                className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
                // className="border-coffee-primary text-coffee-primary hover:bg-coffee-primary hover:text-coffee-cream">
              >
                למדו עלינו יותר
              </button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Optional bottom gradient fade */}
      {/* <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/50 to-transparent z-10" /> */}
    </section>
  );
}

export default Hero;
