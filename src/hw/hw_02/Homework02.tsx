import ProfileCard from "../../components/ProfileCard/ProfileCard.js";
import personList from "./profiles.json";
import "./Homework02.css";

function Homework02() {
  return (
    <>
      <h1>My Best Friends!</h1>
      <div className="container">
        {personList.map((person) => (
          <div className="box" key={person.id}>
            <ProfileCard {...person} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Homework02;
