import { Fragment } from "react";
import "./button.css";
const Button = (props) => {
  console.log(props.token + "ovo je kento");
  const handleLogout = () => {
    props.setToken(null);
    sessionStorage.removeItem("token");
  };
  return (
    <Fragment>
      <div>
        <button className="button" onClick={props.token === null ? props.shower : handleLogout}>
          {props.token === null ? "Login" : "Logout"}
        </button>
      </div>
    </Fragment>
  );
};

export default Button;
