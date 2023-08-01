import { HeaderFlex, HeaderLeft, HeaderPhoneDiv, HeaderRight, HeaderSy } from "./Header.styled";
import { ButtonStyle, Container } from "../../globalStyle.styled";
import { BsTelephoneFill } from "react-icons/bs";
import Logo from "../../assets/Images/logo.svg";
import { Context } from "../../Context/Context";
import TopHeader from "../TopHeader/TopHeader";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const { handleZakaz } = useContext(Context)

  return (
    <>
      <HeaderSy id="home">
        <TopHeader />
        <Container>
          <HeaderFlex>
            <HeaderLeft>
              <Link>
                <img className="header-logo" src={Logo} alt="Here site logo" />
              </Link>
            </HeaderLeft>
            <HeaderRight>
              <HeaderPhoneDiv href="tel:+998931234567" >
                <BsTelephoneFill className="headerCallIcon"/>
                +998 93 123 45 67
              </HeaderPhoneDiv>
              <ButtonStyle onClick={handleZakaz} className="ByBtn">Buyurtma berish</ButtonStyle>
            </HeaderRight>
          </HeaderFlex>
        </Container>
      </HeaderSy>
    </>
  );
}
