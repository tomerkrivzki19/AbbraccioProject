import React from "react";

function PromotionalBanner() {
  return (
    <div className="relative w-full overflow-hidden ">
      <figure className="w-full">
        <img
          className="w-full h-auto object-cover  h-screen"
          alt="סט שולחן חגיגי"
          src="https://marketplace.canva.com/hPZEo/MAFM7OhPZEo/1/s2/canva-festive-table-setting-with-christmas-feast-MAFM7OhPZEo.jpg"
        />
      </figure>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-8 text-center w-[90%] max-w-xl">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            {/* כלי שולחן */}
            כוסות קפה בעבודת יד
          </h2>
          <p className="text-white text-base mb-6">
            {/* קולקציות אלגנטיות שיהפכו כל ארוחה לחגיגה — גלו את העיצובים שלנו. */}
            אוסף ייחודי של כוסות קרמיקה בעיצוב מוקפד — שילוב מושלם בין אומנות
            לנוחות בבית שלך.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
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
        </div>
      </div>
    </div>
  );
}

export default PromotionalBanner;
