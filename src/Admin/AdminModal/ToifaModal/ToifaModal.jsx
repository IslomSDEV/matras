import React, { useContext, useState } from "react";
import "./ToifaModal.css";
import { MdClose } from "react-icons/md";
import { Context } from "../../../Context/Context";
import axios from "axios";

export default function ToifaModal() {
  const { toifaModalShow, handelToifaModal, editer, setEditer } =
    useContext(Context);
  const [modalswitch, setModalSwitch] = useState(false);
  const [inpValue, setInpValue] = useState("");

  const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiYmIxNjlhYWMtODFjYy00MGU5LWE1MDYtYWFmZTNkNjAyMDMxIiwiaWF0IjoxNjkwMzcyNzc5fQ.M3-lnTN91yP7tNZB3M9hnwV5JuG3prLKqd8-XKyLtBQ";
  const URL = "http://206.189.128.106:3214/v1/categories";

  async function addCategory() {
    // e.preventDefault();
    try {
      let categoryObj = {
        category_name: inpValue,
      };

      axios
        .post(URL, categoryObj, {
          headers: {
            "Authorization": TOKEN,
            "Content-Type": "application/json",
          },
        })
        .then((res) => console.log("succes", res));
      handelToifaModal();
    } catch (err) {
      console.log(err);
    }

    setInpValue("")
  }


  function toifaEdit() {
    // setEditer("");
    
  }

  console.log(inpValue)


  return (
    <>
      <div
        className={`${toifaModalShow ? "showTofiaModal" : null} toifaModalDiv`}
      >
        <div className="toifaModal">
          <button className="closeModalToifa" onClick={handelToifaModal}>
            <MdClose className="toifaModalIcon" />
          </button>
          <h3 className="modalNametoifa">Qo'shish</h3>
          <form>
            <label id="add" className="kategoriyaNomi">
              Kategoriya nomi
            </label>
            <input
              className="toifaModalInput"
              id="add"
              type="text"
              defaultValue={editer}
              required
              placeholder="masalan: Model B"
              onChange={(e) => setInpValue(e.target.value)}
            />
            <div className="toifaModalSwicthbox">
              <h5 className="lefttextToifa ">Holati</h5>
              <div
                className={`${
                  modalswitch ? "changeModalSwitchBg" : null
                } toifaswitch`}
                onClick={() => setModalSwitch(!modalswitch)}
              >
                <div
                  className={`${
                    modalswitch ? "moveModalSwitch" : null
                  } toifacircle`}
                ></div>
              </div>
            </div>
            <button className={`${editer !== "" ? "adder" : null} toifaModalAddBtn`} type="submit" onClick={addCategory}>
              Qo'shish
            </button>
            <button className={`${editer !== "" ? "editsh" : null} toifaModalAddBtn md`} onClick={toifaEdit}>
              Edit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
