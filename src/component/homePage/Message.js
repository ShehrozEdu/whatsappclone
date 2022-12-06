import React, { useEffect, useRef } from "react";
import { downloadMedia, FormatDate } from "./../../utils/FormatDate";

const Message = ({ msg, account, conversation, ref, message, setMessage }) => {
  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  return (
    <>
      {/* sender message */}
      <div className="mx-5">
        {account.sub === msg.senderId ? (
          <section className="d-flex justify-content-end ">
            {msg.type === "file" ? (
              <>
                {msg?.text?.includes(".pdf") ? (
                  <>
                    <div className="d-flex p-1 small my-1 chat-shadow chat-green rounded-2 chat-pdf-sec position-relative ">
                      {/*========== images ========= */}

                      <div className="d-flex justify-content-between align-items-center mb-3 pdf-bg p-3">
                        <div>
                          <img
                            src="/assets/pdf-image.png"
                            alt=""
                            className="pdf"
                          />
                        </div>
                        <div className="ms-2 small text-break">{msg.text}</div>
                        <i
                          className="position-absolute bottom-custom-download p-1 small fa-solid  fa-arrow-down  small text-muted"
                          onClick={(e) => downloadMedia(e, msg.text)}
                        ></i>
                      </div>
                      <div className="text-muted small pe-1 position-absolute end-0 bottom-0">
                        {FormatDate(msg.createdAt)}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-between test-mc-width rounded-2 p-1 small my-1 chat-shadow chat-green chat-img-sec position-relative">
                      <div className="position-relative">
                        <img
                          src={msg.text}
                          alt="loading"
                          className="chat-image"
                        />
                        <div className="text-light pe-1 position-absolute end-0 bottom-0">
                          {FormatDate(msg.createdAt)}
                        </div>
                        <i
                          className="position-absolute  bottom-custom-download p-1 small fa-solid  fa-arrow-down  small text-muted"
                          onClick={(e) => downloadMedia(e, msg.text)}
                        ></i>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="d-flex justify-content-between test-mc-width rounded-2 p-2 small my-1 chat-shadow chat-green ">
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
              <>
                {msg?.text?.includes(".pdf") ? (
                  <>
                    <div
                      className={
                        account.sub !== msg.senderId
                          ? " d-flex chat-pdf-sec rounded-2 position-relative p-2 small my-1 chat-shadow border bg-light"
                          : null
                      }
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3 pdf-bg p-3">
                        <div>
                          <img
                            src="/assets/pdf-image.png"
                            alt=""
                            className="pdf"
                          />
                        </div>
                        <div className="ms-2 small text-break">{msg.text}</div>
                        <i
                          className="position-absolute bottom-custom-download p-1 small fa-solid  fa-arrow-down  small text-muted"
                          onClick={(e) => downloadMedia(e, msg.text)}
                        ></i>
                      </div>
                      <div className="text-muted small pe-1 position-absolute end-0 bottom-0">
                        {FormatDate(msg.createdAt)}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex justify-content-between test-mc-width rounded-2 p-1 small my-1 chat-shadow bg-light chat-img-sec position-relative ">
                      <div className="position-relative">
                        <img
                          src={msg.text}
                          alt="loading"
                          className="chat-image"
                        />
                        <div className="text-white pe-1 position-absolute end-0 bottom-0">
                          {FormatDate(msg.createdAt)}
                        </div>
                        <i
                          className="position-absolute bottom-0 end-0 bottom-custom-download p-1 small fa-solid  fa-arrow-down  small text-muted"
                          onClick={(e) => downloadMedia(e, msg.text)}
                        ></i>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <div className="d-flex justify-content-between test-mc-width rounded-2 p-2 small my-1 chat-shadow bg-light me-5">
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
