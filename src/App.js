import "./index.css";
import LoginPage from "./component/loginPage/LoginPage";
import HomePage from "./component/homePage/HomePage";

function App() {
  const auth = sessionStorage.getItem("auth");
  return (
    <>
      <div>{!auth ? <LoginPage /> : <HomePage />}</div>
    </>
  );
}

export default App;
