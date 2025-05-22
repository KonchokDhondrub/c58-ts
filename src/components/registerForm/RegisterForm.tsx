import { registerSchema } from "../AuthForms.tsx";
import { useFormik } from "formik";

import MyButton from "../../components/myButton/MyButton";
import styles from "./RegisterForm.module.css";
import { useState } from "react";

interface IFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterForm() {
  const [registerData, setRegisterData] = useState<IFormData>();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    } as IFormData,
    validateOnChange: false,
    validationSchema: registerSchema,
    onSubmit: (values: IFormData) => {
      setRegisterData(values);
      console.log(values);
    },
  });

  return (
    <div className={styles.container}>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.username} name="username" onChange={formik.handleChange} type="text" placeholder="username" />
        <input value={formik.values.email} name="email" onChange={formik.handleChange} type="email" placeholder="email" />
        <input value={formik.values.password} name="password" onChange={formik.handleChange} type="password" placeholder="password" />
        <input value={formik.values.confirmPassword} name="confirmPassword" onChange={formik.handleChange} type="password" placeholder="password confirmation" />
        <MyButton type="submit" text="Register" />
      </form>
      <div className={styles.errorForm}>
        <span className={styles.errorMessage}>{formik.errors.username}</span>
        <span className={styles.errorMessage}>{formik.errors.email}</span>
        <span className={styles.errorMessage}>{formik.errors.password}</span>
        <span className={styles.errorMessage}>{formik.errors.confirmPassword}</span>
      </div>
      {registerData && 
      <div>
        <p></p>
        <p>Username: {registerData?.username}</p>
        <p>Email: {registerData?.email}</p>
        <p>Password: {registerData?.password ? registerData.password.slice(0, 1) + "*".repeat(Math.max(0, registerData.password.length - 2)) + registerData.password.slice(registerData.password.length - 1) : ""}</p>
      </div>}
    </div>
  );
}
