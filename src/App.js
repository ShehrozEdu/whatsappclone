import "./index.css";
import LoginPage from "./component/loginPage/LoginPage";
import HomePage from "./component/homePage/HomePage";
import MainHomePage from "./component/homePage/MainHomePage";

function App() {
  const auth = sessionStorage.getItem("auth");
  return (
    <>
      <div>{!auth ? <LoginPage /> : <MainHomePage />}</div>
    </>
  );
}

export default App;
