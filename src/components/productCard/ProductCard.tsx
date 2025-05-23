import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";
import type { JSX } from "react";

interface IProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function ProductCard({ id, title, price, image }: IProductCardProps): JSX.Element {
  return (
    <Link to={String(id)}>
      <div className={styles.shopContainerCard}>
        {/* <h4>{title.length > 30 ? title.slice(0, title.slice(0, 30).lastIndexOf(" ")) + "..." : title}</h4> */}
        <h4>{title.length > 20 ? title.slice(0, 20) + "..." : title}</h4>
        <p>
          Price: $<b>{price}</b>
        </p>
        <div>
          <img src={image} alt="" />
        </div>
      </div>
    </Link>
  );
}
