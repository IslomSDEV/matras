import React, { useRef, useState } from "react";
import { ButtonStyle } from "../../globalStyle.styled";
import {
  // HomeSwiperCards,
  HomeSwiperDiv,
  SwiperLeft,
  SwiperRight,
  SwiperTitle,
  SwiperTitleFlex,
} from "./HomeSwiper.styled";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Divan from "../../assets/Images/divan.png";
import BedR from "../../assets/Images/bedromfor.png";

import { IoIosArrowRoundForward } from "react-icons/io";
import "./HomeSwiper.css";

export default function HomeSwiper() {
  return (
    <>
      <HomeSwiperDiv>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
          style={{ height: "550px" }}
        >
          <SwiperSlide
            style={{
              height: "580px",
              width: "100vw",
              opacity: "100%",
              background: "transparent",
            }}
          >
            <SwiperTitleFlex>
              <SwiperLeft>
                <SwiperTitle>Kechalari sokin dam oling</SwiperTitle>
                <ButtonStyle>
                  Kategoriyalar
                  <IoIosArrowRoundForward className="SwiperArrowIcon" />
                </ButtonStyle>
              </SwiperLeft>
              <SwiperRight>
                <img
                  style={{
                    width: "910px",
                    height: "420px",
                    right: "0",
                    objectFit: "contain",
                  }}
                  className="swiperPicture"
                  src={Divan}
                />
              </SwiperRight>
            </SwiperTitleFlex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "580px",
              width: "100vw",
              opacity: "100%",
              background: "transparent",
            }}
          >
            <SwiperTitleFlex>
              <SwiperLeft>
                <SwiperTitle>Tuningiz yoqimli o'tsin</SwiperTitle>
                <a href="#katalog" style={{textDecoration: "none"}}>
                  <ButtonStyle>
                    Kategoriyalar
                    <IoIosArrowRoundForward className="SwiperArrowIcon" />
                  </ButtonStyle>
                </a>
              </SwiperLeft>
              <SwiperRight>
                <img
                  style={{
                    width: "910px",
                    height: "420px",
                    right: "0",
                    objectFit: "contain",
                  }}
                  className="swiperPicture"
                  src={"https://www.seekpng.com/png/full/66-669738_alluring-furniture-beds-farnichar-bed-png.png"}
                />
              </SwiperRight>
            </SwiperTitleFlex>
          </SwiperSlide>
          <SwiperSlide
            style={{
              height: "580px",
              width: "100vw",
              opacity: "100%",
              background: "transparent",
            }}
          >
            <SwiperTitleFlex>
              <SwiperLeft>
                <SwiperTitle>Yumshoqlikdan bahra oling</SwiperTitle>
                <a href="#katalog" style={{textDecoration: "none"}}>
                  <ButtonStyle>
                    Kategoriyalar
                    <IoIosArrowRoundForward className="SwiperArrowIcon" />
                  </ButtonStyle>
                </a>
              </SwiperLeft>
              <SwiperRight>
                <img
                  style={{
                    width: "910px",
                    height: "420px",
                    right: "0",
                    objectFit: "contain",
                  }}
                  className="swiperPicture"
                  src={BedR}
                />
              </SwiperRight>
            </SwiperTitleFlex>
          </SwiperSlide>
        </Swiper>
      </HomeSwiperDiv>
    </>
  );
}
