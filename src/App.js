import "./index.css";
import MainAppEntry from "./component/homePage/MainAppEntry";
import AccountProvider from "./Context/AccountProvider";

function App() {
  return (
    <AccountProvider>
      <>
        <div>
          <MainAppEntry />
        </div>
      </>
    </AccountProvider>
  );
}

export default App;
