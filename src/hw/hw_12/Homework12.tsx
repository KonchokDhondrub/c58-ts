import { useFormik } from "formik";
import MyButton from "../../components/myButton/MyButton";
import styles from "./Homework.module.css";
import { useState } from "react";

interface IFormValues {
  firstname: string;
}

interface IGenderResponse {
  name: string;
  gender: "male" | "female" | null;
  probability: number;
  count: number;
  error?: string;
}

export default function Homework12() {
  const [genderData, setGenderData] = useState<IGenderResponse | null>(null);
  // let requestCount = 0;
  // const maxRequests = 10;

  const formik = useFormik({
    initialValues: {
      firstname: "",
    } as IFormValues,

    onSubmit: async (values: IFormValues) => {
      await getCharacters(values.firstname);
    },
  });

  async function getCharacters(name: string) {
    // if (requestCount >= maxRequests) {
    //   alert("Достигнут лимит запросов!");
    //   return;
    // }
    if (!name) return;

    // requestCount++;

    try {
      const res = await fetch(`https://api.genderize.io/?name=${name}`);
      const data: IGenderResponse = await res.json();

      if (data.error) {
        console.error(data.error);
        alert("Data Error!");
        return;
      }

      setGenderData(data);
    } catch (error) {
      console.error(error);
      alert("Network Error!");
    }
  }

  function getIconGender(gender: string | null) {
    return gender === "male" ? "👨" : gender === "female" ? "👩" : "❓";
  }

  return (
    <div className="lesson-container">
      <h1>Homework12: formik 💁‍♂️</h1>

      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input onChange={formik.handleChange} name="firstname" type="text" placeholder="firstname" value={formik.values.firstname} />
        <MyButton type="submit" text="Daten senden" />
      </form>

      {genderData && (
        <div>
          <p></p>
          <p>
            Name: <b>{genderData.name}</b>
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
