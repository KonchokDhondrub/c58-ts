import { Link } from "react-router-dom";
import type { JSX } from "react";
import MyButton from "../myButton/MyButton";
import styles from "./ProductCard.module.css";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  return (
    <div className={styles.mainContainer}>
      <Link to={String(id)}>
        <div className={styles.shopContainerCard}>
          {/* <h4>{title.length > 30 ? title.slice(0, title.slice(0, 30).lastIndexOf(" ")) + "..." : title}</h4> */}
          <h4>{title.length > 23 ? title.slice(0, 20) + "..." : title}</h4>
          <p>
            Price: $<b>{price}</b>
          </p>
          <div>
            <img src={image} alt={title} />
          </div>
        </div>
      </Link>
      <div className={styles.btnAddCart}>
        <MyButton
          size="sm"
          text="add to cart"
          onClick={() => {
            console.log("Click!");
          }}
        />
      </div>
    </div>
  );
}
