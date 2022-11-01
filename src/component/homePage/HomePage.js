import React from "react";
import ChatBox from "./ChatBox";
import ContactList from "./ContactList";

export default function HomePage() {
  return (
    <>
      <div className="d-flex overflow-hidden mainHomePage ">
        <div className="contact-list col-3">
          <ContactList />
        </div>
        <div className="border bg-light contact-list col-9">
          <ChatBox />
        </div>
      </div>
    </>
  );
}
