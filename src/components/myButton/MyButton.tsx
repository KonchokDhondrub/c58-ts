import type { JSX } from "react";
import style from "./MyButton.module.css";
import cn from "classnames";

interface IMyButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void /* () => void */;
  isDisabled?: boolean;
  variant?: "primary" | "danger" | "success" | "transparent";
  size?: "sm" | "md" | "lg";
  id?: string;
}

// onClick = () => console.log(`onClick: text: ${text}, type: ${type}, variant: ${variant}, size: ${size} disabled: ${isDisabled}`)

function MyButton({ id, type = "submit", text = "click me!", className, isDisabled = false, variant = "primary", size = "md", onClick }: IMyButtonProps): JSX.Element {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        type={type}
        className={
          typeof className === "string"
            ? className
            : cn(style.myButton, {
                [style.primary]: variant === "primary",
                [style.danger]: variant === "danger",
                [style.success]: variant === "success",
                [style.transparent]: variant === "transparent",
                [style.disabled]: isDisabled === true,
                [style.sm]: size === "sm",
                [style.md]: size === "md",
                [style.lg]: size === "lg",
              })
        }
      >
        <span className={style.span}>{text}</span>
      </button>
    </>
  );
}

export default MyButton;
