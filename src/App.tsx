import { HashRouter, Route, Routes } from "react-router-dom";
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
  { path: "homework-01", title: "Homework 01", element: <Homework01 /> },
  { path: "homework-02", title: "Homework 02", element: <Homework02 /> },
  { path: "homework-03", title: "Homework 03", element: <Homework03 /> },
  { path: "homework-04", title: "Homework 04", element: <Homework04 /> },
  { path: "homework-05", title: "Homework 05", element: <Homework05 /> },
  { path: "homework-06", title: "Homework 06", element: <Homework06 /> },
  { path: "homework-08", title: "Homework 08", element: <Homework08 /> },
];

// Lessons array
const navLessons = [
  { path: "lesson-01", title: "Lesson 01", element: <Lesson01 /> },
  { path: "lesson-02", title: "Lesson 02", element: <Lesson02 /> },
  { path: "lesson-03", title: "Lesson 03", element: <Lesson03 /> },
  { path: "lesson-04", title: "Lesson 04", element: <Lesson04 /> },
  { path: "lesson-05", title: "Lesson 05", element: <Lesson05 /> },
  { path: "lesson-06", title: "Lesson 06", element: <Lesson06 /> },
  { path: "lesson-07", title: "Lesson 07", element: <Lesson07 /> },
  { path: "lesson-08", title: "Lesson 08", element: <Lesson08 /> },
  { path: "lesson-09", title: "Lesson 09", element: <Lesson09 /> },
  { path: "lesson-10", title: "Lesson 10", element: <Lesson10 /> },
];

// Main nav
const navLinks = [
  { path: "/", element: <HomePage homework={navHW} lessons={navLessons} /> },
  { path: "*", element: <h1>404 Page not found</h1> },
];

function App() {
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
