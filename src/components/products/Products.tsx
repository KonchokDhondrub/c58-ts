import { useEffect, useState, type JSX } from "react";

import ProductCard from "../productCard/ProductCard";
import MyLoader from "../myLoader/MyLoader";
import MyButton from "../myButton/MyButton";
import { loadProducts } from "../../features/productAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import styles from "./Products.module.css";

export default function Products(): JSX.Element {
  const { products, isLoading, error } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState<number>(5);
  // const [page, setPage] = useState<number>(0);

  useEffect(() => {
    dispatch(loadProducts(limit)); // передаём в dispatch вызов нужного action
  }, [limit]);

  const totalPages = Math.ceil(products.length / limit);

  const nextPage = () => {
    dispatch(loadProducts(limit));
    const p2 = products.slice(limit / 2, 5);
    // if (page < totalPages - 1) {
    //   setPage((prev) => prev + 1);
    // }
  };

  // const prevPage = () => {
  //   if (page > 0) {
  //     setPage((prev) => prev - 1);
  //   }
  // };

  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 20) {
      setLimit(value);
      //   setPage(0);
    }
  };

  // const visibleProducts = products.slice(page * limit, (page + 1) * limit);

  // useEffect(() => {
  //   console.log("Current page:", page);
  // }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.labelBtn}>
        <label>
          Quantity of items per page (1–20): <input type="number" min="1" max="20" value={limit} onChange={handleLimitChange} className={styles.input} />
        </label>

        <div>
          {/* {page >= 1 && <MyButton size="sm" text="Prev" onClick={prevPage} />}
          {page < products.length / limit - 1 ?  */}
          <MyButton size="sm" text="Next" onClick={nextPage} />
          {/* : <MyButton size="sm" text="Next" isDisabled={true} />} */}
        </div>
      </div>

      {isLoading ? (
        <MyLoader variant="3" />
      ) : (
        <div className={styles.shopContainer}>
          {products.map((p) => (
            <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
          ))}
          {error && <h2>⚠️ Error: {error} ⚠️</h2>}
        </div>
      )}
    </div>
  );
}
