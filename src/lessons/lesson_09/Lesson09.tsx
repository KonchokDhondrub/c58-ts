import MyButton from "../../components/myButton/MyButton";
import styles from "./Lesson09.module.css";

export default function Lesson09() {
  console.log(styles);

  return (
    <div>
      <h1 className={styles.heading}>Lesson 09: CSS modules</h1>
      <p className={styles.info}>CSS modules - это технология, позволяющая работать с CSS свойствами изолированно и независимо</p>
      <div className={styles.buttonBox}>
        <MyButton text="primary" />
        <MyButton text="danger" variant="danger" size="sm" />
        <MyButton text="success" variant="success" size="sm" />
        <MyButton text="disabled" isDisabled={true} />
        <div className={styles.experimental}>
          <MyButton text="experimental" size="lg" />
        </div>
      </div>
      <p>Задачу добавления нескольких классов в CSS Modules можно решить несколькими способами:</p>
      <ul className={styles.ul}>
        <li>Конкатенация (сложение строк)</li>
        <li>Шаблонная строка (для не сложных случаев)</li>
        <li>Библиотека Classnames (предпочтительный)</li>
      </ul>
    </div>
  );
}
