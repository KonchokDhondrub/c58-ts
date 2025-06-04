import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState, type JSX } from "react";
import * as Yup from "yup";

import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAction } from "../../features/auth/authAction";

import styles from "./Login.module.css";

// loginSchema
export const loginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().min(8, "Password must be at least 8 characters long").required("Password is required"),
});

// Login
export default function Login(): JSX.Element {
  const { error, user } = useAppSelector((store) => store.user);

  // готовим dispatch для передачи action в redux
  const dispatch = useAppDispatch();

  //! хук для перемещения между маршрутами
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "oliviaw",
      password: "oliviawpass",
    } as { username: string; password: string },
    validateOnChange: false,
    // добавляем валидацию в форму
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      //! отправляем данные в redux и проверяем полученные данные
      const user = await dispatch(loginAction(values)).unwrap();

      //! если данные пришли перемещаемся на главную страницу
      if (user) {
        navigate("/");
      }
      resetForm();
    },
  });

  if (user.id) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Login 🔐</h2>
      <form onSubmit={formik.handleSubmit} className={styles.formStyle}>
        <div>
          <div className={styles.inputForm}>
            <MyInput name={"username"} label={"Type your username 🙋‍♀️"} type={"text"} formik={formik} />
          </div>
          <div className={styles.inputForm}>
            <MyInput name={"password"} label={"Type your password 🔐"} type={"password"} formik={formik} />{" "}
          </div>

          <MyButton text="sign in" type="submit" />
        </div>
      </form>
      {error && <span style={{ color: "red" }}>{error === "Request failed with status code 400" ? "Mistake in username or pass 🤖" : error === "Request failed with status code 404" ? "Request not found 404" : ""}</span>}
    </div>
  );
}
