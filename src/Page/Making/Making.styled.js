import { styled } from "styled-components";

export const MakingSy = styled.div`
  width: 100vw;
  padding: 10px 0;
`;

export const MakingTitle = styled.h2`
  width: 100%;
  padding: 40px 0;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  line-height: 50px;
  color: rgba(1, 56, 77, 1);
  font-family: "Josefin Sans", Sans-serif;
  margin-bottom: 50px;
`;


export const MakingFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const MakingCards = styled.div`
    width: 370px;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
`

export const MakingCardsTitle = styled.h4`
    font-size: 30px;
    line-height: 30px;
    font-weight: 600;
    color: #01384D;
    font-family: "Josefin sans", sans-serif;
    width: 100%;
    text-align: center;
    box-sizing: border-box;
    margin-bottom: 25px;
`

export const MakingVideoBox = styled.div `
    width: 100%;
    height: 230px;
    box-sizing: border-box;
    border-radius: 10px;
    margin-bottom: 25px;
    position: relative;
    &:hover {
        cursor: pointer;
    }
`

export const MakingCardDesc = styled.p`
    width: 360px;
    height: 230px;
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    color: #01384D;
    font-family: "Josefin Sans", sans-serif;
`