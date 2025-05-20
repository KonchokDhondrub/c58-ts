import type { JSX } from "react";
import { fellowship } from "./fellowship";
import st from "./lesson05.module.css";

function Lesson05(): JSX.Element {
  // console.log(fellowship);

  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      <div className={st.heroContainer}>
        {fellowship.map((hero) => (
          <div
            key={hero.id}
            className={`${st.heroBox} 
          ${hero.isDark ? st.heroBoxDark : st.heroBoxLight}`}
          >
            <div className={st.heroBoxText}>
              <p>
                {hero.name}, {hero.age}, {hero.isDark ? "👺" : "👼"}
              </p>
              <p>
                {hero.weapons.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </p>
            </div>
            <div className={st.heroImg}>
              <img src={hero.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lesson05;
