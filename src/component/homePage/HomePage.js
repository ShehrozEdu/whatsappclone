import React, { useState } from "react";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";

export default function HomePage() {
  const [data, setData] = useState([]);
  let [chatBox, setChatBox] = useState(false);
  const openChatBox = (userList) => {
    setChatBox(true);
    setData(userList);
  };
  console.log(data);
  return (
    <>
      <div className="d-flex overflow-hidden mainHomePage ">
        <div className="contact-list col-3">
          <ContactList openChatBox={openChatBox} />
        </div>
        <div className="border bg-light contact-list col-9">
          <ChatBox data={data} chatBox={chatBox} />
        </div>
      </div>
    </>
  );
}
