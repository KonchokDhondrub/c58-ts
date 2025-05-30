import { useEffect, useState, type JSX } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

import { useStoreContext } from "./storeContext/StoreContext";

import MyLoader from "../myLoader/MyLoader";
import MyButton from "../myButton/MyButton";
import StoreCard from "./storeCard/StoreCard";
import Homework13 from "../../hw/hw_13/Homework13";
import Cart from "./cart/Cart";

import styles from "./Store.module.css";

const schema = Yup.object().shape({
  limit: Yup.number().min(1, "Choose between 1 and 20").max(20, "Choose between 1 and 20"),
});

export default function Store(): JSX.Element {
  const [limit, setLimit] = useState<number>(20);
  const [page, setPage] = useState<number>(0);
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  const { products, loader, getProducts } = useStoreContext();

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

  useEffect(() => {
    getProducts(limit, limit * page);
  }, [limit, page]);

  const nextPage = () => {
    const newPage = page + 1;
    setPage(newPage);
    getProducts(limit, limit * newPage);
  };

  const prevPage = () => {
    const newPage = page - 1;
    setPage(newPage);
    getProducts(limit, limit * newPage);
  };

  return (
    <div className={styles.container}>
      <div className={isCartOpen ? styles.cartContainer : styles.hidden}>{isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}</div>

      <div className={isLoggedin ? styles.fadeIn : styles.hidden}>
        {isLoggedin && (
          <div className={styles.loginRegistrationContainer}>
            <Homework13 />
          </div>
        )}
      </div>

      <div className={styles.topRow}>
        <form onSubmit={formik.handleSubmit} className={styles.handleSubmit}>
          <label>
            Select quantity:
            <input name="limit" type="number" value={formik.values.limit} onChange={formik.handleChange} className={styles.input} />
            <MyButton size="sm" type="submit" text="set" />
          </label>
        </form>
        {formik.errors.limit && <div className={styles.alertBox}>{formik.errors.limit}</div>}

        <div>
          <div className={styles.prevNextBtn}>
            {page >= 1 && <div>Page: {page}</div>}
            {page >= 1 && <MyButton size="sm" text="Prev" onClick={prevPage} />}
            {products.length < limit ? <MyButton size="sm" text="Next" isDisabled={true} /> : <MyButton size="sm" text="Next" onClick={nextPage} />}
          </div>

          <MyButton
            text="🛒"
            variant="transparent"
            onClick={() => {
              setIsCartOpen((prev) => !prev);
              setIsLoggedin(false);
            }}
          />

          <MyButton
            text="Login"
            variant="success"
            onClick={() => {
              setIsLoggedin((prev) => !prev);
              setIsCartOpen(false);
            }}
          />
        </div>
      </div>

      {loader ? (
        <MyLoader variant="3" />
      ) : (
        <div className={styles.shopContainer}>
          {products.map((p) => (
            <StoreCard key={p.id} id={p.id} title={p.title} price={p.price} thumbnail={p.thumbnail} />
          ))}
        </div>
      )}
    </div>
  );
}
