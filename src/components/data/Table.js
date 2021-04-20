import React, { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = (props) => {
  var { pictures, setPictures, loadAgain, setForEdit, gallery, contrVar, showEdit } = props;

  useEffect(() => {
    if (gallery !== undefined) {
      axios.get(`http://localhost:59783/api/getPicturesByGallery?id=` + gallery).then((res) => {
        const pictures = res.data;
        setPictures(pictures);
      });
    }
  }, [gallery, contrVar]);

  const handleDelete = (event) => {
    fetch("http://localhost:59783/api/pictures/" + event.target.value, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    }).then(() => loadAgain());
  };

  const handleEdit = (event) => {
    fetch("http://localhost:59783/api/pictures/" + event.target.value, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setForEdit(data));

    showEdit(true);
  };
  return (
    <center>
      <div style={{ clear: "both" }}>
        <ul>
          <table className="table table-bordered table-hover" style={{ borderColor: "red", marginBottom: "50px", marginTop: "50px", backgroundColor: "white", width: "900px" }}>
            <tbody>
              <tr style={{ color: "white", backgroundColor: "#2c0d00" }}>
                <th>Name</th>
                <th>Author</th>
                <th>Price</th>
                <th>Year</th>
                <th>GalleryName</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
              {pictures.map((picture) => (
                <tr key={picture.Id}>
                  <td>{picture.Name}</td>
                  <td>{picture.Author}</td>
                  <td>{picture.Price}</td>
                  <td>{picture.Year}</td>
                  <td>{picture.GalleryName}</td>
                  <td>
                    <button className="btn" value={picture.Id} onClick={handleDelete}>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn" value={picture.Id} onClick={handleEdit}>
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ul>
      </div>
    </center>
  );
};
export default Table;
