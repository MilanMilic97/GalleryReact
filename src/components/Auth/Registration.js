import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./Login.module.css";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successReg, setSuccessReg] = useState("");

  const [valEmail, setValEmail] = useState("");
  const [valPass, setValPass] = useState("");
  const [valConfPass, setValConfPass] = useState("");
  let valSuccess = true;

  const handleRegistration = () => {
    validation();
    if (valSuccess) {
      let regInfo = {
        Email: email,
        Password: password,
        ConfirmPassword: confirmPassword,
      };

      fetch("http://localhost:59783/api/Account/Register", {
        method: "POST",
        headers: { "Content-type": "application/json", Accept: "application/json" },
        body: JSON.stringify(regInfo),
      }).then((res) => {
        if (res.ok) {
          setSuccessReg("Successful registration :)");
        } else {
          setSuccessReg("Unsuccessful registration :(");
        }
      });
    }
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
      setValPass("Password must contain atleast one uppercase, one lowercase letter, one number and one special char!");
      valSuccess = false;
    } else {
      setValPass("");
    }
    if (confirmPassword !== password) {
      setValConfPass("Passwords doesn't match!");
      valSuccess = false;
    } else {
      setValConfPass("");
    }
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
    <Modal onHideReg={props.onHideRegClose}>
      <div className={classes.actions}>
        <center>
          <h4>User registration</h4>
          <div className={classes.input}>
            <label>E-mail adress:</label>
            <input style={{ marginLeft: "62px" }} type="text" value={email} onChange={handleInputChangeE} />
            <p>{valEmail}</p>
          </div>
          <div className={classes.input}>
            <label>Password:</label>
            <input style={{ marginLeft: "90px" }} type="password" value={password} onChange={handleInputChangeP} />
            <p>{valPass}</p>
          </div>
          <div className={classes.input}>
            <label>Confirm password:</label>
            <input style={{ marginLeft: "25px" }} type="password" value={confirmPassword} onChange={handleInputChangeCP} />
            <p>{valConfPass}</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <button onClick={props.onHideReg}>Return</button>
            <button onClick={handleRegistration}>Register</button>
            <p className={classes.regBtn}>{successReg}</p>
          </div>
        </center>
      </div>
    </Modal>
  );
};

export default Registration;
