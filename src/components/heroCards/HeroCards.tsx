import type { IHero } from "../../hw/hw_05/types";
import st from "../../hw/hw_05/Homework05.module.css";

function HeroCards({ id, isDark, name, age, weapons, image }: IHero) {
  return (
    <div className={`${st.heroBox} ${isDark ? st.heroBoxDark : st.heroBoxLight}`}>
      <div className={st.heroBoxText}>
        <p>
          {name}, {age}, {isDark ? "👺" : "👼"}
        </p>
        <ul>
          {weapons.map((w, i) => (
            <li key={i}>{w}</li>
          ))}
        </ul>
      </div>
      <div className={st.heroImg}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default HeroCards;
