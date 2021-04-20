import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    let logInfo = {
      grant_type: "password",
      username: email,
      password: password,
    };

    fetch("http://localhost:59783/Token", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-type": "application/json", Accept: "application/json" },
      data: JSON.stringify(logInfo),
    }).then((response) => {
      setToken(response.access_token);
    });
  };
  console.log("ja sam tokeeeen" + token);
  const handleInputChangeE = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangeP = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Modal onHideLog={props.onHideLog} info={props.info}>
      <div className={classes.actions}>
        <center>
          <h3>User Login</h3>
          <div className={classes.input}>
            <label>E-mail adress:</label>
            <input type="text" value={email} onChange={handleInputChangeE} />
          </div>
          <div className={classes.input}>
            <label>Password:</label>
            <input style={{ marginLeft: "28px" }} type="password" value={password} onChange={handleInputChangeP} />
          </div>
          <div style={{ marginTop: "20px" }}>
            <button onClick={props.onHideLog}>Return</button>
            <button onClick={handleLogin}>Log in</button>
            <p className={classes.regBtn}>
              If you don't have an account, <button onClick={props.showRegDiv}>Register</button>
            </p>
          </div>
        </center>
      </div>
    </Modal>
  );
};

export default Login;
