import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Layout from "./components/layout/Layout";
// import HomePage from "./components/homePage/HomePage";
import { navLinks, navHW, navLessons } from "./reoutesConfig.tsx";

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
