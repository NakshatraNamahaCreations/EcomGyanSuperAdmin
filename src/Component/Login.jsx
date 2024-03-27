import React from "react";
import "./login.css";
import { InputGroup, Form } from "react-bootstrap";

function Login() {
  const login = () => {
    window.location.assign("/dashboard");
  };
  return (
    <div className="row me-0">
      <div className="col-md-6" style={{ backgroundColor: "#F7FAFC" }}>
        <div style={{ padding: "100px" }}>
          <p class="login-left-heading">The future of education is here</p>
          <p class="login-left-subheading">
            {" "}
            With an all in one platform for the teaching world
          </p>
        </div>
        <div>
          {/* <img
            src="login-image.jpg"
            alt=""
            style={{ position: "absolute", width: "100px", left: "5%" }}
          /> */}
        </div>
      </div>
      <div className="col-md-6" style={{ padding: "100px" }}>
        <p class="accountLogin-heading">Login to your account</p>
        <p class="accountLogin-subHeading">
          Please enter your mobile number to continue
        </p>
        <div>
          <div class="accountLogin-mobile-field">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
              <Form.Control
                // type="number"
                placeholder="Mobile number"
                aria-label="Mobile number"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </div>
          <button className="accountLogin-btn" onClick={login}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
