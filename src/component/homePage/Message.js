import React from "react";
import { FormatDate } from "./../../utils/FormatDate";

const Message = ({ msg, user }) => {
  //   console.log(msg.createdAt);
  return (
    <>
      {user.sub === msg.senderId ? (
        <section className="d-flex justify-content-start">
          <div className=" col-5 p-1 my-2 shadow border chat-green ms-5 d-flex flex-column ">
            <div className=" chat-coming">{msg.text}</div>
            <div className="d-flex justify-content-end text-muted ps-5 mt-0 pt-0 time-fs">
              {FormatDate(msg.createdAt)}
            </div>
          </div>
        </section>
      ) : (
        <section className="d-flex justify-content-end me-5">
          <div className=" col-5 p-1 my-2 shadow border chat-green  d-flex flex-column ">
            <div className=" chat-coming">{msg.text}</div>
            <div className="d-flex justify-content-end text-muted ps-5 mt-0 pt-0 time-fs">
              {FormatDate(msg.createdAt)}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Message;
