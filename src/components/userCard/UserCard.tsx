import { useEffect, type JSX } from "react";
import "./UserCard.css";

interface IUserCard {
  name: string;
  age: number | string;
  hobby?: string;
}

function UserCard({ name = "name not defined", age = 404, hobby }: IUserCard): JSX.Element {
  return (
    <div className="user-card">
      <h4>Name: {name}</h4>
      <p>Age: {age}</p>
      {hobby ? <p>Hobby: {hobby}</p> : <p>no hobby</p>}
    </div>
  );
}

export default UserCard;
