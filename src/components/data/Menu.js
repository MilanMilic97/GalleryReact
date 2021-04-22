import React, { useState, useEffect } from "react";
import classes from "./Menu.module.css";

const Menu = (props) => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:59783/api/galleries")
      .then((res) => res.json())
      .then((gallery) => setGalleries(gallery));
  }, []);

  const handleInputChange = (event) => {
    props.gallerySelected(event.target.value);
  };

  return (
    <div className={classes["custom-dropdown"]}>
      <select style={{ paddingTop: "5px", cursor: "pointer" }} onChange={handleInputChange} defaultValue={1}>
        <option default hidden>
          Select gallery
        </option>
        {galleries.map((gallery) => (
          <option key={gallery.Id} value={gallery.Id}>
            {gallery.Name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Menu;
