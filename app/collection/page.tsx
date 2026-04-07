"use client";

import Item from "@/components/Item";
import Title from "@/components/Title";
import { useAppContext } from "@/context/AppContext";

const Collection = () => {
  const { products } = useAppContext();
  return (
    <div className="max-padd-container py-28">
      <Title title1="All" title2="Products" titleStyles="pb-10" />
      <div className="bg-primary py-4 rounded-l-xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-8 gap-y-12!">
          {products.length > 0 ? (
            products.map((product) => (
              <Item key={product._id} product={product} />
            ))
          ) : (
            <p className="capitalize">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
