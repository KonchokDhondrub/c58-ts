import { useEffect, useState, type JSX } from "react";
import MyButton from "../../components/myButton/MyButton";
import "./Homework08.css";

export default function Lesson08(): JSX.Element {
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
      })
      .finally(() => {
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

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <MyButton onClick={fetchFox} text="change picture" />
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div className="grid-container">
          <img style={{ marginTop: "10px" }} width="250" src={fox} alt="random fox" />
        </div>
      )}
    </div>
  );
}

// // Old
//   const [toggle, setToggle] = useState(true);
//   const [fox, setFox] = useState<string>("#");

//   const handleToggle = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     const loader = document.querySelector(".loader");
//     const gridContainer = document.querySelector(".grid-container");

//     loader?.classList.remove("hide");
//     gridContainer?.classList.add("hide");

//     fetch("https://randomfox.ca/floof/")
//       .then((res) => res.json())
//       .then((data) => {
//         loader?.classList.add("hide");
//         gridContainer?.classList.remove("hide");
//         setToggle(true);
//         setFox(data.image);
//         console.log("fletch!");

//       });
//   }, [toggle]);

//   return (
//     <div>
//       <h2>
//         Homework 08: <u>useEffect</u> hook 🪝
//       </h2>

//       <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
//         <MyButton onClick={handleToggle} text="change picture" />
//       </div>
//       <div className="grid-container">{toggle && <img style={{ marginTop: "10px" }} width="300" src={fox} alt="random fox" />}</div>
//       <div className="loader"></div>
//     </div>
//   );
// }
