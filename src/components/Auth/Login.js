import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./Login.module.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valEmail, setValEmail] = useState("");
  const [valPass, setValPass] = useState("");
  let valSuccess = true;
  //const [token, setToken] = useState("");

  const handleLogin = () => {
    validation();
    if (valSuccess) {
      let logString = "grant_type=password&username=" + email + "&password=" + password;
      fetch("http://localhost:59783/Token", {
        method: "POST",
        //  mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: logString,
      })
        .then((res) => res.json())
        .then((data) => {
          sessionStorage.setItem("token", data.access_token);
          props.setToken(sessionStorage.getItem("token"));
          props.onHideLog();
          props.email(data.userName);
        });
    }
  };

  const handleInputChangeE = (event) => {
    setEmail(event.target.value);
  };
  const handleInputChangeP = (event) => {
    setPassword(event.target.value);
  };

  const validation = () => {
    if (email === "") {
      setValEmail("Email is required!");
      valSuccess = false;
      // eslint-disable-next-line
    } else if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      setValEmail("Invalid email!");
      valSuccess = false;
    } else {
      setValEmail("");
    }
    if (password === "") {
      setValPass("Password is required!");
      valSuccess = false;
    } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/)) {
      setValPass("Invalid password");
      valSuccess = false;
    } else {
      setValPass("");
    }
  };

  return (
    <Modal onHideLog={props.onHideLog} info={props.info}>
      <div className={classes.actions}>
        <center>
          <h4>User Login</h4>
          <div className={classes.input}>
            <label>E-mail adress:</label>
            <input type="text" value={email} onChange={handleInputChangeE} />
            <p>{valEmail}</p>
          </div>
          <div className={classes.input}>
            <label>Password:</label>
            <input style={{ marginLeft: "28px" }} type="password" value={password} onChange={handleInputChangeP} />
            <p>{valPass}</p>
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
