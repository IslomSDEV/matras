import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
`;

export const ButtonStyle = styled.button`
  width: 180px;
  height: 46px;
  border-radius: 5px;
  border: 2px solid rgba(1, 56, 77, 1);
  background-color: rgba(255, 255, 255, 1);
  color: rgba(1, 56, 77, 1);
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  font-family: "Josefin Sans", Sans-serif;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center; 
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: rgba(1, 56, 77, 1);
    color: #fff;
  }
`;
