import ProfileCard from "../../components/profileCard/ProfileCard";
import personList from "./profiles.json";
import "./Homework02.css";

function Homework02() {
  return (
    <>
      <h1>My Best Friends!</h1>
      <div className="container">
        {personList.map((person) => (
          <div className="box" key={person.id}>
            {/* <ProfileCard {...person} />  */}
            <ProfileCard avatar={person.avatar} fname={person.fname} lname={person.lname} occupation={person.occupation} hobby={person.hobby} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Homework02;
