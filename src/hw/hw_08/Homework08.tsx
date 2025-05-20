import { useEffect, useState, type JSX } from "react";
import MyButton from "../../components/myButton/MyButton";
import MyLoader from "../../components/myLoader/MyLoader";

export default function Homework08(): JSX.Element {
  useEffect(() => {
    document.title = "Homework 08: useEffect hook 🪝";
  }, []);

  const [fox, setFox] = useState<string>("#");
  const [loading, setLoading] = useState(false);

  const fetchFox = () => {
    setLoading(true);

    fetch("https://randomfox.ca/floof/")
      .then((res) => res.json())
      .then((data) => {
        setFox(data.image);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchFox();
  }, []);

  return (
    <div>
      <h2>
        Homework 08: <u>useEffect</u> hook 🪝
      </h2>

      <MyButton onClick={fetchFox} text="change picture" />
      <p></p>
      {loading ? <MyLoader /> : <img width="300" src={fox} alt="random fox" />}
    </div>
  );
}