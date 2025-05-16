interface IProfileCardProps {
  avatar: string;
  fname: string;
  lname: string;
  occupation: string;
  hobby: string[];
}

function ProfileCard({ avatar, fname, lname, occupation, hobby }: IProfileCardProps) {
  return (
    <>
      {fname && lname ? (
        <>
          <img src={avatar} alt={fname + " " + lname} />
          <p>
            Full name:
            <span>
              {fname} {lname}
            </span>
          </p>
          <p>
            Occupation: <span>{occupation}</span>
          </p>
          <p>
            Hobby: <span>{hobby.join(", ")}</span>
          </p>
        </>
      ) : (
        <p>Not valid profile 😵</p>
      )}
    </>
  );
}

export default ProfileCard;
