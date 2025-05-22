import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./Homework.module.css";
import { useEffect, useState } from "react";

interface IFormValues {
  firstname: string;
}

interface IGenderResponse {
  name: string;
  gender: string;
  probability: number;
  count: number;
  error?: string;
}

export default function Homework12() {
  useEffect(() => {
    document.title = "Homework12: formik 💁‍♂️";
  });

  const [genderData, setGenderData] = useState<IGenderResponse>();

  async function getCharacters(name: string) {
    if (!name) return;

    try {
      const res = await fetch(`https://api.genderize.io/?name=${name}`);
      const data: IGenderResponse = await res.json();
      setGenderData(data);
      //
    } catch (error) {
      console.error(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      firstname: "",
    } as IFormValues,

    onSubmit: async (values: IFormValues) => {
      await getCharacters(values.firstname);
    },
  });

  function getIconGender(gender: string) {
    return gender === "male" ? "👨" : gender === "female" ? "👩" : "❓";
  }

  return (
    <div className="lesson-container">
      <h1>Homework12: formik 💁‍♂️</h1>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} name="firstname" type="text" placeholder="type name" value={formik.values.firstname} />
        <MyButton type="submit" text="Daten senden" />
      </form>

      {genderData && (
        <div>
          <p></p>
          <p>
            Name: <b>{genderData.name[0].toUpperCase() + genderData.name.slice(1).toLowerCase()}</b>
          </p>
          <p>
            Gender:{" "}
            <b>
              {genderData.gender} {getIconGender(genderData.gender)}
            </b>
          </p>
          <p>
            Probability: <b>{Math.round(genderData.probability * 100)}%</b>
          </p>
        </div>
      )}
    </div>
  );
}
