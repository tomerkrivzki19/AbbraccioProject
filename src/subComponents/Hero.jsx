import React from "react";

function Hero() {
  return (
    // <div className="relative  w-full h-[100svh] isolate overflow-hidden pt-14">
    //   <img
    //     alt=""
    //     src="https://images.pexels.com/photos/8063827/pexels-photo-8063827.jpeg"
    //     // src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    //     className="absolute inset-0 -z-10 size-full object-cover"
    //   />
    //   <div
    //     aria-hidden="true"
    //     className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    //   >
    //     <div
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //       className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    //     />
    //   </div>
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 bg-red-300  ">
    //       {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center"> */}
    //       {/* <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
    //           Announcing our next round of funding.{" "}
    //           <a href="#" className="font-semibold text-white">
    //             <span aria-hidden="true" className="absolute inset-0" />
    //             Read more <span aria-hidden="true">&rarr;</span>
    //           </a>
    //         </div> */}
    //       {/* </div> */}
    //       <div className="text-center bg-red-200 ">
    //         {/* <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
    //           Data to enrich your online business
    //         </h1> */}
    //         <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
    //           הספלים שלנו מקרמיקה בעבודת יד תוכננו בקפידה כדי להשתלב בצורה
    //           מושלמת בכל בית, משרד או בית קפה. כל ספל משלב עיצוב ייחודי עם
    //           שימושיות יומיומית – כי קפה טוב מתחיל בספל הנכון.
    //         </p>
    //         <div className="mt-10 flex items-center justify-center gap-x-6">
    //           <a
    //             href="#"
    //             className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
    //           >
    //             הנמכרים ביותר
    //           </a>
    //           {/* <a href="#" className="text-sm/6 font-semibold text-white">
    //             Learn more <span aria-hidden="true">→</span>
    //           </a> */}
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div
    //     aria-hidden="true"
    //     className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    //   >
    //     <div
    //       style={{
    //         clipPath:
    //           "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    //       }}
    //       className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
    //     />
    //   </div>
    // </div>
    <div className="relative w-full h-[100svh] isolate overflow-hidden pt-14 flex flex-col justify-end">
      <img
        alt=""
        src="https://images.pexels.com/photos/8063827/pexels-photo-8063827.jpeg"
        className="absolute inset-0 -z-10 size-full object-cover"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl text-center pb-5" dir="rtl">
          <p className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-1xl">
            {" "}
            Abbraccio
            {/* – מחבקים את הקפה שלך כוסות קרמיקה בעיצוב ייחודי שמוסיפות */}
          </p>
          <p className="mt-8 text-white text-lg font-medium text-gray-400 sm:text-xl/8">
            {/* הספלים שלנו מקרמיקה בעבודת יד תוכננו בקפידה כדי להשתלב בצורה מושלמת
            בכל בית, משרד או בית קפה. כל ספל משלב עיצוב ייחודי עם שימושיות
            יומיומית – כי קפה טוב מתחיל בספל הנכון. */}
            חום ואופי לכל רגע קפה – בבית, במשרד או בבית הקפה.
            {/* – מחבקים את הקפה
            שלך כוסות קרמיקה בעיצוב ייחודי שמוסיפות */}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/shop"
              className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              הנמכרים ביותר
            </a>
          </div>
        </div>
      </div>

      {/* Keep decorative SVG blur blobs as-is */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}

export default Hero;
