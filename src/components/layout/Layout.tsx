import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";



export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* сюда за место Outlet будут приходить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
