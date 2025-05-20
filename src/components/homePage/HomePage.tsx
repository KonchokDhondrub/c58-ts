import { useEffect, type JSX } from "react";
import { NavLink } from "react-router-dom";

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

      <div>Homework</div>
      <div>
        <div>
          {homework.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.title}
            </NavLink>
          ))}
        </div>

        <div>Lessons</div>
        <div>
          {lessons.map((el) => (
            <NavLink key={el.path} to={el.path}>
              {el.title || el.path}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
}
