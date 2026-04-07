/* eslint-disable react-hooks/set-state-in-effect */
"use client";
import { useEffect, useState } from "react";
import Item from "./Item";
import Title from "./Title";
import { useAppContext } from "@/context/AppContext";
import { productType } from "@/types";

const PopularProducts = () => {
  const { products } = useAppContext();
  const [popular, setPopular] = useState<productType[]>([]);

  useEffect(() => {
    const data = products.filter((product) => product.popular);
    setPopular(data);
  }, [products]);

  return (
    <section className="py-16 xl:py-28 px-4 lg:px-12">
      <Title title1="Popular" title2="Products" titleStyles="pb-10" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-8 gap-y-12!">
        {popular.slice(0, 8).map((product: productType, index: number) => (
          <div key={index} className="w-47 sm:w-56 mx-5 h-103 relative">
            <Item product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
