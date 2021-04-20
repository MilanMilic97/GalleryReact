import React, { useState } from "react";
import Modal from "./Modal";
import classes from "./Login.module.css";

const Registration = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [successReg, setSuccessReg] = useState("");

  const handleRegistration = () => {
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
          </div>
          <div className={classes.input}>
            <label>Password:</label>
            <input style={{ marginLeft: "90px" }} type="password" value={password} onChange={handleInputChangeP} />
          </div>
          <div className={classes.input}>
            <label>Confirm password:</label>
            <input style={{ marginLeft: "25px" }} type="password" value={confirmPassword} onChange={handleInputChangeCP} />
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
