import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const navLinks = [
  { to: "/", title: "Home", external: false },
  { to: "https://konchokdhondrub.github.io/frontend/", title: "Old Lessons Page", external: true },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.linkContainer}>
        {navLinks.map((el) =>
          el.external ? (
            <a key={el.to} href={el.to} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
              {el.title}
            </a>
          ) : (
            <NavLink key={el.to} to={el.to} className={({ isActive }) => (isActive ? styles.isActive : "")}>
              {el.title}
            </NavLink>
          )
        )}
      </div>
    </header>
  );
}
