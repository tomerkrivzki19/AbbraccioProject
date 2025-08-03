import React from "react";
// import { Card, CardContent } from "@/components/ui/card";

function AboutUs() {
  const features = [
    {
      icon: "🎨",
      title: "עבודת יד איכותית",
      description: "כל מוצר נוצר בקפידה ובאהבה בידי אומנים מיומנים",
    },
    {
      icon: "🌱",
      title: "חומרים טבעיים",
      description: "משתמשים רק בחומרי גלם איכותיים וטבעיים לחלוטין",
    },
    {
      icon: "🔥",
      title: "שריפה באיכות גבוהה",
      description: "תהליך שריפה מתקדם המבטיח עמידות ויופי לאורך זמן",
    },
    {
      icon: "💎",
      title: "עיצוב ייחודי",
      description: "כל פריט הוא יצירת אמנות בפני עצמה עם אופי ייחודי",
    },
  ];

  // return (
  //   <main className="lg:relative">
  //     <div className="mx-auto w-full max-w-7xl pb-20 pt-16 text-center lg:py-48 lg:text-left">
  //       <div className="px-6 sm:px-8 lg:w-1/2 xl:pr-16">
  //         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
  //           <span className="block xl:inline">About </span>{" "}
  //           <span className="block text-indigo-600 xl:inline">
  //             abbraccio
  //             {/* di cuore */}
  //           </span>
  //         </h1>
  //         <p className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
  //           אנו מותג קרמיקה חדש המתמחה בעיצוב וייצור כוסות ייחודיות בעבודת יד.
  //           כל כוס שלנו נוצרה בקפידה, תוך הקפדה על איכות, נוחות ושיק עיצובי.
  //           החזון שלנו הוא להפוך כל רגע של שתייה לחוויה מיוחדת — בין אם זו קפה
  //           של בוקר או תה של ערב. בואו להכיר עולם של אסתטיקה ופונקציונליות בכוס
  //           אחת.
  //         </p>
  //         <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
  //           <div className="rounded-md shadow">
  //             <a
  //               href="#"
  //               className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
  //             >
  //               Get started
  //             </a>
  //           </div>
  //           <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
  //             <a
  //               href="#"
  //               className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
  //             >
  //               Live demo
  //             </a>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
  //       <img
  //         alt=""
  //         src="https://images.pexels.com/photos/6611178/pexels-photo-6611178.jpeg"
  //         // src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
  //         className="absolute inset-0 size-full object-cover"
  //       />
  //     </div>
  //   </main>
  // );
  return (
    <section id="about" className="py-16 bg-stone-100	">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-coffee-primary">
              אודות AbbraCCio
            </h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                ב-AbbraCCio אנחנו מאמינים שכל כוס קפה מגובה חוויה שמתחילה כבר
                ברגע הראשון שאתם נוגעים בכלי השתייה. בעבודת יד קפדנית ובאהבה
                רבה, אנו יוצרים אביזרי קפה קרמיים שישדרגו לכם את רגעי הקפה
                היומיים.
              </p>
              <p>
                המוצרים שלנו נוצרים במלואם בישראל, מחומרי גלם איכותיים ובתהליכי
                ייצור מתקדמים השומרים על המסורת של עבודת הקרמיקה הישראלית
                המסורתית.
              </p>
              <p>
                בין אם אתם מחפשים ספל לקפה הבוקר, כוסות אספרסו לארוח האורחים או
                מתנה מיוחדת לחובב קפה - תמצאו אצלנו את הפריט המושלם.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
            {features.map((feature, index) => (
              // <Card
              //   key={index}
              //   className="coffee-shadow border-coffee-warm/20 hover:coffee-shadow-elegant transition-all duration-300"
              // >
              //   <CardContent className="p-6 text-center">
              //     <div className="text-4xl mb-4">{feature.icon}</div>
              //     <h3 className="font-semibold text-lg mb-2 text-coffee-primary">
              //       {feature.title}
              //     </h3>
              //     <p className="text-muted-foreground text-sm leading-relaxed">
              //       {feature.description}
              //     </p>
              //   </CardContent>
              // </Card>
              <div
                key={index}
                className="rounded-2xl border coffee-shadow border-coffee-warm/20 hover:coffee-shadow-elegant transition-all duration-300 bg-white transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-lg mb-2 text-coffee-primary">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
