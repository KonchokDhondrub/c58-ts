import type { JSX } from "react";
import st from "./MyLodader.module.css";
import cn from "classnames";

interface IMyLoader {
  text?: string;
  position?: "center";
}

export default function MyLoader({ text, position }: IMyLoader): JSX.Element {
  return (
    <div
      className={cn(st.loader, {
        [st.positionCenter]: position === "center",
      })}
    >
      {text}
    </div>
  );
}
