import type { JSX } from "react";
import type { FormikProps } from "formik";

import styles from "./MuInput.module.css";

interface IMyInputProps {
  name: string;
  type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
  placeholder?: string;
  label?: string;
  onChange?: () => void;
  formik: FormikProps<any>;
}

export default function MyInput({ formik, name, type = "text", placeholder, label, onChange }: IMyInputProps): JSX.Element {
  return (
    <>
      <div>
        <label>{label}</label>
      </div>
      <input value={formik.values[name]} type={type} name={name} placeholder={placeholder} onChange={formik.handleChange}></input>
    </>
  );
}
