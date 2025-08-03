import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "ממה עשויות כוסות Abbraccio?",
    answer:
      "הכוסות שלנו עשויות מקרמיקה איכותית, עמידה בפני חום, ומשלבות עיצוב מוקפד ונוחות שימוש יומיומית.",
  },
  {
    question: "האם הכוסות מתאימות לשטיפה במדיח כלים?",
    answer:
      "בהחלט! כל הכוסות שלנו מתאימות לשטיפה במדיח ומיוצרות לעמוד בשימוש יומיומי מבלי לפגוע באיכות או בצבע.",
  },
  {
    question: "אפשר להשתמש בכוסות במיקרוגל?",
    answer:
      "כן, הכוסות בטוחות לשימוש במיקרוגל ועמידות בפני חימום חוזר – מושלמות לקפה של הבוקר.",
  },
  {
    question: "האם יש הנחות למשרדים או בתי קפה?",
    answer:
      "בהחלט! אנו מציעים מחירים מיוחדים להזמנות בכמויות – לבתי קפה, משרדים וחללי עבודה. צרו קשר לקבלת הצעת מחיר מותאמת.",
  },
  {
    question: "איפה מיוצרות כוסות Abbraccio?",
    answer:
      "הכוסות שלנו מעוצבות בישראל ומיוצרות תוך הקפדה על איכות הסביבה ועל תהליכי ייצור ברי קיימא.",
  },
  {
    question: "האם יש החזרות או אחריות על הכוסות?",
    answer:
      "אנחנו מאמינים באיכות שלנו – במידה ולא תהיו מרוצים, ניתן להחזיר תוך 14 ימים ולקבל החזר מלא, בהתאם למדיניות ההחזרות שלנו.",
  },
];

function QandA() {
  return (
    <div className="bg-white" dir="rtl">
      {/* <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40"> */}
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8 ">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-rose-600  sm:text-5xl text-center">
            שאלות נפוצות
          </h2>
          <dl className="mt-16 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure
                key={faq.question}
                as="div"
                className="py-6 first:pt-0 last:pb-0"
              >
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
                    <span className="text-base/7 font-semibold">
                      {faq.question}
                    </span>
                    <span className=" flex h-7 items-center">
                      <PlusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-data-[open]:hidden"
                      />
                      <MinusSmallIcon
                        aria-hidden="true"
                        className="size-6 group-[:not([data-open])]:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </dt>
                <DisclosurePanel as="dd" className="mt-2 ">
                  <p className="text-base/7 text-gray-600">{faq.answer}</p>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default QandA;
