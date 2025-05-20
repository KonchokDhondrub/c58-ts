import { useEffect, useState } from "react";
import HeroCards from "../../components/heroCards/HeroCards.tsx";
import { fellowship } from "./fellowship.ts";
import MyButton from "../../components/myButton/MyButton";
import type { IHero } from "./types.ts";
import st from "./Homework05.module.css";

function Homework05() {
  const [heroes, setHeroes] = useState<IHero[]>(fellowship);
  console.log(heroes);

  useEffect(() => {
    document.title = "React map() 🧝🏻‍♂️ – Homework 5";
  }, []);

  const handleDelete = (id: number) => {
    setHeroes((prev) => prev.filter((h) => h.id !== id));
    /*  Обновляем список, исключая элемент с указанным id */
  };

  return (
    <div>
      <h1>Lesson 05: React map() 🧝🏻‍♂️</h1>
      <div className={st.heroContainer}>
        {heroes.map((hero) => (
          <div key={hero.id} className={st.key}>
            <HeroCards {...hero} />
            <MyButton onClick={() => handleDelete(hero.id)} text="delete" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homework05;
