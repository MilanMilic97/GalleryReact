import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Table = () => {
  const [pictures, setPictures] = useState([]);

  axios.get(`http://localhost:59783/api/pictures`).then((res) => {
    const pictures = res.data;
    setPictures(pictures);
  });

  return (
    <center>
      <div style={{ clear: "both" }}>
        <ul>
          <table className="table table-bordered table-hover" style={{ width: "900px" }}>
            <tbody>
              <tr style={{ backgroundColor: "lightblue" }}>
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
                    <button className="btn" value={picture.Id} /*onClick={handleDelete}*/>
                      Delete
                    </button>
                  </td>
                  <td>
                    <button className="btn" value={picture.Id} /*onClick={handleEdit}*/>
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
