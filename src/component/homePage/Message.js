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
            {msg.type === "file" ? (
              <div className="d-flex justify-content-between test-mc-width rounded-2 p-1 small my-1 chat-shadow chat-green chat-img-sec  ms-5">
                <div className="position-relative">
                  {msg?.text?.includes(".pdf") ? (
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-4 pdf-bg p-3">
                        <div>
                          <img
                            src="/assets/pdf-image.png"
                            alt=""
                            className="pdf"
                          />
                        </div>
                        <div className="ms-2 small text-break">{msg.text}</div>
                      </div>
                      <div className="text-muted small pe-1 position-absolute end-0 bottom-0">
                        {FormatDate(msg.createdAt)}
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={msg.text}
                        alt="loading"
                        className="chat-image"
                      />
                      <div className="text-light pe-1 position-absolute end-0 bottom-0">
                        {FormatDate(msg.createdAt)}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-between test-mc-width rounded-2 p-2 small my-1 chat-shadow chat-green me-5">
                <div className=" chat-coming">{msg.text}</div>
                <div className="d-flex col-1 justify-content-end align-self-end text-muted ps-5 mt-1 pt-0 time-fs">
                  {FormatDate(msg.createdAt)}
                </div>
              </div>
            )}
          </section>
        ) : (
          <section className="d-flex">
            {msg.type === "file" ? (
              <div
                className={
                  user.sub !== msg.senderId
                    ? " d-flex justify-content-between chat-img-sec test-mc-width rounded-2 p-2 small my-1 chat-shadow border bg-light"
                    : null
                }
              >
                <div className="position-relative">
                  {msg?.text?.includes(".pdf") ? (
                    <>
                      <div className="d-flex justify-content-between align-items-center mb-4 pdf-bg p-3">
                        <div>
                          <img
                            src="/assets/pdf-image.png"
                            alt=""
                            className="pdf"
                          />
                        </div>
                        <div className="ms-2 small text-break">{msg.text}</div>
                      </div>
                      <div className="text-muted small pe-1 position-absolute end-0 bottom-0">
                        {FormatDate(msg.createdAt)}
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={msg.text}
                        alt="loading"
                        className="chat-image"
                      />
                      <div className="text-light pe-1 position-absolute end-0 bottom-0">
                        {FormatDate(msg.createdAt)}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              <div className="d-flex justify-content-between test-mc-width rounded-2 p-2 small my-1 chat-shadow chat-green me-5">
                <div className=" chat-coming">{msg.text}</div>
                <div className="d-flex col-1 justify-content-end align-self-end text-muted ps-5 mt-1 pt-0 time-fs">
                  {FormatDate(msg.createdAt)}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default Message;
