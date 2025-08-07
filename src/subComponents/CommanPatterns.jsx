import React from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Dialog,
  DialogPanel,
  DialogBackdrop,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const people = [
  { id: 1, name: "ספלים עם ידית עץ", url: "#" },
  { id: 2, name: "ספלי אספרסו", url: "#" },
  { id: 3, name: "ספלים לזוג", url: "#" },
  { id: 4, name: "ספלים בעבודת יד", url: "#" },
  { id: 5, name: "ספלים עם הדפס אישי", url: "#" },
  { id: 6, name: "סטים של ספלים", url: "#" },
  { id: 7, name: "ספלים מינימליסטיים", url: "#" },
  { id: 8, name: "ספלים צבעוניים", url: "#" },
];
// isCommandPatternsOpen, setIsCommandPatternsOpen
function CommanPatterns({ isCommandPatternsOpen, setIsCommandPatternsOpen }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(true);

  const filteredPeople =
    query === ""
      ? []
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Dialog
      className="relative z-50"
      open={isCommandPatternsOpen}
      onClose={() => {
        // setOpen(false);
        setIsCommandPatternsOpen(false);
        setQuery("");
      }}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/25 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto p-4 sm:p-6 md:p-20">
        <DialogPanel
          transition
          className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl outline outline-1 outline-black/5 transition-all data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        >
          <Combobox
            onChange={(person) => {
              if (person) {
                window.location = person.url;
              }
            }}
          >
            <div className="grid grid-cols-1">
              <ComboboxInput
                autoFocus
                className="col-start-1 row-start-1 h-12 w-full pl-11 pr-4 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm"
                placeholder="חיפוש ..."
                onChange={(event) => setQuery(event.target.value)}
                onBlur={() => setQuery("")}
              />
              <MagnifyingGlassIcon
                className="pointer-events-none col-start-1 row-start-1 ml-4 size-5 self-center justify-self-end text-gray-400"
                aria-hidden="true"
              />
            </div>

            {filteredPeople.length > 0 && (
              <ComboboxOptions
                static
                className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
              >
                {filteredPeople.map((person) => (
                  <ComboboxOption
                    key={person.id}
                    value={person}
                    className="cursor-default select-none px-4 py-2 data-[focus]:bg-indigo-600 data-[focus]:text-white data-[focus]:outline-none"
                  >
                    {person.name}
                  </ComboboxOption>
                ))}
              </ComboboxOptions>
            )}

            {query !== "" && filteredPeople.length === 0 && (
              <p className="p-4 text-sm text-gray-500">לא נמצאו מוצרים .</p>
            )}
          </Combobox>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default CommanPatterns;
