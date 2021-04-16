import React, { useState, useEffect } from "react";

const Create = (props) => {
  const [gallery, setGallery] = useState(1);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [gallerySelect, setGallerySelect] = useState([]);
  const [createEditBTN, setCreateEditBTN] = useState(true);

  useEffect(() => {
    fetch("http://localhost:59783/api/galleries")
      .then((res) => res.json())
      .then((gallery) => setGallerySelect(gallery));
  }, []);

  const handleCreate = () => {
    let regInfo = {
      Name: name,
      Year: year,
      Author: author,
      Price: price,
      GaleryId: gallery,
    };

    fetch("http://localhost:59783/api/pictures/", {
      method: "POST",
      headers: { "Content-type": "application/json", Accept: "application/json" },
      body: JSON.stringify(regInfo),
    }).then(() => props.loadAgain());
  };

  const handleInputChangeC = (event) => {
    setGallery(event.target.value);
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
    setGallery(1);
  };

  const handleEdit = () => {
    let regInfo = {
      Id: props.fillCreate.Id,
      Name: name,
      Year: year,
      Author: author,
      Price: price,
      GaleryId: gallery,
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
      setGallery(props.fillCreate.GaleryId);
      setCreateEditBTN(false);
    }
  }, [props.fillCreate]);

  const handleReturn = () => {
    setCreateEditBTN(true);
    handleClear();
  };

  return (
    <center>
      <div>
        <h3>{createEditBTN ? "Create" : "Edit"}</h3>
        <div style={{ marginTop: "40px" }}>
          <label>Gallery:</label>
          <select style={{ marginLeft: "110px" }} onChange={handleInputChangeC} value={gallery}>
            {gallerySelect.map((gallery) => (
              <option key={gallery.Id} value={gallery.Id}>
                {gallery.Name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Name:</label>
          <input style={{ marginLeft: "40px" }} type="text" value={name} onChange={handleInputChangeName} />
        </div>
        <div>
          <label>Year:</label>
          <input style={{ marginLeft: "53px" }} type="text" value={year} onChange={handleInputChangeYear} />
        </div>
        <div>
          <label>Price:</label>
          <input style={{ marginLeft: "49px" }} type="text" value={price} onChange={handleInputChangePrice} />
        </div>
        <div>
          <label>Author:</label>
          <input style={{ marginLeft: "34px" }} type="text" value={author} onChange={handleInputChangeAuthor} />
        </div>
        <div style={{ marginTop: "30px", marginBottom: "20px" }}>
          {!createEditBTN && (
            <button className="btn btn-danger btn-sm" style={{ color: "black" }} onClick={handleReturn}>
              Return to create
            </button>
          )}
          <button className="btn btn-primary btn-sm" style={{ marginLeft: "20px", backgroundColor: "lightgray", color: "black" }} onClick={handleClear}>
            Clear
          </button>
          <button className="btn btn-primary btn-sm" style={{ marginLeft: "20px", backgroundColor: "lightblue", color: "black" }} onClick={createEditBTN ? handleCreate : handleEdit}>
            {createEditBTN ? "Create" : "Edit"}
          </button>
        </div>
      </div>
    </center>
  );
};

export default Create;
