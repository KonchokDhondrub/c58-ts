import { useFormik } from "formik";
import * as Yup from "yup";
import MyButton from "../../components/myButton/MyButton";
import styles from "./Lesson13.module.css";

interface IFormData {
  model: string;
  creator: string;
  email: string;
}

const schema = Yup.object().shape({
  //   model: Yup.number() // model
  //     .typeError("model is a number")
  //     .required("model is required")
  //     .integer("model is integer")
  //     .min(10, "model number is more than 10")
  //     .max(10000, ""),
  model: Yup.string() // model
    .required("model is required")
    .matches(/^T\d{4}$/, "Model must be in format T followed by 4 digits"),
  creator: Yup.string() // creator
    .required("creator is a required"),
  email: Yup.string() // email
    .required("email is required")
    .email("incorrect email format")
    .max(50, "less then 50 symbols"),
});

export default function Lesson13() {
  const formik = useFormik({
    initialValues: {
      model: "",
      creator: "",
      email: "",
    } as IFormData,
    validateOnChange: false,
    validationSchema: schema,
    onSubmit: (values: IFormData) => {
      console.log(values);
    },
  });

  return (
    <div className="lesson-container">
      <h1>Lesson 13: Yup 🔐</h1>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <input value={formik.values.model} name="model" onChange={formik.handleChange} type="text" placeholder="robot model" />
        <input value={formik.values.creator} name="creator" onChange={formik.handleChange} type="text" placeholder="creator name" />
        <input value={formik.values.email} name="email" onChange={formik.handleChange} type="text" placeholder="company email" />
        <MyButton type="submit" text="Daten senden" />
      </form>
      <span className={styles.errorMessage}>{formik.errors.model}</span>
      <span className={styles.errorMessage}>{formik.errors.creator}</span>
      <span className={styles.errorMessage}>{formik.errors.email}</span>
    </div>
  );
}
