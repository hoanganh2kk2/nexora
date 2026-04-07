"use client";

import { assets } from "@/public/data";
import { productType } from "@/types";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface IProps {
  product: productType;
}

const Item = (props: IProps) => {
  const product = props.product;
  const router = useRouter();
  const [count, setCount] = useState<number>(0);

  return (
    <div
      onClick={() => router.push("/product/" + product._id)}
      className="rounded-2xl pb-2 overflow-hidden"
    >
      <div className="group cursor-pointer flex items-center justify-center overflow-hidden">
        <Image
          className="group-hover:scale-105 transition w-full"
          src={product.images[0]}
          alt={product.name}
          height={233}
          width={233}
        />
      </div>
      <div className="bg-white p-3">
        <p>{product.category}</p>
        <h4 className="truncate">{product.name}</h4>
        <div className="flex items-center gap-0.5">
          <Image src={assets.star} alt="StarIcon" width={16} height={16} />
          <Image src={assets.star} alt="StarIcon" width={16} height={16} />
          <Image src={assets.star} alt="StarIcon" width={16} height={16} />
          <Image src={assets.star} alt="StarIcon" width={16} height={16} />
          <Image src={assets.star} alt="StarIcon" width={16} height={16} />
          <p>(5.0)</p>
        </div>
        <div className="flex items-end justify-between mt-3">
          <p className="md:text-xl text-base font-medium text-destructive">
            ${product.offerPrice}{" "}
            <span className="text-gray-500/60 md:text-sm text-xs line-through">
              ${product.price}.00
            </span>
          </p>
          <div className="text-white">
            {count === 0 ? (
              <button
                className="flex items-center justify-center gap-1 bg-destructive md:w-20 w-16 h-8.5 rounded font-medium"
                onClick={() => setCount(1)}
              >
                <ShoppingCart
                  height={22}
                  width={16}
                  className="transition text-white"
                />
                Add
              </button>
            ) : (
              <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-8.5 bg-destructive/50 rounded select-none">
                <button
                  onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  -
                </button>
                <span className="w-5 text-center">{count}</span>
                <button
                  onClick={() => setCount((prev) => prev + 1)}
                  className="cursor-pointer text-md px-2 h-full"
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
