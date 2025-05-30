import type { JSX } from "react";

import Store from "../../components/store/Store";
import StoreProvider from "../../components/store/storeContext/StoreContext";

import styles from "./Lesson15.module.css";

export default function Lesson15(): JSX.Element {
  return (
    <StoreProvider>
      <div className={styles.container}>
        <Store />
      </div>
    </StoreProvider>
  );
}
