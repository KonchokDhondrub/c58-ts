import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";

import type { IProducts } from "../types";
import { useCart } from "../../cartContext/CartContext";

import MyLoader from "../../myLoader/MyLoader";
import MyButton from "../../myButton/MyButton";
import MyCounter from "../../myCounter/MyCounter";
import styles from "./StorePage.module.css";

const initialState: IProducts = {
  id: 0,
  title: "",
  category: "",
  price: 0,
  description: "",
  images: [],
  thumbnail: "",
  brand: "",
  reviews: [],
  tags: [],
};

export default function StorePage(): JSX.Element {
  const { id: paramId } = useParams();
  const { addToCart } = useCart();

  const [count, setCount] = useState(1);
  const [product, setProduct] = useState<IProducts>(initialState);
  const [loader, setLoader] = useState<boolean>(false);

  const { id, title, category, price, description, images, brand, reviews } = product;

  useEffect(() => {
    setLoader(true);
    fetch("https://dummyjson.com/products/" + paramId)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setProduct(data);
      });
  }, [paramId]);

  const averageRating = reviews.length > 0 ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length : 0;

  return (
    <div className={styles.main}>
      {loader ? (
        <MyLoader variant="3" />
      ) : (
        <div className={styles.container}>
          <div className={styles.titleBtnCont}>
            <span>
              <h2>
                {title} - {brand}
              </h2>
              <p className={styles.category}>{category}</p>
            </span>
            <Link to="/lesson-15">
              <MyButton type="button" text="back" />
            </Link>
          </div>

          <div className={styles.imageDescBox}>
            <div className={styles.imageContainer}>
              <img src={images[0]} alt={String(id)} />
            </div>
            <div>
              <h3>
                Price: $<b>{price}</b>
              </h3>
              <h3>
                Rating: <b>{averageRating.toFixed(2)}</b>
              </h3>
              <p>{description}</p>

              <div className={styles.addCartContainer}>
                <MyButton
                  text="add to cart"
                  onClick={() => {
                    addToCart({ id, title, price, quantity: count });
                  }}
                />
                <MyCounter count={count} setCount={setCount} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
