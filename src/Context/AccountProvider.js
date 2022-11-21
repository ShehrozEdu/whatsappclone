import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  let [activeUsers, setActiveUsers] = useState([]);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);
  return (
    <AccountContext.Provider value={{ socket, setActiveUsers, activeUsers }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
