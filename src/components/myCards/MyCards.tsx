import type { JSX } from "react";
import st from "./MyCards.module.css";

interface IMyCards {
  text: string;
  image: string;
  alt?: string | number;
  id?: number;
}

export default function MyCards({ text, image, id, alt }: IMyCards): JSX.Element {
  return (
    <div className={st.cardBox} id={String(id)}>
      <div className={st.textBox}>{text}</div>

      <div className={st.imgBox}>
        <img src={image} alt={String(id)} />
      </div>
    </div>
  );
}
