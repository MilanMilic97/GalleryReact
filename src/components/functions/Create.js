import React, { useState, useEffect } from "react";
import "./create.css";

const Create = (props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [createEditBTN, setCreateEditBTN] = useState(true);

  const [validationName, setValidationName] = useState("");
  const [validationYear, setValidationYear] = useState("");
  const [validationAuthor, setValidationAuthor] = useState("");
  const [validationPrice, setValidationPrice] = useState("");
  let valSuccess = true;

  const handleCreate = () => {
    validation();
    if (valSuccess === true) {
      let regInfo = {
        Name: name,
        Year: year,
        Author: author,
        Price: price,
        GaleryId: props.gallerySelected,
      };

      fetch("http://localhost:59783/api/pictures/", {
        method: "POST",
        headers: { "Content-type": "application/json", Accept: "application/json", Authorization: `Bearer ${sessionStorage.getItem("token")}` },
        body: JSON.stringify(regInfo),
      }).then(() => props.loadAgain());
      handleClear();
    }
  };

  const validation = () => {
    if (name === "") {
      setValidationName("Name is required");
      valSuccess = false;
    } else if (name.match(/\d/)) {
      setValidationName("Name can't contain numbers");
      valSuccess = false;
    } else if (name.length > 120) {
      console.log("usao sam u broj validacijau");
      setValidationName("Name must be less than 120 characters");
      valSuccess = false;
    } else {
      setValidationName("");
    }
    if (year === "") {
      setValidationYear("Year is required");
      valSuccess = false;
    } else if (year < 1520 || year > 2021) {
      setValidationYear("Year range must be between 1520. and present year");
      valSuccess = false;
    } else {
      setValidationYear("");
    }
    if (price === "") {
      setValidationPrice("Price is required");
      valSuccess = false;
    } else if (price < 100 || price > 50000) {
      setValidationPrice("Minimum price is 100, maximum price is 50000");
      valSuccess = false;
    } else {
      setValidationPrice("");
    }
    if (author === "") {
      setValidationAuthor("Author is required");
      valSuccess = false;
    } else if (author.match(/\d/)) {
      console.log("usao sam u broj validacijau");
      setValidationAuthor("Author can't contain numbers");
      valSuccess = false;
    } else if (author.length > 70) {
      setValidationAuthor("Author must be less than 70 characters");
      valSuccess = false;
    } else {
      setValidationAuthor("");
    }
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
      headers: { "Content-type": "application/json", Accept: "application/json", Authorization: `Bearer ${sessionStorage.getItem("token")}` },
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

  if (props.token === null) {
    handleCancel();
  }
  return (
    <center>
      <div id="container" className="create">
        <h3>{createEditBTN ? "Create" : "Edit"}</h3>
        <div style={{ marginTop: "40px" }}>
          <label>Name:</label>
          <input type="text" value={name} onChange={handleInputChangeName} />
          <p>{validationName}</p>
        </div>
        <div>
          <label>Year:</label>
          <input type="text" value={year} onChange={handleInputChangeYear} />
          <p>{validationYear}</p>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" step="0.01" value={price} onChange={handleInputChangePrice} />
          <p>{validationPrice}</p>
        </div>
        <div>
          <label>Author:</label>
          <input type="text" value={author} onChange={handleInputChangeAuthor} />
          <p>{validationAuthor}</p>
        </div>
        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          {!createEditBTN && (
            <button className="btnCancel" onClick={handleReturn}>
              Return
            </button>
          )}
          {createEditBTN && (
            <button className="btnCancel" onClick={handleCancel}>
              Cancel
            </button>
          )}
          <button className="btnClear" onClick={handleClear}>
            Clear
          </button>

          <button className="btnCreate" onClick={createEditBTN ? handleCreate : handleEdit}>
            {createEditBTN ? "Create" : "Confirm"}
          </button>
        </div>
      </div>
    </center>
  );
};

export default Create;
