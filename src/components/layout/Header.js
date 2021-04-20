import { Fragment } from "react";
import Button from "./Button";
import galleryImg from "../../assets/gallery.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Gallery</h1>
        <Button shower={props.onShowAuth} />
      </header>
      <div className={classes["main-image"]}>
        <img src={galleryImg} alt="Pictures on the wall" />
      </div>
    </Fragment>
  );
};

export default Header;
