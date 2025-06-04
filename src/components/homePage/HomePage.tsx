import { useEffect, type JSX } from "react";
import { Form, NavLink } from "react-router-dom";
import style from "./HomePage.module.css";
import { navHW, navLessons } from "../../reoutesConfig";

interface IAllData {
  path: string;
  title: string;
  element: JSX.Element;
}

interface IHomePageProps {
  homework: IAllData[];
  lessons: IAllData[];
}

export default function HomePage(/*{ homework, lessons }: IHomePageProps*/): JSX.Element {
  useEffect(() => {
    document.title = "Home Page with lessons";
  });

  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <h2>Lessons</h2>
          {navLessons
            .slice()
            .reverse()
            .map((el, index) => (
              <div key={index} className={style.containerGrid}>
                <NavLink to={el.path}>
                  <section>{el.title ? el.title.replace(":", "" + "\u00A0".repeat(3)) : el.path}</section>
                </NavLink>
              </div>
            ))}
        </div>
        <div className={style.box}>
          <h2>Homework</h2>
          {navHW
            .slice()
            .reverse()
            .map((el, index) => (
              <div key={index} className={style.containerGrid}>
                <NavLink to={el.path}>
                  <section>{el.title ? el.title.replace(":", "" + "\u00A0".repeat(3)) : el.path}</section>
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
