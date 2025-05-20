import SpaceMission from "../../components/spaceMission/SpaceMission";
import st from "./Homework06.module.css";

export default function Homework06() {
  return (
    <div className={st.spaceMissionContainer}>
      <div className={st.box}>
        <SpaceMission />
      </div>
    </div>
  );
}
