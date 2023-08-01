import { styled } from "styled-components";

export const HomeSwiperDiv = styled.div`
  width: 100vw;
  height: 550px;
  overflow-y: hidden;
  display: flex;
  align-items: flex-start;

  &::-webkit-scrollbar {
    display: none;
  }

`;

export const HomeSwiperCards = styled.div`
  max-width: 1160px;
  margin-right: 100px;
  margin-left: 180px;
  &:nth-child(2) {
    margin-right: 200px;
  }
`;

export const SwiperTitleFlex = styled.div`
    display: flex;
    width: 1220px;
    height: 580px;
`

export const SwiperLeft = styled.div`
    display: flex;
    flex-direction: column;
`

export const SwiperTitle = styled.h1`
    width: 735px;
    text-align: left;
    font-size: 90px;
    line-height: 105px;
    font-weight: 400;
    color: rgba(1, 56, 77, 1);
    font-family: "Abril Fatface", sans-serif;
    margin-bottom: 50px;
`

export const SwiperRight = styled.div`
    width: 800px;
    height: 100%;
    position: relative;
    z-index: 1;
    transform: translateX(70px)
`