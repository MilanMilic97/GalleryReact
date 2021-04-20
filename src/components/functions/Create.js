import React, { useState, useEffect } from "react";
import classes from "./Create.module.css";

const Create = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [createEditBTN, setCreateEditBTN] = useState(true);

  const handleCreate = () => {
    let regInfo = {
      Name: name,
      Year: year,
      Author: author,
      Price: price,
      GaleryId: props.gallerySelected,
    };

    fetch("http://localhost:59783/api/pictures/", {
      method: "POST",
      headers: { "Content-type": "application/json", Accept: "application/json" },
      body: JSON.stringify(regInfo),
    }).then(() => props.loadAgain());
  };

  const handleInputChangeName = (event) => {
    setName(event.target.value);
  };
  const handleInputChangeYear = (event) => {
    setYear(event.target.value);
  };
  const handleInputChangePrice = (event) => {
    setPrice(event.target.value);
  };
  const handleInputChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleClear = () => {
    setName("");
    setYear("");
    setPrice("");
    setAuthor("");
  };
  const handleCancel = () => {
    props.cancelCreate(false);
  };
  const handleEdit = () => {
    let regInfo = {
      Id: props.fillCreate.Id,
      Name: name,
      Year: year,
      Author: author,
      Price: price,
      GaleryId: props.gallerySelected,
    };

    fetch("http://localhost:59783/api/pictures/" + props.fillCreate.Id, {
      method: "PUT",
      headers: { "Content-type": "application/json", Accept: "application/json" },
      body: JSON.stringify(regInfo),
    }).then(() => props.loadAgain());

    setCreateEditBTN(true);
    handleClear();
  };

  useEffect(() => {
    if (props.fillCreate.Name !== undefined) {
      setName(props.fillCreate.Name);
      setYear(props.fillCreate.Year);
      setPrice(props.fillCreate.Price);
      setAuthor(props.fillCreate.Author);
      setCreateEditBTN(false);
    }
  }, [props.fillCreate]);

  const handleReturn = () => {
    setCreateEditBTN(true);
    handleClear();
  };

  return (
    <center>
      <div id="container" className={classes.create}>
        <h3>{createEditBTN ? "Create" : "Edit"}</h3>
        <div style={{ marginTop: "40px" }}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleInputChangeName} />
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={handleInputChangeYear} />
        </div>
        <div>
          <label>Price:</label>
          <input type="text" value={price} onChange={handleInputChangePrice} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={handleInputChangeAuthor} />
        </div>
        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          {!createEditBTN && (
            <button className={classes.btnCancel} onClick={handleReturn}>
              Return
            </button>
          )}
          {createEditBTN && (
            <button className={classes.btnCancel} onClick={handleCancel}>
              Cancel
            </button>
          )}
          <button className={classes.btnClear} onClick={handleClear}>
            Clear
          </button>

          <button className={classes.btnCreate} onClick={createEditBTN ? handleCreate : handleEdit}>
            {createEditBTN ? "Create" : "Confirm"}
          </button>
        </div>
      </div>
    </center>
  );
};

export default Create;
