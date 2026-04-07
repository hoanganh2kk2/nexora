"use client";
import { dummyProducts } from "@/public/data";
import { productType } from "@/types";
import { useRouter } from "next/navigation";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AppContextType {
  products: productType[];
  isSeller: boolean;
  setIsSeller: (value: boolean) => void;
  currency: string;
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
  const router = useRouter();
  const currency = process.env.NEXT_PUBLIC_CURRENCY || "$";

  const value = {
    products,
    isSeller,
    setIsSeller,
    currency,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
