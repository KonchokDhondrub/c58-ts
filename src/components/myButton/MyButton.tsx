import type { JSX } from "react";
import style from "./MyButton.module.css";
import cn from "classnames";

interface IMyButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: any /* () => void */;
  isDisabled?: boolean;
  variant?: "primary" | "danger" | "success";
  size?: "sm" | "md" | "lg";
}

function MyButton({ type = "button", text = "click me!", className, isDisabled = false, variant = "primary", size = "md", onClick = () => console.log(`onClick: text: ${text}, type: ${type}, variant: ${variant}, size: ${size} disabled: ${isDisabled}`) }: IMyButtonProps): JSX.Element {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={
          typeof className === "string"
            ? className
            : cn(style.myButton, {
                [style.primary]: variant === "primary",
                [style.danger]: variant === "danger",
                [style.success]: variant === "success",
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
