import { useFormik } from "formik";
import { useEffect, type JSX } from "react";
import * as Yup from "yup";

import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

import styles from "./Login.module.css";
import { useAppDispatch } from "../../app/hooks";
import { loginAction } from "../../features/auth/authAction";

//
export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
});

export default function Login(): JSX.Element {
  // готовим dispatch для передачи action в redux
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      username: "oliviaw",
      password: "oliviawpass",
    } as { username: string; password: string },
    validateOnChange: false,
    // добавляем валидацию в форму
    validationSchema: loginSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(loginAction(values));
      resetForm();
    },
  });

  return (
    <div>
      {/* <h2>Login 🔐</h2> */}
      <form onSubmit={formik.handleSubmit} className={styles.formStyle}>
        <div>
          <div className={styles.inputForm}>
            <MyInput name={"username"} label={"Type your username 🙋‍♀️"} type={"text"} formik={formik} />
          </div>
          <div className={styles.inputForm}>
            <MyInput name={"password"} label={"Type your password 🔐"} type={"password"} formik={formik} />{" "}
          </div>

          <MyButton text="login" type="submit" />
        </div>
      </form>
    </div>
  );
}
