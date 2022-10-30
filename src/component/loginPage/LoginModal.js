import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

export default function LoginModal() {
  return (
    <>
      <GoogleOAuthProvider clientId="503786222553-dra9mrnlh03ehjr29rrkdraqtpld4e9m.apps.googleusercontent.com">
        <section className="col-lg-7 col-12  login-modal">
          <div className="bg-white shadow card">
            <div className="p-4">
              <div className="d-lg-flex justify-content-lg-around align-content-center">
                <div>
                  <div className="fs-3 test text-muted">
                    To use WhatsApp on your computer:
                  </div>
                  <div className="mt-5">
                    <p>1. Open WhatsApp on your phone</p>
                    <p>
                      2. Tap <span className="fw-bold">Menu</span>
                      <i className="fa-solid fa-ellipsis-vertical text-muted p-2"></i>
                      or <span className="fw-bold">Settings</span>
                      <i className="fa-solid p-2 fa-gear  text-muted "></i> and
                      select <span className="fw-bold">Linked Devices</span>
                    </p>
                    <p>
                      3. Point your phone to this screen to capture the code
                    </p>
                  </div>
                  <div className="text-success mt-5">
                    Need help to get started?
                  </div>
                </div>
                <div className="">
                  <img
                    src="https://www.kindpng.com/picc/m/120-1202089_qr-code-transparent-png-qr-code-png-png.png"
                    alt="Qr Code Transparent Png - Qr Code Png, Png Download@kindpng.com"
                    className="qr-image"
                  />
                  <div>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        localStorage.setItem(
                          "auth",
                          credentialResponse.credential
                        );
                      }}
                      onError={() => {
                        alert("Login Failed");
                      }}
                      shape="pill"
                      width="240"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light p-5 position-relative d-flex justify-content-center ">
              {/* == btn == */}
              <button class="play-btn position-absolute">
                <div class="pause-btn">
                  <div class="btn-main-play">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="34"
                      viewBox="0 0 28 34"
                    >
                      <path
                        fill="#FFF"
                        d="M1 4.983v24.034a2.982 2.982 0 0 0 4.564 2.53L24.792 19.53a2.981 2.981 0 0 0 0-5.058L5.563 2.454A2.983 2.983 0 0 0 1 4.983z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </button>
              <div className="d-flex justify-content-center">
                <img src="./assets/login-image.png" alt="pics" />
              </div>
            </div>
          </div>
        </section>
      </GoogleOAuthProvider>
    </>
  );
}
