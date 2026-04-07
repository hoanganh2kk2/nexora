import React from "react";

const Banner = () => {
  return (
    <section className="max-padd-container">
      <div className="flex flex-col rounded-2xl px-10 py-20 md:py-30 bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat">
        <h1 className="text-2xl md:text-3xl font-semibold max-w-2xl">
          Elevate Your Style with Premium Fashion Collections
        </h1>
        <div className="h-0.75 w-32 my-1 bg-linear-to-l from-transparent to-destructive" />
        <p className="text-sm md:text-base max-w-xl">
          Find clothing that blends comfort with modern trends, giving you a
          smart, styling edge in every outfit daily.
        </p>
        <button className="btn-destructive w-3xs bg-destructive hover:scale-105 transition duration-300 mt-5">
          Check Offers
        </button>
      </div>
    </section>
  );
};

export default Banner;
