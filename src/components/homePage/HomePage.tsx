import { useEffect, type JSX } from "react";
import { NavLink } from "react-router-dom";
import style from "./HomePage.module.css";

interface IAllData {
  path: string;
  title: string;
  element: JSX.Element;
}

interface IHomePageProps {
  homework: IAllData[];
  lessons: IAllData[];
}

export default function HomePage({ homework, lessons }: IHomePageProps): JSX.Element {
  useEffect(() => {
    document.title = "Home Page";
  });

  return (
    <>
      <h1>Home Page 🏠</h1>

      <div className={style.container}>
        <div className={style.box}>
          <h2>Lessons</h2>
          {lessons.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.title || el.path}
            </NavLink>
          ))}
        </div>
        <div className={style.box}>
          <h2>Homework</h2>
          {homework.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
