import React from "react";

const Message = ({ msg }) => {
  return (
    <>
      <div>{msg.text}</div>
      <div>{msg.createdAt}</div>
    </>
  );
};

export default Message;
