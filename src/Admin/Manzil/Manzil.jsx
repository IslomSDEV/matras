import React from "react";
import { useContext } from "react";
import { MdDelete, MdEdit, MdLocationOn } from "react-icons/md";
import { Context } from "../../Context/Context";
import ManzilModal from "../AdminModal/ManzilModal/ManzilModal";
import "./Manzil.css";

export default function Manzil() {
  const { openMMan } = useContext(Context);

  return (
    <>
      <div className="manzilSyD">
        <ManzilModal />
        <div className="manzilTable_box">
          <table id="manzil_table">
              <thead>
                <tr>
                    <th>Manzil</th>
                    <th>Matn</th>
                    <th>Location</th>
                    <th>{""}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Toshkent, Parken...</td>
                  <td>Mo'ljal: Qoraqamish... </td>
                  <td><MdLocationOn className="locationIconManzil"/></td>
                  <td>
                  <div className="btnBox manzilBtn">
                    <button className="toifabtns edit">
                      <MdEdit className="toifaEditIcon" />
                    </button>
                    <button className="toifabtns delete">
                      <MdDelete className="toifaDeleteIcon" />
                    </button>
                  </div>
                  </td>
                </tr>
              </tbody>
          </table>
        </div>
        <button className="manzilAddBtn" onClick={openMMan}>
          Qo'shish
        </button>
      </div>
    </>
  );
}
