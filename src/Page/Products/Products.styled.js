import { styled } from "styled-components";


export const ProductsSy = styled.div`
    width: 100vw;
    padding: 20px 0;
`

export const ProductTitle = styled.h2`
    width: 100%;
    padding: 40px 0;
    text-align: center;
    font-size: 50px;
    font-weight: 700;
    line-height: 50px;
    color: rgba(1, 56, 77, 1);
    font-family: "Josefin Sans", Sans-serif;
`

export const ProductsButtonFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const ProductsButtonDiv = styled.div`
    width: 100vw;
    padding: 5px 0;
    border-bottom:  1px solid rgba(1, 55, 77, 0.255);
`

export const ProductsFlex = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 30px;
`

export const ProductsCard = styled.div`
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

export const ProductsType = styled.p`
    position: absolute;
    width: 191px;
    height: 34px;
    background: #FF6B6B;
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

export const ProductCardLeft = styled.div`
    width: 415px;
    height: 200px;
`
export const ProductCardRight = styled.div`
    width: 620px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`

export const ProductsTitle = styled.h3`
    font-size: 40px;
    line-height: 40px;
    font-weight: 700;
    color: rgba(1, 56, 77, 1);
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 25px;
`

export const ProductsMiniDescFlex = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
`

export const ProductParagraf = styled.p`
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    color: rgba(1, 56, 77, 1);
    opacity: 60%;
    font-family: "Josefin Sans", sans-serif;
    margin-bottom: 25px;
`