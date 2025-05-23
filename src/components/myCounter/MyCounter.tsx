import MyButton from "../../components/myButton/MyButton";
import styles from "./MyCounter.module.css";

interface Props {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export default function MyCounter({ count, setCount }: Props) {
  function handleChange(i: number) {
    setCount((p) => Math.max(p + i, 1));
  }

  return (
    <div className={styles.myCounterContainer}>
      {/* <MyButton text="-10" onClick={() => handleChange(-10)} /> */}
      <MyButton size="sm" text="-1" onClick={() => handleChange(-1)} />

      {/* <input className={styles.input} type="number" min="1" value={count} onChange={(e) => setCount(Number(e.target.value))}/> */}
      <b  className={styles.input}>{count}</b>

      <MyButton size="sm" text="+1" onClick={() => handleChange(1)} />
      {/* <MyButton text="+10" onClick={() => handleChange(10)} /> */}
    </div>
  );
}
