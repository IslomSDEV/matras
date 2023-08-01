import { styled } from "styled-components";



export const AboutSy = styled.div`
    width: 100vw;
    padding: 10px 0;
    margin-top: 140px;
`

export const AboutFlexOne = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const AboutLeft = styled.div `
    width: 530px;
    padding: 10px 0;
`

export const AboutTitle = styled.h2 `
    font-size: 50px;
    line-height: 64px;
    font-weight: 700;
    color: #01384D;
    font-family: "Josefin Sans", Sans-serif;
    width: 567px;
    margin-bottom: 23px;
`

export const AboutDesc = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: 600;
    color: #01384D;
    font-family: "Josefin Sans", Sans-serif;
    width: 535px;
    margin-bottom: 23px;
`

export const AboutRight = styled.div`
    width: 570px;
`

export const AboutList = styled.ul`
    padding: 20px 40px;
    width: 530px;
    background: #EABF9F;
    border: 2px solid #01384D;
    border-radius: 8px;
    box-sizing: border-box;
`

export const AboutListItem = styled.li`
    color: #01384D;
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 13px;
    &:last-child {
        margin-bottom: 0;
    }
`

