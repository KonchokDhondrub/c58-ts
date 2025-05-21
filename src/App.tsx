import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";

import Layout from "./components/layout/Layout";
import HomePage from "./components/homePage/HomePage";

import Homework01 from "./hw/hw_01/Homework01";
import Homework02 from "./hw/hw_02/Homework02";
import Homework03 from "./hw/hw_03/Homework03";
import Homework04 from "./hw/hw_04/Homework04";
import Homework05 from "./hw/hw_05/Homework05";
import Homework06 from "./hw/hw_06/Homework06";
import Homework08 from "./hw/hw_08/Homework08";

import Lesson01 from "./lessons/lesson_01/Lesson01";
import Lesson02 from "./lessons/lesson_02/Lesson02";
import Lesson03 from "./lessons/lesson_03/Lesson03";
import Lesson04 from "./lessons/lesson_04/Lesson04";
import Lesson05 from "./lessons/lesson_05/Lesson05";
import Lesson06 from "./lessons/lesson_06/Lesson06";
import Lesson07 from "./lessons/lesson_07/Lesson07";
import Lesson08 from "./lessons/lesson_08/Lesson08";
import Lesson09 from "./lessons/lesson_09/Lesson09";
import Lesson10 from "./lessons/lesson_10/Lesson10";

// Homewok array
const navHW = [
  { path: "homework-01", title: "Homework 1: Business card", element: <Homework01 /> },
  { path: "homework-02", title: "Homework 2: JSX, My Best Friends!", element: <Homework02 /> },
  { path: "homework-03", title: "Homework 3: props & LogIn form", element: <Homework03 /> },
  { path: "homework-04", title: "Homework 4: useState & Feedback form", element: <Homework04 /> },
  { path: "homework-05", title: "Homework 5: React map() 🧝🏻‍♂️", element: <Homework05 /> },
  { path: "homework-06", title: "Homework 6: TypeScript & Apollo 11 mission", element: <Homework06 /> },
  { path: "homework-08", title: "Homework 8: useEffect & Foxes!", element: <Homework08 /> },
];

// Lessons array
const navLessons = [
  { path: "lesson-01", title: "Lesson 1: Hello, React!", element: <Lesson01 /> },
  { path: "lesson-02", title: "Lesson 2: JSX components", element: <Lesson02 /> },
  { path: "lesson-03", title: "Lesson 3: React props 👨‍👩‍👧‍👦", element: <Lesson03 /> },
  { path: "lesson-04", title: "Lesson 4: useState hook 🪝", element: <Lesson04 /> },
  { path: "lesson-05", title: "Lesson 5: React map() 🧝🏻‍♂️", element: <Lesson05 /> },
  { path: "lesson-06", title: "Lesson 6: TypeScript pt1 💁‍♂️", element: <Lesson06 /> },
  { path: "lesson-07", title: "Lesson 7: TypeScript pt2 💁", element: <Lesson07 /> },
  { path: "lesson-08", title: "Lesson 8: useEffect hook 🪝", element: <Lesson08 /> },
  { path: "lesson-09", title: "Lesson 9: CSS modules", element: <Lesson09 /> },
  { path: "lesson-10", title: "Lesson 10: Fletch Cats! 🐈", element: <Lesson10 /> },
];

// Main nav
const navLinks = [
  { path: "/", title: "Home Page: Lessons & Homework", element: <HomePage homework={navHW} lessons={navLessons} /> },
  { path: "*", title: "404 Page not found", element: <h1>404 Page not found</h1> },
];

function App() {
  // const location = useLocation();

  // useEffect(() => {
  //   const allRoutes = [...navLinks, ...navHW, ...navLessons];
  //   const current = allRoutes.find((el) => el.path === location.pathname);
  //   document.title = current?.title || "React App";
  // }, [location]);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {navLinks.map((el) => {
            return <Route key={el.path} path={el.path} element={el.element} />;
          })}
          {navHW.map((el) => {
            return <Route key={el.path} path={el.path} element={el.element} />;
          })}
          {navLessons.map((el) => {
            return <Route key={el.path} path={el.path} element={el.element} />;
          })}
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
