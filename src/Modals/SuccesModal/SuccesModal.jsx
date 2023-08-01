import React, { useContext } from "react";
import { Context } from "../../Context/Context";
import { MdClose } from "react-icons/md";
import "./SuccesModal.css";
import Succeses from "../../assets/Images/succes.png"


export default function SuccesModal() {
    const { handleSuccess, success } = useContext(Context);
  return (
    <>
      <div className={`${success ? "showSuccessModal" : null} successModalDiv`}>
        <div className="successModals">
          <h2 className="successmodalTitle">
            Arizangiz muvaffaqiyatli yuborildi
          </h2>
          <div className="succesPicBox">
            <img className="succesImage" src={Succeses} alt="Succesfully Picture" />
          </div>
          <p className="successText">Tez orada operatorlarimiz siz bilan bog'lanishadi</p>
          <button className="successBtnSend" onClick={handleSuccess}>Ok</button>
          <button className="successCloseBtn" onClick={handleSuccess}>
            <MdClose className="succesCloseBtn" />
          </button>
        </div>
      </div>
    </>
  );
}
