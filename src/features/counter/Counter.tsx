// import styles from './Counter.module.css'
import type { JSX } from "react";
import { useDispatch, useSelector } from "react-redux";

import MyButton from "../../components/myButton/MyButton";
import type { RootStateCounter } from "../../app/store";

export default function Counter(): JSX.Element {
  const dispatch = useDispatch();

  function handlePlus(): void {
    // Dispatch мы вызываем когда хотим изменить централизованное состояние
    dispatch({
      type: "counter/plus",
      payload: 1,
    });
  }
  function handleMinus(): void {
    dispatch({
      type: "counter/minus",
      payload: 1,
    });
  }

  function handleReset(): void {
    dispatch({
      type: "counter/reset",
    });
  }

  // useSelector - функция для получения значения централизованного состояния
  const counter = useSelector((state: RootStateCounter) => state.counterReducer.value);

  return (
    <div>
      <h2>Counter</h2>
      <MyButton type="button" onClick={handleMinus} text="-" />
      {counter}
      <MyButton type="button" onClick={handlePlus} text="+" />
      <MyButton type="button" onClick={handleReset} text="reset" />
    </div>
  );
}
