import React, { useContext } from "react";
import LoginPage from "../loginPage/LoginPage";
import MainHomePage from "./MainHomePage";
import { AccountContext } from "../../Context/AccountProvider";
const MainAppEntry = () => {
  const { account } = useContext(AccountContext);
  //   console.log("🚀 ~ file: MainAppEntry.js:8 ~ MainAppEntry ~ loggedIn", loggedIn);
  return <div>{!account ? <LoginPage /> : <MainHomePage />}</div>;
};
export default MainAppEntry;
