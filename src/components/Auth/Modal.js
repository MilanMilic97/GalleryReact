import classes from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Fragment } from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.info ? props.onHideLog : props.onHideReg} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideReg={props.onHideReg} onHideLog={props.onHideLog} info={props.info} />, document.getElementById("portal"))}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, document.getElementById("portal"))}
    </Fragment>
  );
};

export default Modal;
