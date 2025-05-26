import type { JSX } from "react";
import Store from "../../components/store/Store";
import styles from "./Lesson15.module.css";

export default function Lesson15(): JSX.Element {
  return (
    <div className={styles.container}>
      <Store />
    </div>
  );
}
