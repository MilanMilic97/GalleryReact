import React, { useState } from "react";
import Table from "./Table";
import Registration from "./Registration";
import Login from "./Login";

const Gallery = () => {
  const [hiderReg, setHiderReg] = useState(false);
  const [hiderLog, setHiderLog] = useState(false);
  const [hiderDiv, setHiderDiv] = useState(true);

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
      <Table />
    </div>
  );
};

export default Gallery;
