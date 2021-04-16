import React, { useState } from "react";
import Table from "./Table";
import Registration from "./Registration";
import Login from "./Login";
import Create from "./Create";

const Gallery = () => {
  const [hiderReg, setHiderReg] = useState(false);
  const [hiderLog, setHiderLog] = useState(false);
  const [hiderDiv, setHiderDiv] = useState(true);
  const [pictures, setPictures] = useState([]);
  const [contrVar, setContrVar] = useState(1);
  const [pictureForEdit, setPictureForEdit] = useState({});

  const loadTable = () => {
    //ako radis na nacin ispod, dolazi ti i kreiran hotel
    // NACIN NA KOJI DODAJEMO ONO STO SMO UKUCALI NA KRAJ TABELE
    // var temp = hoteli.slice();
    //     temp.push(hotel);

    setContrVar(contrVar + 1);
    console.log("u load table sam");
  };

  const handleReg = () => {
    setHiderReg(!hiderReg);
    setHiderDiv(!hiderDiv);
  };

  const handleLog = () => {
    setHiderLog(!hiderLog);
    setHiderDiv(!hiderDiv);
  };

  return (
    <div>
      <center>
        {hiderDiv && (
          <div style={{ marginTop: "20px", marginBottom: "50px" }}>
            <button style={{ backgroundColor: "lightblue", color: "black" }} className="btn btn-secondary btn-sm" onClick={handleReg}>
              Registracija
            </button>
            <br />
            <button style={{ backgroundColor: "lightblue", color: "black", marginTop: "10px" }} className="btn btn-secondary btn-sm" onClick={handleLog}>
              Login
            </button>
          </div>
        )}
      </center>
      {hiderReg && <Registration ret={handleReg} />}
      {hiderLog && <Login ret={handleLog} />}
      <Table pictures={pictures} setPictures={setPictures} loadAgain={loadTable} contrVar={contrVar} setForEdit={setPictureForEdit} />
      <Create loadAgain={loadTable} fillCreate={pictureForEdit} />
    </div>
  );
};

export default Gallery;
