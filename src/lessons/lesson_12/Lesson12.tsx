import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./Lesson12.module.css";

interface IFormValues {
  firstname: string;
  lastname: string;
  email: string;
}

export default function Lesson12() {
  // * объект с настройками формы
  const formik = useFormik({
    // начальные значения для input
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
    } as IFormValues,
    // функция, которая сработает при отправке формы
    onSubmit: (values: IFormValues) => {
      console.log(values);
    },
  });

  return (
    <div className="lesson-container">
      <h1>Lesson 12: formik 💁‍♂️</h1>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} name="firstname" type="text" placeholder="firstname" value={formik.values.firstname} />
        <input onChange={formik.handleChange} name="lastname" type="text" placeholder="lastname" value={formik.values.lastname} />
        <input onChange={formik.handleChange} name="email" type="email" placeholder="email" value={formik.values.email} />
        <MyButton type="submit" text="Daten senden" />
      </form>

      <h2>Что нужно не забыть, чтобы форма заработала:</h2>
      <ul className={styles.ul}>
        <li>Установить formik через 'npm i formik'</li>
        <li>Создать типы под будущие значения input</li>
        <li>Создать объект formik с помощью функции useFormik с настройками</li>
        <li>В initialValues присвоили начальные значения формы</li>
        <li>В onSubmit описываем действие по отправке формы</li>
        <li>Для form добавили в onSubmit - formik.handleSubmit</li>
        <li>Для input добавили в onChange - formik.handleChange</li>
        <li>Для input в value добавили его значение из formik.values</li>
        <li>У input в поле name должно быть то же значение, что и у соответствующего ключа в initialValues ⚠️</li>
      </ul>
      {/* <label>Выберите пункт:</label>
      <select id="menu" name="menu">
        <option value="1">Пункт 1</option>
        <option value="2">Пункт 2</option>
        <option value="3">Пункт 3</option>
      </select> */}
    </div>
  );
}
