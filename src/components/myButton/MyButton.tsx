import type { JSX } from "react";
import "./MyButton.css";

interface IMyButtonProps {
  text?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void /* () => void */;
}

function MyButton({ type = "button", text = "click me!", onClick = () => console.log("Click!"), className = "my-btn-def" }: IMyButtonProps): JSX.Element {
  return (
    <button onClick={onClick} type={type} className={className}>
      <span className="btn-text">{text}</span>
    </button>
  );
}

export default MyButton;
