import type { JSX } from "react";

interface IMyInputProps {
  name?: string;
  type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  placeholder?: string;
  label?: string;
  onChange?: any /* () => void */;
}

function MyInput({ name = "not defined", type = "text", placeholder = "write here", label = "no data", onChange = () => console.log("onChange") }: IMyInputProps): JSX.Element {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} placeholder={placeholder} onChange={onChange}></input>
    </>
  );
}

export default MyInput;
