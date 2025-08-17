import React from "react";

function PromotionalBanner() {
  return (
    <div className="relative w-full overflow-hidden ">
      <figure className="w-full">
        <img
          className="w-full h-auto object-cover  h-screen "
          alt="סט שולחן חגיגי"
          // src="https://marketplace.canva.com/hPZEo/MAFM7OhPZEo/1/s2/canva-festive-table-setting-with-christmas-feast-MAFM7OhPZEo.jpg"
          src="https://ik.imagekit.io/etcjxhfhp/5318de43-2d19-4be3-9a79-fd3f51a5c822.jpg?updatedAt=1755373840330"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      </figure>

      {/* translate-y-1/4 sm:translate-y-1/3 md:translate-y-1/2 */}
      {/* <div className="absolute inset-0 flex items-end justify-center pb-20 sm:pb-16 md:pb-12"> //optinal option */}
      <div className="absolute inset-0 flex items-start justify-center pt-20">
        <div className="p-8 text-center w-[90%] max-w-xl ">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            {/* כלי שולחן */}
            תחתיות קפה בעבודת יד
          </h2>
          <p className="text-[white] font-medium  text-base mb-6">
            אוסף ייחודי של תחתיות קפה מקרמיקה בעיצוב מוקפד — שילוב מושלם בין
            אומנות לנוחות בבית שלך.
          </p>
          {/* <div className="flex  sm:flex-row justify-center gap-4">
            <a
              // href="https://www.costanova.com/en/shop/dinnerware_450-414.html?cbid=4918&amp;cbida=1"
              href="/shop"
              className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              לרכישה עכשיו
            </a>
            <a
              // href="https://www.costanova.com/en/_1395.html?cbid=4918&amp;cbida=1"
              href="#"
              className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
            >
              ראו את הלוק
            </a>
          </div> */}
        </div>
      </div>
      {/* bounce Arrow down */}
      {/* <div className="absolute inset-0 flex  items-end justify-center pb-20 sm:pb-16 md:pb-12">
        <div className="flex  sm:flex-row justify-center gap-4">
          <a
            // href="https://www.costanova.com/en/shop/dinnerware_450-414.html?cbid=4918&amp;cbida=1"
            href="/shop"
            className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            לרכישה עכשיו
          </a>
          <a
            // href="https://www.costanova.com/en/_1395.html?cbid=4918&amp;cbida=1"
            href="#"
            className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            ראו את הלוק
          </a>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-white animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          />
        </svg>
      </div> */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 sm:pb-16 md:pb-12 space-y-6">
        {/* Buttons */}
        <div className="flex sm:flex-row justify-center gap-4">
          <a
            href="/shop"
            className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            לרכישה עכשיו
          </a>
          <a
            href="#"
            className="text-white border border-white px-5 py-2 text-sm hover:bg-white hover:text-black transition"
          >
            ראו את הלוק
          </a>
        </div>

        {/* Arrow */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-white mt-5 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
          />
        </svg>
      </div>
    </div>
  );
}

export default PromotionalBanner;
