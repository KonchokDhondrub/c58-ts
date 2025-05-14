//! типизация объектов

import MyButton from "../../components/myButton/MyButton";

//! типизация через interface
// Конструктор объекта
interface ISuperHero {
  id: number;
  name: string;
  nickname: string;
  superpowers: string[];
  age?: number /* Ключ необязательности */;
}

// Расширение для ISuperHero
interface ISpaceHero extends ISuperHero {
  homePlanet: "Mars" | "Saturn" | "Crypton";
}

// Добавляет ключ к уже существующему
interface ISpaceHero {
  galactic?: string;
}

const hero1: ISuperHero = {
  id: 0,
  name: "Bruce Wayne",
  nickname: "Batman",
  superpowers: [],
};

const hero2: ISpaceHero = {
  homePlanet: "Crypton",
  id: 1,
  name: "Clark Kent",
  nickname: "Superman",
  superpowers: ["Super strength", "Flight", "Heat vision", "X-ray vision", "Invulnerability", "Super speed", "Super hearing", "Freeze breath"],
};

// Объединение
const superArray: ISuperHero[] = [
  hero1,
  hero2,
  {
    id: 2,
    name: "Tony Stark",
    nickname: "Iron Man",
    superpowers: ["Powered armor suit", "Genius-level intellect", "Advanced weaponry", "Flight", "Artificial intelligence integration"],
  },
];

//! Типизация через "type"

type User = {
  id: number;
  isAdmin: boolean;
  name: string;
};

// Расширение User-а
type UserProfile = User & {
  info: string;
};

const user1: UserProfile = {
  id: 0,
  isAdmin: true,
  name: "Nick Fury",
  info: "Head of the Shield organization",
};

//! Дженерики
// Элементы должны быть одного типа
function makeArray<T>(first: T, second: T): T[] {
  return [first, second];
}

// console.log(makeArray<number>(100, 1000));
// console.log(makeArray<boolean>(true, false));
// console.log(makeArray(hero1, hero2));

export default function Lesson07() {
  return (
    <div>
      <h1>Lesson 07: TypeScript pt2 💁</h1>
      <p>Самое интересное на этом уроке происходит в теле функции и в командной строке</p>
      <MyButton />
    </div>
  );
}
