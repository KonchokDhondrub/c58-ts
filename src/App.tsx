import { HashRouter, Route, Routes } from "react-router-dom";

import { navLinks, navHW, navLessons } from "./reoutesConfig.tsx";
import { CartProvider } from "./components/cartContext/CartContext.tsx";

import Layout from "./components/layout/Layout";
import "./App.css";
import { Provider } from "react-redux";
import { store, storeCounter } from "./app/store.ts";
import Login from "./components/login/Login.tsx";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute.tsx";
import { useAppSelector } from "./app/hooks.ts";

function App() {
  // const { isLogged } = useAppSelector((store) => store.user);

  return (
    <Provider store={store}>
      <CartProvider>
        <HashRouter>
          <Routes>
            {/* защищенные маршруты */}
            <Route path="/" element={<Layout />}>
              {navLinks.map((el) => {
                return <Route key={el.path} path={el.path} element={<ProtectedRoute outlet={el.element} />} />;
              })}
              {navHW.map((el) => {
                return <Route key={el.path} path={el.path} element={<ProtectedRoute outlet={el.element} />} />;
              })}
              {navLessons.map((el) => {
                return <Route key={el.path} path={el.path} element={<ProtectedRoute outlet={el.element} />} />;
              })}

              {/* незащищенный маршрут */}
              <Route path={"login"} element={<Login />} />
            </Route>
          </Routes>
        </HashRouter>
      </CartProvider>
    </Provider>
  );
}

export default App;
