import React, { useState } from "react";
import "./Buyurtmalar.css";
import data from "../../assets/Data/users.json";

export default function Buyurtmalar() {
  const [switches, setSwicthes] = useState(0)

  return (
    <>
      <div className="buyurtmaSy">
        <div className="buyurtmaTable">
          <table id="tableCustom">
            <thead>
              <tr>
                <th>ID</th>
                <th>Ismi</th>
                <th>Telefon raqami</th>
                <th>Mahsulot nomlari</th>
                <th>Miqdor</th>
                <th>Qayta aloqa</th>
              </tr>
            </thead>
            <tbody>
              {data.map((inf) => {
                return (
                  <tr key={inf.id}>
                    <td>{inf.id}</td>
                    <td>{inf.ismi}</td>
                    <td>{inf.telefon_raqam}</td>
                    <td>{inf.mahsulot_nomi}</td>
                    <td>{inf.miqdori}</td>
                    <td className="switchtable">
                      <div className={`${inf.qayta_aloqa ? "changeswicthbg" : null} switch`} onClick={() => setSwicthes(!switches)}>
                        <div className={`${inf.qayta_aloqa ? "activeSwict" : null} switchCircle`}></div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
