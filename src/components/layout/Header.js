import { Fragment } from "react";
import Button from "./button";
import galleryImg from "../../assets/gallery.jpg";
import "./header.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>Gallery</h1>
        <Button token={props.token} setToken={props.setToken} shower={props.onShowAuth} />
      </header>
      <div className="main-image">
        <img src={galleryImg} alt="Pictures on the wall" />
      </div>
    </Fragment>
  );
};

export default Header;
