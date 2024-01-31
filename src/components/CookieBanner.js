import React from "react";
import { posthog } from "posthog-js";
import { useState } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShowBanner(false);
  };
  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-sine"
          className="backdrop-blur-xl bg-white/60 text-black font-extrabold
          h-[300px] flex flex-col justify-between fixed bottom-0 left-0 right-0
          z-50"
        >
          <p className="my-auto text-xl font-extrabold">
            Nous utilisions les cookies pour améliorer votre experience.
          </p>
          <div className="w-[320px] mx-auto flex justify-around mb-5">
            <button
              className="buttonContact px-8 py-4 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-300"
              onClick={acceptCookies}
            >
              Accepter
            </button>
            <button
              className="buttonContact px-8 py-4 transition ease-in-out delay-350 hover:-translate-y-0.5 hover:scale-110 hover:text-white duration-300"
              onClick={declineCookies}
            >
              Refuser
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
