import { useEffect, useState, type JSX } from "react";
import type { IProducts } from "./types";

import ProductCard from "../productCard/ProductCard";
import MyLoader from "../myLoader/MyLoader";
import MyButton from "../myButton/MyButton";
import styles from "./Products.module.css";

export default function Products(): JSX.Element {
  const [allProducts, setAllProducts] = useState<IProducts[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  const getProducts = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();
    setAllProducts(data);
    setLoader(false);
  };

  useEffect(() => {
    setLoader(true);
    // setTimeout(() => {
    getProducts();
    // }, 1000);
  }, []);

  const totalPages = Math.ceil(allProducts.length / limit);

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 20) {
      setLimit(value);
      //   setPage(0);
    }
  };

  const visibleProducts = allProducts.slice(page * limit, (page + 1) * limit);

  useEffect(() => {
    console.log("Current page:", page);
  }, [page]);
  // console.log(visibleProducts);

  return (
    <div className={styles.container}>
      <div className={styles.labelBtn}>
        <label>
          Quantity of items per page (1–20): <input type="number" min="1" max="20" value={limit} onChange={handleLimitChange} className={styles.input} />
        </label>

        <div>
          {page >= 1 && <MyButton size="sm" text="Prev" onClick={prevPage} />}
          {page < allProducts.length / limit - 1 ? <MyButton size="sm" text="Next" onClick={nextPage} /> : <MyButton size="sm" text="Next" isDisabled={true} />}
        </div>
      </div>

      {loader ? (
        <MyLoader variant="3" />
      ) : (
        <div className={styles.shopContainer}>
          {visibleProducts.map((p) => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
          ))}
        </div>
      )}
    </div>
  );
}
