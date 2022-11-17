import React from "react";
import { FormatDate } from "./../../utils/FormatDate";

const Message = ({ msg }) => {
  console.log(msg.createdAt);
  return (
    <>
      <section className="ms-5">
        <div className=" bg-light col-5 p-1 my-1 shadow border">
          <div className=" chat-coming">{msg.text}</div>
          <div className="d-flex justify-content-end text-muted ps-5 mt-0 pt-0 time-fs">
            {FormatDate(msg.createdAt)}
          </div>
        </div>
      </section>
    </>
  );
};

export default Message;
