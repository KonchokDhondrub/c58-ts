import { useEffect, useState, type JSX } from "react";
import MyButton from "../myButton/MyButton";
import "./Feedback.css";

function Feedback(): JSX.Element {
  let [countLike, setCountLike] = useState<number>(0);
  let [countDislike, setCountDislike] = useState<number>(0);

  function resetAll(): void {
    setCountLike(0);
    setCountDislike(0);
  }

  useEffect(() => {
    console.log("hello Feedback");
  }, [countLike, countDislike]);

  return (
    <>
      <h2>Feedback</h2>
      <div className="feedback-form-container">
        <div className="button-box">
          <div className="button-count-box">
            <MyButton onClick={() => setCountLike((p) => p + 1)} text="👍" className="button" />
            <span>{countLike}</span>
          </div>
          <div className="button-count-box">
            <MyButton onClick={() => setCountDislike((p) => p + 1)} text="👎" className="button" />
            <span>{countDislike}</span>
          </div>
          <MyButton onClick={resetAll} text="❌" className="button button-red" />
        </div>
      </div>
    </>
  );
}

export default Feedback;
