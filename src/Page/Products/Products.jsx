import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonStyle, Container } from "../../globalStyle.styled";
import {
  ProductCardLeft,
  ProductCardRight,
  ProductParagraf,
  ProductsButtonDiv,
  ProductsButtonFlex,
  ProductsCard,
  ProductsFlex,
  ProductsMiniDescFlex,
  ProductsSy,
  ProductsTitle,
  ProductsType,
  ProductTitle,
} from "./Products.styled";
import "./Products.css";
import { MdShoppingCart } from "react-icons/md";
import Data from "../../assets/Data/products.json";
import ToifaData from "../../assets/Data/toifalar.json";
import ZoomModal from "../../Modals/ZoomModal/ZoomModal";
import { Context } from "../../Context/Context";
import { LuZoomIn } from "react-icons/lu";
import BuyurtmaModal from "../../Modals/BuyurtmaModal/BuyurtmaModal";
import SuccesModal from "../../Modals/SuccesModal/SuccesModal";

export default function Products() {
  const { handleZoomModal, zoom, handleZakaz } = useContext(Context);
  const [hover, setHover] = useState(false);
  const [toifaMode, setToifaMode] = useState("all");

  return (
    <>
      <ZoomModal />
      <BuyurtmaModal />
      <SuccesModal />
      <ProductsSy>
        <Container>
          <ProductTitle id="katalog">Bizning mahsulotlar</ProductTitle>
        </Container>
        <ProductsButtonDiv>
          <Container>
            <ProductsButtonFlex>
              {ToifaData.map((inf) => {
                return (
                  <Link
                    key={inf.id}
                    className={`${inf.model === toifaMode && toifaMode ? "proActive" : null} productsLink`}
                    onClick={()=> setToifaMode(inf.model)}
                  >
                    {inf.title}
                  </Link>
                );
              })}
            </ProductsButtonFlex>
          </Container>
        </ProductsButtonDiv>
        <Container>
          <ProductsFlex>
            {
              toifaMode == "A+" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "B+" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "C" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "C+" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "D" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "yevro" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "new" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : toifaMode === "A" ? (
                Data.map((datas) => {
                  if(datas.model === toifaMode) {
                    return (
                      <ProductsCard
                        key={datas.id}
                        onMouseEnter={() => setHover(datas.id)}
                        onMouseLeave={() => setHover(0)}
                      >
                        <button
                          className={`${
                            hover === datas.id ? "showIcon" : null
                          } prodZoomButton`}
                          onClick={() => handleZoomModal(datas.pictures)}
                        >
                          <LuZoomIn className="zoomIcon" />
                        </button>
                        <ProductCardLeft>
                          <img
                            className="productPic"
                            src={datas.pictures.image_1}
                            alt="product picture"
                          />
                        </ProductCardLeft>
                        <ProductCardRight>
                          <ProductsTitle>{datas.product_name}</ProductsTitle>
                          <ProductsMiniDescFlex>
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
                              <p className="minidesctitle">O'lchami</p>
                              <h5 className="minidescnum">{datas.olcham}</h5>
                            </div>
                            <div className="minidescs">
                              <p className="minidesctitle">Sig'imi</p>
                              <h5 className="minidescnum">
                                {datas.sigimi}{" "}
                                <span className="minisdesctype">kishilik</span>
                              </h5>
                            </div>
                          </ProductsMiniDescFlex>
                          <ProductParagraf>{datas.desc}</ProductParagraf>
                          <div className="priceFlex">
                            <p className="priceTitle">Narxi</p>
                            <h5 className="pricess">
                              {datas.price} <span className="priceSum">so'm</span>
                            </h5>
                          </div>
                          <ButtonStyle className="byBtn" onClick={handleZakaz}>
                            Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                          </ButtonStyle>
                        </ProductCardRight>
                        <ProductsType>{datas.turi}</ProductsType>
                      </ProductsCard>
                    );
                  }
                })
              ) : (
                Data.map((datas) => {
                  return (
                    <ProductsCard
                      key={datas.id}
                      onMouseEnter={() => setHover(datas.id)}
                      onMouseLeave={() => setHover(0)}
                    >
                      <button
                        className={`${
                          hover === datas.id ? "showIcon" : null
                        } prodZoomButton`}
                        onClick={() => handleZoomModal(datas.pictures)}
                      >
                        <LuZoomIn className="zoomIcon" />
                      </button>
                      <ProductCardLeft>
                        <img
                          className="productPic"
                          src={datas.pictures.image_1}
                          alt="product picture"
                        />
                      </ProductCardLeft>
                      <ProductCardRight>
                        <ProductsTitle>{datas.product_name}</ProductsTitle>
                        <ProductsMiniDescFlex>
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
                            <p className="minidesctitle">O'lchami</p>
                            <h5 className="minidescnum">{datas.olcham}</h5>
                          </div>
                          <div className="minidescs">
                            <p className="minidesctitle">Sig'imi</p>
                            <h5 className="minidescnum">
                              {datas.sigimi}{" "}
                              <span className="minisdesctype">kishilik</span>
                            </h5>
                          </div>
                        </ProductsMiniDescFlex>
                        <ProductParagraf>{datas.desc}</ProductParagraf>
                        <div className="priceFlex">
                          <p className="priceTitle">Narxi</p>
                          <h5 className="pricess">
                            {datas.price} <span className="priceSum">so'm</span>
                          </h5>
                        </div>
                        <ButtonStyle className="byBtn" onClick={handleZakaz}>
                          Buyurtma berish <MdShoppingCart className="basketIcon" />{" "}
                        </ButtonStyle>
                      </ProductCardRight>
                      <ProductsType>{datas.turi}</ProductsType>
                    </ProductsCard>
                  );
                })
              )
            }
          </ProductsFlex>
        </Container>
      </ProductsSy>
    </>
  );
}
