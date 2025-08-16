import React, { useEffect, useMemo } from "react";
import { Fragment, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ShoppingCartDrawer from "../subComponents/ShoppingCartDrawer";
import CommanPatterns from "../subComponents/CommanPatterns";
import abraccioLogo from "../assets/abbraccio-logo.jpg";
import abraccioLogoTrasparent from "../assets/abbracio-trasparent-logo.webp";
import whiteLogoAbrraccio from "../assets/white-logo-abrraccio.webp";

// TODO: image logo color #F5E1C0 | white
// TODO: implement the hasScrolled ? " text-[#F5E1C0]" : "text-white" on serch bar and cart btns

// const currencies = ["CAD", "USD", "AUD", "EUR", "GBP"];
const navigation = {
  categories: [
    {
      name: "חנות",
      featured: [
        { name: "הכי נמכרים", href: "#" },
        { name: "מה חדש?", href: "#" },
        { name: "מהדורה מוגבלת", href: "#" },
      ],
      collection: [
        { name: "כל המוצרים", href: "#" },
        { name: "קולקציית הקלאסיקה", href: "#" },
        { name: "חדשים באתר", href: "#" },
        { name: "מבצעים והנחות", href: "#" },
      ],
      categories: [
        { name: "ספלים קרמיים", href: "#" },
        { name: "כוסות אספרסו", href: "#" },
        { name: "כוסות תה / סיניות", href: "#" },
        { name: "מארזים / סטים", href: "#" },
      ],
      brands: [
        { name: "הסטודיו של נועה", href: "#" },
        { name: "Clay & Calm", href: "#" },
        { name: "MugArt", href: "#" },
        { name: "EspressoLove", href: "#" },
        { name: "Zen Cups", href: "#" },
      ],
    },
    // {
    //   name: "/",
    //   featured: [
    //     { name: "Casual", href: "#" },
    //     { name: "Boxers", href: "#" },
    //     { name: "Outdoor", href: "#" },
    //   ],
    //   collection: [
    //     { name: "Everything", href: "#" },
    //     { name: "Core", href: "#" },
    //     { name: "New Arrivals", href: "#" },
    //     { name: "Sale", href: "#" },
    //   ],
    //   categories: [
    //     { name: "Artwork Tees", href: "#" },
    //     { name: "Pants", href: "#" },
    //     { name: "Accessories", href: "#" },
    //     { name: "Boxers", href: "#" },
    //     { name: "Basic Tees", href: "#" },
    //   ],
    //   brands: [
    //     { name: "Significant Other", href: "#" },
    //     { name: "My Way", href: "#" },
    //     { name: "Counterfeit", href: "#" },
    //     { name: "Re-Arranged", href: "#" },
    //     { name: "Full Nelson", href: "#" },
    //   ],
    // },
  ],
  pages: [
    { name: "משלוחים", href: "/delivery-policy" },
    { name: "מבצעי החודש", href: "/shop" },
    { name: "קולקציית החג", href: "/shop" },
    { name: "מארז אביזרי קפה ", href: "/shop" },
    { name: "תקנון האתר ", href: "/takanon" },
  ],
};
function NavContainer() {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCommandPatternsOpen, setIsCommandPatternsOpen] = useState(false);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // FIXME: fix the colurs pick
    // FIXME: make the topics in center for sm > screens
    <div
      className={`fixed z-40 w-full transition duration-300 ease-in-out ${
        // hasScrolled ? "bg-[#fce8cd]  shadow" : "bg-transparent"
        // hasScrolled ? "bg-[#4b2e2b]  shadow" : "bg-transparent" // relevnt -
        hasScrolled ? "bg-[#d9b382]  shadow" : "bg-transparent"
        // hasScrolled ? "bg-white  shadow" : "bg-transparent"
      }`}
    >
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5 ">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2 ">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4 ">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      // className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-[#351C10] data-[selected]:text-[#351C10] "
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category, categoryIdx) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-12 px-4 pb-6 pt-10 "
                  >
                    <div className="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id={`mobile-featured-heading-${categoryIdx}`}
                            className="font-medium text-gray-900"
                          >
                            מומלצים
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                            className="mt-6 space-y-6"
                          >
                            {category.featured.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p
                            id="mobile-categories-heading"
                            className="font-medium text-gray-900"
                          >
                            קטגוריות
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-categories-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.categories.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p
                            id="mobile-collection-heading"
                            className="font-medium text-gray-900"
                          >
                            קולקציה
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-collection-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.collection.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p
                            id="mobile-brand-heading"
                            className="font-medium text-gray-900"
                          >
                            מותגים
                          </p>
                          <ul
                            role="list"
                            aria-labelledby="mobile-brand-heading"
                            className="mt-6 space-y-6"
                          >
                            {category.brands.map((item) => (
                              <li key={item.name} className="flex">
                                <a href={item.href} className="text-gray-500">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
            </div> */}

            {/* Currency selector */}
            {/* <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <form>
                <div className="-ml-2 inline-grid grid-cols-1">
                  <select
                    id="mobile-currency"
                    name="currency"
                    aria-label="Currency"
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-0.5 pl-2 pr-7 text-base font-medium text-gray-700 focus:outline focus:outline-2 group-hover:text-gray-800 sm:text-sm/6"
                  >
                    {currencies.map((currency) => (
                      <option key={currency}>{currency}</option>
                    ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-500"
                  />
                </div>
              </form>
            </div> */}
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative ">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-[#351C10]  ">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                {/* <form>
                  <div className="-ml-2 inline-grid grid-cols-1">
                    <select
                      id="desktop-currency"
                      name="currency"
                      aria-label="Currency"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-gray-900 py-0.5 pl-2 pr-7 text-left text-base font-medium text-white focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-white sm:text-sm/6"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-1 size-5 self-center justify-self-end fill-gray-300"
                    />
                  </div>
                </form> */}
              </form>

              {/* <p className="bg-black w-full text-center text-sm font-medium text-white lg:flex-none "> */}
              {/* TODO: add swiper */}
              <p className="animate-spin-slow  w-full text-center text-sm font-medium text-white lg:flex-none">
                {/* Get free delivery on orders over $100 */}
                קבלו משלוח חינם בהזמנות מעל 120 ש"ח{" "}
              </p>

              {/* <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
                <a
                  href="#"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </a>
              </div> */}
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200 pb-2">
                <div className="flex h-16 items-center  w-full">
                  {/* Logo (lg+) */}
                  <div className="hidden   flex-1  lg:flex lg:items-center">
                    <a href="/">
                      <span className="sr-only">Your Company</span>
                      {/* FIXME: FIX THE LOGO ADJUSTMENT  */}
                      <img
                        alt="logo"
                        // FIXME: this utr not working on vercel or server  runing the site for some reasone
                        // src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1754147437854"
                        src={
                          hasScrolled
                            ? abraccioLogoTrasparent
                            : whiteLogoAbrraccio
                        }
                        // src={abraccioLogoTrasparent}
                        // src="https://ik.imagekit.io/etcjxhfhp/abbraCCio%20logos/19604ca8-7c3b-4189-b50b-78f0068da5c6.png?updatedAt=1755245851791" // src="https://ik.imagekit.io/etcjxhfhp/abbraCCio%20logos/26d74fa9-4445-413b-bdfe-cb89b2a807b3-removebg-preview.png?updatedAt=1755028252619"

                        className="h-18 w-auto max-w-[150px] object-contain "

                        // className="h-8 w-auto"
                      />
                    </a>
                  </div>

                  <div className="hidden   flex-1  h-full lg:flex">
                    {/* Mega menus */}
                    <PopoverGroup className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-2 items-center justify-evenly">
                        {navigation.categories.map((category, categoryIdx) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              {/* FIXME: The store btn padding */}
                              {/* //                       className={`fixed z-40 w-full transition duration-300 ease-in-out ${ */}
                              {/* //   hasScrolled ? "bg-[#fce8cd]  shadow" : "bg-transparent"
                            // }`} */}
                              <PopoverButton
                                className={`p-3 group relative flex items-center justify-center text-sm font-medium  transition-colors duration-200 ease-out hover:text-[#8B5E3C] data-[open]:text-[#351C10] ${
                                  // hasScrolled ? " text-gray-700" : "text-white"
                                  hasScrolled ? " text-[#F5E1C0]" : "text-white"
                                }`}
                              >
                                {category.name}
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-[open]:bg-[#351C10]"
                                />
                              </PopoverButton>
                            </div>
                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full z-20 w-full bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 top-1/2 bg-white shadow"
                              />
                              <div className="relative bg-white">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p
                                          id={`desktop-featured-heading-${categoryIdx}`}
                                          className="font-medium text-gray-900"
                                        >
                                          מומלצים
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.featured.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                // className="hover:text-gray-800"
                                                className="hover:text-[#8B5E3C]"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p
                                          id="desktop-categories-heading"
                                          className="font-medium text-gray-900"
                                        >
                                          קטגוריות
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-categories-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.categories.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                // className="hover:text-gray-800"
                                                className="hover:text-[#8B5E3C]"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                                      <div>
                                        <p
                                          id="desktop-collection-heading"
                                          className="font-medium text-gray-900"
                                        >
                                          קולקציה
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-collection-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.collection.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                // className="hover:text-gray-800"
                                                className="hover:text-[#8B5E3C]"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p
                                          id="desktop-brand-heading"
                                          className="font-medium text-gray-900"
                                        >
                                          מותגים
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-brand-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.brands.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                // className="hover:text-gray-800"
                                                className="hover:text-[#8B5E3C]"
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            // FIXME: the width of the topics in big sizes screens
                            // className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 w-28 text-center center bg-red-100"
                            className={`flex items-center justify-center text-sm font-medium  hover:text-[#8B5E3C] w-28 h-10 text-center ${
                              // hasScrolled ? " text-gray-700" : "text-white"
                              hasScrolled ? " text-[#F5E1C0]" : "text-white"
                            }`}
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden ">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      // className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                      className={`-ml-2 rounded-md  p-2 ${
                        hasScrolled ? "bg-[#F5E1C0]" : "bg-white"
                      }`}
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-6 " />
                    </button>

                    {/* Search  - small sizes */}
                    {/* <a
                      href="#"
                      className="ml-2 p-2 pr-8 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="size-6"
                      />
                      ss
                    </a> */}
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="logo"
                      // FIXME: fix the logo crash on server
                      // src="https://ik.imagekit.io/etcjxhfhp/628a8987-d318-4e4e-87a6-b7a944fde01b-removebg-preview.png?updatedAt=1754147437854"
                      // src={abraccioLogo}
                      src={
                        hasScrolled
                          ? abraccioLogoTrasparent
                          : whiteLogoAbrraccio //  TODO: need to resize
                      }
                      // src="https://ik.imagekit.io/etcjxhfhp/abbraCCio%20logos/26d74fa9-4445-413b-bdfe-cb89b2a807b3-removebg-preview.png?updatedAt=1755028252619"
                      className="h-16 w-auto text-black"
                    />
                  </a>

                  <div className="flex flex-1 items-center justify-end ">
                    <div className="flex items-center lg:ml-8">
                      <div className="flex space-x-8">
                        <div className="hidden lg:flex">
                          <button
                            // href="#"
                            onClick={() => setIsCommandPatternsOpen(true)}
                            // className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            className={`-m-2 p-2 hover:text-[#8B5E3C] ${
                              hasScrolled ? " text-[#F5E1C0]" : "text-white"
                            }`}
                          >
                            <span className="sr-only">Search</span>
                            <MagnifyingGlassIcon
                              aria-hidden="true"
                              className="size-6"
                            />
                          </button>
                        </div>

                        {/* <div className="flex">
                          <a
                            href="#"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Account</span>
                            <UserIcon aria-hidden="true" className="size-6" />
                          </a>
                        </div> */}
                      </div>

                      {/* NOTES FIXME: isCommandPatternsOpen, setIsCommandPatternsOpen */}
                      {/* Search  - small sizes */}
                      <button
                        onClick={() => setIsCommandPatternsOpen(true)}
                        // className=" p-2  text-gray-400 hover:text-gray-500  block lg:hidden "
                        className={` p-2    block lg:hidden hover:text-[#8B5E3C] ${
                          hasScrolled ? " text-[#F5E1C0]" : "text-white"
                        } `}
                      >
                        <span className="sr-only">Search</span>
                        <MagnifyingGlassIcon
                          aria-hidden="true"
                          className="size-6"
                        />{" "}
                      </button>
                      <span
                        aria-hidden="true"
                        className="mx-4 h-6 w-px bg-trasparent lg:mx-6 "
                      />
                      <CommanPatterns
                        isCommandPatternsOpen={isCommandPatternsOpen}
                        setIsCommandPatternsOpen={setIsCommandPatternsOpen}
                      />
                      <div className="flow-root">
                        {/* FIXME: the cart btn */}
                        {/* <button
        onClick={() => setOpen(true)}
        className="rounded-md bg-gray-950/5 px-2.5 py-1.5 text-sm font-semibold text-gray-900 hover:bg-gray-950/10"
      >
        Open dialog
      </button> */}

                        <button
                          // onClick={() => setOpenCart(true)}
                          onClick={() => setIsCartOpen(true)}
                          className="group -m-2 flex items-center p-2"
                        >
                          <ShoppingCartIcon
                            aria-hidden="true"
                            // className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                            className={`size-6 shrink-0 hover:text-[#8B5E3C] ${
                              hasScrolled ? " text-[#F5E1C0]" : "text-white"
                            }`}
                          />
                          <span
                            // className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            className={`ml-2 text-sm font-medium  ${
                              hasScrolled ? " text-[#F5E1C0]" : "text-white"
                            }`}
                          >
                            0
                          </span>
                          <span className="sr-only">
                            items in cart, view bag
                          </span>
                        </button>

                        <ShoppingCartDrawer
                          setIsCartOpen={setIsCartOpen}
                          isCartOpen={isCartOpen}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default NavContainer;
