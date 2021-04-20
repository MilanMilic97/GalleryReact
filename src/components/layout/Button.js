import { Fragment } from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  //const [hiderReg, setHiderReg] = useState(false);

  //   const handleReg = () => {
  //     setHiderReg(!hiderReg);
  //     setHiderDiv(!hiderDiv);
  //   };
  return (
    <Fragment>
      {/* {hiderDiv && ( */}
      <div>
        <button className={classes.button} onClick={props.shower}>
          Login
        </button>
        {/* <button style={{ backgroundColor: "lightblue", color: "black", marginTop: "10px" }} className="btn btn-secondary btn-sm" onClick={handleLog}>
            Login
          </button> */}
      </div>
      {/* )} */}

      {/* {hiderReg && <Registration ret={handleReg} />}
      {hiderLog && <Login ret={handleLog} />} */}
    </Fragment>
  );
};

export default Button;
