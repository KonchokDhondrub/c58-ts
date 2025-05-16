import { useEffect, useState, type JSX } from "react";
import MyButton from "../myButton/MyButton";
import st from "./Feedback.module.css";

function Feedback(): JSX.Element {
  let [countLike, setCountLike] = useState<number>(0);
  let [countDislike, setCountDislike] = useState<number>(0);

  function resetAll(): void {
    setCountLike(0);
    setCountDislike(0);
  }

  useEffect(() => {
    // console.log("hello Feedback");
  }, [countLike, countDislike]);

  return (
    <>
      <h2>Feedback</h2>
      <div className={st.feedbackFormContainer}>
        <div className={st.btnBox}>
          <div className={st.btnCountBox}>
            <MyButton onClick={() => setCountLike((p) => p + 1)} text="👍" className={st.button} />
            <span>{countLike}</span>
          </div>
          <div className={st.btnCountBox}>
            <MyButton onClick={() => setCountDislike((p) => p + 1)} text="👎" className={st.button} />
            <span>{countDislike}</span>
          </div>
          <MyButton onClick={resetAll} text="❌" className={`${st.button} ${st.buttonRed}`} />
        </div>
      </div>
    </>
  );
}

export default Feedback;
