import { NavLink, useLocation } from "react-router-dom";
import { navHW, navLessons } from "../../reoutesConfig.tsx";
import styles from "./Header.module.css";
import { useAppSelector, useAppDispatch } from "../../app/hooks.ts";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice.ts";
import MyLoader from "../myLoader/MyLoader.tsx";

interface IBannerLink {
  to: string;
  title?: string;
  banner?: string;
}

const navLinks: IBannerLink[] = [
  { to: "/", title: "Home", banner: "Home Page 🏠" },
  { to: "/old-lessons", title: "Old Lessons", banner: "Old Sessions" },
];

export default function Header() {
  const location = useLocation();
  const { user, isLoading } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  //! logout обработчик
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logoutUser());
  };

  // Приводим все маршруты к общему виду
  const allLinks: IBannerLink[] = [...navLinks.map(({ to, banner }) => ({ to: "/" + to.replace(/^\//, ""), banner })), ...navHW.map(({ path, title }) => ({ to: "/" + path, title })), ...navLessons.map(({ path, title }) => ({ to: "/" + path, title }))];
  // console.log(allLinks);
  // Ищем совпадение
  const matched = allLinks.find((el) => location.pathname === el.to);
  const currentBanner = matched?.title ?? matched?.banner ?? null;

  return (
    <>
      {!isLoading ? (
        <>
          <header className={styles.header}>
            <div className={styles.container}>
              <div className={styles.linkContainer}>
                {user.id ? (
                  <>
                    {navLinks.map((el, index) => (
                      <NavLink key={index} className={({ isActive }) => (isActive ? styles.isActive : "")} to={el.to}>
                        {el.title}
                      </NavLink>
                    ))}
                    <NavLink to="login" onClick={handleLogout}>
                      Logout
                    </NavLink>
                    {/* <h2>Hello, {user.firstName}</h2> */}
                  </>
                ) : (
                  <NavLink className={({ isActive }) => (isActive ? styles.isActive : "")} to={"login"}>
                    Login
                  </NavLink>
                )}
              </div>
              <div className={styles.bannerContainer}>{currentBanner && <h1>{currentBanner.slice(currentBanner.indexOf(":") + 1)}</h1>}</div>
            </div>
          </header>
        </>
      ) : (
        <MyLoader />
      )}
    </>
  );
}
