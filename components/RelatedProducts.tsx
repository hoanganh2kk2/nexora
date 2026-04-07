import { productType } from "@/types";
import Item from "./Item";
import Title from "./Title";
import { useAppContext } from "@/context/AppContext";
import { useEffect, useState } from "react";

const RelatedProducts = ({product}: {product: productType}) => {
  const {products} = useAppContext();
  const [related, setRelated] = useState<productType[]>([]);

  useEffect(() => {
    const data = products.filter((item) => item.category === product.category)
    setRelated(data);
  }, [products]);
  return (
    <section className="max-padd-container py-16 xl:py-28">
      <Title title1="Related" title2="Products" titleStyles="pb-10" />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-8 gap-y-12!">
        {related.slice(0, 8).map((product: productType, index: number) => (
            <div key={index} className="w-47 sm:w-56 mx-5 h-103 relative">
                <Item product={product} />
            </div>
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;
