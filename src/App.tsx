import { HashRouter, Route, Routes } from "react-router-dom";

import { navLinks, navHW, navLessons } from "./reoutesConfig.tsx";
import { CartProvider } from "./components/cartContext/CartContext.tsx";

import Layout from "./components/layout/Layout";
import "./App.css";

function App() {
  return (
    <CartProvider>
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
    </CartProvider>
  );
}

export default App;
