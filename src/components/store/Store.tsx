import { useEffect, useState, type JSX } from "react";
import type { IProducts } from "./types";
import * as Yup from "yup";
import { useFormik } from "formik";

import MyLoader from "../myLoader/MyLoader";
import MyButton from "../myButton/MyButton";
import StoreCard from "./storeCard/StoreCard";
import Homework13 from "../../hw/hw_13/Homework13";
import styles from "./Store.module.css";
import Cart from "./cart/Cart";

const schema = Yup.object().shape({
  limit: Yup.number().min(1, "Choose between 1 and 20").max(20, "Choose between 1 and 20"),
});

export default function Store(): JSX.Element {
  const [allProducts, setAllProducts] = useState<IProducts[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(0);
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      limit: 20,
    },
    validateOnChange: true,
    validationSchema: schema,
    onSubmit: (values) => {
      getProducts(values.limit);
      setLimit(values.limit);
    },
  });

  const getProducts = async (limit: number, skip = 0) => {
    setLoader(true);
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
    const data = await res.json();
    setAllProducts(data.products);
    setLoader(false);
    // console.log(data.products);
    console.log("Page: " + page);
  };

  useEffect(() => {
    getProducts(limit);
  }, []);

  //* Page Selector
  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    getProducts(limit, limit * newPage);
    console.log("Next " + "Limit: " + limit + " Page: " + newPage);
  };

  const prevPage = () => {
    const newPage = page - 1;
    setPage(newPage);
    getProducts(limit, limit * newPage);
    console.log("Prev " + "Limit: " + limit + " Page: " + newPage);
  };

  return (
    <div className={styles.container}>
      {/* Cart */}
      {isCartOpen && (
        <div className={styles.cartContainer}>
          <Cart />
        </div>
      )}

      <div className={styles.topRow}>
        {/* Login form */}
        <div className={isLoggedin ? styles.fadeIn : styles.hidden}>
          {isLoggedin && (
            <div className={styles.loginRegistrationContainer}>
              <Homework13 />
            </div>
          )}
        </div>

        {/* Limit selector  */}
        <form onSubmit={formik.handleSubmit} className={styles.handleSubmit}>
          <label>
            Select quantity:
            <input name="limit" type="number" value={formik.values.limit} onChange={formik.handleChange} className={styles.input} />
            <MyButton size="sm" type="submit" text="set" />
          </label>
        </form>
        {formik.errors.limit && <div className={styles.alertBox}>{formik.errors.limit}</div>}

        <div>
          {/* Pages buttons */}
          <div className={styles.prevNextBtn}>
            {page >= 1 && <div>Page: {page}</div>}
            {page >= 1 && <MyButton size="sm" text="Prev" onClick={() => prevPage()} />}
            {allProducts.length < limit ? <MyButton size="sm" text="Next" isDisabled={true} /> : <MyButton size="sm" text="Next" onClick={() => nextPage()} />}
          </div>

          {/* Cart Button */}
          <MyButton text="🛒" variant="transparent" onClick={() => setIsCartOpen((prev) => !prev)} />

          {/* Login Button  */}
          <MyButton text="Login" variant="success" onClick={() => setIsLoggedin((prev) => !prev)} />
        </div>
      </div>

      {loader ? (
        <MyLoader variant="3" />
      ) : (
        <div className={styles.shopContainer}>
          {allProducts.map((p) => (
            <StoreCard key={p.id} id={p.id} title={p.title} price={p.price} thumbnail={p.thumbnail} />
          ))}
        </div>
      )}
    </div>
  );
}
