import React, { useContext, useState } from "react";
import "./Toifalar.css";
// import data from "../../assets/Data/toifalar.json";
import { MdDelete, MdEdit } from "react-icons/md";
import ToifaModal from "../AdminModal/ToifaModal/ToifaModal";
import { Context } from "../../Context/Context";
import axios from "axios";

export default function Toifalar() {
  const { handelToifaModal, categoryData, editfunc } = useContext(Context);

  function deleteToifa(id) {
    axios.delete(`http://206.189.128.106:3214/v1/categories/${id}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiYmIxNjlhYWMtODFjYy00MGU5LWE1MDYtYWFmZTNkNjAyMDMxIiwiaWF0IjoxNjkwMzcyNzc5fQ.M3-lnTN91yP7tNZB3M9hnwV5JuG3prLKqd8-XKyLtBQ",
      },
    });
  }

  return (
    <>
      <div className="toifalarSy">
      <ToifaModal />
        <div className="toifatable">
          <table id="toifsTabele">
            <thead>
              <tr>
                <th>Toifalar</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((info) => {
                return (
                  <tr key={info.category_id}>
                    <td className="toifaTabeledata">
                      {info.category_name}
                      <div className="btnBox">
                        <button className="toifabtns edit" onClick={() => {
                          editfunc(info.category_name);
                          handelToifaModal()
                        }}>
                          <MdEdit className="toifaEditIcon" />
                        </button>
                        <button
                          className="toifabtns delete"
                          onClick={() => deleteToifa(info.category_id)}
                        >
                          <MdDelete className="toifaDeleteIcon" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button className="toifaAddBtn" onClick={handelToifaModal}>
          Qo'shish
        </button>
      </div>
    </>
  );
}
