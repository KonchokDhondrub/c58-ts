import { loginSchema } from "../AuthForms.tsx";
import { useFormik } from "formik";

import MyButton from "../../components/myButton/MyButton";
import styles from "./LogInForm.module.css";
import { useState } from "react";

interface IFormData {
  email: string;
  password: string;
}

export default function LogInForm() {
  const [loginData, setLoginData] = useState<IFormData>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    } as IFormData,
    validateOnChange: false,
    validationSchema: loginSchema,
    onSubmit: (values: IFormData) => {
      setLoginData(values);
      console.log(values);
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.email} name="email" onChange={formik.handleChange} type="email" placeholder="email" />
        <input value={formik.values.password} name="password" onChange={formik.handleChange} type="password" placeholder="password" />
        <MyButton type="submit" text="Login" isDisabled={loginData && true} />
      </form>
      <div className={styles.errorForm}>
        <span className={styles.errorMessage}>{formik.errors.email}</span>
        <span className={styles.errorMessage}>{formik.errors.password}</span>
      </div>
      {loginData && (
        <div className={styles.errorForm}>
          <p>Email: <b>{loginData?.email}</b></p>
          <p>Password: <b>{loginData?.password ? loginData.password.slice(0, 1) + "*".repeat(Math.max(0, loginData.password.length - 2)) + loginData.password.slice(loginData.password.length - 1) : ""}</b></p>
        </div>
      )}
    </div>
  );
}
