import React, { useContext, useState } from "react";
import { ButtonStyle, Container } from "../../globalStyle.styled";
import {
  SkidkaCardLeft,
  SkidkaCardRight,
  SkidkaProductCards,
  SkidkaProductFlex,
  SkidkaProductParagraf,
  SkidkaProductsMiniDescFlex,
  SkidkaProductsTitle,
  SkidkaSy,
  SkidkaTitle,
  SkidkaType,
} from "./Skidka.styled";
import skidka from "../../assets/Data/skidka.json";
import { MdShoppingCart } from "react-icons/md";
import { LuZoomIn } from "react-icons/lu"
import Matras from "../../assets/Images/matras.png";
import "./Skidka.css";
import "../Products/Products.css";
import { Context } from "../../Context/Context";

export default function Skidka() {
  const { handleZakaz, handleZoomModal } = useContext(Context);
  const [hover, setHover] = useState(0);



  return (
    <>
      <SkidkaSy>
        <Container>
          <SkidkaTitle id="skid">Aksiyadagi mahsulotlar</SkidkaTitle>
        </Container>
        <Container>
          <SkidkaProductFlex>
            {skidka.map((datas) => {
              return (
                <SkidkaProductCards key={datas.id} onMouseEnter={() => setHover(datas.id)} onMouseLeave={()=> setHover(0)}>
                  <button
                    className={`${
                      hover === datas.id ? "showIcon" : null
                    } prodZoomButton`}
                    onClick={() => handleZoomModal(datas.pictures)}
                  >
                    <LuZoomIn className="zoomIcon" />
                  </button>
                  <SkidkaCardLeft>
                    <img className="skidkaPicture" src={datas.pictures.image_3} alt="this is the products picture" />
                  </SkidkaCardLeft>
                  <SkidkaCardRight>
                    <SkidkaProductsTitle>
                      Ortopedik Eko matras
                    </SkidkaProductsTitle>
                    <SkidkaProductsMiniDescFlex>
                      <div className="minidescs">
                        <p className="minidesctitle">Yuklama</p>
                        <h5 className="minidescnum">
                          {datas.weight}{" "}
                          <span className="minisdesctype">kg</span>
                        </h5>
                      </div>
                      <div className="minidescs">
                        <p className="minidesctitle">Kafolat</p>
                        <h5 className="minidescnum">
                          {datas.kafolat}{" "}
                          <span className="minisdesctype">yil</span>
                        </h5>
                      </div>
                      <div className="minidescs">
                        <p className="minidesctitle">O’lchami</p>
                        <h5 className="minidescnum">{datas.olcham}</h5>
                      </div>
                      <div className="minidescs">
                        <p className="minidesctitle">Sig’imi</p>
                        <h5 className="minidescnum">
                          {datas.sigimi}{" "}
                          <span className="minisdesctype">kishilik</span>
                        </h5>
                      </div>
                    </SkidkaProductsMiniDescFlex>
                    <SkidkaProductParagraf>
                      Penatibus viverra gravida rhoncus in. At turpis morbi ante
                      tortor a est. Habitant adipiscing ut sed pulvinar tellus,
                      ut urna, fermentum. Porttitor senectus lorem rhoncus
                      facilisi ac dictum varius egestas.
                    </SkidkaProductParagraf>
                    <div className="priceFlex">
                      <p className="priceTitle">Narxi</p>
                      <h5 className="pricess">
                        <span className="oldpriceess">{datas.old_price}</span>{" "}
                        <span className="oldoricesum">so'm</span>{" "}
                        {datas.price_now} <span className="priceSum">so'm</span>
                      </h5>
                    </div>
                    <ButtonStyle className="byBtn" onClick={handleZakaz}>
                      Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                    </ButtonStyle>
                  </SkidkaCardRight>
                  <SkidkaType>{datas.turi}</SkidkaType>
                </SkidkaProductCards>
              );
            })}
          </SkidkaProductFlex>
        </Container>
      </SkidkaSy>
    </>
  );
}
