import "./index.css";
import LoginPage from "./component/loginPage/LoginPage";
import MainHomePage from "./component/homePage/MainHomePage";
import AccountProvider from "./Context/AccountProvider";

function App() {
  const auth = sessionStorage.getItem("auth");
  return (
    <AccountProvider>
      <>
        <div>{!auth ? <LoginPage /> : <MainHomePage />}</div>
      </>
    </AccountProvider>
  );
}

export default App;
