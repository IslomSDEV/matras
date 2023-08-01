import React from "react";
import "./ManzilModal.css";
import { CiImageOn } from "react-icons/ci";
// import { useState } from "react";
import { MdClose } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../../Context/Context";

export default function ManzilModal() {
    const { manzilStatus, switchSlide, openModalM, openMMan } = useContext(Context)
 
  return (
    <>
      <div className={`${openModalM ? "showMM" : null} manzilModalSy`}>
        <div className="manzilModaldiv">
            <h3>Tahrirlash</h3>
            <button className="closeBtnMn" onClick={openMMan}>
                <MdClose className="closeIconMn" />
            </button>
          <form className="manzilForm">
            <div className="maznilPicture">
              <label htmlFor="manzilImage " className="uploadManzilPic">
                <CiImageOn className="manzilUpImage" />
              <input type="file" id="manzilImage" className="manzilPic" />
              </label>
            </div>
            <div className="inputelements">
              <label htmlFor="manzil">Manzil</label>
              <input type="text" id="manzil" />
              <label htmlFor="location">Location</label>
              <input type="text" id="location" />

              <div className="switchflex">
                <h3>Holati</h3>
                <div className="switch rigth0" onClick={switchSlide}>
                  <div className={`${manzilStatus ? "slideSW" : null} circle`}></div>
                </div>
              </div>
            </div>
            <div className="inputelements">
                <label htmlFor="matn">Matn</label>
                <textarea name="Matn" id="matn" cols="30" rows="10"></textarea>
                <button className="saqlashbtn ">Saqlash</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
