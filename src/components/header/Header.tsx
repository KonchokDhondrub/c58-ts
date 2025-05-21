import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "old-lessons", title: "Old Lessons" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linkContainer}>
        {navLinks.map((el) => (
          <NavLink key={el.to} to={el.to} className={({ isActive }) => (isActive ? styles.isActive : styles.isNotActive)}>
            {el.title}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
