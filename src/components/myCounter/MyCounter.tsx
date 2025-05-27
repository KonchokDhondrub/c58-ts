import MyButton from "../../components/myButton/MyButton";
import styles from "./MyCounter.module.css";

interface Props {
  count: number;
  setCount: (value: number) => void;
  variant?: "transparent" | "danger" | "primary" | "success";
  size?: "sm" | "md" | "lg";
}

export default function MyCounter({ count, setCount, variant = "primary", size = "sm" }: Props) {
  function handleChange(i: number) {
    setCount(count + i);
  }

  return (
    <div className={styles.myCounterContainer}>
      {/* <MyButton variant={variant} size={size} text="-10" onClick={() => handleChange(-10)} /> */}
      <MyButton variant={variant} size={size} text="-1" onClick={() => handleChange(-1)} />

      {/* <input className={styles.input} type="number" min="1" value={count} onChange={(e) => setCount(Number(e.target.value))}/> */}
      <b className={styles.input}>{count}</b>

      <MyButton variant={variant} size={size} text="+1" onClick={() => handleChange(1)} />
      {/* <MyButton variant={variant} size={size} text="+10" onClick={() => handleChange(10)} /> */}
    </div>
  );
}
