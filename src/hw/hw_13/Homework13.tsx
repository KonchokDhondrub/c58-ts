import LogInForm from "../../components/logInForm/LogInForm.tsx";
import RegisterForm from "../../components/registerForm/RegisterForm";
import styles from "./Homework13.module.css";

export default function Homework13() {
  return (
    <div className={styles.formContainer}>
      <div>
        <h1>LogIn</h1>
        <LogInForm />
      </div>
      <div>
        <br />
        <br />
        <br />
        <h1>or</h1>
      </div>
      <div>
        <h1>Register</h1> <RegisterForm />
      </div>
    </div>
  );
}
