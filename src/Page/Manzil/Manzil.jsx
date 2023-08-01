import React from "react";
import { ButtonStyle, Container } from "../../globalStyle.styled";
import { TiLocation } from "react-icons/ti";
import manzill from "../../assets/Images/manzill.jpg";
import "./Manzil.css";
import { Link } from "react-router-dom";

export default function Manzil() {
  return (
    <>
      <div className="manzilSy" id="manzil">
        <Container>
          <div className="manzilFlex">
            <div className="manzilleft">
              <h2 className="manzilTitle">Manzilimiz</h2>
              <h5 className="manzilLoc">Toshkent, Parkent ko'chasi, 176-uy</h5>
              <p className="manzilMoljal">
                Mo'ljal: Qoraqamish 2/1, Tursunxodjayeva ro'parasi, Milliy bog'
                metro bekati.
              </p>
              <Link
                target={"_blank"}
                to={
                  "https://www.google.com/maps/place/176+%D1%83%D0%BB%D0%B8%D1%86%D0%B0+%D0%9F%D0%B0%D1%80%D0%BA%D0%B5%D0%BD%D1%82%D1%81%D0%BA%D0%B0%D1%8F,+%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82+100016,+%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD/@41.3091324,69.330722,17z/data=!3m1!4b1!4m6!3m5!1s0x38aef5a82105cb63:0x2c2e9c72481737a7!8m2!3d41.3091285!4d69.3355929!16s%2Fg%2F11ncjmk0xf?entry=ttu"
                }
                className="locationLink"
              >
                <ButtonStyle style={{width: "355px"}} className="manzilbtn">
                  {" "}
                  <TiLocation className="locationIcon" /> Geolokatsiya
                </ButtonStyle>
              </Link>
            </div>
            <div className="manzilright">
              <img className="localImg" src={manzill} alt="Picture" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
