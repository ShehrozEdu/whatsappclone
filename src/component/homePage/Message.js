import React from "react";
import { FormatDate } from "./../../utils/FormatDate";

const Message = ({ msg, user }) => {
  console.log(msg);
  return (
    <>
      {/* sender message */}
      <div className="mx-5 col-8">
        {user.sub === msg.senderId ? (
          <section className="d-flex justify-content-end ">
            <div className="  d-flex justify-content-between test-mc-width rounded-2 p-2 small my-1 chat-shadow chat-green ms-5">
              {msg.type === "file" ? (
                <div>
                  {msg?.text?.includes(".pdf") ? (
                    <div></div>
                  ) : (
                    <img src={msg.text} alt="loading" className="chat-image" />
                  )}
                </div>
              ) : (
                <>
                  <div className=" chat-coming">{msg.text}</div>
                  <div className="d-flex col-1 justify-content-end align-self-end text-muted ps-5 mt-1 pt-0 time-fs">
                    {FormatDate(msg.createdAt)}
                  </div>
                </>
              )}
            </div>
          </section>
        ) : (
          <section className="d-flex">
            <div
              className={
                user.sub !== msg.senderId
                  ? " d-flex justify-content-between test-mc-width rounded-2 p-2 small my-1 chat-shadow border bg-light"
                  : null
              }
            >
              <div className=" chat-coming">{msg.text}</div>
              <div className="d-flex align-self-end justify-content-end text-muted ps-5 mt-0 pt-0 time-fs">
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
