import { useEffect, useState, type JSX } from "react";
import MyButton from "../../components/myButton/MyButton";
import Feedback from "../../components/feedback/Feedback";

export default function Lesson08(): JSX.Element {
  useEffect(() => {
    document.title = "Lesson 08: useEffect hook 🪝";
  }, []);

  // counter
  const [value, setValue] = useState(42);
  const handleIncrease = () => setValue((p) => p + 1);

  // dog
  const [dog, setDog] = useState<string>("#");
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));
  }, [value]);

  // toggle
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <h1>
        Lesson 08: <u>useEffect</u> hook 🪝
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <MyButton onClick={handleIncrease} text="Increase value & change dog pic" />
        <h2>{value}</h2>
      </div>
      <img style={{ marginTop: "10px" }} width="200" src={dog} alt="" />
      <h2>Практика работы с useEffect в нутри жизненого цикла ⬇️</h2>
      <div>
        <MyButton text={`${toggle ? "hide" : "show"} feedback`} onClick={handleToggle} />
        {toggle && <Feedback />}
      </div>
    </div>
  );
}
