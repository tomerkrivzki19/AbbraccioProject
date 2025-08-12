import React from "react";
// TODO: add contact us section + page
const navigation = {
  // קישורים מהירים
  solutions: [
    { name: "בית", href: "#" },
    { name: "מוצרים", href: "#" },
    { name: "קטגוריות", href: "#" },
    { name: "אודותינו", href: "#" },
    { name: "משלוחים והחזרות", href: "#" },
  ],
  // שירות לקוחות
  support: [
    { name: "שאלות נפוצות", href: "#" },
    { name: "מדיניות החזרות", href: "#" },
    { name: "תנאי שימוש", href: "#" },
    { name: "מדיניות פרטיות", href: "#" },
    { name: "צור קשר", href: "#" },
  ],
  // יצירת קשר
  company: [
    {
      name: "03-1234567  ",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      ),
      // href: "#",
    },
    {
      name: "info@abbraccio.co.il",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      ),
      // href: "#",
    },
    {
      name: "תל אביב, ישראל",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
          />
        </svg>
      ),
      // href: "#",
    },
  ],
  // legal: [
  //   { name: "Terms of service", href: "#" },
  //   { name: "Privacy policy", href: "#" },
  //   { name: "License", href: "#" },
  // ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "X",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
function Footer() {
  return (
    // <footer className="bg-[#351C10]">
    //   <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
    //     <div className="xl:grid xl:grid-cols-3 xl:gap-8 ">
    //       <div className="space-y-8">
    //         <img
    //           alt="Company name"
    //           // src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
    //           src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1754147437854"
    //           // className="h-9"
    //           className="h-18 w-auto max-w-[150px] object-contain"
    //         />

    //         <p className="text-balance text-sm/6 text-gray-600">
    //           {/* Making the world a better place through constructing elegant
    //           hierarchies. */}
    //           יוצרים אביזרי קפה קרמיים איכותיים בעבודת יד לחובבי הקפה הישראלים
    //         </p>
    //         <div className="flex gap-x-6">
    //           {navigation.social.map((item) => (
    //             <a
    //               key={item.name}
    //               href={item.href}
    //               className="text-gray-600 hover:text-gray-800"
    //             >
    //               <span className="sr-only">{item.name}</span>
    //               <item.icon aria-hidden="true" className="size-6" />
    //             </a>
    //           ))}
    //         </div>
    //       </div>
    //       {/* checking  */}
    //       <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
    //         {/* First Column */}
    //         <div>
    //           <h3 className="text-sm/6 font-semibold text-gray-900">
    //             קישורים מהירים
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {navigation.solutions.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className="text-sm/6 text-gray-600 hover:text-gray-900"
    //                 >
    //                   {item.name}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>

    //         {/* Second Column */}
    //         <div>
    //           <h3 className="text-sm/6 font-semibold text-gray-900">
    //             שירות לקוחות
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {navigation.support.map((item) => (
    //               <li key={item.name}>
    //                 <a
    //                   href={item.href}
    //                   className="text-sm/6 text-gray-600 hover:text-gray-900"
    //                 >
    //                   {item.name}
    //                 </a>
    //               </li>
    //             ))}
    //           </ul>
    //         </div>

    //         {/* Third Column – with pink background */}
    //         <div className="md:col-span-1 sm:col-span-full w-full">
    //           <h3 className="text-sm/6 font-semibold text-gray-900">
    //             יצירת קשר
    //           </h3>
    //           <ul role="list" className="mt-6 space-y-4">
    //             {navigation.company.map((item) => (
    //               <div className="flex space-x-2" key={item.name}>
    //                 <span className="text-gray-600 hover:text-gray-800">
    //                   <item.icon aria-hidden="true" />
    //                 </span>
    //                 <li>
    //                   <a
    //                     href={item.href}
    //                     className="text-sm/6 text-gray-600 hover:text-gray-900"
    //                   >
    //                     {item.name}
    //                   </a>
    //                 </li>
    //               </div>
    //             ))}
    //           </ul>

    //           {/* Pink Newsletter Box */}
    //           <div className="mt-8 p-4 w-full">
    //             <h3 className="text-sm/6 font-semibold text-gray-900">
    //               עדכונים וחדשות
    //             </h3>
    //             <form className="mt-4 sm:flex sm:max-w-md">
    //               <label htmlFor="email-address" className="sr-only">
    //                 Email address
    //               </label>
    //               <input
    //                 id="email-address"
    //                 name="email-address"
    //                 type="email"
    //                 required
    //                 placeholder="הכניסו את כתובת המייל"
    //                 autoComplete="email"
    //                 className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus-visible:outline-indigo-600 sm:w-56 sm:text-sm/6"
    //               />
    //               <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
    //                 <button
    //                   type="submit"
    //                   className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //                 >
    //                   הרשמה
    //                 </button>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>

    //       {/* cheking */}
    //     </div>
    //     <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
    //       <p className="text-sm/6 text-gray-600 text-center">
    //         {/* &copy; 2024 Your Company, Inc. All rights reserved. */}
    //         &copy; 2024 AbbraCCio. כל הזכויות שמורות.
    //       </p>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-[#351C10]">
      {/* <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32"> */}
      <div className="mx-auto  px-4 pb-8 pt-16 sm:pt-24 lg:px-6 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* FIXME: logo img with the desinger options*/}
            <img
              alt="Company name"
              // src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1754147437854"
              // src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b.jpg?updatedAt=1754146902110"
              src="https://ik.imagekit.io/etcjxhfhp/26d74fa9-4445-413b-bdfe-cb89b2a807b3-removebg-preview.png?updatedAt=1755028158041"
              className="h-18 w-auto max-w-[150px] object-contain"
            />
            <p className="text-balance text-sm/6 text-gray-400">
              יוצרים אביזרי קפה קרמיים איכותיים בעבודת יד לחובבי הקפה הישראלים
            </p>
            <div className="flex gap-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3 xl:col-span-2 xl:mt-0">
            {/* First Column */}
            <div>
              <h3 className="text-sm/6 font-semibold text-white">
                קישורים מהירים
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-400 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Second Column */}
            <div>
              <h3 className="text-sm/6 font-semibold text-white">
                שירות לקוחות
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm/6 text-gray-400 hover:text-white transition"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Third Column */}
            <div className="md:col-span-1 sm:col-span-full w-full">
              <h3 className="text-sm/6 font-semibold text-white">יצירת קשר</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <div className="flex space-x-2 items-center" key={item.name}>
                    <span className="text-gray-400 hover:text-white transition">
                      <item.icon aria-hidden="true" />
                    </span>
                    <li>
                      <a
                        href={item.href}
                        className="text-sm/6 text-gray-400 hover:text-white transition"
                      >
                        {item.name}
                      </a>
                    </li>
                  </div>
                ))}
              </ul>

              {/* Newsletter */}
              {/* <div className="mt-8 p-4 w-full bg-[#47291a] rounded-md">
                <h3 className="text-sm/6 font-semibold text-white">
                  עדכונים וחדשות
                </h3>
                <form className="mt-4 sm:flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    required
                    placeholder="הכניסו את כתובת המייל"
                    autoComplete="email"
                    className="w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus-visible:outline-indigo-600 sm:w-56 sm:text-sm/6"
                  />
                  <div className="mt-4 sm:ml-4 sm:mt-0 sm:shrink-0">
                    <button
                      type="submit"
                      // className="flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      className="flex w-full items-center justify-center rounded-md bg-[#fce8cd] px-3 py-2 text-sm font-semibold text-[#351C10] shadow hover:bg-[#f7dbb6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fce8cd]"
                    >
                      הרשמה
                    </button>
                  </div>
                </form>
              </div> */}

              {/* <div className="mt-8 w-full rounded-md bg-[#47291a] px-4 py-6 sm:px-6">
                <h3 className="text-sm/6 font-semibold text-white">
                  עדכונים וחדשות
                </h3>

                <form className="mt-4 flex w-full flex-col sm:flex-row sm:items-center sm:gap-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    required
                    placeholder="הכניסו את כתובת המייל"
                    autoComplete="email"
                    className="w-full sm:max-w-xs rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus-visible:outline-indigo-600 sm:text-sm/6"
                  />

                  <button
                    type="submit"
                    className="mt-4 sm:mt-0 sm:w-auto w-full flex items-center justify-center rounded-md bg-[#fce8cd] px-4 py-2 text-sm font-semibold text-[#351C10] shadow hover:bg-[#f7dbb6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fce8cd] transition-colors duration-200"
                  >
                    הרשמה
                  </button>
                </form>
              </div> */}

              <div className="mt-8 w-full rounded-md bg-[#47291a] px-4 py-6 sm:px-6">
                <h3 className="text-sm font-semibold text-white">
                  עדכונים וחדשות
                </h3>

                <form className="mt-4 flex w-full flex-col sm:flex-row sm:items-center sm:gap-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>

                  <input
                    id="email-address"
                    name="email-address"
                    type="email"
                    required
                    placeholder="הכניסו את כתובת המייל"
                    autoComplete="email"
                    // className="min-w-0 flex-1 rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-500 focus:outline-2 focus-visible:outline-indigo-600 sm:text-sm"
                    className="min-w-0 flex-1 rounded-md bg-white px-3 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-500 placeholder:text-sm focus:outline-2 focus-visible:outline-indigo-600 sm:text-sm"
                  />

                  <button
                    type="submit"
                    className="mt-4 sm:mt-0 sm:w-auto w-full flex-shrink-0 flex items-center justify-center rounded-md bg-[#fce8cd] px-4 py-2 text-sm font-semibold text-[#351C10] shadow hover:bg-[#f7dbb6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fce8cd] transition-colors duration-200"
                  >
                    הרשמה
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 border-t border-gray-700 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm/6 text-gray-400 text-center">
            &copy; 2024 AbbraCCio. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
