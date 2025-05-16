import type { JSX } from "react";
import st from "./MyLodader.module.css";

export default function MyLoader(): JSX.Element {
  return <div className={st.loader}></div>;
}
