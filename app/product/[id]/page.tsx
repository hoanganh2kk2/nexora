/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import RelatedProducts from "@/components/RelatedProducts";
import { useAppContext } from "@/context/AppContext";
import { assets } from "@/public/data";
import { productType } from "@/types";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Product = () => {
  const { products } = useAppContext();
  const router = useRouter();
  const [product, setProduct] = useState<productType | null>(null);
  const [thumbnail, setThumbnail] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find((p) => p._id === id);
      setProduct(foundProduct || null);

      //Safe set thumbnail if product exists and has images
      if (foundProduct?.images?.length > 0) {
        setThumbnail(foundProduct.images[0]);
      }
    }
  }, [id, products]);

  return (
    product && (
      <>
        <div className="max-padd-container py-28">
          <p>
            <span>Home</span> /<span> Products</span> /
            <span> {product.category}</span> /
            <span className="text-indigo-500"> {product.name}</span>
          </p>

          <div className="flex flex-col md:flex-row gap-16 mt-4">
            <div className="flex gap-3">
              <div className="flex flex-col gap-3">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setThumbnail(image)}
                    className="max-w-23 rounded overflow-hidden cursor-pointer"
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      width={99}
                      height={99}
                    />
                  </div>
                ))}
              </div>

              <div className="max-w-100 rounded overflow-hidden">
                <Image
                  src={thumbnail}
                  alt="Selected product"
                  height={399}
                  width={399}
                />
              </div>
            </div>

            <div className="text-sm w-full md:w-1/2">
              <h1 className="text-3xl font-medium">{product.name}</h1>

              <div className="flex items-center gap-0.5 mt-1">
                <Image
                  src={assets.star}
                  alt="StarIcon"
                  width={16}
                  height={16}
                />
                <Image
                  src={assets.star}
                  alt="StarIcon"
                  width={16}
                  height={16}
                />
                <Image
                  src={assets.star}
                  alt="StarIcon"
                  width={16}
                  height={16}
                />
                <Image
                  src={assets.star}
                  alt="StarIcon"
                  width={16}
                  height={16}
                />
                <Image
                  src={assets.star}
                  alt="StarIcon"
                  width={16}
                  height={16}
                />

                <p className="ml-2">(5.0)</p>
              </div>

              <div className="mt-6">
                <p className="text-gray-500/70 line-through">
                  MRP: ${product.price}
                </p>
                <p className="text-2xl font-medium">
                  MRP: ${product.offerPrice}
                </p>
                <span className="text-gray-500/70">
                  (inclusive of all taxes)
                </span>
              </div>

              <div className="flex gap-x-4 mt-3">
                <div className="flex items-center gap-x-2">
                  <h4 className="text-gray-500 font-medium">Category:</h4>
                  <p>{product.category}</p>
                </div>
                <div className="flex items-center gap-x-2">
                  <h4 className="text-gray-500 font-medium">SubCategory:</h4>
                  <p>{product.subCategory}</p>
                </div>
              </div>

              <p className="text-base font-medium mt-6">About Product</p>
              <p>{product.description}</p>

              <div className="flex items-center mt-10 gap-4 text-base">
                <button className="w-full py-3.5 cursor-pointer font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition rounded-2xl">
                  Add to Cart
                </button>
                <button className="w-full py-3.5 cursor-pointer font-medium bg-destructive text-white hover:bg-destructive/90 transition rounded-2xl">
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts product={product} />
      </>
    )
  );
};

export default Product;
