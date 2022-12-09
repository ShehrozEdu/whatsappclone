import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  let [activeUsers, setActiveUsers] = useState([]);
  let [account, setAccount] = useState();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("https://whatsappcloneserver.vercel.app/");
  }, []);
  return (
    <AccountContext.Provider
      value={{ socket, setActiveUsers, activeUsers, account, setAccount }}
    >
      {children}
    </AccountContext.Provider>
  );
};
//test
export default AccountProvider;
