import st from "./Homework01.module.css";

function Homework01() {
  return (
    <div className={st.container}>
      <div className={`${st.boxTop}  ${st.top}`}>
        <div>
          <h1 className={st.name}>
            Aleksandr <br />
            Melnik
          </h1>

          <p className={st.description}>Начинающий Full Stack Pro разработчик</p>
        </div>
        <img className={st.photo} src="https://thumbs.dreamstime.com/b/portrait-young-handsome-happy-man-wearing-glasses-casual-smart-blue-clothing-yellow-color-background-square-composition-200740125.jpg" alt="" />
      </div>

      <div className={st.box}>
        <h3>О себе</h3>
        <p>
          Привет! Я изучаю програмирование.
          <br />
          Мне это очнень нравиться, я хочу стать Pro - разработчиком.
          <br />А ещё, это не моё настоящее фото.
        </p>
        <h3>Навыки</h3>
        <ul>
          <li>Java</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Git</li>
          <li>Postgres</li>
          <li>MongoDB</li>
          <li>JSon</li>
        </ul>
        <h3>Портфолио</h3>
        <p className={st.portfolioText}>Я практикую и классно создаю учебные работы, постоянно развивая свои навыки и стремясь к высоким результатам.</p>
        <h3>Контакты</h3>
        <p>
          <a href="https://konchokdhondrub.github.io/frontend/" target="_blank">
            GitHub
          </a>
          &nbsp; | &nbsp;
          <a href="mailto:me@me.me">me@me.me</a>
        </p>
      </div>
    </div>
  );
}

export default Homework01;
