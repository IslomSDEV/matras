import { styled } from "styled-components";


export const SkidkaSy = styled.div`
    width: 100vw;
    padding: 10px 0;
`

export const SkidkaTitle = styled.h2`
    width: 100%;
    padding: 40px 0;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    color: rgba(1, 56, 77, 1);
    font-family: "Josefin Sans", Sans-serif;
`

export const SkidkaProductFlex = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const SkidkaProductCards = styled.div`
    width: 100%;
    padding: 25px;
    padding-right: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    background-color: rgba(246, 251, 255, 1);
    border: 1px solid rgba(199, 223, 245, 1);
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }

    position: relative;
`

export const SkidkaType = styled.p`
    position: absolute;
    width: 114px;
    height: 34px;
    background: #1FCA25;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    font-family: "Josefin Sans", sans-serif;
    top: 30px;
`   

export const SkidkaCardLeft  = styled.div`
    width: 415px;
    height: 200px;
`

export const SkidkaCardRight = styled.div`
    width: 620px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const SkidkaProductsTitle = styled.h3`
    font-size: 40px;
    line-height: 40px;
    font-weight: 700;
    color: rgba(1, 56, 77, 1);
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 25px;
`

export const SkidkaProductsMiniDescFlex = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const SkidkaProductParagraf = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: rgba(1, 56, 77, 1);
    opacity: 60%;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 25px;
`