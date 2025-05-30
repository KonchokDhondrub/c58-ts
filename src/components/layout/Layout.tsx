import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useCart } from "../cartContext/CartContext";

export default function Layout() {
  const { cart } = useCart();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
