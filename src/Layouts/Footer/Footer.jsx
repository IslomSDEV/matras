import React from 'react'
import { Container } from '../../globalStyle.styled'
import { FooterBottom, FooterFlex, FooterSy, FooterTop, FooterTopNav, FooterTopNavLink, FooterTopSocial, FooterTopSocialLink } from './Footer.styled'
import { BiLogoFacebookSquare } from "react-icons/bi";
import { BsTwitter, BsVimeo, BsYoutube } from "react-icons/bs";
import { FiArrowUp } from "react-icons/fi";
import CompanyLogo from "../../assets/Images/company.svg";
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <FooterSy>
        <Container>
          <FooterFlex>
            <FooterTop>
              <FooterTopNav>
                <FooterTopNavLink href="#aboutt" >Biz haqimizda</FooterTopNavLink>
                <FooterTopNavLink href="#katalog" >Katalog</FooterTopNavLink>
                <FooterTopNavLink href="#skid" >Aksiya</FooterTopNavLink>
                <FooterTopNavLink href="#manzil" >Manzilimiz</FooterTopNavLink>
              </FooterTopNav>
              <FooterTopSocial>
                <FooterTopSocialLink href="https://facebook.com/" target="_blank"><BiLogoFacebookSquare className="footerSocialIcon" /></FooterTopSocialLink>
                <FooterTopSocialLink href="https://twitter.com/" target="_blank"><BsTwitter className="footerSocialIcon" /></FooterTopSocialLink>
                <FooterTopSocialLink href="https://vimeo.com/" target="_blank"><BsVimeo className="footerSocialIcon" /></FooterTopSocialLink>
                <FooterTopSocialLink href="https://youtube.com/" target="_blank"><BsYoutube className="footerSocialIcon" /></FooterTopSocialLink>
              </FooterTopSocial>
            </FooterTop>
            <FooterBottom>
              <span className='footerCopyrittext'>© 2021 Mattrassue. Barcha huquqlar himoyalangan.</span>
              <a href="#home">
              <FiArrowUp className='footerArrowIcon'/>
              </a>
              <a href="https://abutech.uz/" target="_blank">
              <img className='footerCompanyImg' src={CompanyLogo} alt="company picture" />
              </a>
            </FooterBottom>
          </FooterFlex>
        </Container>
      </FooterSy>
    </>
  )
}
