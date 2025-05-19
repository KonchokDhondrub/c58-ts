import type { JSX } from "react";
import st from "./MyCards.module.css";

interface IMyCards {
  text: string;
  image: string;
  alt?: number;
}

export default function MyCards({ text, image, alt }: IMyCards): JSX.Element {
  return (
    <div className={st.cardBox}>
      <div className={st.textBox}><span>{text}</span></div>
      
      <div className={st.imgBox}>
        <img src={image} alt={`cat-${alt}`} />
      </div>
    </div>
  );
}
