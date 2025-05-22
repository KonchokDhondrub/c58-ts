import LoginForm from "../../components/loginForm/LoginForm.tsx";
import RegisterForm from "../../components/registerForm/RegisterForm";
import styles from "./Homework13.module.css";

export default function Homework13() {
  return (
    <div className={styles.formContainer}>
      <div>
        <h1>Login</h1>
        <LoginForm />
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
