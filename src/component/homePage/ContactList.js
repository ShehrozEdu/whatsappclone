import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import jwt_decode from "jwt-decode";

export default function ContactList() {
  let [user, setUser] = useState("");
  useEffect(() => {
    let userInfo = sessionStorage.getItem("auth");
    if (userInfo) {
      let decode = jwt_decode(userInfo);
      setUser(decode);
    }
  }, []);
  return (
    <>
      <div className="p-2 border bg-light">
        <div className="d-flex justify-content-between ">
          <div>
            <img src={user.picture} alt="" className="dp cursor-pointer" />
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
                enable-background="new 0 0 24 24"
                // xml:space="preserve"
              >
                <path
                  fill="currentColor"
                  d="M12.072,1.761c-3.941-0.104-7.579,2.105-9.303,5.65c-0.236,0.486-0.034,1.07,0.452,1.305 c0.484,0.235,1.067,0.034,1.304-0.45c1.39-2.857,4.321-4.637,7.496-4.553c0.539,0.02,0.992-0.4,1.013-0.939s-0.4-0.992-0.939-1.013 C12.087,1.762,12.079,1.762,12.072,1.761z M1.926,13.64c0.718,3.876,3.635,6.975,7.461,7.925c0.523,0.13,1.053-0.189,1.183-0.712 c0.13-0.523-0.189-1.053-0.712-1.183c-3.083-0.765-5.434-3.262-6.012-6.386c-0.098-0.53-0.608-0.88-1.138-0.782 C2.178,12.6,1.828,13.11,1.926,13.64z M15.655,21.094c3.642-1.508,6.067-5.006,6.201-8.946c0.022-0.539-0.396-0.994-0.935-1.016 c-0.539-0.022-0.994,0.396-1.016,0.935c0,0.005,0,0.009,0,0.014c-0.107,3.175-2.061,5.994-4.997,7.209 c-0.501,0.201-0.743,0.769-0.543,1.27c0.201,0.501,0.769,0.743,1.27,0.543C15.642,21.1,15.648,21.097,15.655,21.094z"
                ></path>
                <path
                  fill="#009588"
                  d="M19,1.5c1.657,0,3,1.343,3,3s-1.343,3-3,3s-3-1.343-3-3S17.343,1.5,19,1.5z"
                ></path>
              </svg>
            </div>
            <div>
              <i className="fa-regular cursor-pointer fs-5 fa-message"></i>
            </div>
            <div>
              <i className="fa-solid fs-5 cursor-pointer  fa-ellipsis-vertical"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom px-2 py-1">
        <i className="fa-solid fa-magnifying-glass search-icon text-muted position-absolute"></i>
        <input
          type="text"
          className="form-control ps-5"
          placeholder="Search or start a new chat"
        />
      </div>
      <div>
        <ul className="">
          <Scrollbars>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
            <li className="py-2 d-flex bg-white ps-3">
              <div>
                <img
                  src="https://source.unsplash.com/random"
                  alt=""
                  className="dp"
                />
              </div>
              <div className="ms-4 border-bottom w-75 mt-0">
                <h6 className="mb-1">Name</h6>
                <p className="mt-0 text-muted">message</p>
              </div>
            </li>
          </Scrollbars>
        </ul>
      </div>
    </>
  );
}
