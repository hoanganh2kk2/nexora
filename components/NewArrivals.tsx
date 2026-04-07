"use client";
import { useState } from "react";
import Item from "./Item";
import Title from "./Title";
import { useAppContext } from "@/context/AppContext";
import { productType } from "@/types";

const NewArrivals = () => {
  const { products } = useAppContext();
  const [isPaused, setIsPaused] = useState<boolean>(false);

  return (
    <>
      <style>
        {`
          .marquee-inner {
            display: flex;
            width: max-content;
            animation: marqueeScroll 25s linear infinite;
          }
            @keyframes marqueeScroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
        `}
      </style>
      <section className="py-16 xl:py-28 px-4 lg:px-12">
        <Title title1="New" title2="Arrivals" titleStyles="pb-10" />
        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* LEFT */}
          <div className="absolute left-0 top-0 h-full w-32 z-20 pointer-events-none bg-linear-to-r from-[#f9f9f9] to-transparent" />
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            <div className="flex">
              {products
                .slice(0, 8)
                .map((product: productType, index: number) => (
                  <div key={index} className="w-56 mx-5 h-103 relative">
                    <Item product={product} />
                  </div>
                ))}
            </div>

            {/* duplicate */}
            <div className="flex">
              {products
                .slice(0, 8)
                .map((product: productType, index: number) => (
                  <div
                    key={`dup-${index}`}
                    className="w-56 mx-5 h-103 relative"
                  >
                    <Item product={product} />
                  </div>
                ))}
            </div>
          </div>
          {/* RIGHT */}
          <div className="absolute right-0 top-0 h-full w-32 z-20 pointer-events-none bg-linear-to-l from-[#f9f9f9] to-transparent" />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
