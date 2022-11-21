import { createContext, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);
  return (
    <AccountContext.Provider value={{ socket }}>
      {children}
    </AccountContext.Provider>
  );
};

export default AccountProvider;
