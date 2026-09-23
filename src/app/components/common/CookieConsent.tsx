"use client";

import { useEffect, useState } from "react";

const COOKIE_NAME = "cookie-consent";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie
      .split("; ")
      .some((cookie) => cookie.startsWith(`${COOKIE_NAME}=`));

    if (!hasConsent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (value: "accepted" | "rejected") => {
    document.cookie = [
      `${COOKIE_NAME}=${value}`,
      "path=/",
      "max-age=31536000",
      "SameSite=Lax",
    ].join("; ");

    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] p-4">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:p-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="font-inter text-lg font-bold text-gray-900">
            We use cookies
          </h2>

          <p className="mt-1 font-poppins text-sm leading-6 text-gray-500">
            We use cookies to improve your experience, understand how our
            website is used, and provide relevant features. You can accept or
            reject non-essential cookies.
          </p>
        </div>

        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => saveConsent("rejected")}
            className="rounded-lg border border-gray-300 px-5 py-2.5 font-poppins text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
          >
            Reject
          </button>

          <button
            type="button"
            onClick={() => saveConsent("accepted")}
            className="rounded-lg bg-orange-600 px-5 py-2.5 font-poppins text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
