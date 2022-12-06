import React, { useContext, useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getUser } from "../../Axios/api";
import { AccountContext } from "../../Context/AccountProvider";
export default function ContactList({ openChatBox, account }) {
  let [list, setList] = useState([]);
  let [text, setText] = useState("");
  const { activeUsers, setActiveUsers, socket } = useContext(AccountContext);

  let search = (event) => {
    let searchData = event.target.value;
    setText(searchData);
  };

  let removeUser = () => {
    sessionStorage.removeItem("auth");
    window.location.reload();
  };

  const getList = async () => {
    let response = await getUser();
    let filterData = response.filter((response) =>
      response.name.toLowerCase().includes(text.toLowerCase())
    );
    setList(filterData);
  };

  useEffect(() => {
    getList();
  }, [text]);

  useEffect(() => {
    socket.current?.emit("addUser", account);
    socket.current?.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);
  return (
    <>
      <div className="p-2 border bg-light">
        <div className="d-flex justify-content-between ">
          <div>
            <img
              src={account.picture}
              alt=""
              className="dp cursor-pointer "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              referrerPolicy="no-referrer"
            />
          </div>

          <div
            className="offcanvas offcanvas-start bg-light"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel"
          >
            <div className="py-5 pb-3 theme-green-dark text-white d-flex align-items-center">
              <div
                type="button"
                data-bs-dismiss="offcanvas"
                className="ms-4"
                aria-label="Close"
              >
                <i
                  className="fa fa-arrow-left fs-5 mt-1"
                  aria-hidden="true"
                ></i>
              </div>
              <div className="text-white ms-4 fs-5 fw-bold">Profile</div>
            </div>

            <div className="bg-light  py-3 d-flex justify-content-center">
              <div>
                <img
                  src={account.picture}
                  alt=""
                  className="profile-pic image-fluid"
                />
              </div>
            </div>
            <Scrollbars>
              <div className="bg-white p-2 shadow">
                <p className="text-success small  ms-3">Your Name</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className=" ms-3">{account.name}</p>
                  <i className="fa-solid fa-pen me-2 text-muted"></i>
                </div>
              </div>

              <div className="d-flex p-2 justify-content-center">
                <p className=" text-muted small mt-3 mx-1">
                  This is not your username or pin. This name will be visible to
                  your WhatsApp contacts.
                </p>
              </div>

              <div className="bg-white p-2 shadow">
                <p className="text-success small  ms-3">About</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className=" ms-3">Status....</p>
                  <i className="fa-solid fa-pen me-2 text-muted"></i>
                </div>
              </div>
            </Scrollbars>
          </div>
          <div className="d-flex justify-content-evenly w-50 align-items-center">
            <div className="pb-1">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                preserveAspectRatio="xMidYMid meet"
                className="cursor-pointer"
                version="1.1"
                id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
                x="0px"
                y="0px"
                enableBackground="new 0 0 24 24"
                // xml:space="preserve"
              >
                <path
                  fill="gray"
                  d="M12.072,1.761c-3.941-0.104-7.579,2.105-9.303,5.65c-0.236,0.486-0.034,1.07,0.452,1.305 c0.484,0.235,1.067,0.034,1.304-0.45c1.39-2.857,4.321-4.637,7.496-4.553c0.539,0.02,0.992-0.4,1.013-0.939s-0.4-0.992-0.939-1.013 C12.087,1.762,12.079,1.762,12.072,1.761z M1.926,13.64c0.718,3.876,3.635,6.975,7.461,7.925c0.523,0.13,1.053-0.189,1.183-0.712 c0.13-0.523-0.189-1.053-0.712-1.183c-3.083-0.765-5.434-3.262-6.012-6.386c-0.098-0.53-0.608-0.88-1.138-0.782 C2.178,12.6,1.828,13.11,1.926,13.64z M15.655,21.094c3.642-1.508,6.067-5.006,6.201-8.946c0.022-0.539-0.396-0.994-0.935-1.016 c-0.539-0.022-0.994,0.396-1.016,0.935c0,0.005,0,0.009,0,0.014c-0.107,3.175-2.061,5.994-4.997,7.209 c-0.501,0.201-0.743,0.769-0.543,1.27c0.201,0.501,0.769,0.743,1.27,0.543C15.642,21.1,15.648,21.097,15.655,21.094z"
                ></path>
                <path
                  fill="#009588"
                  d="M19,1.5c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S17.343,1.5,19,1.5z"
                ></path>
              </svg>
            </div>
            <div>
              <i className="fa-regular cursor-pointer text-muted fs-5 fa-message"></i>
            </div>
            <div>
              <abbr
                title="Menu"
                className="text-decoration-none"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div className="px-3 rounded-circle border-0 btn btn-outline-secondary">
                  <i className="fa-solid  fs-5 cursor-pointer  fa-ellipsis-vertical"></i>
                </div>
              </abbr>
              <ul className="dropdown-menu shadow">
                <li
                  className="dropdown-item cursor-pointer"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasScrolling1"
                  aria-controls="offcanvasScrolling"
                >
                  Settings
                </li>

                {/* -0-------------------------------------------------
                ----Settings Drawer 
                ---------------------------------------------*/}

                <li
                  className="dropdown-item cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target="#logout"
                >
                  Logout
                </li>
              </ul>
              <div
                className="modal fade modal-white-bg"
                id="logout"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content shadow border-0">
                    <div className="p-3">
                      <h1
                        className="modal-title fs-5 text-secondary"
                        id="exampleModalLabel"
                      >
                        Log out?
                      </h1>
                    </div>
                    <div className="modal-body text-muted small">
                      Are you sure you want to log out?
                    </div>
                    <div className="d-flex justify-content-end p-4">
                      <button
                        type="button"
                        className="border text-success bg-transparent btn shadow-hover me-4 px-4"
                        data-bs-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-success shadow-hover px-4"
                        // onClick={removeUser}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-start bg-light"
                data-bs-scroll="true"
                data-bs-backdrop="false"
                tabIndex="-1"
                id="offcanvasScrolling1"
                aria-labelledby="offcanvasScrollingLabel"
              >
                <div className="py-5  pb-3 theme-green-dark  settings-header-width text-white d-flex align-items-center">
                  <div
                    type="button"
                    data-bs-dismiss="offcanvas"
                    className="ms-4"
                    aria-label="Close"
                  >
                    <i
                      className="fa fa-arrow-left fs-5 mt-1"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <div className="text-white ms-4 fs-5 fw-bold">Settings</div>
                </div>
                <Scrollbars>
                  <div className="bg-light mt-5">
                    <div>
                      <div className="py-0 p-4 d-flex align-items-center ">
                        <div className="">
                          <img
                            src={account.picture}
                            alt=""
                            className="profile-pic-settings "
                          />
                        </div>
                        <div className=" d-flex ms-3 mt-2  flex-column">
                          <p className="m-0" style={{ fontWeight: "500" }}>
                            {account.name}
                          </p>
                          <p>Status</p>
                        </div>
                      </div>
                      <ul className="ul-settings p-4 d-flex flex-column">
                        <li className=" border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid me-4 text-muted fs-5   fa-bell"></i>
                          Notifications
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid me-4 text-muted fs-5   fa-lock"></i>
                          Privacy
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid me-4 text-muted fs-5   fa-shield-halved"></i>
                          Security
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid me-4 text-muted fs-5   fa-circle-half-stroke"></i>
                          Theme
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-regular me-4 text-muted fs-5 fa-image"></i>
                          Chat Wallpaper
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid  me-4 text-muted fs-5 fa-file-invoice"></i>
                          Request Account Info
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid me-3 text-muted fs-5   fa-keyboard"></i>
                          Keyboard Shortcuts
                        </li>

                        <li className="border-bottom py-3 custom-hover-settings px-2 rounded">
                          <i className=" fa-solid me-3 text-muted fs-5  fa-circle-question"></i>
                          Help
                        </li>
                      </ul>
                    </div>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*=====text input ==== */}

      <div className="border-bottom bg-white px-2 py-1">
        <i className="fa-solid  fa-magnifying-glass search-icon text-muted position-absolute"></i>
        <abbr title="search input textbox" className="text-decoration-none">
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search or start a new chat"
            onChange={(event) => search(event)}
          />
        </abbr>
      </div>
      <div>
        <ul className="ul-chat">
          <Scrollbars>
            {list.map((userList, index) => {
              return (
                <>
                  {userList.sub !== account.sub && (
                    <li
                      key={index}
                      className="py-2 d-flex bg-white ps-3"
                      onClick={() => openChatBox(userList)}
                    >
                      <div>
                        <img
                          src={userList.picture}
                          alt="dp"
                          className="dp"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="ms-4  border-bottom w-75 mt-0">
                        <div className="d-flex justify-content-between">
                          <h6 className="mb-1">{userList.name} </h6>
                          <p className="mb-1 small text-muted">12:27 pm</p>
                        </div>
                        <p className="mt-0 text-muted">message</p>
                      </div>
                    </li>
                  )}
                </>
              );
            })}
          </Scrollbars>
        </ul>
      </div>
    </>
  );
}
