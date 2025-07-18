import React from "react";

function DeliveryPolicy() {
  return (
    <div className="bg-white py-16" dir="rtl" id="shipping-returns">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            משלוחים, החלפות והחזרות
          </h2>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
            {/* Shipping */}
            <div>
              <dt className="text-base/7 font-semibold text-gray-900">
                משלוחים
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                <p>אפשרויות המשלוח הן:</p>
                <ul className="list-disc list-inside">
                  <li>משלוח לנקודת איסוף - 20 ש"ח</li>
                  <li>משלוח עד הבית – 40 ש"ח</li>
                  <li>משלוח חינם ברכישה מעל 499 ש"ח</li>
                </ul>
                <p className="mt-4">
                  ההזמנה תעבור מהסטודיו אל חברת השליחים בטווח זמן של עד 21 ימי
                  עסקים הנדרשים לייצור.
                </p>
                <p className="mt-2">
                  חברת המשלוחים מתחייבת למסור את המשלוח תוך 1-3 ימי עסקים במשלוח
                  עד הבית ותוך 5 ימי עסקים במשלוח לנקודת איסוף.
                </p>
                <p className="mt-2">
                  לא כולל שישי, שבת, ערבי וימי חג ולא כולל ישובים מרוחקים.
                </p>
                <p className="mt-4">שימו לב שזמן השילוח מתווסף לזמן הייצור.</p>
                <p className="mt-2">
                  במקרה של משלוח לנקודת איסוף, הנקודה תיבחר ע"י מואה דיזיין מתוך
                  אחת משתי נקודות החלוקה הקרובות לכתובת המשלוח.
                </p>
              </dd>
            </div>
            {/* Exchanges */}
            <div>
              <dt className="text-base/7 font-semibold text-gray-900">
                החלפות
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                <p>
                  ניתן להחליף פריט עד 14 ימי עסקים מיום קבלת המשלוח, בתנאי שלא
                  נעשה בו שימוש והוא במצב חדש באריזה המקורית.
                </p>
                <p className="mt-4">
                  להחלפה יש ליצור קשר עם שירות הלקוחות באינסטגרם לתיאום שליח.
                </p>
              </dd>
            </div>
            {/* Returns */}
            <div>
              <dt className="text-base/7 font-semibold text-gray-900">
                החזרות
              </dt>
              <dd className="mt-2 text-base/7 text-gray-600">
                <p>
                  להחזר כספי – יש ליצור קשר עם שירות הלקוחות באינסטגרם מיד עם
                  קבלת המשלוח.
                </p>
                <p className="mt-4">הזיכוי יינתן עם קבלת הפריט חזרה בסטודיו.</p>
                <p className="mt-2">
                  הזיכוי יינתן אל אמצעי התשלום איתו התבצעה הרכישה.
                </p>
                <p className="mt-4">לא ניתן לזכות כרטיסי דיירקט.</p>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPolicy;
