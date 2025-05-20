import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", title: "Home" },
  { to: "https://konchokdhondrub.github.io/frontend/", title: "Old Lessons Page" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linkContainer}>
        {navLinks.map((el) => (
          <NavLink key={el.to} className={({ isActive }) => (isActive ? styles.isActive : "")} to={el.to}>
            {el.title}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
