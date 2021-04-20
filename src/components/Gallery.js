import React, { Fragment, useState } from "react";
// import Table from "./Table";
// import Registration from "./Registration";
// import Login from "./Auth";
// import Create from "./Create";
import Header from "./layout/Header";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import Menu from "./data/Menu";

const Gallery = () => {
  const [portalLogShower, setPortalLogShower] = useState(false);
  const [portalRegShower, setPortalRegShower] = useState(false);
  //const [showLog, setHiderDiv] = useState(true);
  //const [pictures, setPictures] = useState([]);
  //const [contrVar, setContrVar] = useState(1);
  // const [pictureForEdit, setPictureForEdit] = useState({});

  // const loadTable = () => {
  //   //ako radis na nacin ispod, dolazi ti i kreiran hotel
  //   // NACIN NA KOJI DODAJEMO ONO STO SMO UKUCALI NA KRAJ TABELE
  //   // var temp = hoteli.slice();
  //   //     temp.push(hotel);

  //   setContrVar(contrVar + 1);
  //   console.log("u load table sam");
  // };

  const showLog = () => {
    setPortalLogShower(true);
  };
  const hideLog = () => {
    setPortalLogShower(false);
  };
  const hideReg = () => {
    setPortalRegShower(false);
    setPortalLogShower(true);
  };
  const showReg = () => {
    setPortalLogShower(false);
    setPortalRegShower(true);
  };

  const closeReg = () => {
    setPortalRegShower(false);
  };
  return (
    <Fragment>
      {portalLogShower && <Login onHideLog={hideLog} info={portalLogShower} showRegDiv={showReg} />}
      {portalRegShower && <Registration onHideReg={hideReg} onHideRegClose={closeReg} />}
      <Header onShowAuth={showLog} />
      <Menu />
      {/* 

      <Table pictures={pictures} setPictures={setPictures} loadAgain={loadTable} contrVar={contrVar} setForEdit={setPictureForEdit} />
      <Create loadAgain={loadTable} fillCreate={pictureForEdit} /> */}
    </Fragment>
  );
};

export default Gallery;
