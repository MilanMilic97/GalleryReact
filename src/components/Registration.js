import React, { useState } from "react";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const loginFunkcija = () => {
    let regInfo = {
      Email: email,
      Password: password,
      ConfirmPassword: confirmPassword,
    };

    fetch("http://localhost:59783/api/Account/Register", {
      method: "POST",
      headers: { "Content-type": "application/json", Accept: "application/json" },
      body: JSON.stringify(regInfo),
    });
  };

  const handleInputChangeE = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangeP = (event) => {
    setPassword(event.target.value);
  };
  const handleInputChangeCP = (event) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <center style={{ clear: "both" }}>
      <div style={{ marginTop: "20px" }}>
        <h3>User Registration</h3>
        <div style={{ marginTop: "40px" }}>
          <label>E-mail adress:</label>
          <input style={{ marginLeft: "63px" }} type="text" value={email} onChange={handleInputChangeE} />
        </div>
        <div>
          <label>Password:</label>
          <input style={{ marginLeft: "90px" }} type="password" value={password} onChange={handleInputChangeP} />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input style={{ marginLeft: "30px" }} type="password" value={confirmPassword} onChange={handleInputChangeCP} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="btn btn-primary btn-sm" style={{ backgroundColor: "lightgray", color: "black" }} onClick={props.ret}>
            Return
          </button>
          <button className="btn btn-primary btn-sm" style={{ marginLeft: "20px", backgroundColor: "yellow", color: "black" }} onClick={loginFunkcija}>
            Register
          </button>
          <p id="info"></p>
        </div>
      </div>
    </center>
  );
};

export default Registration;
