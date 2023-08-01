import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import AppSucces from "../../Components/AppSucces/AppSucces";
import { Context } from "../../Context/Context";
import { Container } from "../../globalStyle.styled";
import "./Application.css";

export default function Application() {
  // const { customers } = useContext(Context);
  const [succes, setSucces] = useState(false);
  const [numValue, setNumValue] = useState("");
  const [customers, setCustomers] = useState([
    {
      id: 1,
      phone: "+998932611712",
    },
  ]);

  function goBackUnSucces() {
    setTimeout(() => {
      setSucces(false);
    }, 5000);
  }

  function handleUserNum(e) {
    e.preventDefault();
    let newUserData = {
      id: customers.length + 1,
      phone: numValue,
    };

    customers.map((data) => {
      if (data.phone != newUserData.phone) {
        customers.push(newUserData);
        console.log(customers);
        setNumValue("");
        setSucces(true);
        goBackUnSucces();
        alert("Succes");
      } else {
        alert("Alredy existed");
      }
    });
  }

  return (
    <>
      <div className="applicatioSy" id="aloqa">
        <Container>
          {succes ? (
            <AppSucces />
          ) : (
            <div className="applicationFlex">
              <div className="applicationLeft">
                <h3 className="applicationTitle">Sizni qiziqtirdimi?</h3>
                <p className="appMiniText">
                  Raqamingizni qoldiring, biz sizga yana qo'ng'iroq qilamiz
                </p>
              </div>
              <div className="appliationRight">
                <form className="appForm" onSubmit={(e) => handleUserNum(e)}>
                  <input
                    value={numValue}
                    className="localInput"
                    type="text"
                    placeholder="Raqamingizni yozing"
                    onChange={(e) => setNumValue(e.target.value)}
                  />
                  <button type="submit" className="appBtn">
                    Yuborish
                  </button>
                </form>
              </div>
            </div>
          )}
        </Container>
      </div>
    </>
  );
}
