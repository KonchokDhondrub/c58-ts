import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

const navLinks = [
  { to: "/", title: "Home" },
];

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.linkContainer}>
          {navLinks.map((el) => (
            <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to={el.to}>
              {el.title}
            </NavLink>
          ))}
        </div>
      </header>
      <main className={styles.main}>
        {/* сюда за место Outlet будут приходить переключаемые компоненты из навигации */}
        <Outlet />
      </main>
      <footer className={styles.footer}></footer>
    </>
  );
}
