import "./welcomeNote.css";
import Menu from "../data/menu";

const WelcomeNote = (props) => {
  const handleClick = () => {
    props.create(true);
  };

  return (
    <center>
      <section className="summary">
        <h2>Welcome to the Gallery</h2>
        {props.token !== null && <p>{props.email}</p>}
        <br />
        <p>Choose your favorite gallery from our broad selection of available galleries and see what pictures are available at the moment.</p>
        <Menu gallerySelected={props.gallerySelected} />
        {props.gallery !== undefined && props.token !== null && (
          <button className="createBtn" onClick={handleClick}>
            Add new picture
          </button>
        )}
      </section>
    </center>
  );
};

export default WelcomeNote;
