import React from "react";
import { Container } from "../../globalStyle.styled";
import {
  AboutDesc,
  AboutFlexOne,
  AboutLeft,
  AboutList,
  AboutListItem,
  AboutRight,
  AboutSy,
  AboutTitle,
} from "./About.styled";
import Room from "../../assets/Images/room.png";
import ModerRoom from "../../assets/Images/modernRoom.png";

import "./About.css";

export default function About() {
  return (
    <>
      <AboutSy id="aboutt">
        <Container>
          <AboutFlexOne>
            <AboutLeft>
              <AboutTitle>Mattrassue kompaniyasi haqida</AboutTitle>
              <AboutDesc>
                Bu kompaniya, yotoqcha mahsulotlari sotib olish uchun
                iste'molchilarga sifatli xizmat ko'rsatadi. Ular, mo'assir
                texnologiyalardan foydalanib, yotoq va yotoqlarni doimiy
                ravishda yaxshi sifatda va qulay narxlarda ishlab chiqarishadi.
              </AboutDesc>
              <AboutList>
                <AboutListItem>Sifatli va narxlar arzon</AboutListItem>
                <AboutListItem>
                  Juda pishiq va yumshoqlik xusiyati
                </AboutListItem>
                <AboutListItem>
                  Uzoq muddatga chidab berish kafolati
                </AboutListItem>
              </AboutList>
            </AboutLeft>
            <AboutRight>
              <img className="aboutroomone" src={Room} alt="image" />
            </AboutRight>
          </AboutFlexOne>
        </Container>
        <Container>
          <AboutFlexOne className="abouttwoFlex">
            <AboutRight>
              <img className="aboutroomone" src={ModerRoom} alt="" />
            </AboutRight>
            <AboutLeft>
              <AboutDesc>
                Kompaniya taqriban 10 yildan buyon bozorda muvaffaqiyatli
                ishlamoqda va mijozlarining etiborini jalb etgan mahsulotlari
                bilan mashhurdir.
              </AboutDesc>

              <AboutList className="listtwo">
                <AboutListItem className="twoListItem">
                  O'z vaqtida yetkazib berish xizmati
                </AboutListItem>
                <AboutListItem className="twoListItem">
                  Mijozlarimiz uchun kerakli maslahatlar berish
                </AboutListItem>
                <AboutListItem className="twoListItem">
                  Professional ta'mirlash va sifatli o'rantib berish
                </AboutListItem>
                <AboutListItem className="twoListItem">
                  Mijozlarimiz uchun chegirmalar va turli xildagi sovg'alar
                </AboutListItem>
              </AboutList>

              <AboutDesc className="twoBottomDesc">
                Sifat va xizmatda eng yuqori darajada turli variantlar bilan,
                Mattrassue kompaniyasi foydalanuvchilarga tinglovchi tuxumlar va
                yotoqlar uchun eng yaxshi yechimlarni taklif qiladi.
              </AboutDesc>
            </AboutLeft>
          </AboutFlexOne>
        </Container>
      </AboutSy>
    </>
  );
}
