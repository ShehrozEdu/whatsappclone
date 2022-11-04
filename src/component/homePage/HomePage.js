import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";
import jwt_decode from "jwt-decode";
import { setConversation } from "../../Axios/api";

export default function HomePage() {
  let [user, setUser] = useState("");
  const [data, setData] = useState([]);
  let [chatBox, setChatBox] = useState(false);
  const openChatBox = async (userList) => {
    setChatBox(true);
    setData(userList);
    await setConversation({ senderId: user.sub, receiverId: data.sub });
  };
  useEffect(() => {
    let userInfo = sessionStorage.getItem("auth");
    if (userInfo) {
      let decode = jwt_decode(userInfo);
      setUser(decode);
    }
  }, []);
  return (
    <>
      <div className="d-flex overflow-hidden mainHomePage ">
        <div className="contact-list col-3">
          <ContactList openChatBox={openChatBox} user={user} />
        </div>
        <div className="border bg-light contact-list col-9">
          <ChatBox data={data} chatBox={chatBox} />
        </div>
      </div>
    </>
  );
}
