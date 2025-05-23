import styles from "./Lesson14.module.css";
import type { JSX } from "react";
import Products from "../../components/products/Products";

export default function Lesson14(): JSX.Element {
  return (
    <div className={styles.container}>
      <h2>Lesson 14: Dynamic Routing 🛒</h2>
      <Products />
    </div>
  );
}
