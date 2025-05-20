import st from "./Lesson01.module.css";
import reactLogo from "../../assets/react.svg";

function Lesson01() {
  return (
    <div>
      <img className={st.logo} src="/vite.svg" alt="" />
      <img className={`${st.logo} ${st.react}`} src={reactLogo} alt="" />
      <h1>Hello, React!</h1>
    </div>
  );
}

export default Lesson01;
