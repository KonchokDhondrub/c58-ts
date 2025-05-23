import { useEffect, useState, type JSX } from "react";
import type { IProducts } from "./types";

import ProductCard from "../productCard/ProductCard";
import MyLoader from "../myLoader/MyLoader";
import styles from "./Products.module.css";

export default function Products(): JSX.Element {
  const [products, setProducts] = useState<IProducts[]>([]);
  const [loader, setLoader] = useState<boolean>();
  const [limit, setLimit] = useState<number>(5);

  const getProducts = async (limit: number) => {
    setLoader(true);
    const res = await fetch(`https://fakestoreapi.com/products?limit=${limit}`);
    const data = await res.json();
    setLoader(false);
    setProducts(data);
  };

  useEffect(() => {
    getProducts(limit);
  }, [limit]);

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <label>
          Quantity of items (1-20):{" "}
          <input
            type="number"
            min="1"
            max="20"
            value={limit}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1 && value <= 20) {
                setLimit(value);
              }
            }}
            className={styles.input}
          />
        </label>
      </div>
      {loader ? (
        <MyLoader />
      ) : (
        <div className={styles.shopContainer}>
          {products.map((p) => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
          ))}
        </div>
      )}
    </div>
  );
}
