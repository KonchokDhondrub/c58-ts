import type { JSX } from "react";
import st from "./MyLodader.module.css";
import cn from "classnames";

interface IMyLoader {
  text?: string;
  position?: "center";
  variant?: "default" | "2" | "3";
}

export default function MyLoader({ text, position = "center", variant = "3" }: IMyLoader): JSX.Element {
  return (
    <div
      className={cn({
        [st.positionCenter]: position === "center",
        [st.loader]: variant === "default",
        [st.loader2]: variant === "2",
        [st.loader3]: variant === "3",
      })}
    >
      {text}
    </div>
  );
}
