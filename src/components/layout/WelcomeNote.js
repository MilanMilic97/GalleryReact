import classes from "./WelcomeNote.module.css";
import Menu from "../data/Menu";

const WelcomeNote = (props) => {
  const handleClick = () => {
    props.create(true);
  };

  return (
    <center>
      <section className={classes.summary}>
        <h2>Welcome to the Gallery</h2>
        {props.token !== null && <p>{props.email}</p>}
        <br />
        <p>Choose your favorite gallery from our broad selection of available galleries and see what pictures are available at the moment.</p>
        <Menu gallerySelected={props.gallerySelected} />
        {props.gallery !== undefined && props.token !== null && (
          <button className={classes.create} onClick={handleClick}>
            Add new picture
          </button>
        )}
      </section>
    </center>
  );
};

export default WelcomeNote;
