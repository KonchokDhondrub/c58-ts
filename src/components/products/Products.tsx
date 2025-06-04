import { useEffect, useState, type JSX } from "react";
// import { useFormik } from "formik";

import ProductCard from "../productCard/ProductCard";
import MyLoader from "../myLoader/MyLoader";
import MyButton from "../myButton/MyButton";
import Login from "../login/Login";
// import MyInput from "../myInput/MyInput";
import { loadProducts } from "../../features/product/productAction";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

import styles from "./Products.module.css";

export default function Products(): JSX.Element {
  const { products, isLoading, error } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const [limit, setLimit] = useState<number>(5);
  const [page, setPage] = useState<number>(0);

  /// Formik
  // const formik = useFormik({
  //   initialValues: {
  //     limit: "",
  //   } as { limit: string },
  //   validateOnChange: false,
  //   onSubmit: (values, { resetForm }) => {
  //     // console.log(values);
  //     dispatch(loadLimitProducts(values.limit));
  //     resetForm();
  //   },
  // });

  useEffect(() => {
    dispatch(loadProducts()); // передаём в dispatch вызов нужного action
  }, []);

  // Pages
  const totalPages = Math.ceil(products.length / limit);

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

  // Limit
  const handleLimitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value >= 1 && value <= 20) {
      setLimit(value);
      //   setPage(0);
    }
  };

  const visibleProducts = products.slice(page * limit, (page + 1) * limit);

  // Получаем user-а
  const { user } = useAppSelector((store) => store.user);
  // console.log(user);

  return (
    <div className={styles.container}>
      {user.id ? (
        "" // <MyLoader variant="3" />
      ) : (
        <div className={styles.loginContainer}>
          <Login />
        </div>
      )}

      {user.id ? (
        <>
          <div className={styles.labelBtn}>
            <label>
              Quantity of items per page (1–20): <input type="number" min="1" max="20" value={limit} onChange={handleLimitChange} className={styles.input} />
            </label>

            <h2 className={styles.userName}>
              Hello {user.firstName} {user.lastName}!
            </h2>

            {/* 
            // Teacher version
            <form onSubmit={formik.handleSubmit}>
            <MyInput name={'limit'} label={'🤔 What is your limit? 🛍️'} placeholder={'limit of products'} type={'text'} formik={formik} />
            <MyButton variant="danger" size="sm" type="submit" text="load limit products" />
          </form> */}

            <div>
              {page >= 1 && <MyButton size="sm" text="Prev" onClick={prevPage} />}
              {page < products.length / limit - 1 ? <MyButton size="sm" text="Next" onClick={nextPage} /> : <MyButton size="sm" text="Next" isDisabled={true} />}
            </div>
          </div>

          {isLoading ? (
            <MyLoader variant="3" />
          ) : (
            <div className={styles.shopContainer}>
              {visibleProducts.map((p) => (
                <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} image={p.image} />
              ))}
              {error && <h2>⚠️ Error: {error} ⚠️</h2>}
            </div>
          )}
        </>
      ) : (
        "Please Login"
      )}
    </div>
  );
}
