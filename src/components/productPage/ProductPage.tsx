// import styles from './ProductPage.module.css'
import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type { IProducts } from "../products/types";
import styles from "./ProductPage.module.css";
import MyLoader from "../myLoader/MyLoader";
import MyButton from "../myButton/MyButton";

const initialState: IProducts = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  category: "",
  image: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

export default function ProductPage(): JSX.Element {
  const { id } = useParams();

  const [product, setProduct] = useState<IProducts>(initialState);
  const [loader, setLoader] = useState<boolean>();

  useEffect(() => {
    setLoader(true);

    fetch("https://fakestoreapi.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setProduct(data);
      });
  }, [id]);

  return (
    <div className={styles.main}>
      {loader ? (
        <MyLoader />
      ) : (
        <div className={styles.container}>
          <div className={styles.titleBtnCont}>
            <h2>{product.title}</h2>
            <Link to="/lesson-14">
              <MyButton type="button" text="back" />
            </Link>
          </div>

          <div className={styles.imageDescBox}>
            {/* <div className={styles.imageContainer}> */}
            <img src={product.image} alt={String(product.id)} />
            {/* </div> */}
            <div>
              <h3>Price: {product.price}</h3>
              <h3>Rating: {product.rating.rate}</h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
