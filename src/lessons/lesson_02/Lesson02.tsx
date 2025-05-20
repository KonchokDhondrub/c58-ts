import MyButton from "../../components/myButton/MyButton";

function Lesson02() {
  interface ILibrary {
    library: string;
    developer: string;
    logo: string;
  }

  // данные из переменной
  const text: string = "это строка из переменной text..";

  // объект 1
  const react: ILibrary = {
    library: "React",
    developer: "Meta",
    logo: "https://www.inexture.com/wp-content/uploads/2023/08/Top-10-React-Libraries.png",
  };

  // объект 2
  const angular: ILibrary = {
    library: "Angular",
    developer: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/2560px-Angular_Logo_SVG.svg.png",
  };

  // функция обработки объектов
  function showDeveloper(obj: ILibrary | string): string {
    if (typeof obj === "string") {
      return `Received a string: "${obj}"`;
    }

    return `Developer of ${obj.library} is ${obj.developer}`;
  }

  // переменная от значения которой зависит увидим мы данные или нет
  const isLoggedIn = true;

  return (
    <div>
      <h1>Lesson 2: JSX components 💁‍♂️</h1>
      <p>В JSX мы можем пользоваться динамическими данными, которы приходят к нам из тела функции компонента или других файлов</p>
      <p>Здесь будет строка: {text}</p>
      <p>Это вычисление случилось в JSX: {40 * 42} !!</p>
      {/* <p>{react.library} создан компанией {react.developer}!</p> */}
      <h3>{showDeveloper(angular)}</h3>
      <h2>{showDeveloper(react)}</h2>
      {/* тернарный оператор в React */}
      {isLoggedIn ? <img width={300} src={react.logo} alt="" /> : <h4>To see image you need to authorize!</h4>}
      <h3>{showDeveloper(text)}</h3>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default Lesson02;
