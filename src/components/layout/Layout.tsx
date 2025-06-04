import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginToken } from "../../features/auth/authAction";

import styles from "./Layout.module.css";

export default function Layout() {
  //! получаем данные из redux
  const { user, isLoading } = useAppSelector((store) => store.user);

  const dispatch = useAppDispatch();

  //! проверка токена и загрузка данных по юзеру
  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log("token: ", token);
    if (token) {
      dispatch(loginToken(token));
    }
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <>
          <Header />
          <main className={styles.main}>
            <Outlet />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
