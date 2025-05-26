import { useEffect, useState, type JSX } from "react";
import { Link, useParams } from "react-router-dom";
import type { IProducts } from "../../types.ts";

import MyLoader from "../../../myLoader/MyLoader";
import MyButton from "../../../myButton/MyButton";
import MyCounter from "../../../myCounter/MyCounter";
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
  reviews: {
    rating: 0,
    comment: "",
    date: 0,
    reviewerName: "",
    reviewerEmail: "",
  },
  tags: [],
};

export default function StorePage(): JSX.Element {
  const { id } = useParams();

  const [count, setCount] = useState(1);

  const [product, setProduct] = useState<IProducts>(initialState);
  const [loader, setLoader] = useState<boolean>();
  const [order, setOrder] = useState<{ userId?: string; id: number; amount: number }>();

  useEffect(() => {
    setLoader(true);

    fetch("https://dummyjson.com/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  return (
    <div className={styles.main}>
      {loader ? (
        <MyLoader variant="3" />
      ) : (
        <div className={styles.container}>
          <div className={styles.titleBtnCont}>
            <h2>{product.title}</h2>
            <Link to="/lesson-15">
              <MyButton type="button" text="back" />
            </Link>
          </div>

          <div className={styles.imageDescBox}>
            {/* <div className={styles.imageContainer}> */}
            <img src={product.images[0]} alt={String(product.id)} />
            {/* </div> */}
            <div>
              <h3>
                Price: $<b>{product.price}</b>
              </h3>
              <h3>{/* Rating: <b>{product.rating.rate}</b> */}</h3>
              <p>{product.description}</p>
              <div className={styles.addCartContainer}>
                <MyButton
                  text="add to cart"
                  onClick={() => {
                    const newOrder = { id: product.id, amount: count };
                    setOrder(newOrder);
                    console.log("Order set:", newOrder);
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
