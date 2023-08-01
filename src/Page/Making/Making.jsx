import React from "react";
import { Container } from "../../globalStyle.styled";
import {
  MakingCardDesc,
  MakingCards,
  MakingCardsTitle,
  MakingFlex,
  MakingSy,
  MakingTitle,
  MakingVideoBox,
} from "./Making.styled";
import MatrasOne from "../../assets/Images/matras1.png";
import MatrasTwo from "../../assets/Images/matras2.png";
import MatrasThree from "../../assets/Images/matras3.png";
import "./Making.css";
import { MdOutlinePlayCircleFilled } from "react-icons/md";

export default function Making() {
  return (
    <>
      <MakingSy>
        <Container>
          <MakingTitle>Ishlab chiqarish texnologiyalari</MakingTitle>
        </Container>
        <Container>
          <MakingFlex>
            <MakingCards>
              <MakingCardsTitle>Memoriform</MakingCardsTitle>
              <MakingVideoBox>
                <iframe
                  className="makingVideo"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/Pq-1P_i00WU"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </MakingVideoBox>
              <MakingCardDesc>
                Siz o'zingizni yoqimli yopishqoq
                "botqoqlik" yoki vaznsizlikda topayotganga o'xshaysiz. Orqa
                miya, bo'g'inlar va mushaklar tushiriladi, qon oqimi
                normallashadi. Siz ko'tarilishingiz bilan material asl shakliga
                qaytadi. 
              </MakingCardDesc>
            </MakingCards>
            <MakingCards>
              <MakingCardsTitle>Tabiiy lateks</MakingCardsTitle>
              <MakingVideoBox>
                <iframe
                  className="makingVideo"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/JJa97chEkBE"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </MakingVideoBox>
              <MakingCardDesc>
                Lateks tabiiy yoki sintetik kauchukdan tayyorlanadi. Tabiiy
                kauchuk kauchukni sharbat sifatida chiqaradigan gevea kabi
                maxsus o'simliklardan olinadi
              </MakingCardDesc>
            </MakingCards>
            <MakingCards>
              <MakingCardsTitle>Mustaqil prujina</MakingCardsTitle>
              <MakingVideoBox>
                <iframe
                  className="makingVideo"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/0KNPIg3HGs0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </MakingVideoBox>
              <MakingCardDesc>
                rujina bloki matrasning asosi hisoblanadi. Bizning
                texnologlarimiz ilm-fanning so'nggi jahon yutuqlaridan
                foydalangan holda doimiy ravishda uyqu jihozlarining yangi
                modifikatsiyalarini ishlab chiqmoqdalar
              </MakingCardDesc>
            </MakingCards>
          </MakingFlex>
        </Container>
      </MakingSy>
    </>
  );
}
