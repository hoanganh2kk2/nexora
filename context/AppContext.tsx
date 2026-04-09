"use client";
import { dummyProducts } from "@/public/data";
import { productType } from "@/types";
import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextType {
  products: productType[];
  isSeller: boolean;
  setIsSeller: (value: boolean) => void;
  currency: string;
  cartItems: Record<string, number>;
  setCartItems: (cartItems: Record<string, number>) => void;
  addToCart: (itemId: string) => void;
  getCartCount: () => number;
  updateCartQuantity: (itemId: string, quantity: number) => void;
  getCartAmount: () => number;
  user: boolean;
  removeFromCart: (itemId: string) => void;
}

interface IProps {
  children: ReactNode;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};

const AppContextProvider = (props: IProps) => {
  const children = props.children;
  const [products, setProducts] = useState<productType[]>(dummyProducts);
  const [isSeller, setIsSeller] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const [user, setUser] = useState<boolean>(true);
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  const addToCart = (itemId: string) => {
    const cartData: Record<string, number> = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] += 1;
    } else {
      cartData[itemId] = 1;
    }
    setCartItems(cartData);
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        totalCount += cartItems[itemId];
      }
    }
    return totalCount;
  };

  const updateCartQuantity = (itemId: string, quantity: number) => {
    const cartData: Record<string, number> = structuredClone(cartItems);
    if (quantity === 0) {
      delete cartData[itemId];
    } else {
      cartData[itemId] = quantity;
    }
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const itemInfo = products.find((product) => product._id === itemId);
      if (cartItems[itemId] > 0 && itemInfo) {
        totalAmount += itemInfo.offerPrice * cartItems[itemId];
      }
    }
    return Math.floor(totalAmount * 100) / 100;
  };

  const removeFromCart = (itemId: string) => {
    const cartData: Record<string, number> = structuredClone(cartItems);
    if (cartData[itemId]) {
      cartData[itemId] -= 1;
      if (cartData[itemId] <= 0) {
        delete cartData[itemId];
      }
      setCartItems(cartData);
    }
  };

  const value = {
    products,
    isSeller,
    setIsSeller,
    currency,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateCartQuantity,
    getCartAmount,
    user,
    removeFromCart
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
