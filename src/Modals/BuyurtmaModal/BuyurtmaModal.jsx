import React, { useContext, useState } from "react";
import "./BuyurtmaModal.css";
import { MdClose } from "react-icons/md";
import { Context } from "../../Context/Context";
import proData from "../../assets/Data/products.json";

export default function BuyurtmaModal() {
  const { zakaz, handleZakaz, handleSuccess } = useContext(Context);
  const [count, setCount] = useState(1);
  const [nameValue, setNameValue] = useState("");
  const [numberValue, setNumberValue] = useState("");
  const [productChange, setProductChange] = useState("");

  const [zakazArr, setZakazArr] = useState([]);

  if (count <= 0) {
    setCount(1);
  }

  let newZakaz = {
    id: 1,
    zName: nameValue,
    zNumber: numberValue,
    zType: productChange,
    zCount: count,
  };

  let bot = {
    TOKEN: "6196010078:AAFp_QxzIIVposuwGiwr_39zFgS8uQS2MZA",
    chatID: "-1001877467590",
    message: `
      Assalomu alaykum sizga yangi buyurtma xabari!%0A
      %0AIsmi 👤: ${nameValue};
      %0ATelefon raqami ☎: ${numberValue};
      %0Mahsulot: ${productChange};
      %0Mahsilot soni: ${count}`,
  };

  function sendZakaz(e) {
    e.preventDefault();

    fetch(
      `https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
      {
        method: "GET",
      }
    ).then(
      (success) => {
        if (success) {
          console.log("succes");
        }
      },
      (error) => {
        console.log(error);
      }
    );

    let newZakaz = {
      id: 1,
      zName: nameValue,
      zNumber: numberValue,
      zType: productChange,
      zCount: count,
    };

    setZakazArr(newZakaz);
    setNameValue("");
    setNumberValue("");
    setProductChange("");
    setCount(1);
    handleZakaz();
    if (zakazArr) {
      handleSuccess();
    }
    console.log(zakazArr);
  }

  return (
    <>
      <div className={`${zakaz ? "showZakazModal" : null} zakazModalDiv`}>
        <div className="zakazModals">
          <h2 className="zakazmodalTitle">Buyurtma qilish</h2>
          <form className="zakazModalform" onSubmit={(e) => sendZakaz(e)}>
            <input
              required
              value={nameValue}
              className="zakazInput"
              placeholder="Ismingizni yozing"
              type="text"
              onChange={(e) => setNameValue(e.target.value)}
            />
            <input
              required
              value={numberValue}
              className="zakazInput"
              placeholder="Raqamingizni yozing"
              type="number"
              onChange={(e) => setNumberValue(e.target.value)}
            />
            <p className="zakazminitext">Mahsulotlarni toifasini tanlang</p>
            <select
              className="zakazmodalSelect"
              required
              onChange={(e) => setProductChange(e.target.value)}
            >
              {proData.map((data) => {
                return <option key={data.id} value="product">{data.product_name}</option>;
              })}
            </select>
            <p className="zakazminitext">Miqdorni tanlang</p>
            <div className="countDiv">
              <button
                type="button"
                className="modalCountBox minus"
                onClick={() => setCount(count - 1)}
              >
                -
              </button>
              <span className="modalCountNum">{count}</span>
              <button
                type="button"
                className="modalCountBox plus"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
            </div>
            <button type="submit" className="zakazBtnSend">
              Yuborish
            </button>
          </form>
          <button className="zakazCloseBtn" onClick={handleZakaz}>
            <MdClose className="zakazZloseBtn" />
          </button>
        </div>
      </div>
    </>
  );
}
