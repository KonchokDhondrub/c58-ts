import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Layout() {
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
