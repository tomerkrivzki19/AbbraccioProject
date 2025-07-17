import React from "react";

function PromotionalBanner() {
  return (
    <div className="relative w-full">
      <figure className="w-full">
        <img
          className="w-full h-auto object-cover"
          alt="Use to dinnerware"
          src="https://1413098360.rsc.cdn77.org/images/block1_4918.jpg?1747846072"
        />
      </figure>

      <div className="absolute left-[49.5486%] top-1/2 w-[41%] -translate-x-1/2 -translate-y-1/2 text-center opacity-100">
        <div className="inline-block min-w-[325.587px]">
          <h2 className="text-white text-2xl font-semibold">Dinnerware</h2>

          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://www.costanova.com/en/shop/dinnerware_450-414.html?cbid=4918&amp;cbida=1"
              className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              role="button"
            >
              SHOP NOW
            </a>
            <a
              href="https://www.costanova.com/en/_1395.html?cbid=4918&amp;cbida=1"
              className="text-white border border-white px-4 py-2 text-sm hover:bg-white hover:text-black transition"
              role="button"
            >
              SHOP THE LOOK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanner;
