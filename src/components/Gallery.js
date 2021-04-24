import React, { Fragment, useState } from "react";
import Table from "./data/Table";
// import Registration from "./Registration";
// import Login from "./Auth";
import Create from "./functions/Create";
import Header from "./layout/Header";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
//import Menu from "./data/Menu";
import WelcomeNote from "./layout/WelcomeNote";

const Gallery = () => {
  const [portalLogShower, setPortalLogShower] = useState(false);
  const [portalRegShower, setPortalRegShower] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [contrVar, setContrVar] = useState(1);
  const [pictureForEdit, setPictureForEdit] = useState({});
  const [selectedGallery, setSelectedGallery] = useState();
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const loadTable = () => {
    //ako radis na nacin ispod, dolazi ti i kreiran hotel
    // NACIN NA KOJI DODAJEMO ONO STO SMO UKUCALI NA KRAJ TABELE
    // var temp = hoteli.slice();
    //     temp.push(hotel);

    setContrVar(contrVar + 1);
  };

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
      {portalLogShower && <Login email={setEmail} setToken={setToken} onHideLog={hideLog} info={portalLogShower} showRegDiv={showReg} />}
      {portalRegShower && <Registration onHideReg={hideReg} onHideRegClose={closeReg} />}
      <Header token={token} setToken={setToken} onShowAuth={showLog} />
      <WelcomeNote email={email} token={token} create={setShowCreate} gallerySelected={setSelectedGallery} gallery={selectedGallery} />
      {selectedGallery !== undefined && <Table token={token} pictures={pictures} setPictures={setPictures} loadAgain={loadTable} contrVar={contrVar} setForEdit={setPictureForEdit} gallery={selectedGallery} showEdit={setShowCreate} />}
      {showCreate && <Create token={token} cancelCreate={setShowCreate} loadAgain={loadTable} fillCreate={pictureForEdit} gallerySelected={selectedGallery} />}
    </Fragment>
  );
};

export default Gallery;
