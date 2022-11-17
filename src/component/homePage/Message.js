import React from "react";
import { FormatDate } from "./../../utils/FormatDate";

const Message = ({ msg, user }) => {
  //   console.log(msg.createdAt);
  return (
    <>
      <div className="mx-5 col-8">
        {user.sub === msg.senderId ? (
          <section className="d-flex justify-content-end">
            <div className=" col-5 rounded-2 p-2 small my-1 shadow border chat-green ms-5">
              <div className=" chat-coming">{msg.text}</div>
              <div className="d-flex justify-content-end text-muted ps-5 mt-0 pt-0 time-fs">
                {FormatDate(msg.createdAt)}
              </div>
            </div>
          </section>
        ) : (
          <section className="d-flex">
            <div
              className={
                user.sub !== msg.senderId
                  ? " col-5 rounded-2 p-2 small my-1 shadow border bg-light"
                  : null
              }
            >
              <div className=" chat-coming">{msg.text}</div>
              <div className="d-flex justify-content-end text-muted ps-5 mt-0 pt-0 time-fs">
                {FormatDate(msg.createdAt)}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Message;
