import React from "react";
import { Container } from "../../globalStyle.styled";
import {
  TanlovCardBottom,
  TanlovCards,
  TanlovCardsDesc,
  TanlovCardsTitle,
  TanlovCardTop,
  TanlovFlex,
  TanlovSy,
  TanlovTitle,
} from "./Tanlov.styled";
import Delivery from "../../assets/Images/delivery.png";
import Support from "../../assets/Images/support.png";
import Kafolat from "../../assets/Images/kafolat.png";
import "./Tanlov.css";


export default function Tanlov() {
  return (
    <>
      <TanlovSy>
        <Container>
          <TanlovTitle>Nega bizni tanlashadi</TanlovTitle>
        </Container>
        <Container>
          <TanlovFlex>
            <TanlovCards>
              <TanlovCardTop>
                <img src={Delivery} alt="" className="tanlovCardsPic" />
              </TanlovCardTop>
              <TanlovCardBottom>
                <TanlovCardsTitle>Yetkazib berish</TanlovCardsTitle>
                <TanlovCardsDesc>
                  Toshkent bo'ylab bepul o'lchov va etkazib berish
                </TanlovCardsDesc>
              </TanlovCardBottom>
            </TanlovCards>
            <TanlovCards>
              <TanlovCardTop>
                <img src={Support} alt="" className="tanlovCardsPic" />
              </TanlovCardTop>
              <TanlovCardBottom>
                <TanlovCardsTitle>Qo'llab-quvvatlash</TanlovCardsTitle>
                <TanlovCardsDesc>
                Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning 
                </TanlovCardsDesc>
                <a className="talovCardPhoneNumber" href="tel:+998971442442">+998 97 144-24-42</a>
              </TanlovCardBottom>
            </TanlovCards>
            <TanlovCards>
              <TanlovCardTop>
                <img src={Kafolat} alt="" className="tanlovCardsPic" />
              </TanlovCardTop>
              <TanlovCardBottom>
                <TanlovCardsTitle>Kafolat</TanlovCardsTitle>
                <TanlovCardsDesc>
                Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.
                </TanlovCardsDesc>
              </TanlovCardBottom>
            </TanlovCards>
          </TanlovFlex>
        </Container>
      </TanlovSy>
    </>
  );
}
