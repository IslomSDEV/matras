import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Context } from "../../Context/Context";
import ProductModal from "../AdminModal/ProductModal/ProductModal";
import "../Buyurtmalar/Buyurtmalar.css";
import "./Mahsulotlar.css";

export default function Mahsulotlar() {
  const [switches, setSwicthes] = useState(false);
  const { handleProductModal } = useContext(Context);

  return (
    <>
      <div className="mahsulotlarSy">
        <ProductModal/>
        <div className="mahsulottablebox">
          <table id="mahsulotTable">
            <thead>
              <tr>
                <th>Mahsulot nomlari</th>
                <th>Toifalar</th>
                <th>Narxi</th>
                <th>Yuklama</th>
                <th>Razmeri</th>
                <th>Status</th>
                <th>{"  "}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lux Soft Memory</td>
                <td>Model C</td>
                <td>1 600 000 so'm</td>
                <td>150 kg</td>
                <td>200 x 134 x 40</td>
                <td>
                  <div
                    className={`${switches ? "changeswicthbg" : null} switch`}
                    onClick={() => setSwicthes(!switches)}
                  >
                    <div
                      className={`${
                        switches ? "activeSwict" : null
                      } switchCircle`}
                    ></div>
                  </div>
                </td>
                <td>
                  <div className="btnBox mahsulotBtns">
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
          <button className="addproductBtn" onClick={handleProductModal}>Qo'shish</button>
      </div>
    </>
  );
}
