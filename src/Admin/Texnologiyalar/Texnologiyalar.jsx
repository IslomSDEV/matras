import React, { useContext } from "react";
import "./Texnologiyalar.css";
import { MdDelete, MdEdit } from "react-icons/md";
import TechnologModal from "../AdminModal/TechnologModal/TechnologModal";
import { Context } from "../../Context/Context";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Texnologiyalar() {
  const { handleTechnoModal } = useContext(Context);

  const [technoData, setTechnoData] = useState([]);
  // const [technoDelId, setTechnoDelId] = useState("");

  useEffect(() => {
    axios
      .get("http://206.189.128.106:3214/v1/technologies")
      .then((res) => setTechnoData(res.data.data.technologies))
      .catch((err) => console.log(err));
  }, [technoData]);


  function technoDataDelete(id) {
    axios.delete(`http://206.189.128.106:3214/v1/technologies/${id}`, {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2lkIjoiYmIxNjlhYWMtODFjYy00MGU5LWE1MDYtYWFmZTNkNjAyMDMxIiwiaWF0IjoxNjkwMzcyNzc5fQ.M3-lnTN91yP7tNZB3M9hnwV5JuG3prLKqd8-XKyLtBQ",
      },
    });

  }

  return (
    <>
      <div className="texnologiyaSy">
        <TechnologModal />
        <div className="texnologiya_table_box">
          <table id="texnologiyaTable">
            <thead>
              <tr>
                <th>Nomlari</th>
                <th>Matn</th>
                <th>Video</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {technoData.map((data) => {
                return (
                  <tr key={data.technology_id}>
                    <td>{data.technology_name}</td>
                    <td>
                      <span className="collapseText">
                        {data.technology_description}
                      </span>
                    </td>
                    <td>
                      <span className="collapseText">
                        <a href={data.technology_video_link}>
                          Click to open video
                        </a>
                      </span>
                    </td>
                    <td className="dsds">
                      <div className="btnBox texnologyBtn">
                        <button className="toifabtns edit">
                          <MdEdit className="toifaEditIcon" />
                        </button>
                        <button className="toifabtns delete">
                          <MdDelete
                            className="toifaDeleteIcon"
                            onClick={() => technoDataDelete(data.technology_id)}
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button
          className="addtexnologiyaBtn"
          onClick={() => handleTechnoModal()}
        >
          Qo'shish
        </button>
      </div>
    </>
  );
}
