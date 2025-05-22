import { NavLink, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

interface INavLinks {
  to: string;
  title: string;
  banner: string;
}

const navLinks: INavLinks[] = [
  { to: "/", title: "Home", banner: "Home Page 🏠" },
  { to: "/old-lessons", title: "Old Lessons", banner: "Old Sessions" },
];

export default function Header() {
  const location = useLocation();

  const currentBanner = navLinks.find((el) => el.to === location.pathname)?.banner || "";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.linkContainer}>
          {navLinks.map((el) => (
            <NavLink key={el.to} to={el.to} className={({ isActive }) => (isActive ? styles.isActive : styles.isNotActive)}>
              {el.title}
            </NavLink>
          ))}
        </div>
        <div className={styles.bannerContainer}>{currentBanner && <h1>{currentBanner}</h1>}</div>
      </div>
    </header>
  );
}
