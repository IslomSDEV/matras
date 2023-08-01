import React from "react";
import { NavLink } from "react-router-dom";
import { Container } from "../../globalStyle.styled";
import { TopHeaderSy, TopNavbarDiv, TopNavbarFlex } from "./TopHeader.styled";
import "./TopHeader.css";

export default function TopHeader() {
  return (
    <>
      <TopHeaderSy>
        <Container>
          <TopNavbarFlex>
            <TopNavbarDiv>
              <a href="#katalog" className="topHeader_navigations">Katalog</a>
              <a href="#skid" className="topHeader_navigations">Aksiya</a>
              <a href="#aboutt" className="topHeader_navigations">Biz haqimizda</a>
              <a href="#manzil" className="topHeader_navigations">Manzilimiz</a>
              <a href="#aloqa" className="topHeader_navigations">Aloqa</a>
            </TopNavbarDiv>
          </TopNavbarFlex>
        </Container>
      </TopHeaderSy>
    </>
  );
}
