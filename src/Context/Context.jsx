import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export default function ContextProvid({ children }) {
  const [login, setLogin] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [zakaz, setZakaz] = useState(false);
  const [success, setSuccess] = useState(false);
  const [toifaModalShow, setToifaModalShow] = useState(false);
  const [showModalPro, setShowModalPro] = useState();
  const [showTechnoMod, setShowTechnoMod] = useState(false);
  const [manzilStatus, setManzilStatus] = useState(false);
  const [openModalM, setOpenModalM] = useState(false);
  const [editer, setEditer] = useState("");
  const [zoomImage, setZoomImage] = useState([]);


  function editfunc(name) {
    setEditer(name);
    // setEditer("");
  }

  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios
      .get("http://206.189.128.106:3214/v1/categories")
      .then((res) => setCategoryData(res.data.data.categories))
      .catch((err) => console.log(err));
  }, []);
  

  function handleTechnoModal() {
    setShowTechnoMod(!showTechnoMod);
  }
  function handleZoomModal(pic) {
    setZoom(!zoom);
    setZoomImage(pic)
  }
  function handleZakaz() {
    setZakaz(!zakaz);
  }
  function handleSuccess() {
    setSuccess(!success);
  }
  function handelToifaModal() {
    setToifaModalShow(!toifaModalShow);
  }
  function handleProductModal() {
    setShowModalPro(!showModalPro);
  }
  function switchSlide() {
    setManzilStatus(!manzilStatus);
  }

  function openMMan() {
    setOpenModalM(!openModalM);
  }

  return (
    <>
      <Context.Provider
        value={{
          handleZoomModal,
          zoom,
          handleZakaz,
          zakaz,
          handleSuccess,
          success,
          toifaModalShow,
          handelToifaModal,
          categoryData,
          setLogin,
          login,
          handleProductModal,
          showModalPro,
          showTechnoMod,
          handleTechnoModal,
          manzilStatus,
          openMMan,
          switchSlide,
          openModalM,
          editfunc,
          editer,
          setEditer,
          zoomImage
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
}
