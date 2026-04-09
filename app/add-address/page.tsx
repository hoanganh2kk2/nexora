"use client";
import CartTotal from "@/components/CartTotal";
import Title from "@/components/Title";
import { useAppContext } from "@/context/AppContext";
import { addressType } from "@/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddAddress = () => {
  const { user } = useAppContext();
  const router = useRouter();
  const [address, setAddress] = useState<addressType>({
    _id: "",
    userId: "",
    completeName: "",
    phone: "",
    zipcode: "",
    city: "",
    state: "",
    country: "",
    streetAddress: "",
  });

  useEffect(() => {
    if (user === undefined) return;

    if (!user) {
      toast.error("Login required");
      router.push("/cart");
    }
  }, [user]);

  return (
    <div className="max-padd-container  mt-4 min-h-screen">
      {/* CONTAINER */}
      <div className="flex flex-col xl:flex-row gap-20 xl:gap-28">
        {/* Left Side - Form */}
        <form className="flex flex-2 flex-col gap-3 text-[95%]">
          <Title title1="Delivery" title2="Information" titleStyles="pb-5" />
          <input
            value={address.completeName}
            type="text"
            placeholder="Full name"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
            required
          />
          <input
            value={address.phone}
            type="text"
            placeholder="Phone number"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
            required
          />
          <div className="flex gap-4 w-full">
            <input
              value={address.zipcode}
              type="text"
              placeholder="Zip code"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              required
            />
            <input
              value={address.city}
              type="text"
              placeholder="City"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              required
            />
          </div>
          <div className="flex gap-4 w-full">
            <input
              value={address.state}
              type="text"
              placeholder="State"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              required
            />
            <input
              value={address.country}
              type="text"
              placeholder="Country"
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none w-1/2"
              required
            />
          </div>
          <textarea
            value={address.streetAddress}
            placeholder="Street address"
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm bg-white outline-none"
            required
          />
          <button type="submit" className="btn-destructive sm:w-1/2 rounded-md">
            Add Address
          </button>
        </form>
        {/* Right Side - Image */}
        <CartTotal />
      </div>
    </div>
  );
};

export default AddAddress;
