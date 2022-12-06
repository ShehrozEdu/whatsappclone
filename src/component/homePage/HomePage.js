import React, { useContext, useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";
import jwt_decode from "jwt-decode";
import { setConversation } from "../../Axios/api";
import { AccountContext } from "../../Context/AccountProvider";

export default function HomePage() {
  const [data, setData] = useState([]);
  let [chatBox, setChatBox] = useState(false);
  const { account, setAccount } = useContext(AccountContext);

  const openChatBox = async (userList) => {
    setChatBox(true);
    setData(userList);
    await setConversation({ senderId: account.sub, receiverId: userList.sub });
  };

  return (
    <>
      <div className="d-flex overflow-hidden mainHomePage ">
        <div className="contact-list col-3">
          <ContactList openChatBox={openChatBox} account={account} />
        </div>
        <div className="border bg-light contact-list col-9">
          <ChatBox data={data} chatBox={chatBox} account={account} />
        </div>
      </div>
    </>
  );
}
