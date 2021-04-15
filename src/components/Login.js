import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    let logInfo = {
      grant_type: "password",
      username: email,
      password: password,
    };

    fetch("http://localhost:59783/Token", {
      method: "POST",
      //mode: "no-cors",
      headers: { "Content-type": "application/json", Accept: "application/json" },
      data: JSON.stringify(logInfo),
    });
  };
  //console.log("ja sam tokeeeen" + token);
  const handleInputChangeE = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangeP = (event) => {
    setPassword(event.target.value);
  };

  return (
    <center style={{ clear: "both" }}>
      <div style={{ marginTop: "20px" }}>
        <h3>User Login</h3>
        <div style={{ marginTop: "40px" }}>
          <label>E-mail adress:</label>
          <input style={{ marginLeft: "63px" }} type="text" value={email} onChange={handleInputChangeE} />
        </div>
        <div>
          <label>Password:</label>
          <input style={{ marginLeft: "90px" }} type="password" value={password} onChange={handleInputChangeP} />
        </div>
        <div style={{ marginTop: "20px" }}>
          <button className="btn btn-primary btn-sm" style={{ backgroundColor: "lightgray", color: "black" }} onClick={props.ret}>
            Return
          </button>
          <button className="btn btn-primary btn-sm" style={{ marginLeft: "20px", backgroundColor: "yellow", color: "black" }} onClick={handleLogin}>
            Log in
          </button>
          <p id="info"></p>
        </div>
      </div>
    </center>
  );
};

export default Login;
