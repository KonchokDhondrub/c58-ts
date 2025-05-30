import { createContext, useContext, useState, useCallback, useEffect, type JSX } from "react";

import type { IProducts } from "../types";

interface IStoreProviderProps {
  children: React.ReactNode;
}

interface StoreContextType {
  products: IProducts[];
  loader: boolean;
  getProducts: (limit: number, skip?: number) => Promise<void>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function useStoreContext(): StoreContextType {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a StoreProvider");
  }
  return context;
}

export default function StoreProvider({ children }: IStoreProviderProps): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loader, setLoader] = useState<boolean>(false);

  const getProducts = useCallback(async (limit: number, skip = 0) => {
    setLoader(true);
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    setProducts(data.products);
    setLoader(false);
  }, []);

  useEffect(() => {
    getProducts(20); // начальная загрузка
  }, [getProducts]);

  return <StoreContext.Provider value={{ products, loader, getProducts }}>{children}</StoreContext.Provider>;
}
