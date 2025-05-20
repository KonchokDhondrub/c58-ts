import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
import HomePage from "./components/homePage/HomePage";

import Homework01 from "./hw/hw_01/Homework01";
import Lesson10 from "./lessons/lesson_10/Lesson10";
import Homework02 from "./hw/hw_02/Homework02";

// Homewok array
const navHW = [
  { path: "homework-01", title: "Homework 01", element: <Homework01 /> },
  { path: "homework-02", title: "Homework 02", element: <Homework02 /> },
];

// Lessons array
const navLessons = [{ path: "lesson-10", title: "", element: <Lesson10 /> }];

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
