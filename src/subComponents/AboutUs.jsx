import React from "react";

function AboutUs() {
  return (
    <main className="lg:relative">
      <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-48 lg:text-left">
        <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline">About </span>{" "}
            <span className="block text-indigo-600 xl:inline">
              abbraccio
              {/* di cuore */}
            </span>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            אנו מותג קרמיקה חדש המתמחה בעיצוב וייצור כוסות ייחודיות בעבודת יד.
            כל כוס שלנו נוצרה בקפידה, תוך הקפדה על איכות, נוחות ושיק עיצובי.
            החזון שלנו הוא להפוך כל רגע של שתייה לחוויה מיוחדת — בין אם זו קפה
            של בוקר או תה של ערב. בואו להכיר עולם של אסתטיקה ופונקציונליות בכוס
            אחת.
          </p>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
              >
                Get started
              </a>
            </div>
            <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
              <a
                href="#"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
        <img
          alt=""
          src="https://images.pexels.com/photos/6611178/pexels-photo-6611178.jpeg"
          // src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          className="absolute inset-0 size-full object-cover"
        />
      </div>
    </main>
  );
}

export default AboutUs;
