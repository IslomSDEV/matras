import React from 'react';
import "../Buyurtmalar/Buyurtmalar.css";
import "./Customers.css";
import { MdDelete } from "react-icons/md";
import data from "../../assets/Data/users.json";

export default function Customers() {
  return (
    <>
      <div className="buyurtmaSy">
        <div className="buyurtmaTable">
          <table id='tableCustom'>
          <thead>
              <tr>
                <th>ID</th>
                <th>Sana</th>
                <th>Telefon raqami</th>
                <th>Qayta aloqa</th>
                <th style={{width: "300px"}}></th>
              </tr>
            </thead>
            <tbody>
            {data.map((inf) => {
                return (
                  <tr key={inf.id}>
                    <td>{inf.id}</td>
                    <td>{inf.date}</td>
                    <td>{inf.telefon_raqam}</td>
                    <td className="switchtable">
                      <div className={`${inf.qayta_aloqa ? "changeswicthbg" : null} switch`} onClick={() => setSwicthes(!switches)}>
                        <div className={`${inf.qayta_aloqa ? "activeSwict" : null} switchCircle`}></div>
                      </div>
                    </td>
                    <td className='deleteTabelet'>
                      <button className='tabledeleteBtn'>
                      <MdDelete className='customersDelete'/>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
