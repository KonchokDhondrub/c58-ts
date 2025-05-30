import HomePage from "./components/homePage/HomePage";
import ProductPage from "./components/productPage/ProductPage";
import StorePage from "./components/store/storePage/StorePage";
import Cart from "./components/store/cart/Cart";

import Homework01 from "./hw/hw_01/Homework01";
import Homework02 from "./hw/hw_02/Homework02";
import Homework03 from "./hw/hw_03/Homework03";
import Homework04 from "./hw/hw_04/Homework04";
import Homework05 from "./hw/hw_05/Homework05";
import Homework06 from "./hw/hw_06/Homework06";
import Homework08 from "./hw/hw_08/Homework08";
import Homework12 from "./hw/hw_12/Homework12";
import Homework13 from "./hw/hw_13/Homework13";

import Lesson01 from "./lessons/lesson_01/Lesson01";
import Lesson02 from "./lessons/lesson_02/Lesson02";
import Lesson03 from "./lessons/lesson_03/Lesson03";
import Lesson04 from "./lessons/lesson_04/Lesson04";
import Lesson05 from "./lessons/lesson_05/Lesson05";
import Lesson06 from "./lessons/lesson_06/Lesson06";
import Lesson07 from "./lessons/lesson_07/Lesson07";
import Lesson08 from "./lessons/lesson_08/Lesson08";
import Lesson09 from "./lessons/lesson_09/Lesson09";
import Lesson10 from "./lessons/lesson_10/Lesson10";
import Lesson12 from "./lessons/lesson_12/Lesson12";
import Lesson13 from "./lessons/lesson_13/Lesson13";
import Lesson14 from "./lessons/lesson_14/Lesson14";
import Lesson15 from "./lessons/lesson_15/Lesson15";
import Lesson17 from "./lessons/lesson_17/Lesson17";

const ExternalPage = ({ url }: { url: string }) => {
  return <iframe src={url} style={{ width: "100%", height: "100vh", border: "none" }} />;
};

// Main nav
export const navLinks = [
  { path: "/", title: "Home Page: Lessons & Homework", element: <HomePage /> },
  { path: "*", title: "404 Page not found", element: <h1>404 Page not found</h1> },
  { path: "old-lessons", title: "Old Lessons Page", element: <ExternalPage url="https://konchokdhondrub.github.io/frontend/" /> },
  { path: "lesson-14/:id", title: "", element: <ProductPage /> },
  { path: "lesson-15/:id", title: "", element: <StorePage /> },
  // { path: "lesson-15/cart", title: "Cart", element: <Cart /> },
];

// Homewok array
export const navHW = [
  { path: "homework-01", title: "1: Business card", element: <Homework01 /> },
  { path: "homework-02", title: "2: JSX, My Best Friends!", element: <Homework02 /> },
  { path: "homework-03", title: "3: props & LogIn form", element: <Homework03 /> },
  { path: "homework-04", title: "4: useState & Feedback form", element: <Homework04 /> },
  { path: "homework-05", title: "5: React map() 🧝🏻‍♂️", element: <Homework05 /> },
  { path: "homework-06", title: "6: TypeScript & Apollo 11 mission", element: <Homework06 /> },
  { path: "homework-08", title: "8: useEffect & Foxes!", element: <Homework08 /> },
  { path: "homework-12", title: "12: formik & Gender checker ", element: <Homework12 /> },
  { path: "homework-13", title: "13: Yup 🔐: LogIn & Register", element: <Homework13 /> },
  { path: "lesson-14", title: "14: Dynamic Routing 🛒", element: <Lesson14 /> },
  { path: "lesson-15", title: "17: Children Props 🙇‍♂️ 🛒", element: <Lesson15 /> },
];

// Lessons array
export const navLessons = [
  { path: `lesson-01`, title: "1: Hello, React!", element: <Lesson01 /> },
  { path: "lesson-02", title: "2: JSX components", element: <Lesson02 /> },
  { path: "lesson-03", title: "3: React props 👨‍👩‍👧‍👦", element: <Lesson03 /> },
  { path: "lesson-04", title: "4: useState hook 🪝", element: <Lesson04 /> },
  { path: "lesson-05", title: "5: React map() 🧝🏻‍♂️", element: <Lesson05 /> },
  { path: "lesson-06", title: "6: TypeScript pt1 💁‍♂️", element: <Lesson06 /> },
  { path: "lesson-07", title: "7: TypeScript pt2 💁", element: <Lesson07 /> },
  { path: "lesson-08", title: "8: useEffect hook 🪝", element: <Lesson08 /> },
  { path: "lesson-09", title: "9: CSS modules", element: <Lesson09 /> },
  { path: "lesson-10", title: "10: Fletch Cats! 🐈", element: <Lesson10 /> },
  { path: "lesson-12", title: "12: formik 💁‍♂️", element: <Lesson12 /> },
  { path: "lesson-13", title: "13: Yup 🔐", element: <Lesson13 /> },
  { path: "lesson-14", title: "14: Dynamic Routing 🛒", element: <Lesson14 /> },
  { path: "lesson-15", title: "15: Store 🛒", element: <Lesson15 /> },
  { path: "lesson-17", title: "17: Children Props 🙇‍♂️", element: <Lesson17 /> },
];
