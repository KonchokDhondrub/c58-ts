import { NavLink, useLocation } from "react-router-dom";
import { navHW, navLessons } from "../../reoutesConfig.tsx";
import styles from "./Header.module.css";

interface IBannerLink {
  to: string;
  title?: string;
  banner?: string;
}

const navLinks: IBannerLink[] = [
  { to: "/", title: "Home", banner: "Home Page 🏠" },
  { to: "/old-lessons", title: "Old Lessons", banner: "Old Sessions" },
  // { to: "/cart", title: "Cart",},
];

export default function Header() {
  const location = useLocation();

  // Приводим все маршруты к общему виду
  const allLinks: IBannerLink[] = [...navLinks.map(({ to, banner }) => ({ to: "/" + to.replace(/^\//, ""), banner })), ...navHW.map(({ path, title }) => ({ to: "/" + path, title })), ...navLessons.map(({ path, title }) => ({ to: "/" + path, title }))];
  // console.log(allLinks);
  // Ищем совпадение
  const matched = allLinks.find((el) => location.pathname === el.to);
  const currentBanner = matched?.title ?? matched?.banner ?? null;

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
        <div className={styles.bannerContainer}>{currentBanner && <h1>{currentBanner.slice(currentBanner.indexOf(":") + 1)}</h1>}</div>
      </div>
    </header>
  );
}
